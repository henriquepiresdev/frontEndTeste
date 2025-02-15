import { useLocation } from "react-router-dom";
import clsx from "clsx";
import React, { ReactNode } from "react";

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
    "hover:text-orange- transition-colors duration-200",
    {
      "text-orange- border-r-4 border-orange-": isActive,
      "text-black": !isActive,
    }
  );

  return (
    <li>
      <a href={href} className={linkClasses}>
        <Icon size={30} />
        <span className="ml-6 h-[26px]">{children}</span>
      </a>
    </li>
  );
}
