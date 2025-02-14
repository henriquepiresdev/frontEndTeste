import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import React from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export function Link({ children, href }: LinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;
  return (
    <a
      href={href}
      className={`font-sans font-semibold ${
        isActive
          ? "text-orange- underline"
          : "text-black hover:underline hover:text-orange-"
      } min-w-content whitespace-nowrap`}
    >
      {children}
    </a>
  );
}
