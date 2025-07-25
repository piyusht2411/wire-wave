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

const NurseCallSystem: React.FC = () => {
  return (
    <>
      <div className="relative flex h-[40vh] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[40vh] w-full bg-[url('/images/nurse-call-banner.jpg')] bg-cover bg-center" />
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
                Nurse Call System
              </Typography>
              <div className="text-sm text-gray-400">
                Home • <span className="text-white">Nurse Call System</span>
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
                At Wire Wave, we specialize in advanced nurse call systems
                designed to enhance patient care and staff responsiveness in
                healthcare facilities. Our solutions provide reliable
                communication tools, ensuring prompt assistance and improved
                safety. We offer tailored installations, comprehensive training,
                and ongoing support to meet the unique needs of hospitals,
                clinics, and nursing homes.
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
                    Emergency Call Button Installation
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
                    Wireless Nurse Call Systems
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
                    Integrated Communication Panels
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
                    Staff Alert Systems
                  </Typography>
                </div>
              </div>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Once installed, our nurse call systems provide real-time alerts
                and seamless integration with existing healthcare
                infrastructure, ensuring staff can respond swiftly to patient
                needs. Our team leverages cutting-edge technology to enhance
                workflow efficiency and patient satisfaction, with extensive
                experience serving various healthcare settings.
              </Typography>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Contact us anytime for a free consultation or quote, and we’ll
                address your requirements promptly. We proudly serve Toronto and
                the surrounding regions with dedicated support.
              </Typography>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Image
                  alt="Nurse Call System"
                  src="/images/nurse-call-card.jpg"
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
                Contact Us To Get A Free Estimate!
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

export default NurseCallSystem;
