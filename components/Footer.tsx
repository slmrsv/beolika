import { cn } from '@/lib/utils';
import Link from 'next/link';
import { GoArrowDownRight } from "react-icons/go";
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = () => {
  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    // eslint-disable-next-line no-undef
    const mailCursorMouse = document.querySelectorAll(".mailCursor") as NodeListOf<HTMLElement>;

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
        scale: 15,
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

    mailCursorMouse.forEach((mailCursor) => {
      mailCursor.addEventListener('mousemove', handleFrameMouseMove);
      mailCursor.addEventListener('mouseleave', handleFrameMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mailCursorMouse.forEach((mailCursor) => {
        mailCursor.removeEventListener('mousemove', handleFrameMouseMove);
        mailCursor.removeEventListener('mouseleave', handleFrameMouseLeave);
      });
    };
  }, []);

  return (
    <section className={cn("py-4 border-t space-y-24", "xl:space-y-36")}>
      <div className="flex items-center gap-2">
        <h3 className={cn('uppercase font-semibold text-base', "lg:text-4xl", "xl:text-2xl")}>Inquiries</h3>
        <GoArrowDownRight className={cn("text-lg", "xl:text-2xl")} />
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
          <Link href="mailto:hello@beolika.com" className={cn('mailCursor font-semibold cursor-pointer text-xl', "md:text-3xl", "xl:text-5xl xl:w-[850px]", "hover:underline")}>hello@beolika.com</Link>
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
                className={cn('group border-b border-b-foreground/30 flex items-center justify-between py-6 w-full cursor-pointer', 'duration-500 delay-75', 'hover:px-2 hover:md:px-8 hover:xl:px-10 hover:border-b-foreground hover:text-foreground', 'xl:py-8')}>
                <p className={cn('font-semibold text-xl w-full', 'xl:text-5xl')}>{social.title}</p>
                <GoArrowDownRight className={cn("text-3xl group-hover:rotate-[-90deg]", "xl:text-6xl")} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <p className={cn('font-montserrat w-full text-center font-ms font-normal text-base', "md:text-lg")}>©2024 - Beolika. All Rights Reserved.</p>;
    </section>
  );
};

export default Footer;