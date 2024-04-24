import React from "react";
import { twMerge } from "tailwind-merge";

function Header2({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={twMerge(
        "text-[50px] font-bold leading-tight mx-auto text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default Header2;
