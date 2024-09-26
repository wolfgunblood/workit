
"use client";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { features } from "@/constants/data";

export default function Feature() {
  const [activeFeature, setActiveFeature] = React.useState(features[0]);

  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
           Features
          </h2>
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <Accordion
              type="single"
              className="w-full lg:w-1/2"
              defaultValue="item-0"
              onValueChange={(value) => {
              const index = parseInt(value.split('-')[1]!);
              setActiveFeature(features[index]);
            }}
            >
              {features.map((feature, index) => (
                <AccordionItem value={"item-" + index} key={index}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                    <span className="text-primary w-5 h-5 mr-2">{feature.icon}</span> 
                      <span>{feature.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="w-full lg:w-1/2">
              <img
                src={activeFeature?.image}
                alt={activeFeature?.title + " feature"}
                className="h-auto w-full rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
