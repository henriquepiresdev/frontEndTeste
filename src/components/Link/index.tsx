import React, { ReactNode } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export function Link({ children, href }: LinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <RouterLink
      to={href}
      className={`font-sans font-semibold ${
        isActive
          ? "text-orange-600 underline"
          : "text-black hover:underline hover:text-orange-600"
      } min-w-content whitespace-nowrap`}
    >
      {children}
    </RouterLink>
  );
}
