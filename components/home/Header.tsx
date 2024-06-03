import { cn } from "@/lib/utils";

interface HeaderProps {
  width: number;
}
const Header = ({ width }: HeaderProps) => {
  return (
    <section
      className={cn(
        "h-[85vh] flex flex-col justify-center items-center mb-2",
        "xl:-mt-8 xl:h-[98vh]",
      )}
    >
      <h1
        className={cn(
          "font-medium text-center leading-[90%] title",
          "xl:mt-5",
        )}
        style={{ fontSize: width / 3.6 + "px" }}
      >
        Beolika
      </h1>
      <div
        className={cn(
          "flex justify-between  w-full uppercase border-t pt-2 text-[10px]",
          "xs:text-xs",
          "sm:text-xs",
          "lg:pt-4",
          "xl:text-xl",
        )}
      >
        <p className={cn("hidden", "xl:block")}>
            Available WorldWide
        </p>
        {/* Available remotely only */}
        <p>Creative Developer</p>
        {/* Talented Developer */}
        <p className="flex gap-2">
          ©2024
          <span className={cn("hidden", "xl:block")}>
            {" "}All Rights Reserved
          </span>
        </p>
      </div>
      <div
        className={cn(
          "text-3xl leading-10 w-full h-full flex items-center justify-end pt-44",
          "xs:leading-9",
          "md:pt-0 md:items-end",
          "lg:text-4xl",
          "xl:text-5xl xl:leading-[60px]",
        )}
      >
        <p
          className={cn(
            "text-right indent-2",
            "md:w-[700px]",
            "xl:w-[1200px] xl:indent-10",
          )}
        >
          A developer who creates{" "}
          <span className="opacity-50">
            engaging & memorable
          </span>{" "}
          digital products.
          {/* products. */}
        </p>
      </div>
    </section>
  );
};

export default Header;
