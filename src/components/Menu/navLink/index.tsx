import { useLocation, Link as RouterLink } from "react-router-dom";
import React, { ReactNode } from "react";
import clsx from "clsx";

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  children: ReactNode;
}

export function NavItem({ href, icon: Icon, children }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  const linkClasses = clsx(
    "flex items-end p-3 px-4 font-bold text-xl w-full",
    "hover:text-orange-600 transition-colors duration-200",
    {
      "text-orange-600 border-r-4 border-orange-600": isActive,
      "text-black": !isActive,
    }
  );

  return (
    <li>
      <RouterLink to={href} className={linkClasses}>
        <Icon size={30} />
        <span className="ml-6 h-[26px]">{children}</span>
      </RouterLink>
    </li>
  );
}
