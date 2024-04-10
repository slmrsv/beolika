import { cn } from '@/lib/utils';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface HeaderProps {
    width: number;
}
const Header = ({width}: HeaderProps) => {
  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    // eslint-disable-next-line no-undef
    const titleCursorMouse = document.querySelectorAll(".title") as NodeListOf<HTMLElement>;

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
        scale: 40,
      });

    };

    const handleFrameMouseLeave = () => {
      if (!circle) {
        return;
      }

      gsap.to(circle, {
        scale: 1,
      });

    };

    window.addEventListener('mousemove', handleMouseMove);

    titleCursorMouse.forEach((title) => {
      title.addEventListener('mousemove', handleFrameMouseMove);
      title.addEventListener('mouseleave', handleFrameMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      titleCursorMouse.forEach((title) => {
        title.removeEventListener('mousemove', handleFrameMouseMove);
        title.removeEventListener('mouseleave', handleFrameMouseLeave);
      });
    };
  }, []);
  
  return (
    <section className={cn('h-[85vh] flex flex-col justify-center items-center mb-2', "xl:-mt-8 xl:h-[93vh]")}>
      <h1 className={cn("font-black uppercase text-center leading-[90%] pb-1 title", "xl:mt-5")} style={{ fontSize: width / 4.8 + "px"}}>Beolika</h1>
      <div className={cn("flex justify-between w-full uppercase border-t pt-2 text-[10px]", "xs:text-xs", "sm:text-xs", "lg:pt-4", "xl:text-xl")}>
        <p>Available WorldWide</p>
        <p>Product Developer</p>
        <p className={cn("hidden", "xl:block")}>©2024. All Rights Reserved</p>
      </div>
      <div className={cn("text-3xl leading-10 w-full h-full flex items-end justify-end", "xs:leading-9", "lg:text-4xl", "xl:text-5xl xl:leading-[60px]")}>
        <p className={cn("text-right indent-2", "md:w-[700px]", "xl:w-[1200px] xl:indent-10")}>A developer who creates <span className="opacity-50">engaging & memorable</span> digital solutions.</p>
      </div>
      {/*  <div className="absolute h-full w-full">
          <Torus />
        </div> */}
    </section>
  );
};

export default Header;