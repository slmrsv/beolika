"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from '@/lib/utils';
import Link from "next/link";
import { Work, Art, Article } from '@/types/types';
import ArticleCard from "../ArticleCard";
import { GoArrowDownRight } from "react-icons/go";
import useTextOpacityOnScroll from "@/animations/useTextOpacityOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useMarqueeTextScroll from "@/animations/useMarqueeTextScroll";
import Torus from "../Torus";

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({works, articles}: WorksProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useTextOpacityOnScroll(".textScroll", ".textOpacity");
  useMarqueeTextScroll();

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        setWidth(ref.current.clientWidth);
      }
    };
  
    handleResize(); 
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div ref={ref} className={cn("font-montserrat space-y-20", "md:space-y-44")}>
      <section className={cn('h-[85vh] flex flex-col justify-center items-center mb-2', "xl:-mt-8 xl:h-[93vh]")}>
        <h1 className={cn("font-black uppercase text-center leading-[90%] pb-1", "xl:mt-5")} style={{ fontSize: width / 4.8 + "px"}}>Beolika</h1>
        <div className={cn("flex justify-between w-full uppercase border-t pt-2 text-[10px] font-extralight", "xs:text-xs", "sm:text-xs", "lg:pt-4", "xl:text-xl")}>
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
      <section className={cn("space-y-44 py-20", "xl:space-y-80")}>
        <div className={cn("marquee absolute left-0 right-0 text-white border-b py-4 flex uppercase overflow-hidden gap-10", "hover:text-background hover:bg-white duration-500 delay-75", "sm:py-4", "lg:py-7")}>
          {[
            {title: "About"},
            {title: "About"},
            {title: "About"},
            {title: "About"},
            {title: "About"},
            {title: "About"},
            {title: "About"},
            {title: "About"},
            {title: "About"},
            {title: "About"},
          ].map((service, index) => (
            <div key={index} className="marquee__inner">
              <div className="marquee__part flex items-center gap-10">
                <h3 className={cn('uppercase font-black text-3xl', "lg:text-4xl", "xl:text-5xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-3xl arrow", "xl:text-6xl")} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className={cn("text-2xl", "xl:text-5xl xl:leading-[60px] xl:pt-44")}>
        <p className={cn("xl:indent-52")}>Beolika is my artistic name, <span className="opacity-50">my real name is Sélim Baouz.</span> <br />A French Independent Developer <span className="opacity-50">from French Riviera with 5 years experience </span>working remotely.</p>
      </div>
      <div className={cn('py-6 space-y-8', 'xl:py-8 xl:space-y-14')}>
        <p className={cn("font-montserrat uppercase text-xs", "lg:text-base")}>Services</p>
        <ul className="lg:space-y-4">
          {[
            {title: "Web Development"},
            {title: "Ecommerce"},
            {title: "3D Design"},
          ].map((services, index) => (
            <li key={index} className={cn('w-full text-2xl duration-500 delay-75 text-white', "hover:opacity-100 hover:px-2 hover:md:px-8 hover:xl:px-10", 'xl:text-5xl')}>{services.title}</li>
          ))}
        </ul>
      </div>
      <section className={cn("space-y-44 py-20", "xl:space-y-72")}>
        <div className={cn("marquee absolute left-0 right-0 text-white border-b py-4 flex uppercase overflow-hidden gap-10", "hover:text-background hover:bg-white duration-500 delay-75", "sm:py-4", "lg:py-7")}>
          {[
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
            {title: "Works"},
          ].map((service, index) => (
            <div key={index} className="marquee__inner">
              <div className="marquee__part flex items-center gap-10">
                <h3 className={cn('uppercase font-black text-3xl', "lg:text-4xl", "xl:text-5xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-3xl arrow", "xl:text-6xl")} />
              </div>
            </div>
          ))}
        </div>
        <div>
          {works && works.slice(0,6).map((work, index) => (
            <Link key={index} href={`/cases/${work.slug}`}>
              <div             
                className={cn('border-b flex items-center justify-between py-6 w-full cursor-pointer', 'duration-500 delay-75', 'hover:px-2 hover:md:px-8 hover:xl:px-10 hover:bg-white hover:text-background', 'xl:py-8')}>
                <p className={cn('font-bold text-xl w-full', 'xl:text-5xl')}>{work.title}</p>
                <p className={cn('font-light text-sm w-full', 'xs:text-lg', "md:text-2xl", 'xl:text-2xl')}>{work.category}</p>
                <div className={cn('font-bold text-xl', 'xl:text-5xl')}>{work.date.slice(2)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* <div className={cn("text-3xl leading-10 font-black uppercase grid justify-end textScroll pb-44", "xs:text-4xl", "md:text-5xl", "xl:text-7xl")}>
        <p className={cn("text-right", "xl:w-[1400px]")}><span className="opacity-50">Passionate about architectural visualization,</span> I love creating inspiring 3D spaces.</p>
      </div>
      <section className={cn("space-y-44 py-20", "xl:space-y-72")}>
        <div className={cn("marquee absolute left-0 right-0 text-white border-b py-4 flex uppercase overflow-hidden gap-10", "hover:text-background hover:bg-white duration-500 delay-75", "sm:py-4", "lg:py-7")}>
          {[
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
            {title: "Playground"},
          ].map((service, index) => (
            <div key={index} className="marquee__inner">
              <div className="marquee__part flex items-center gap-10">
                <h3 className={cn('uppercase font-black text-3xl', "lg:text-4xl", "xl:text-5xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-3xl arrow", "xl:text-6xl")} />
              </div>
            </div>
          ))}
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {arts?.map((art, index) => (
              <CarouselItem className="lg:basis-1/3" key={index}>
                <Image src={art.image} alt={art.alt} width={1080} height={1920} className={cn("w-full bg-gray-300 rounded-3xl")} />
                <p className={cn("text-lg font-ms", "xs:text-xl", "md:text-3xl", "xl:text-3xl")}>{art.title}</p> 
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section> */}
      <div className={cn("text-2xl grid justify-end", "xl:text-5xl xl:leading-[60px]")}>
        <p className={cn("text-right", "xl:w-[1000px]")}>
          Apart from projects, I write web content <span className="opacity-50">on development & psychology</span> for the Medium platform.
        </p>
      </div>
      <section className={cn("space-y-44 py-20", "xl:space-y-72")}>
        <div className={cn("marquee absolute left-0 right-0 text-white border-b py-4 flex uppercase overflow-hidden gap-10", "hover:text-background hover:bg-white duration-500 delay-75", "sm:py-4", "lg:py-7")}>
          {[
            {title: "News"},
            {title: "News"},
            {title: "News"},
            {title: "News"},
            {title: "News"},
            {title: "News"},
            {title: "News"},
            {title: "News"},
            {title: "News"},
            {title: "News"},
          ].map((service, index) => (
            <div key={index} className="marquee__inner">
              <div className="marquee__part flex items-center gap-10">
                <h3 className={cn('uppercase font-black text-3xl', "lg:text-4xl", "xl:text-5xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-3xl arrow", "xl:text-6xl")} />
              </div>
            </div>
          ))}
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {articles?.map((article, index) => (
              <CarouselItem className="lg:basis-1/3" key={index}>
                <ArticleCard date={article.date} title={article.title} readingTime={article.ReadingTime} link={article.link} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className={cn("space-y-44 py-20", "xl:space-y-72")}>
        <div className={cn("marquee absolute left-0 right-0 text-white border-b py-4 flex uppercase overflow-hidden gap-10", "hover:text-background hover:bg-white duration-500 delay-75", "sm:py-4", "lg:py-7")}>
          {[
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
            {title: "Inquiries"},
          ].map((service, index) => (
            <div key={index} className="marquee__inner">
              <div className="marquee__part flex items-center gap-10">
                <h3 className={cn('uppercase font-black text-3xl', "lg:text-4xl", "xl:text-5xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-3xl arrow", "xl:text-6xl")} />
              </div>
            </div>
          ))}
        </div>
        <div className={cn("space-y-10", "md:space-y-20")}>
          <div>
            <p className={cn('mx-auto pb-10 text-2xl', "md:mx-0 md:text-4xl", "xl:text-5xl xl:w-[1400px] xl:leading-[60px]")}>
              <span className="opacity-50">Do you</span> have a project in mind?
              <br/>
              <span className="opacity-50">Send me a message on</span> my e-mail:
            </p>
          </div> 
          <div>
            <Link href="mailto:hello@beolika.com" className={cn('frame font-semibold cursor-pointer text-xl', "md:text-3xl", "xl:text-5xl xl:w-[850px]", "hover:underline")}>hello@beolika.com</Link>
          </div>
          <div className="pt-10">
            <div>
              <p className={cn('mx-auto pb-5 text-xl opacity-50', "md:mx-0 md:text-4xl", "xl:text-4xl xl:w-[1400px] xl:leading-[60px]")}>
              Follow Me
              </p>
            </div> 
            {[
              {title: "Facebook", slug: "https://www.facebook.com/profile.php?id=100088838483732"},
              {title: "Instagram", slug: "https://instagram.com/beolika"},
              {title: "Twitter", slug: "https://twitter.com/beolika_"},
              {title: "Pinterest", slug: "https://pinterest.com/beolika"},
              {title: "Discord", slug: "https://discord.com/users/849428669180542976"},
              {title: "Github", slug: "https://github.com/beolika"},
            ].map((social,index) => (
              <Link key={index} href={social.slug} target="_blank" rel="noopener noreferrer">
                <div             
                  className={cn('group border-b flex items-center justify-between py-6 w-full cursor-pointer', 'duration-500 delay-75', 'hover:px-2 hover:md:px-8 hover:xl:px-10 hover:bg-white hover:text-background', 'xl:py-8')}>
                  <p className={cn('font-bold text-xl w-full', 'xl:text-5xl')}>{social.title}</p>
                  <GoArrowDownRight className={cn("text-3xl group-hover:rotate-[-90deg]", "xl:text-6xl")} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );  
};

export default Home;