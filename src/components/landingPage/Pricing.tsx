
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { tiers } from "@/constants/data";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const dollar = "$";
  return (
    <div className="container mx-auto bg-gray-100 px-4 py-8">
      <h2 className="mb-2 text-center text-3xl font-bold">Choose Your Plan</h2>
      <p className="mb-8 text-center text-gray-600">
        Select the perfect plan for your needs. Upgrade or downgrade at any
        time.
      </p>
      <div className="mb-8 flex items-center justify-center">
        <span className="mr-2">Monthly</span>
        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span className="ml-2">Annual (Save 20%)</span>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={
              "flex flex-col rounded-xl bg-gray-100 shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] " +
              (tier.popular ? "scale-105 transform" : "")
            }
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                {tier.name}
                {tier.popular && (
                  <Badge className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow border-t border-gray-200 pt-4">
              <p className="mb-4 text-4xl font-bold">
                {dollar + (isAnnual ? tier.annualPrice : tier.monthlyPrice)}
                <span className="text-sm font-normal">
                  {" /" + (isAnnual ? "year" : "month")}
                </span>
              </p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={
                  "w-full " +
                  (tier.popular
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-200 text-gray-800")
                }
              >
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
