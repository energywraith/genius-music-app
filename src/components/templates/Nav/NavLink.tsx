"use client";

import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
}

const NavLink = ({ href, children }: LinkProps) => {
  const pathname = usePathname();

  const isCurrentRoute = pathname === href;

  return (
    <li className="group font-passion text-secondary-900 text-2xl">
      <NextLink href={href}>{children}</NextLink>
      <span
        className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary-900${
          isCurrentRoute ? " max-w-full" : ""
        }`}
      ></span>
    </li>
  );
};

export { NavLink };
