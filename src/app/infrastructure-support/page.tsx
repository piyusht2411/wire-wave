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
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  CogIcon,
  CheckCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import networkImage1 from "@/assests/img/network.avif";
import voipImage2 from "@/assests/img/voip-image2.jpg";

const VOIPSolutions: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-[70vh] pt-32 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[70vh] w-full bg-[url('/images/our-services-banner.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-[70vh] w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Infrastructure Support
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                End-to-end infrastructure support services tailored to keep your
                business systems efficient, secure, and scalable. Optimize
                performance and minimize downtime with expert hands-on support.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* VOIP Overview Section */}
      <section className="mt-8 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardHeader
                floated={false}
                className="relative h-80"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <Image
                  alt="Infrastructure Support"
                  src={networkImage1}
                  className="h-full w-full object-cover"
                  width={600}
                  height={400}
                />
              </CardHeader>
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Importance of Infrastructure Support
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Infrastructure support is critical to maintaining your IT
                  environment. It ensures stability, reliability, and
                  performance across hardware, software, networks, and
                  systems—so your business stays up and running without
                  disruptions.
                </Typography>
              </CardBody>
            </Card>

            <div>
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Why Choose Wire Wave for Infrastructure Support?
              </Typography>
              <Typography
                className="mb-8 font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Wire Wave delivers expert infrastructure support solutions
                designed to align with your business operations. From
                troubleshooting and maintenance to strategic scaling, our team
                ensures your IT foundation is always solid and optimized.
              </Typography>
              <a
                href="/contact-us"
                color="white"
                className="mr-4 border-[1px] text-white bg-blue-gray-900 font-semibold px-6 py-4 rounded-lg border-white"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <PageTitle
            section="Infrastructure Support"
            heading="Key Benefits of Strong Infrastructure Support"
          >
            Maximize system uptime, improve performance, and secure your
            business continuity with our proactive and reactive support
            services.
          </PageTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg hover:shadow-xl transition-shadow duration-300"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                className="text-center"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-3 text-center shadow-lg">
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  24/7 Support
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Our infrastructure experts are available anytime to solve
                  issues, minimize downtime, and keep your systems operational
                  around the clock.
                </Typography>
              </CardBody>
            </Card>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg hover:shadow-xl transition-shadow duration-300"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                className="text-center"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-3 text-center shadow-lg">
                  <ShieldCheckIcon className="h-6 w-6 text-white" />
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Secure & Reliable
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We ensure your systems remain secure and backed by reliable
                  infrastructure—even during unexpected surges or technical
                  failures.
                </Typography>
              </CardBody>
            </Card>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg hover:shadow-xl transition-shadow duration-300"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                className="text-center"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-gray-900 p-3 text-center shadow-lg">
                  <CogIcon className="h-6 w-6 text-white" />
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Seamless Integration
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Integrate infrastructure support smoothly with your digital
                  ecosystem, helping all systems work cohesively and
                  efficiently.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <PageTitle
            section="Benefits"
            heading="Why Infrastructure Support with Wire Wave?"
          >
            We deliver strategic infrastructure support that grows with your
            business and keeps your systems resilient, agile, and future-ready.
          </PageTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <List
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="p-0 mb-4"
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="font-medium"
                  >
                    Reduced Downtime – Minimize disruptions with proactive
                    monitoring and support.
                  </Typography>
                </ListItem>
                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="p-0 mb-4"
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="font-medium"
                  >
                    Scalable Growth – Add systems and users seamlessly as your
                    business evolves.
                  </Typography>
                </ListItem>
                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="p-0 mb-4"
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="font-medium"
                  >
                    Centralized Management – Monitor and control everything from
                    a single dashboard.
                  </Typography>
                </ListItem>
                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="p-0 mb-4"
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="font-medium"
                  >
                    Data Integrity – Prevent data loss and maintain compliance
                    with strong backups.
                  </Typography>
                </ListItem>
                <ListItem
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="p-0 mb-4"
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="font-medium"
                  >
                    Increased Efficiency – Let your team focus on core tasks
                    while we manage the infrastructure.
                  </Typography>
                </ListItem>
              </List>
            </div>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardHeader
                floated={false}
                className="relative h-80"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <Image
                  alt="Infrastructure Support Benefits"
                  src={voipImage2}
                  className="h-full w-full object-cover"
                  width={600}
                  height={400}
                />
              </CardHeader>
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Empowering Operational Continuity
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  With dedicated infrastructure support, your operations remain
                  efficient and resilient, even in the face of change. We keep
                  your backend strong—so you can focus on growth.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-gray-900 text-white">
        <div className="container mx-auto text-center">
          <Typography
            variant="h2"
            className="mb-6 font-bold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Strengthen Your Infrastructure Today
          </Typography>
          <Typography
            className="mx-auto mb-12 max-w-3xl opacity-80"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Partner with Wire Wave for expert infrastructure support that powers
            your technology backbone. Let’s build a stronger, smarter, and more
            secure future—together.
          </Typography>
          <a
            href="/contact-us"
            color="white"
            className="mr-4 border-[1px] px-6 py-4 font-semibold rounded-lg border-white"
          >
            Request a Demo
          </a>
          <a
            href="/contact-us"
            color="white"
            className="mr-4 border-[1px] bg-white text-blue-gray-900 font-semibold px-6 py-4 rounded-lg border-white"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default VOIPSolutions;
