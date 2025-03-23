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
  const showNavbar = !hiddenPaths.includes(pathname);

  return (
    <>
      <Toaster richColors position="top-center" />
      {showNavbar && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
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
