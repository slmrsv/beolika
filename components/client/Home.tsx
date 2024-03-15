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
import { GoArrowDownRight } from "react-icons/go";
import useTextOpacityOnScroll from "@/animations/useTextOpacityOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface WorksProps {
  works: Work[] | null;
  arts: Art[] | null;
  articles: Article[] | null;
}

const Home = ({works, arts, articles}: WorksProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useTextOpacityOnScroll(".textScroll");
  
  
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

  useGSAP(() => {
    let currentSroll = 0;
    let isScrollingDown = true;
    let arrows = document.querySelectorAll(".arrow");
    let tween = gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear"
    }).totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });

    window.addEventListener("scroll", function() {
      if(this.window.scrollY > currentSroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });
      
      arrows.forEach((arrow) => {
        if(isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });
      
      currentSroll = window.scrollY;
    });
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
    <div ref={ref} className={cn("font-montserrat space-y-20", "md:space-y-44")}>
      <section className={cn('h-[85vh] flex flex-col justify-center items-center mb-2', "xl:-mt-8 xl:h-[93vh]")}>
        <h1 className={cn("font-black uppercase text-center leading-[90%] border-b", "xl:mt-5")} style={{ fontSize: width / 4.8 + "px"}}>Beolika</h1>
        <div className={cn("flex justify-between mt-1 w-full uppercase text-[10px] font-extralight", "xs:text-xs", "sm:text-xs", "md:text-xl", "xl:text-xl xl:mt-2")}>
          <p>Available WorldWide</p>
          <p>Creative Developer</p>
          <p className={cn("hidden", "xl:block")}>©2024. All Rights Reserved</p>
        </div>
        <div className={cn("font-black uppercase text-3xl leading-10 w-full h-full flex items-end justify-end", "xs:leading-9 xs:text-4xl", "md:text-5xl", "lg:text-6xl", "xl:text-7xl")}>
          <p className={cn("text-right indent-2", "md:w-[700px]", "xl:w-[1400px] xl:indent-10")}>A developer who creates <span className="opacity-30">engaging & memorable</span> digital solutions.</p>
        </div>
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
                <h3 className={cn('uppercase font-black text-3xl', 'sm:text-4xl', "md:text-5xl", "lg:text-6xl", "xl:text-7xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-5xl arrow", "sm:text-6xl", "xl:text-9xl")} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className={cn("text-3xl font-black uppercase leading-10 textScroll pb-44", "xs:text-4xl", "md:text-5xl", "xl:text-7xl xl:w-[1400px]")}>
        <p>Beolika is my artistic name, <span className="opacity-30">my real name is Sélim Baouz.</span> <br />A French Independent Developer <span className="opacity-30">with 5 years experience </span>working remotely.</p>
      </div>
      <div className={cn('py-6 space-y-8', 'xl:py-8 xl:space-y-14')}>
        <p className={cn("font-montserrat uppercase text-xs", "lg:text-base")}>Services</p>
        <ul>
          {[
            {title: "Web Development"},
            {title: "Ecommerce"},
            {title: "3D Design"},
          ].map((services, index) => (
            <li key={index} className={cn('w-full font-black text-4xl uppercase duration-500 delay-75 opacity-30', "xs:text-[40px]", "sm:text-5xl", "md:text-6xl", "hover:opacity-100 hover:px-2 hover:md:px-8 hover:xl:px-10", 'xl:text-9xl')}>{services.title}</li>
          ))}
        </ul>
        <p className={cn("font-montserrat uppercase text-xs", "lg:text-base")}>Skills</p>
        <ul className={cn("flex gap-2 flex-wrap", "md:gap-4")}>
          {[
            {title: "R3F"},
            {title: "ThreeJs"},
            {title: "NextJs"},
            {title: "ReactJs"},
            {title: "Typescript"},
            {title: "MaterialUI"},
            {title: "Styled-Component"},
            {title: "Tailwindcss"},
            {title: "TwMerge"},
            {title: "Clsx"},
            {title: "ShadncUi"},
            {title: "Zod"},
            {title: "Yup"},
            {title: "RxJs"},
            {title: "Next Auth"},
            {title: "React-Hook-Form"},
            {title: "Prisma"},
            {title: "Strapi"},
            {title: "Zustand"},
            {title: "Akita"},
            {title: "Elf"},
            {title: "Gsap"},
            {title: "Figma"},
            {title: "Blender"},
          ].map((services, index) => (
            <li key={index} className={cn('font-black text-lg uppercase duration-500 delay-75 rounded-2xl border px-4 py-2', "sm:text-xl", "md:text-2xl", "hover:px-6 hover:xl:px-10", 'xl:px-6 xl:py-4 xl:text-4xl')}>{services.title}</li>
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
                <h3 className={cn('uppercase font-black text-3xl', 'sm:text-4xl', "md:text-5xl", "lg:text-6xl", "xl:text-7xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-5xl arrow", "sm:text-6xl", "xl:text-9xl")} />
              </div>
            </div>
          ))}
        </div>
        <div>
          {works && works.slice(0,6).map((work, index) => (
            <Link key={index} href={`/cases/${work.slug}`}>
              <div             
                className={cn('border-b flex items-center justify-between py-6 w-full cursor-pointer', 'duration-500 delay-75', 'hover:px-2 hover:md:px-8 hover:xl:px-10', 'xl:py-8')}>
                <div className={cn('space-y-1 text-left', 'xl:space-y-4')}>
                  <p className={cn('font-extrabold text-3xl uppercase', 'xs:text-4xl', "sm:text-[40px]", "md:text-7xl", 'xl:text-8xl')}>{work.title}</p>
                  <p className={cn('font-light text-base', 'xs:text-lg', "md:text-2xl", 'xl:text-2xl')}>{work.category}</p>
                </div>
                <div className={cn('font-extrabold text-3xl', 'xl:text-7xl')}>{work.date.slice(2)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className={cn("text-3xl leading-10 font-black uppercase grid justify-end textScroll pb-44", "xs:text-4xl", "md:text-5xl", "xl:text-7xl")}>
        <p className={cn("text-right", "xl:w-[1400px]")}><span className="opacity-30">Passionate about architectural visualization,</span> I love creating inspiring 3D spaces.</p>
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
                <h3 className={cn('uppercase font-black text-3xl', 'sm:text-4xl', "md:text-5xl", "lg:text-6xl", "xl:text-7xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-5xl arrow", "sm:text-6xl", "xl:text-9xl")} />
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
      </section>
      <div className={cn("text-3xl font-black uppercase leading-10 textScroll pb-44", "xs:text-4xl", "md:text-5xl", "xl:text-7xl xl:w-[1500px]")}>
        <p>
          Apart from projects, I write web content <span className="opacity-30">on development & psychology</span> for the Medium platform.
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
                <h3 className={cn('uppercase font-black text-3xl', 'sm:text-4xl', "md:text-5xl", "lg:text-6xl", "xl:text-7xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-5xl arrow", "sm:text-6xl", "xl:text-9xl")} />
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
                <h3 className={cn('uppercase font-black text-3xl', 'sm:text-4xl', "md:text-5xl", "lg:text-6xl", "xl:text-7xl")}>{service.title}</h3>
                <GoArrowDownRight className={cn("text-5xl arrow", "sm:text-6xl", "xl:text-9xl")} />
              </div>
            </div>
          ))}
        </div>
        <div className={cn("space-y-10", "md:space-y-20")}>
          <div>
            <p className={cn('font-black uppercase mx-auto pb-10 text-3xl', "md:mx-0 md:text-4xl", "xl:text-6xl xl:w-[1400px]")}>
              <span className="opacity-30">Do you</span> have a project in mind?
              <br/>
              <span className="opacity-30">Send me a message on</span> my e-mail:
            </p>
          </div> 
          <div>
            <Link href="mailto:hello@beolika.com" className={cn('frame font-bold cursor-pointer uppercase opacity-30 text-xl', "md:text-3xl", "xl:text-6xl xl:w-[850px]", "hover:underline")}>hello@beolika.com</Link>
          </div>
          <div className={cn("text-xl font-bold leading-8",  "md:leading-10 md:text-4xl", "lg:leading-[50px] lg:text-4xl")}>
            <Link href="https://www.instagram.com/beolika/" target="_blank" rel="noopener noreferrer" className={cn('frame block cursor-pointer', "hover:underline")}>Instagram</Link>
            <Link href="https://discord.com/users/849428669180542976" target="_blank" rel="noopener noreferrer" className={cn('frame block cursor-pointer', "hover:underline")}>Discord</Link>
            <Link href="https://github.com/beolika" target="_blank" rel="noopener noreferrer" className={cn('frame block cursor-pointer', "hover:underline")}>Github</Link>
          </div>
        </div>
      </section>
    </div>
  );  
};

export default Home;