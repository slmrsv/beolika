import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";

const Footer = () => {
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
            "lg:text-4xl",
            "xl:text-2xl",
          )}
        >
          Inquiries
        </h3>
        <GoArrowDownRight
          className={cn("text-lg", "xl:text-2xl")}
        />
      </div>
      <div className={cn("space-y-10", "md:space-y-20")}>
        <div>
          <p
            className={cn(
              "mx-auto pb-10 text-2xl",
              "md:mx-0 md:text-4xl",
              "xl:text-5xl xl:w-[1400px] xl:leading-[60px]",
            )}
          >
            <span className="opacity-50">Do you</span> have
            a question ?
            <br />
            <span className="opacity-50">
              Send me
            </span>{" "}
            a message :
          </p>
        </div>
        <div>
          <Link
            href="mailto:hello@beolika.com"
            className={cn(
              "linkCursor font-semibold cursor-pointer text-xl",
              "md:text-3xl",
              "xl:text-5xl xl:w-[850px]",
              "hover:underline",
            )}
          >
            hello@beolika.com
          </Link>
        </div>
        <div className="pt-10">
          <div>
            <p
              className={cn(
                "mx-auto pb-5 text-xl opacity-50",
                "md:mx-0 md:text-4xl",
                "xl:text-4xl xl:w-[1400px] xl:leading-[60px]",
              )}
            >
              Follow Me
            </p>
          </div>
          {[
            {
              title: "Savee",
              slug: "https://savee.it/beolika/",
            },
            {
              title: "Github",
              slug: "https://github.com/beolika",
            },
            {
              title: "Discord",
              slug: "https://discord.com/users/849428669180542976",
            },
            {
              title: "Medium",
              slug: "https://medium.com/@beolika",
            },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.slug}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={cn(
                  "group border-b border-b-foreground/30 flex items-center justify-between py-6 w-full cursor-pointer",
                  "duration-500 delay-75",
                  "hover:px-2 hover:md:px-8 hover:xl:px-10 hover:border-b-foreground hover:text-foreground",
                  "xl:py-8",
                )}
              >
                <p
                  className={cn(
                    "font-semibold text-xl w-full",
                    "xl:text-5xl",
                  )}
                >
                  {social.title}
                </p>
                <GoArrowDownRight
                  className={cn(
                    "text-3xl group-hover:rotate-[-90deg]",
                    "xl:text-6xl",
                  )}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <p
        className={cn(
          "font-montserrat pt-14 w-full text-center font-ms font-normal text-xs",
          "md:text-sm"
        )}
      >
        ©2024 - Beolika. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
