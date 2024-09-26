
"use client";
import React, { useState, useEffect } from "react";
import { navbar } from "@/constants/data";
// import { UserButton, useUser } from "@stackframe/stack";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  //Use stack auth for seamless authentication
  //Uncomment below to use stack auth
  // const user = useUser();
  const user = null; //Remove this

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxOffset = 20; // Increased range of movement
      const newOffset = maxOffset * Math.sin(scrollY / 200); // Slower movement
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-2 z-50 w-full px-2 md:top-8"
      style={{
        transform: "translateY(" + offset + "px)",
        transition: "transform 0.3s ease-out", // Smoother transition
      }}
    >
      <div className="flex w-full justify-center">
        <div className="mx-auto flex h-12 w-full max-w-3xl items-center justify-between rounded-full bg-white/20 px-4 shadow-lg backdrop-blur-md">
          {/* Logo and Site Name */}
          <a className="flex items-center gap-2" href="/">
            <div
              className="flex items-center justify-center"
              style={{ minWidth: "36px", minHeight: "36px" }}
            >
              {/* <img
                alt="Your app"
                loading="lazy"
                width="36"
                height="36"
                decoding="async"
                style={{ color: "transparent", minWidth: "36px" }}
                src="/images/logo.png"
              /> */}
            </div>
            <span className="text-xl font-bold tracking-wider">
              {navbar.name}
            </span>
          </a>
          {/* Navigation Links */}
          <div className="hidden items-center gap-6 sm:flex">
            <a className="text-sm text-black hover:underline" href="#pricing">
              Pricing
            </a>
            <a className="text-sm text-black hover:underline" href="#faq">
              FAQ
            </a>
            <a className="text-sm text-black hover:underline" href="">
              More
            </a>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-4">
            {!user && (
              <>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="rounded-full bg-accent px-4 text-gray-700 hover:bg-white/70 hover:text-gray-900"
                >
                  <Link href="/handler/signin">Sign in</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-gray-900/80 px-4 text-white hover:bg-gray-800/90"
                >
                  <Link href="/handler/signup" className="group">
                    Sign up
                    <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </>
            )}
            {/* Uncomment this to use stack auth */}
            {/* {user && <UserButton />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
