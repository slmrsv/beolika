"use client";
import React, { useEffect, useState, useRef } from "react";
/* import { FaGithub, FaInstagram, FaDiscord, FaFacebook  } from "react-icons/fa"; */
import { cn } from '@/lib/utils';
import { useGSAP } from "@gsap/react";
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";
import { Work, Art, Article } from '@/types/types';
import Image from "next/image";
import ArticleCard from "../ArticleCard";
import Copyright from "../Copyright";
import { Button } from "../ui/button";

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({works, arts, articles}: WorksProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = document.querySelectorAll('section');
  
    const handleIntersection = (entries: any) => {
      entries.map((entry: any) => {
        const text = entry.target.querySelectorAll('div p.quote');
        const tl = gsap.timeline({delay: 0});
      
        text.forEach((char: any) => {
          const splitType = new SplitType(char);
          tl
            .to(splitType.chars, {
              y: 0,
              stagger: 0.005,
              delay: -.5,
              duration: 1,
            });
        });
  
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.reverse(0);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
  
    sections.forEach((section) => observer.observe(section));
  
  });
  
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
    <div ref={ref} className={cn("space-y-20", "md:space-y-44")}>
      <section className={cn('h-[80vh] flex flex-col justify-center items-center mb-2 mt-14', "xs:mt-10", "md:mt-5", "lg:mt-6", "xl:-mt-5 xl:h-[95vh]")}>
        <h1 className={cn("font-audio text-center leading-[90%] border-b", "xl:mt-5")} style={{ fontSize: width / 4 + "px"}}>Beolika</h1>
        <div className={cn("flex justify-between mt-1 w-full uppercase text-[8px] font-sync", "xs:text-[10px]", "sm:text-xs", "xl:text-xl xl:mt-4")}>
          <p>Available WorldWide</p>
          <p>Creative Developer</p>
          <p className={cn("hidden", "lg:block")}>©2024. All Rights Reserved</p>
        </div>
        <div className={cn("font-sync text-base leading-8 w-full h-full flex items-end justify-end", "xs:leading-9 xs:text-lg", "xl:text-3xl xl:leading-[50px]")}>
          <p className={cn("text-right indent-2", "xl:w-[1150px]")}>A web developer who combines technical mastery with creative sensivity to forge unique, engaging and memorable digital solutions.</p>
        </div>
      </section>
      <section className={cn("space-y-10 py-20", "xl:space-y-20")}>
        <h3 className={cn('font-audio text-5xl', 'sm:text-6xl', "lg:text-5xl", "xl:text-[150px]")}>My<br />Services</h3>
        <div className={cn('py-6', 'xl:py-8')}>
          {[
            {title: "Web Development"},
            {title: "CMS/Serveless"},
            {title: "Landing Page"},
            {title: "E-Commerce"},
            {title: "3D Design"},
            {title: "APP Web"},
            {title: "SAAS"},
            {title: "SEO"},
          ].map((services, index) => (
            <p key={index} className={cn('font-sync py-4 text-2xl border-b uppercase duration-500 delay-75', "hover:border-transparent hover:text-background hover:px-6 hover:md:px-8 hover:bg-primary hover:rounded-tl-3xl hover:rounded-br-3xl hover:xl:px-10", 'xl:text-7xl', 
              {
                "border-transparent": index === hoveredIndex! - 1
              })}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            >{services.title}</p>
          ))}
        </div>
      </section>
      <div className={cn("font-sync text-base leading-8", "xs:leading-9 xs:text-lg", "xl:text-3xl xl:w-[1200px] xl:leading-[50px]")}>
        <p>Beolika is my artistic name, my real name is Sélim Baouz. My aim is to design solutions at the intersection of visual innovation and functionality. I offer a holistic approach to transforming ideas into digital experiences.</p>
      </div>
      <section className={cn("space-y-10 py-20", "xl:space-y-20")}>
        <h3 className={cn('font-audio text-5xl', 'sm:text-6xl', "lg:text-5xl", "xl:text-[150px]")}>Featured<br />Projects</h3>
        <div>
          {works && works.slice(0,6).map((work, index) => (
            <Link key={index} href={`/work/cases/${work.slug}`}>
              <div             
                className={cn('border-b flex items-center justify-between py-6 w-full cursor-pointer', 'duration-500 delay-75', 'hover:text-background hover:bg-primary hover:px-6 hover:rounded-tl-3xl hover:rounded-br-3xl hover:md:px-8 hover:border-transparent hover:xl:px-10', 'xl:py-8', 
                  {
                    "border-transparent": index === hoveredIndex! - 1
                  }           
                )}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <div className={cn('space-y-1 text-left', 'xl:space-y-4')}>
                  <p className={cn('font-sync text-2xl uppercase', 'xl:text-6xl')}>{work.title}</p>
                  <p className={cn('font-sync text-sm', 'xl:text-xl')}>{work.category}</p>
                </div>
                <div className={cn('font-sync text-xl', 'xl:text-4xl')}>{work.date.slice(2)}</div>
              </div>
            </Link>
          ))}
        </div>
        <Button variant="outline" className={cn('font-sync rounded-tl-3xl rounded-br-3xl w-full opacity-30', 'duration-500 delay-75', 'hover:opacity-100', 'sm:text-base sm:py-6', "lg:text-4xl lg:py-10")} asChild>
          <Link href="/work">All Projects</Link>
        </Button>
      </section>
      <div className={cn("font-sync text-base leading-8 flex justify-end", "xs:leading-9 xs:text-lg", "xl:text-3xl xl:leading-[50px]")}>
        <p className={cn("text-right indent-2", "xl:w-[1200px]")}>Passionate about architectural visualization, I like to create 3D spaces where the boundary between real and imaginary no longer exists.</p>
      </div>
      <section className={cn("space-y-10 py-20", "xl:space-y-20")}>
        <h3 className={cn('font-audio text-5xl', 'sm:text-6xl', "lg:text-5xl", "xl:text-[150px]")}>Play<br />Ground</h3>
        <div className={cn("space-y-8", "xl:grid xl:grid-cols-3 xl:gap-6 xl:space-y-0")}>
          {arts?.slice(0,3).map((art, index) => (
            <div key={index} className={cn("space-y-4")}>
              <Image src={art.image} alt={art.alt} width={1080} height={1920} className={cn("w-full bg-gray-300 rounded-tl-3xl rounded-br-3xl")} />
              <p className={cn("text-lg font-sync", "xl:text-2xl")}>{art.title}</p> 
            </div>
          ))}
        </div>
        <Button variant="outline" className={cn('font-sync rounded-tl-3xl rounded-br-3xl w-full opacity-30', 'duration-500 delay-75', 'hover:opacity-100', 'sm:text-base sm:py-6', "lg:text-4xl lg:py-10")} asChild>
          <Link href="/art">All Arts</Link>
        </Button>
      </section>
      <div className={cn("font-sync text-base leading-8", "xs:leading-9 xs:text-lg", "xl:text-3xl xl:w-[1200px] xl:leading-[50px]")}>
        <p>Apart from projects, I write web content on development and psychology for the Medium platform. I love sharing the knowledge I've gained with the community.</p>
      </div>
      <section className={cn("space-y-10 py-20", "xl:space-y-20")}>
        <h3 className={cn('font-audio text-5xl', 'sm:text-6xl', "lg:text-5xl", "xl:text-[150px]")}>Latest<br />News</h3>
        <div className={cn("space-y-8", "md:grid md:grid-cols-2 md:space-y-0 md:gap-6", "xl:grid xl:grid-cols-3")}>
          {articles?.slice(0,3).map((article, index) => (
            <div key={index}>
              <ArticleCard date={article.date} title={article.title} readingTime={article.ReadingTime} link={article.link} />
            </div>
          ))}
        </div>
        <Button variant="outline" className={cn('font-sync rounded-tl-3xl rounded-br-3xl w-full opacity-30', 'duration-500 delay-75', 'hover:opacity-100', 'sm:text-base sm:py-6', "lg:text-4xl lg:py-10")} asChild>
          <Link href="/blog">All Articles</Link>
        </Button>
      </section>
      <section className={cn("space-y-10 py-20", "md:text-left md:mx-0","xl:space-y-20")}>
        <h3 className={cn('font-audio text-5xl', 'sm:text-6xl', "lg:text-5xl", "xl:text-[150px]")}>Inquiries</h3>
        <div className={cn("md:flex md:justify-between md:items-end")}>
          <div>
            <p className={cn('font-sync mx-auto pb-10', "md:mx-0","xl:text-2xl xl:w-[850px]")}>
                Do you have a project in mind?
              <br/>
                Send me a message on my e-mail:
            </p>
            <Link href="mailto:hello@beolika.com" className={cn('frame font-sync cursor-pointer', "xl:text-base xl:w-[850px]", "hover:underline")}>hello@beolika.com</Link>
          </div> 
          <div className={cn("text-lg font-sync leading-[50px]",  "md:leading-10", "lg:leading-[50px] lg:text-2xl lg:text-right")}>
            <Link href="https://www.instagram.com/beolika/" target="_blank" rel="noopener noreferrer" className={cn('frame block cursor-pointer', "hover:underline")}>Instagram</Link>
            <Link href="https://discord.com/users/849428669180542976" target="_blank" rel="noopener noreferrer" className={cn('frame block cursor-pointer', "hover:underline")}>Discord</Link>
            <Link href="https://github.com/beolika" target="_blank" rel="noopener noreferrer" className={cn('frame block cursor-pointer', "hover:underline")}>Github</Link>
          </div>
        </div>
        <Copyright />
      </section>
    </div>
  );  
};

export default Home;