"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { routes } from "@/utils/routes";
import Footer from "./Footer";
import { Toaster } from "sonner";

interface NavbarWrapperProps {
  children: ReactNode;
}

function NavbarWrapper({ children }: NavbarWrapperProps) {
  const pathname = usePathname();
  const hiddenPaths = ["/sign-in", "/sign-up"];
  const servicePaths = [
    "/structured-cabling",
    "/cable-installation",
    "/networking",
    "/security-system",
    "/infrastructure-support",
    "/voip-solutions",
    "/custom-network",
    "/nurse-call-system",
  ];
  const showNavbar = !hiddenPaths.includes(pathname);

  const isCablePath = servicePaths?.includes(pathname);

  return (
    <>
      <Toaster richColors position="top-center" />
      {showNavbar && (
        <div
          className={`container left-2/4 z-10 mx-auto -translate-x-2/4 p-4 ${
            isCablePath
              ? "absolute w-full max-w-full pb-0 bg-black"
              : "absolute"
          }`}
        >
          <Navbar routes={routes} />
        </div>
      )}

      {children}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default NavbarWrapper;
