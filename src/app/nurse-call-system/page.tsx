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
                At Wire Wave, we specialize in delivering advanced nurse call
                systems that support efficient communication and elevate patient
                care in healthcare environments. Our solutions are designed to
                ensure timely response from medical staff, improving both safety
                and operational workflow. With customized installations,
                detailed training, and reliable post-installation support, we
                serve the unique needs of hospitals, clinics, long-term care
                facilities, and nursing homes.
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
                    Quick-access buttons for patients to request immediate
                    assistance in critical situations
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
                    Flexible, cable-free systems that ensure reliable
                    communication across healthcare facilities
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
                    Centralized control units that streamline communication
                    between patients and staff
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
                    Instant alerts for medical personnel to improve response
                    times and workflow efficiency
                  </Typography>
                </div>
              </div>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Once installed, our nurse call systems seamlessly integrate with
                existing healthcare infrastructure and deliver real-time alerts,
                allowing staff to respond swiftly to patient needs. By
                leveraging modern technology, we help enhance staff productivity
                and overall patient satisfaction.s
              </Typography>

              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Get in touch today for a free consultation or quote. We proudly
                serve Toronto and the surrounding areas, offering prompt and
                dedicated support for all your healthcare communication needs.
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

export default NurseCallSystem;
