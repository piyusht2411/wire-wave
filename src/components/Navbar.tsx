"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface RouteItem {
  name: string;
  path?: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  target?: string;
}

interface NavbarProps {
  brandName?: string;
  routes: RouteItem[];
  action?: ReactNode;
}

function Navbar({
  brandName = "Logo",
  routes,
  action = (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="gradient" size="sm" fullWidth>
        Button
      </Button>
    </a>
  ),
}: NavbarProps) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder=""
        >
          {href ? (
            <Link
              href={href}
              target={target}
              rel="noopener noreferrer"
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          ) : (
            <Link
              href={path || "/"}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar
      color="transparent"
      className="p-3"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placeholder=""
    >
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link href="/">
          <Typography
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder=""
          >
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <a
            href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Button variant="text" size="sm" color="white" fullWidth>
              pro version
            </Button> */}
          </a>
          {React.cloneElement(action as React.ReactElement, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder=""
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <Link
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 block"
          >
            {/* <Button variant="text" size="sm" fullWidth>
              pro version
            </Button> */}
          </Link>
          {React.cloneElement(action as React.ReactElement, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

export default Navbar;
