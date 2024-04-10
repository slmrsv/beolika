import { cn } from '@/lib/utils';
import { Work } from '@/types/types';
import { useGSAP } from '@gsap/react';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowDownRight } from "react-icons/go";
import { isWorkCursorStore } from "@/stores";

interface WorksProps {
    works: Work[] | null;
}
const Works = ({works}: WorksProps) => {
  const setIsWorkCursor = isWorkCursorStore(state => state.setIsWorkCursor);
  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    // eslint-disable-next-line no-undef
    const worksMouse = document.querySelectorAll(".works") as NodeListOf<HTMLElement>;

    const handleMouseMove = (event: MouseEvent) => {
      if (!circle) {
        return;
      }

      gsap.to(circle, {
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
        duration: 0.3,
        ease: 'expo.out',
      });
    };

    const handleFrameMouseMove = () => {
      gsap.to(circle, {
        scale: 25,
      });

      setIsWorkCursor(true);
    };

    const handleFrameMouseLeave = () => {
      if (!circle) {
        return;
      }

      gsap.to(circle, {
        scale: 1,
      });

      setIsWorkCursor(false);
    };

    window.addEventListener('mousemove', handleMouseMove);

    worksMouse.forEach((workMouse) => {
      workMouse.addEventListener('mousemove', handleFrameMouseMove);
      workMouse.addEventListener('mouseleave', handleFrameMouseLeave);
      workMouse.addEventListener('click', handleFrameMouseLeave);
    });


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      worksMouse.forEach((workMouse) => {
        workMouse.removeEventListener('mousemove', handleFrameMouseMove);
        workMouse.removeEventListener('mouseleave', handleFrameMouseLeave);
      });
    };
  }, []);
  

  return (
    <section className={cn("py-4 border-t")}>
      <div className="flex items-center gap-2">
        <h3 className={cn('uppercase font-semibold text-base', "lg:text-4xl", "xl:text-2xl")}>Works</h3>
        <GoArrowDownRight className={cn("text-lg", "xl:text-2xl")} />
      </div>
      {works?.map((work, index) => (
        <div key={index} className='pt-20'>
          <div className={cn("flex justify-between border-t pt-4", index % 2 === 0 ? "xl:flex-row-reverse" : "xl:flex-row", index === 0 && "border-none")}>
            <div className={cn("xl:text-2xl")}>{work.category}</div>
            <p className={cn("xl:text-xl")}>{work.date}</p>
          </div>
          <Link href={`/cases/${work.slug}`} scroll className={cn("works w-full py-20 block space-y-6", "xl:flex xl:items-center xl:gap-20 xl:py-44", "2xl:gap-44", index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse')}>
            <Image alt={work.pictures[0].alt} src={work.pictures[0].image} width={1000} height={750} className={cn("rounded-3xl border border-foreground/20", "xl:max-w-[1000px]")}></Image>
            <p className={cn("text-2xl", "xl:text-8xl")}>{work.title}</p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Works;