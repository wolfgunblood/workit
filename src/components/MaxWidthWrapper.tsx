
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-10", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
