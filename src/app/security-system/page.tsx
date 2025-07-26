"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  WifiIcon,
  ClockIcon,
  ShieldCheckIcon,
  CogIcon,
  CheckCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const SecuritySystems: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-[40vh] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[40vh] w-full bg-[url('/images/security-bg.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-[40vh] w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container absolute top-[58%] mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-2xl md:text-3xl lg:text-4xl"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Security Systems
              </Typography>
              <div className="text-sm text-gray-400">
                Home • <span className="text-white">Security Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Wire Wave has earned a trusted reputation among homeowners and
                businesses alike for delivering reliable security and technology
                solutions. Our certified technicians provide fully customized
                installations, on-site consultations, and a hands-on walkthrough
                to ensure you understand every aspect of your new security
                system.
              </Typography>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <Typography
                    className="text-gray-700"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Professional installation of indoor and outdoor security
                    cameras for real-time monitoring
                  </Typography>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <Typography
                    className="text-gray-700"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Reliable alarm installations to detect unauthorized access
                    and ensure property safety
                  </Typography>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <Typography
                    className="text-gray-700"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Integration of intelligent devices for enhanced control,
                    comfort, and security
                  </Typography>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <Typography
                    className="text-gray-700"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    End-to-end security system design and setup tailored for
                    residential protection
                  </Typography>
                </div>
              </div>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Once your system is set up, you'll have complete clarity on how
                it operates and protects your property. In addition to security
                installations, we also specialize in smart automation—enhancing
                your lifestyle with intelligent devices, remote access, and
                smart locks that offer greater convenience and control.
              </Typography>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Contact us anytime for a free estimate or to discuss your
                project. We proudly serve Toronto and the surrounding
                communities, and we’re committed to responding quickly and
                professionally to all inquiries.
              </Typography>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Image
                  alt="Security Systems"
                  src="/images/security-bg.jpg"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <Typography
                variant="h2"
                className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Get in Touch for a Complimentary Quote!
              </Typography>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/contact-us"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecuritySystems;
