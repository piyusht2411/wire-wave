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
                We provide the best services of your IT needs, with the growing
                advancement in IT industry as a business owner should be to
                remain at the lead of technology, no matter. It's VOIP
                Solutions, applications support or Network or cloud Services
                including Configure, manages and provides support for all
                networking, video and voice-related services and equipment.
                Monitors the network for connectivity, security and performance.
                Business needs with best-in-class design and deployment
                standards, should be reliable and powerful enough to support
                your ever-increasing operational requirements. We utilize
                advanced technologies in IT infrastructure to monitor solution,
                virtualization, storage and LAN, WAN optimization.
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
            What We Offer In IT VOIP Solutions
          </h2>

          <Typography
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-gray-600 leading-relaxed text-base md:text-lg"
          >
            With years of experience in the Network, Server or cloud domain, we
            identify the critical features of an organization to keep their
            services always up and running effectively with continuity. We
            mainly focus on evaluating, obtaining, acclimating, activating,
            monitoring solutions whether on the premise, on cloud or a hybrid
            scenario. With multi-vendor platforms, we ensure the performance of
            systems and provides:
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
                PC/Laptop configure and Setup
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
                Servers and Server Room setup
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
                Active Directory domain services Setup
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
                Multiple ISP termination
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
                Network and Structured Cabling
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
                DNS & DHCP Solution, site to site VPN and Multi-location office
                connectivity
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
                Routing and Switching install, upgrade and configure
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
                Server Virtualization and on-premises server migration to the
                cloud
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
                Firewall and load balancer install, upgrade and configure
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
                Security Solutions
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
                Network Printer and Operating System Setup and support
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
                Disaster Recovery
              </Typography>
            </div>
          </div>

          <h2 className="font-bold text-blue-600 text-2xl md:text-3xl py-8 pb-4">
            How Netechcabling makes difference in your infrastructure.
          </h2>

          <Typography
            className="text-gray-600 leading-relaxed text-base md:text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            At Netechcabling, we surely understand the significance of a stable
            and reliable IT infrastructure. With the professionalism of our IT
            experts, we are here to improve the quality of your Network
            infrastructure includes WAN, LAN, servers system and workstations
            with VOIP and wireless connectivity along with maximizing the data
            bandwidth and optimizing processes. If you need a specialized design
            and deployment needs for your business, we manage and support the
            entire project on specific requirements and in budget boundaries.
            Few features to choose our services to include:
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
                Accelerate your IT goals, growth and innovation
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
                Improvement infrastructure performance and reliability
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
                Install, Updates and monitor the technologies which meet your
                goals
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
                Accelerate your IT growth and business innovation
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
                Modernize and implement new platforms in a faster and easier way
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
                Scalable and reliable network design and procedures
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
                Contact Us To Get A Free Estimate!
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
