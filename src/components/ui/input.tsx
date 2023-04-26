import React from "react";

import cn from "@/utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "label-sm w-full rounded-lg border border-primary-100 bg-white bg-transparent px-2 py-1.5 text-gray-800 placeholder-gray-400 outline-none transition duration-200 hover:bg-gray-50 focus:border-primary focus:bg-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:px-3 md:py-2",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
