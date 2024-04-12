import { cn } from "@/lib/utils";
import { GoArrowDownRight } from "react-icons/go";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Art } from "@/types/types";

interface PlaygroundProps {
  arts: Art[] | null;
}

const Playground = ({ arts }: PlaygroundProps) => {
  return (
    <section
      className={cn("space-y-44 py-20", "xl:space-y-36")}
    >
      <div
        className={cn(
          "text-3xl leading-10 font-black uppercase grid justify-end textScroll pb-44",
          "xs:text-4xl",
          "md:text-5xl",
          "xl:text-7xl",
        )}
      >
        <p className={cn("text-right", "xl:w-[1400px]")}>
          <span className="opacity-50">
            Passionate about architectural visualization,
          </span>{" "}
          I love creating inspiring 3D spaces.
        </p>
      </div>
      <div
        className={cn(
          "marquee absolute left-0 right-0 border-b py-4 flex uppercase overflow-hidden gap-10",
          "hover:text-background hover:bg-foreground duration-500 delay-75",
          "sm:py-4",
          "lg:py-7",
        )}
      >
        {[
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
          { title: "Playground" },
        ].map((service, index) => (
          <div key={index} className="marquee__inner">
            <div className="marquee__part flex items-center gap-10">
              <h3
                className={cn(
                  "uppercase font-black text-3xl",
                  "lg:text-4xl",
                  "xl:text-5xl",
                )}
              >
                {service.title}
              </h3>
              <GoArrowDownRight
                className={cn(
                  "text-3xl arrow",
                  "xl:text-6xl",
                )}
              />
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
            <CarouselItem
              className="lg:basis-1/3"
              key={index}
            >
              <Image
                src={art.image}
                alt={art.alt}
                width={1080}
                height={1920}
                className={cn(
                  "w-full bg-gray-300 rounded-3xl",
                )}
              />
              <p
                className={cn(
                  "text-lg font-ms",
                  "xs:text-xl",
                  "md:text-3xl",
                  "xl:text-3xl",
                )}
              >
                {art.title}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Playground;
