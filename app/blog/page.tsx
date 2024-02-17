import ArticleCard from "@/components/ArticleCard";
import Copyright from "@/components/Copyright";
import { getArticles } from "@/data/articles";
import { cn } from "@/lib/utils";

export default async function BlogPage () {
  const articles = await getArticles();

  return (
    <div className={cn('my-44 space-y-28 text-xl w-full', "md:text-left md:text-2xl", "xl:text-4xl")}>
      <h3 className={cn('font-audio text-4xl uppercase text-center', 'sm:text-5xl', "md:text-5xl", "xl:text-left xl:text-7xl")}>Articles</h3>
      <div className={cn("space-y-8", "md:grid md:grid-cols-2 md:space-y-0 md:gap-6", "xl:grid xl:grid-cols-3")}>
        {articles?.map((article, index) => (
          <div key={index}>
            <ArticleCard date={article.date} title={article.title} readingTime={article.ReadingTime} link={article.link} />
          </div>
        ))}
      </div>
      <Copyright />
    </div>
  );
}
