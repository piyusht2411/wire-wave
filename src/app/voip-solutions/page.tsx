"use client";
import React from "react";
import Image from "next/image";
import voipImage1 from "@/assests/img/voip-image1.jpg";
import { Typography } from "@material-tailwind/react";

const VOIPSolutions: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-[40vh] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[40vh] w-full bg-[url('/images/wireless.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-[40vh] w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container absolute top-[58%] mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="mb-6 font-black text-white text-2xl md:text-3xl lg:text-4xl">
                VOIP Solutions
              </h1>
              <div className="text-sm text-gray-400">
                Home • <span className="text-white">VOIP Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div>
            {/* Left Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Typography
                className="text-gray-600 leading-relaxed text-base md:text-lg"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                In today’s rapidly evolving digital landscape, VoIP (Voice over
                IP) solutions have become essential for modern business
                communication. At Wire Wave, we provide end-to-end VoIP services
                designed to keep you ahead in the tech curve. From configuring
                and managing voice networks to supporting video conferencing and
                unified communication systems, we ensure seamless integration
                with your existing IT infrastructure. Our services are built on
                best-in-class design and deployment practices, offering
                reliable, high-performance communication systems that grow with
                your business
              </Typography>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <Image
                    alt="VOIP Solutions"
                    src={voipImage1}
                    className="h-full w-full object-cover"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-blue-600 text-2xl md:text-3xl py-8 pb-4">
            What We Offer in IT VoIP Solutions
          </h2>

          <Typography
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-gray-600 leading-relaxed text-base md:text-lg"
          >
            With years of hands-on experience across networking, server, and
            cloud environments, our team is equipped to deliver robust VoIP
            solutions that prioritize uptime and call clarity. Whether you
            operate from a single location or across multiple branches, we
            evaluate your needs and provide tailored voice communication
            setups—on-premises, cloud-hosted, or hybrid. Our expertise across
            multiple vendors ensures optimal system compatibility and
            performance, regardless of your current setup.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                VoIP System Design & Deployment
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                IP Phone Setup & Configuration
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                PBX System Integration
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Unified Communications
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Call Management & Monitoring
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                SIP Trunking Services
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                VoIP Security & Encryption
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Multi-location VoIP Connectivity
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Hybrid System Support
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Ongoing Maintenance & Support
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Auto Attendant & IVR Configuration
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Voicemail, Call Forwarding & Mobility Features
              </Typography>
            </div>
          </div>

          <h2 className="font-bold text-blue-600 text-2xl md:text-3xl py-8 pb-4">
            How wire wavemakes difference in your infrastructure.
          </h2>

          <Typography
            className="text-gray-600 leading-relaxed text-base md:text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            At Wire Wave, we understand the critical role that VoIP and unified
            communications play in supporting both internal operations and
            customer interactions. Our professionals enhance your existing
            network with high-quality voice connectivity, including SIP
            trunking, IP telephony, wireless VoIP, and integration with CRMs or
            productivity tools. We offer fully managed services—custom design,
            budget-aligned deployment, and long-term support—to ensure your
            communication system is not only functional but also scalable and
            secure.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Custom VoIP Architecture Design
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Seamless Deployment & Integrations
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Scalable Solutions for All Sizes s
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Cost-Effective Communication Solutions
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                CRM & App Integration Support
              </Typography>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
              <Typography
                className="text-gray-600 text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                24/7 Technical Support & Assistance
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 font-bold text-white text-2xl md:text-3xl lg:text-4xl">
                Get in Touch for a Complimentary Quote!
              </h2>
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

export default VOIPSolutions;
