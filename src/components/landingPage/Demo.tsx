
import { ChevronDown } from "lucide-react";
import { demoContent } from "@/constants/data";
import { HeroVideoDialogDemo } from "./hero-video";
function Demo() {

  return (
    <section className="bg-white/80 py-20">
      <div className="mx-auto flex w-[90%] flex-col items-center text-gray-700 sm:max-w-2xl lg:max-w-3xl">
        <h1 className="text-center text-3xl font-bold">
          Hey there, it&apos;s{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-2"
          >
            {demoContent.userName}
          </a>
          👋🏼
        </h1>
        <img
          src={demoContent.userImage}
          alt="user"
          className="pointer-events-none my-10 inline-block h-24 w-24 rounded-full"
        />
        <p className="w-fit max-w-prose text-center font-semibold leading-relaxed">
          <span className="font-bold">Your story goes here</span> {demoContent.userStory}
        </p>

        {/* demo video */}
        <div className="my-20 w-full scroll-mt-28" id="demo">
          <HeroVideoDialogDemo />
        </div>

        <div className="mb-4 flex items-center justify-center">
          <ChevronDown className="h-10 w-10 animate-bounce text-gray-600" />
        </div>

        <div className="cursor-pointer text-center text-2xl font-medium text-gray-600 hover:text-gray-800">
          {demoContent.footerText}
        </div>
      </div>
    </section>
  );
}

export default Demo;
