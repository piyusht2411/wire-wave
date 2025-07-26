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

const InfrastructureSupport: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-[40vh] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[40vh] w-full bg-[url('/images/our-services-banner.jpeg')] bg-cover bg-center" />
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
                Infrastructure Support
              </Typography>
              <div className="text-sm text-gray-400">
                Home •{" "}
                <span className="text-white">Infrastructure Support</span>
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
                Wire Wave is a trusted name in the field of security and smart
                technology, serving both residential and commercial clients. Our
                experienced technicians deliver fully tailored security
                solutions—starting with an on-site consultation and followed by
                a complete walkthrough to ensure you understand how your system
                works and how it protects your property.
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
                    Professional setup of high-definition cameras for continuous
                    monitoring and enhanced property security
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
                    Reliable intrusion detection systems to safeguard homes and
                    businesses from unauthorized access
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
                    Custom installation of automated systems for lighting,
                    locks, and remote access control
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
                    End-to-end protection plans tailored to ensure safety,
                    convenience, and peace of mind
                  </Typography>
                </div>
              </div>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Once installed, your security setup will be easy to manage,
                offering peace of mind through advanced protection. In addition
                to surveillance and alarm systems, we also provide smart
                automation services. These include the integration of
                intelligent locks, sensors, and devices designed to enhance your
                safety, comfort, and convenience.With years of combined
                experience, our team specializes in the setup and maintenance of
                reliable security systems for homes and businesses of all sizes.
              </Typography>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Get in touch with us anytime for a free quote or consultation.
                We’re proud to serve Toronto and the surrounding areas with fast
                and responsive customer support.
              </Typography>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Image
                  alt="Infrastructure Support"
                  src="/images/our-services-banner.jpeg"
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

export default InfrastructureSupport;
