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
import customNetwork1 from "@/assests/img/custom-network.webp";
import voipImage2 from "@/assests/img/voip-image2.jpg";

const VOIPSolutions: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-[70vh] pt-32 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[70vh] w-full bg-[url('/images/voip-banner.jpg')] bg-cover bg-center" />
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
                Custom Network Solutions
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Revolutionize your business communication with Wire Wave’s Custom Network
                services. Affordable, scalable, and backed by 24/7 support, our
                solutions deliver crystal-clear voice quality and seamless
                connectivity for teams near and far.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Network Overview Section */}
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
                  alt="Custom Network Solutions"
                  src={customNetwork1}
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
                  The Future of Voice Communication
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Voice Over Internet Protocol (Custom Network) has transformed how
                  businesses connect. At Wire Wave, we harness this technology
                  to provide efficient, high-bandwidth solutions that outpace
                  traditional phone systems, empowering your team wherever they
                  are.
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
                Why Wire Wave Custom Network?
              </Typography>
              <Typography
                className="mb-8 font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                The internet revolutionized communication, and Custom Network is at the
                forefront. We deliver industry-standard hardware and software
                optimized for your business, ensuring affordability,
                scalability, and top-tier performance—perfect for remote and
                on-site teams alike.
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
            section="Custom Network Features"
            heading="Advanced Tools for Modern Businesses"
          >
            Our Custom Network solutions are designed to meet the demands of today’s
            dynamic workplaces, offering features that enhance productivity and
            connectivity.
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
                  Our team is available round-the-clock to keep your Custom Network system
                  running smoothly, with fast resolutions and expert guidance
                  whenever you need it.
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
                  With encrypted calls and redundant systems, we ensure your
                  communications are secure and uninterrupted, even under high
                  demand.
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
                  Integrate Custom Network effortlessly with your existing network
                  infrastructure, from data systems to security solutions, for a
                  unified experience.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <PageTitle section="Benefits" heading="Why Custom Network with Wire Wave?">
            From startups to large enterprises, our Custom Network services deliver
            unmatched value, inspired by the internet’s transformative power.
          </PageTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <List
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ListItem
                  className="p-0 mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    className="font-medium"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Lower Costs – Slash traditional phone expenses with our
                    affordable Custom Network plans.
                  </Typography>
                </ListItem>
                <ListItem
                  className="p-0 mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    className="font-medium"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Higher Scalability – Add lines or features effortlessly as
                    your business expands.
                  </Typography>
                </ListItem>
                <ListItem
                  className="p-0 mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    className="font-medium"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Clearer Voice Quality – Enjoy pristine audio with our
                    high-bandwidth solutions.
                  </Typography>
                </ListItem>
                <ListItem
                  className="p-0 mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    className="font-medium"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Increased Accessibility – Connect from anywhere with
                    internet access, ideal for remote teams.
                  </Typography>
                </ListItem>
                <ListItem
                  className="p-0 mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    className="font-medium"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Advanced Features – Benefit from call forwarding,
                    voicemail-to-email, and more for small and large teams.
                  </Typography>
                </ListItem>
                <ListItem
                  className="p-0 mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                  </ListItemPrefix>
                  <Typography
                    className="font-medium"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Ease of Portability – Take your number anywhere, simplifying
                    moves or remote work.
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
                  alt="Custom Network Benefits"
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
                  Empowering Remote Work
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  As remote work becomes the norm, our Custom Network solutions provide
                  the flexibility and reliability your team needs to stay
                  connected, productive, and ahead of the curve.
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
            Transform Your Communications Today
          </Typography>
          <Typography
            className="mx-auto mb-12 max-w-3xl opacity-80"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Join the Custom Network revolution with Wire Wave. Contact us to explore how
            our solutions can elevate your business communication to new
            heights.
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
