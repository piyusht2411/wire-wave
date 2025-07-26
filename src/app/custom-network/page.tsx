"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";

const InfrastructureDesignAndDeployment = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-[40vh] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[40vh] w-full bg-[url('/images/voip-banner.jpg')]" />
        <div className="absolute top-0 h-[40vh] w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container absolute top-[58%] mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="mb-6 font-black text-white text-2xl md:text-3xl lg:text-4xl">
                Infrastructure Design and Deployment
              </h1>
              <div className="text-sm text-gray-400">
                Home •{" "}
                <span className="text-white">
                  Infrastructure Design and Deployment
                </span>
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
                We offer comprehensive IT services tailored to meet your
                evolving business needs. In today’s fast-paced digital
                landscape, staying ahead of technological advancements is
                essential for every business owner. Whether it’s infrastructure
                design and deployment, application support, or network and cloud
                services—we’ve got you covered. Our team configures, manages,
                and supports all networking, voice, and video systems. We
                continuously monitor your network to ensure optimal
                connectivity, performance, and security. By applying
                industry-best design and deployment standards, we build IT
                environments that are robust, scalable, and aligned with your
                growing operational demands. Utilizing advanced technologies, we
                specialize in infrastructure monitoring, virtualization, storage
                solutions, and LAN/WAN optimization to drive efficiency and
                performance.
              </Typography>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <img
                    alt="Infrastructure Design and Deployment"
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-blue-600 text-2xl md:text-3xl py-8 pb-4">
            What We Deliver in IT Infrastructure Design & Implementation
          </h2>

          <Typography
            className="text-gray-600 leading-relaxed text-base md:text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            With years of hands-on experience in networking, servers, and cloud
            solutions, we focus on delivering seamless service continuity. We
            analyze key business processes to design solutions that keep your
            systems running smoothly—whether hosted on-premise, in the cloud, or
            in hybrid environments. Our expertise across multi-vendor platforms
            ensures consistent system performance and reliable IT
            infrastructure.
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
                PC/Laptop setup and configuration
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
                Server deployment and room setup
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
                Active Directory domain configuration
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
                Multi-ISP connectivity integration
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
                DNS, DHCP, VPN, and branch connectivitys
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
                Network wiring and structured cabling
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
                Routing/Switching setup and upgrades
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
                Virtualization & cloud server migration
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
                Firewall/load balancer setup & updates
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
                Comprehensive IT security solutions
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
                Backup and disaster recovery planning
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
                Printer setup & OS support services
              </Typography>
            </div>
          </div>

          <h2 className="font-bold text-blue-600 text-2xl md:text-3xl py-8 pb-4">
            Why Wire Wave Stands Out in Infrastructure Solutions
          </h2>

          <Typography
            className="text-gray-600 leading-relaxed text-base md:text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            At Wire Wave, we recognize the critical importance of a dependable
            and well-structured IT infrastructure. Backed by a team of skilled
            IT professionals, we focus on enhancing the quality and performance
            of your network environment—including WAN, LAN, server systems,
            workstations, VoIP, and wireless connectivity. Our goal is to help
            your business maximize data bandwidth, improve process efficiency,
            and ensure smooth day-to-day operations. Whether you require a
            customized infrastructure design or a full-scale deployment, we
            offer end-to-end project management tailored to your specific
            needs—delivered on time and within budget. Here are a few reasons
            why businesses choose our IT infrastructure services:
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
                Drive IT growth, speed, and agility
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
                Boost infrastructure reliability & speed
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
                Install, update, and monitor tech stack
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
                Fuel business innovation with IT growth
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
                Deploy modern platforms efficiently
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
                Scalable and future-ready network design
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

export default InfrastructureDesignAndDeployment;
