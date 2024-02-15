import Copyright from '@/components/Copyright';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

function AboutPage() {

  const ServicesMobile = [
    { title: "Front-End", isRightAligned: false},
    { title: "Back-End", isRightAligned: false},
    { title: "Web Design", isRightAligned: false},
    { title: "3D Design", isRightAligned: false},
    { title: "Application Web", isRightAligned: true},
    { title: "Landing Page", isRightAligned: true},
    { title: "E-Commerce", isRightAligned: true},
    { title: "SaaS", isRightAligned: true},
  ];

  const ServicesWeb = [
    { title: "Front-End Development", isRightAligned: false},
    { title: "Application Web", isRightAligned: true},
    { title: "Back-End Development", isRightAligned: false},
    { title: "Landing Page", isRightAligned: true},
    { title: "Web Design", isRightAligned: false},
    { title: "E-Commerce", isRightAligned: true},
    { title: "3D Design", isRightAligned: false},
    { title: "SaaS", isRightAligned: true},
  ];

  return (
    <div className={cn('my-44 space-y-44 text-xl w-full', "lg:text-2xl")}>
      <h3 className={cn('font-audio text-6xl text-center', "lg:text-7xl", 'xl:text-8xl')}>Hi, I’m Beolika</h3>
      <p className={cn('font-glacial mt-10', "xl:w-[800px] xl:text-center xl:mx-auto")}>
        Selim aka Beolika (artistic name), an enthusiastic creative specializing in web development, working at the intersection of visual innovation and functionality. 
        My aim is to design solutions that marry aesthetics and practicality. I offer a holistic approach to transforming ideas into memorable digital experiences.
      </p>
      <div className='space-y-14'>
        <h3 className={cn('font-audio text-4xl uppercase', "lg:text-5xl", "xl:text-7xl")}>Services</h3>
        <div className={cn('lg:hidden')}>
          {ServicesMobile.map((service, index) => (
            <div key={index} className={cn('border-t py-8 w-full', index === 4 && service.isRightAligned && "border-t-0")}>
              <p className={cn('font-audio text-3xl', service.isRightAligned && "text-right", index === 4 && service.isRightAligned && "mt-20")}>{service.title}</p>
            </div>
          ))}
        </div>
        <div className={cn('hidden', 'lg:grid lg:grid-cols-2 lg:justify-between lg:w-full')}>
          {ServicesWeb.map((service, index) => (
            <div key={index} className={cn("border-y py-8 w-full")}>
              <p className={cn('font-audio lg:text-2xl', 'xl:text-4xl', service.isRightAligned && "text-right")}>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={cn('space-y-14 mx-auto text-center')}>
        <h3 className={cn('font-audio text-4xl uppercase', "lg:text-5xl", "xl:text-7xl")}>Inquiries</h3>
        <p className={cn('font-glacial mx-auto pb-10', "xl:text-2xl xl:w-[850px]")}>
          Do you have a project in mind?
          <br/>
          Send me a message on my e-mail which you will find just below:
        </p>
        <Link href="mailto:hello@beolika.com" className={cn('font-glacial cursor-pointer', "xl:text-xl xl:w-[850px]", "hover:underline")}>hello@beolika.com</Link>
      </div>
      <Copyright />
    </div>
  );
}

export default AboutPage;