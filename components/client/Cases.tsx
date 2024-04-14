"use client";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Case, Work } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import useLenis from "@/animations/useLenis";

interface CasesProps {
  cases: Case;
  previousProjectSlug?: Work;
  nextProjectSlug?: Work;
}
const Cases = ({
  cases,
  previousProjectSlug,
  nextProjectSlug,
}: CasesProps) => {
  useLenis();
  return (
    <div
      className={cn(
        "font-montserrat text-xl w-full text-center h-full",
        "md:text-left md:text-2xl",
        "xl:text-4xl",
      )}
    >
      <Link
        href="/"
        className={cn(
          "text-xs uppercase font-medium gap-2 flex items-center hover:gap-4 cursor-pointer",
          "xl:text-lg",
        )}
      >
        <GoArrowLeft
          className={cn("text-xs", "lg:text-lg")}
        />
        Back
      </Link>
      <div
        className={cn(
          "space-y-10",
          "xl:pb-28 xl:space-y-20",
        )}
      >
        <div
          className={cn(
            "h-[90vh] flex flex-col",
            "lg:h-[80vh] lg:justify-end",
          )}
        >
          <div
            className={cn(
              "pt-8 h-full text-left flex flex-col justify-between",
              "xl:h-auto xl:flex-row xl:justify-between xl:items-end",
            )}
          >
            <p
              className={cn(
                "text-6xl pt-10",
                "lg:pt-0",
                "xl:text-[200px]",
              )}
            >
              {cases?.title}
            </p>
            <div
              className={cn(
                "text-sm",
                "xl:text-base xl:text-right",
              )}
            >
              <p>{cases?.date}</p>
              <p>{cases?.company}</p>
              <p>{cases?.construction}</p>
              <p>{cases?.role}</p>
              {cases?.siteUrl && (
                <div
                  className={cn(
                    "text-xs gap-2 mt-5 flex justify-end items-center hover:gap-4 cursor-pointer",
                    "xl:text-lg",
                  )}
                >
                  <Link
                    href={cases?.siteUrl}
                    className={cn(
                      "font-medium uppercase",
                      "duration-500 delay-75",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch
                  </Link>
                  <GoArrowRight
                    className={cn("text-xs", "lg:text-lg")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "space-y-4",
            "xl:grid xl:grid-cols-2 xl:items-center xl:gap-6 xl:space-y-0",
          )}
        >
          {cases?.pictures.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt={image.alt}
              width={1200}
              height={750}
              className={cn(
                "w-full bg-gray-300 rounded-3xl",
              )}
            />
          ))}
        </div>
        <div
          className={cn("flex items-center", {
            "justify-start":
              previousProjectSlug && !nextProjectSlug,
            "justify-between":
              previousProjectSlug && nextProjectSlug,
            "justify-end":
              !previousProjectSlug && nextProjectSlug,
          })}
        >
          <div
            className={cn(
              "gap-2 flex items-center hover:gap-4 cursor-pointer",
              {
                hidden: !previousProjectSlug?.slug,
              },
            )}
          >
            <GoArrowLeft
              className={cn("text-xs", "lg:text-lg")}
            />
            <Link
              href={`/cases/${previousProjectSlug?.slug}`}
              className={cn(
                "font-medium uppercase text-xs",
                "xl:text-lg",
              )}
            >
              Previous projet
            </Link>
          </div>
          <div
            className={cn(
              "gap-2 flex items-center hover:gap-4 cursor-pointer",
              {
                hidden: !nextProjectSlug?.slug,
              },
            )}
          >
            <Link
              href={`/cases/${nextProjectSlug?.slug}`}
              className={cn(
                "font-medium uppercase text-xs",
                "xl:text-lg",
              )}
            >
              Next project
            </Link>
            <GoArrowRight
              className={cn("text-xs", "lg:text-lg")}
            />
          </div>
        </div>
        <div
          className={cn(
            "w-full pt-14 text-left flex justify-center",
            "xl:text-center",
          )}
        >
          <p
            className={cn(
              "text-sm font-light",
              "xl:w-[900px] xl:text-lg",
            )}
          >
            {cases?.content}
          </p>
        </div>
      </div>
      <p
        className={cn(
          "font-montserrat pt-14 w-full text-center font-ms font-normal text-xs",
          "md:text-sm",
        )}
      >
        ©2024 - Beolika. All Rights Reserved.
      </p>
    </div>
  );
};

export default Cases;
