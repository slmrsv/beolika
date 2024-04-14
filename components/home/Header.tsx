import { cn } from "@/lib/utils";
// eslint-disable-next-line import/no-named-as-default

interface HeaderProps {
  width: number;
}
const Header = ({ width }: HeaderProps) => {
  return (
    <section
      className={cn(
        "h-[85vh] flex flex-col justify-center items-center mb-2",
        "xl:-mt-8 xl:h-[93vh]",
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
          "flex justify-between w-full uppercase border-t pt-2 text-[10px]",
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
        <p>Multidisciplinary Developer</p>
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
          "text-3xl leading-10 w-full h-full flex items-end justify-end",
          "xs:leading-9",
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
          digital solutions.
          {/* products. */}
        </p>
      </div>
    </section>
  );
};

export default Header;
