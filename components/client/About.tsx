"use client";
import { cn } from '@/lib/utils';
import Copyright from '@/components/Copyright';
import PricingCard from '@/components/PricingCard';
import Link from 'next/link';

const About = () => {

  const ServicesMobile = [
    { title: "Front-End", isRightAligned: false},
    { title: "Back-End", isRightAligned: false},
    { title: "Web Design", isRightAligned: false},
    { title: "3D Design", isRightAligned: false},
    { title: "SEO", isRightAligned: false},
    { title: "Maintenance", isRightAligned: false},
    { title: "Application Web", isRightAligned: true},
    { title: "Landing Page", isRightAligned: true},
    { title: "E-Commerce", isRightAligned: true},
    { title: "SaaS", isRightAligned: true},
    { title: "CMS", isRightAligned: true},
    { title: "Hosting", isRightAligned: true},
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
    { title: "SEO", isRightAligned: false},
    { title: "CMS", isRightAligned: true},
    { title: "Maintenance", isRightAligned: false},
    { title: "Hosting", isRightAligned: true},
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
            <div key={index} className={cn('border-t py-8 w-full', 
              {
                "border-t-0": index === 6 && service.isRightAligned,
                "border-b": index === 11
              })}>
              <p className={cn('font-audio text-3xl', 
                {
                  "text-right": service.isRightAligned,
                  "mt-20": index === 6 && service.isRightAligned
                })}>{service.title}</p>
            </div>
          ))}
        </div>
        <div className={cn('hidden', 'lg:grid lg:grid-cols-2 lg:justify-between lg:w-full')}>
          {ServicesWeb.map((service, index) => (
            <div key={index} className={cn("border-b py-8 w-full", (index === 0 || index === 1) && "border-t" )}>
              <p className={cn('font-audio lg:text-2xl', 'xl:text-4xl', 
                {
                  "text-right": service.isRightAligned
                })}>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='space-y-14'>
        <h3 className={cn('font-audio text-4xl uppercase', "lg:text-5xl", "xl:text-7xl")}>Pricing</h3>
        <div className={cn('flex flex-col w-full gap-6', "lg:flex-row lg:justify-between")}>
          <PricingCard 
            title='Daily Rate' 
            price='385' 
            typeOfDate='day' 
            description={`Average daily rate \n Remote working`} 
          />
          <PricingCard 
            title='Maintenance' 
            price='500' 
            typeOfDate='mo' 
            description='Updates, backups, security, seo, hosting' 
          />
        </div>
      </div>
      <div className={cn('space-y-14 mx-auto text-center')}>
        <h3 className={cn('font-audio text-4xl uppercase', "lg:text-5xl", "xl:text-7xl")}>Inquiries</h3>
        <p className={cn('font-glacial mx-auto pb-10', "xl:text-2xl xl:w-[850px]")}>
            Do you have a project in mind?
          <br/>
            Send me a message on my e-mail:
        </p>
        <Link href="mailto:hello@beolika.com" className={cn('font-glacial cursor-pointer', "xl:text-xl xl:w-[850px]", "hover:underline")}>hello@beolika.com</Link>
      </div>
      <Copyright />
    </div>
  );
};

export default About;