import { cn } from '@/lib/utils';
import { GoArrowDownRight } from "react-icons/go";

const About = () => {
  return (
    <section className={cn("py-4 border-t space-y-24", "xl:space-y-36")}>
      <div className="flex items-center gap-2">
        <h3 className={cn('uppercase font-semibold text-base', "lg:text-4xl", "xl:text-2xl")}>About</h3>
        <GoArrowDownRight className={cn("text-lg", "xl:text-2xl")} />
      </div>
      <div className={cn("text-2xl", "xl:text-5xl xl:leading-[60px]")}>
        <p className={cn("xl:indent-52")}>Beolika is my artistic name, <span className="opacity-50">my real name is Sélim Baouz.</span> <br />A French Independent Developer <span className="opacity-50">from French Riviera with 5 years experience </span>who working remotely.</p>
      </div>
      <div className={cn('py-6 space-y-8', 'xl:py-8 xl:space-y-0 xl:flex xl:justify-between xl:items-start')}>
        <p className={cn("font-montserrat uppercase pt-8 text-xs", "lg:text-base lg:w-[900px]")}>Services</p>
        <ul className="lg:space-y-4 w-full">
          {[
            {title: "Frontend Development", description: "From designs in Figma or Sketch, I create pixel-perfect responsive components, responsive web interfaces for landing pages, applications, SaaS and e-commerce, connected to back-end APIs for a seamless user experience."},
            {title: "Backend Development", description: "I offer complete development with NextJS, including secure APIs with NextAuth, TypeScript structure and data validation with Zod. For optimum performance and security, I integrate Prisma with Zustand for real-time state management and data manipulation."},
            {title: "3D Design", description: "With expertise in Blender modeling and a passion for architecture, I transform concepts into memorable images, enabling effective communication."},
          ].map((services, index) => (
            <li key={index} className={cn('w-full text-2xl', 'xl:text-5xl')}>
              <div className={cn("border-t py-6 space-y-4 duration-500 delay-75", "xl:py-8 xl:space-y-8")}>
                <p>{services.title}</p>
                <p className={cn("text-base font-light", "xl:text-xl")}>{services.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;