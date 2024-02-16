import Copyright from "@/components/Copyright";
import { getWorkBySlug } from "@/data/work";
import { cn } from "@/lib/utils";
import Image from "next/image";


export default async function CasesPage ({ params }: { params: { slug: string } }) {
  const cases = await getWorkBySlug(params.slug);
  
  return (
    <div className={cn('my-44 space-y-28 text-xl w-full text-center', "md:text-left md:text-2xl", "xl:text-4xl")}>
      <h3 className={cn('font-audio text-4xl uppercase text-center', 'sm:text-5xl', "md:text-5xl", "xl:text-7xl")}>Cases</h3>
      <div className={cn("border-t pt-8 space-y-14 text-left", "xl:pb-28 xl:space-y-24")}>
        <div className={cn("flex flex-col space-y-14", "md:flex-row md:justify-between md:space-y-0")}>
          <div className={cn("space-y-2", "xl:space-y-4")}>
            <p className={cn('font-audio text-4xl', 'xl:text-5xl')}>{cases?.title}</p>
            <p className={cn('font-glacial text-2xl', 'xl:text-3xl')}>{cases?.company}</p>
          </div>
          <div className={cn("text-right text-lg", "xl:text-xl xl:space-y-4")}>
            <p>{cases?.role}</p>
            <p>{cases?.construction}</p>
            <p>{cases?.date}</p>
          </div>
        </div>
        <p className={cn("text-lg", "md:text-center", "xl:w-[950px] xl:mx-auto")}>{cases?.content}</p>
        <div className={cn("space-y-4", "xl:grid xl:grid-cols-2 xl:items-center xl:gap-6 xl:space-y-0")}>
          {cases?.pictures.map((image, index) => (
            <Image key={index} src={image.image} alt={image.alt} width={1200} height={750} className={cn("w-full bg-gray-300 rounded-3xl")} />
          ))}
        </div>
      </div>
      <Copyright />
    </div>
  );
}