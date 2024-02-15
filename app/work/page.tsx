import Copyright from '@/components/Copyright';
import { getWorks } from '@/data/work';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function WorkPage() {
  const works = await getWorks();
      
  return (
    <div className={cn('my-44 space-y-28 text-xl w-full text-center', "md:text-left lg:text-2xl", "xl:text-4xl")}>
      <h3 className={cn('font-audio text-4xl uppercase', 'sm:text-5xl', "lg:text-5xl", "xl:text-7xl")}>Selected Works</h3>
      <div>
        {works?.map((work, index) => (
          <Link key={index} href={`/work/cases/${work.slug}`}>
            <div             
              className={cn('border-y flex items-center justify-between py-6 w-full cursor-pointer text-subtitle border-subtitle hover:text-primary hover:border-primary', 'xl:py-8',               
              )}>
              <div className={cn('space-y-1 text-left', 'xl:space-y-4')}>
                <p className={cn('font-audio text-3xl', 'xl:text-5xl')}>{work.title}</p>
                <p className={cn('font-glacial text-base', 'xl:text-xl')}>{work.category}</p>
              </div>
              <div className={cn('font-glacial text-2xl', 'xl:text-4xl')}>{work.date.slice(2)}</div>
            </div>
          </Link>
        ))}
      </div>
      <Copyright />
    </div>
  );
}