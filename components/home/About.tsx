import { cn } from "@/lib/utils";
import { GoArrowDownRight } from "react-icons/go";
import { MdCircle } from "react-icons/md";

const About = () => {
  return (
    <section
      className={cn(
        "py-4 border-t space-y-24",
        "xl:space-y-36",
      )}
    >
      <div className="flex items-center gap-2">
        <h3
          className={cn(
            "uppercase font-semibold text-base",
            "xl:text-2xl",
          )}
        >
          About
        </h3>
        <GoArrowDownRight
          className={cn("text-lg", "xl:text-2xl")}
        />
      </div>
      <div
        className={cn(
          "text-2xl",
          "xl:text-5xl xl:leading-[60px]",
        )}
      >
        <p className={cn("xl:indent-52")}>
          Hi there 👋, I'm a{" "}
          <span className="opacity-50">
          creative developer
          </span>{" "}
          from the{" "}
          <span className="opacity-50">
            French Riviera{" "}
          </span>
          focused on creating
          <span className="opacity-50">
            {" "}
            digital products
          </span>{" "}
          with a strong passion for 
          <span className="opacity-50">
            {" "}
            architectural visualization
          </span> and 
          <span className="opacity-50">
            {" "}
            cognitive psychology
          </span>.
        </p>
      </div>
      <div
        className={cn(
          "py-6 space-y-8",
          "xl:py-8 xl:space-y-0 xl:flex xl:justify-between xl:items-start",
        )}
      >
        <p
          className={cn(
            "font-montserrat uppercase pt-8 text-xs",
            "lg:text-base lg:w-[900px]",
          )}
        >
          What I do
        </p>
        <ul className="lg:space-y-4 w-full">
          {[
            {
              title: "Web Design",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
              description:
                "During my previous experience, I was immersed in the world of design, which reinforced my interest in this field and encouraged me to deepen my skills. As a developer, I find it essential to be able to create a product by starting with the design. This approach enables me to visualize all aspects of the project before developing it, thus guaranteeing a coherent and fluid user experience.",
            },
            {
              title: "Frontend Development",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
              description:
                "From designs in Figma, I create pixel-perfect responsive components, responsive web interfaces for landing pages, web applications, SaaS and e-commerce, connected to back-end APIs for a seamless user experience.",
            },
            {
              title: "Backend Development",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
              description:
                "I take care of back-end development with NextJS, including authentication with NextAuth, code structure with TypeScript and data validation with Zod. For optimum performance and security, I integrate Prisma with Zustand for state management and real-time data manipulation.",
            },
            {
              title: "3D Design",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
              description:
                "As a lover of architectural visualization, I enjoy transforming concepts into 3D renderings with Blender in my spare time. This creative activity allows me to explore new artistic perspectives and stimulate my creativity.",
            },
          ].map((services, index) => (
            <li
              key={index}
              className={cn(
                "w-full text-2xl",
                "xl:text-5xl",
              )}
            >
              <div
                className={cn(
                  "border-t py-6 space-y-4 duration-500 delay-75",
                  "xl:py-8 xl:space-y-8",
                )}
              >
                <div className={cn("flex gap-3 items-center", "lg:gap-6")}>
                  {services.icon}
                  <p className={cn(
                    "uppercase font-medium text-base",
                    "xl:text-xl",
                  )}>{services.title}</p>
                </div>
                <p
                  className={cn(
                    "text-sm font-light",
                    "xl:text-lg",
                  )}
                >
                  {services.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
