import React from "react";
import {
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/alert";
import Image from "next/image";
import Logo from "@/assests/img/logo-2.png";

interface SocialItem {
  color: color;
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  path: string;
}

interface MenuSection {
  name: string;
  items: MenuItem[];
}

interface FooterProps {
  title?: string;
  description?: string;
  socials?: SocialItem[];
  menus?: MenuSection[];
  copyright?: React.ReactNode;
}

const year = new Date().getFullYear();

function Footer({
  title = "WireWave",
  description = "",
  socials = [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      //@ts-ignore
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus = [
    {
      name: "useful links",
      items: [
        {
          name: "About Us",
          path: "/about-us",
        },
        {
          name: "Contact Us",
          path: "/contact-us",
        },
        // {
        //   name: "Github",
        //   path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        // },
        // {
        //   name: "Free Products",
        //   path: "https://www.creative-tim.com/templates/free?ref=mtk",
        // },
      ],
    },
    {
      name: "Our Services",
      items: [
        {
          name: "Network Infrastructure Services",
          path: "/network-infracture",
        },
        {
          name: "Wireless Technology Expert",
          path: "/wireless-technology",
        },
        {
          name: "Structured Cabling",
          path: "/structured-cabling",
        },
        {
          name: "VoIP System Integration",
          path: "/voip-solutions",
        },
      ],
    },
  ],
  copyright = (
    <>
      Copyright © Wire Wave {year}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      ></a>
      .
    </>
  ),
}: FooterProps) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            {/* <Typography
              variant="h4"
              className="mb-4"
              color="blue-gray"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              {title}
            </Typography> */}
            <Image
              src={Logo}
              alt="Logo"
              className="h-20 w-20 bg-black rounded-md"
            />
            <Typography
              className="font-normal text-blue-gray-500 lg:w-2/5"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(
                ({ color, name, path }) => (
                  // <a
                  //   key={name}
                  //   href={path}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  // >
                  <IconButton
                    color="white"
                    className="rounded-full shadow-none bg-transparent"
                    onPointerEnterCapture={
                      undefined
                    }
                    onPointerLeaveCapture={
                      undefined
                    }
                    placeholder=""
                  >
                    <Typography
                      color={color}
                      onPointerEnterCapture={
                        undefined
                      }
                      onPointerLeaveCapture={
                        undefined
                      }
                      placeholder=""
                    >
                      <i
                        className={`fa-brands fa-${name}`}
                      />
                    </Typography>
                  </IconButton>
                  // </a>
                )
              )}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                  onPointerEnterCapture={
                    undefined
                  }
                  onPointerLeaveCapture={
                    undefined
                  }
                  placeholder=""
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                        onPointerEnterCapture={
                          undefined
                        }
                        onPointerLeaveCapture={
                          undefined
                        }
                        placeholder=""
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
