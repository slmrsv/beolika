import { cn } from '@/lib/utils';
import { Work } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowDownRight } from "react-icons/go";

interface WorksProps {
    works: Work[] | null;
}
const Works = ({works}: WorksProps) => {
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
          <Link href={`/cases/${work.slug}`} scroll={false} className={cn("w-full py-20 block space-y-6", "xl:flex xl:items-center xl:gap-20 xl:py-44", "2xl:gap-44", index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse')}>
            <Image alt={work.pictures[0].alt} src={work.pictures[0].image} width={1000} height={750} className={cn("rounded-3xl border border-foreground/20", "xl:max-w-[1000px]")}></Image>
            <p className={cn("text-3xl", "xl:text-8xl")}>{work.title}</p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Works;