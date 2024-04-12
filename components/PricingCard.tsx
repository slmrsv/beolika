import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  typeOfDate: string;
  description: string;
}

const PricingCard = ({
  title,
  price,
  typeOfDate,
  description,
}: PricingCardProps) => {
  return (
    <Card className="rounded-3xl text-primary w-full mx-auto text-center">
      <CardHeader>
        <h6
          className={cn(
            "text-xl font-audio",
            "lg:text-2xl",
            "xl:text-3xl",
          )}
        >
          {title}
        </h6>
      </CardHeader>
      <CardContent
        className={cn(
          "py-10",
          "md:pt-2",
          "lg:py-14",
          "xl:py-20",
        )}
      >
        <p
          className={cn(
            "text-5xl font-audio",
            "xs:text-6xl",
            "xl:text-8xl",
          )}
        >
          €{price}
          <span
            className={cn(
              "font-glacial text-xs",
              "xs:text-base",
              "lg:text-lg",
            )}
          >
            /{typeOfDate}
          </span>
        </p>
      </CardContent>
      <CardFooter>
        <p
          className={cn(
            "font-glacial text-lg w-44 mx-auto",
            "lg:text-xl lg:w-56",
            "xl:text-2xl",
          )}
        >
          {description}
        </p>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
