"use client";
import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  WifiIcon,
  PhoneIcon,
  ServerIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon,
  LockClosedIcon,
  CheckCircleIcon,

} from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  
  CardHeader,
  
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import PageTitle from "@/components/PageTitle";
import aboutInfra from "@/assests/img/team-strength.png";

const servicesData = [
  {
    icon: WifiIcon,
    title: "Managed WiFi Solutions",
    description:
      "Reliable, high-speed WiFi tailored to your business needs. We design, deploy, and manage wireless networks that ensure seamless connectivity and optimal performance.",
  },
  {
    icon: PhoneIcon,
    title: "VOIP Services",
    description:
      "Cost-effective VoIP solutions with 24/7 support. Our team sets up and manages business communication systems for crystal-clear calls and efficient operations.",
  },
  {
    icon: ServerIcon,
    title: "Structured Cabling",
    description:
      "Expert installation of Cat 5, Cat 6, and fiber optic cabling to create a robust foundation for your network, ensuring speed, reliability, and scalability.",
  },
  {
    icon: GlobeAltIcon,
    title: "Fiber Internet / IPTV",
    description:
      "High-speed fiber optic connections and IPTV services to supercharge your network. We deliver fast, dependable internet and entertainment solutions.",
  },
  {
    icon: CogIcon,
    title: "Infrastructure Services",
    description:
      "Comprehensive infrastructure solutions, from data center design to network implementation, built to support your business growth and operational success.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Network Design Planning",
    description:
      "Strategic network planning and consultation to optimize your IT environment. We create custom designs that align with your goals and future needs.",
  },
  {
    icon: LockClosedIcon,
    title: "Security Services",
    description:
      "Advanced security solutions including IP-based cameras and access control systems to protect your business, with seamless integration and remote monitoring.",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/images/our-services-banner.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
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
                Our Services
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Discover how Wire Wave Information Networks delivers
                cutting-edge solutions to empower your business. From
                connectivity to security, we’ve got you covered.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-8 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <PageTitle
            section="What We Offer"
            heading="Tailored Solutions for Your Success"
          >
            At Wire Wave, we provide a range of services designed to meet your
            unique infrastructure and IT needs. Explore our offerings and see
            how we can drive your business forward.
          </PageTitle>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map(({ icon: Icon, title, description }, index) => (
              <Card
                key={index}
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
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {title}
                  </Typography>
                  <Typography
                    className="font-normal text-blue-gray-500"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="filled" size="lg">
              Contact Us for a Quote
            </Button>
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
            Ready to Elevate Your Infrastructure?
          </Typography>
          <Typography
            className="mx-auto mb-12 max-w-3xl opacity-80"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Partner with Wire Wave to unlock the full potential of your network.
            Let’s build a solution that powers your future.
          </Typography>
          <Button variant="outlined" color="white" size="lg">
            Get Started
          </Button>
        </div>
      </section>

        {/* Team Section */}
            <section className="py-20 px-4">
              <div className="container mx-auto">
                <PageTitle
                  section="Our Team"
                  heading="Meet the Professionals Behind Wire Wave"
                >
                  At Wire Wave, we know you'll enjoy working with our professional,
                  service-oriented staff. Our team of certified technicians, project
                  managers, and support personnel are dedicated to providing
                  exceptional service and innovative solutions for all your network
                  infrastructure needs.
                </PageTitle>
      
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                        alt="Infrastructure Solutions"
                        src={aboutInfra}
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
                        Cutting-Edge Infrastructure Solutions
                      </Typography>
                      <Typography
                        className="font-normal text-blue-gray-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Our team specializes in a wide range of services including
                        data and voice cabling, data center design and implementation,
                        fiber optic installations, security camera systems, and key
                        access control systems. With our professional expertise and
                        state-of-the-art equipment, we ensure seamless integration and
                        optimal performance for all your network infrastructure needs.
                      </Typography>
                    </CardBody>
                  </Card>
      
                  <div>
                    <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                      <UserGroupIcon className="h-8 w-8 text-white" />
                    </div>
                    <Typography
                      variant="h3"
                      className="mb-3 font-bold"
                      color="blue-gray"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Core Strengths of Our Team
                    </Typography>
      
                    <List
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <ListItem
                        className="p-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <ListItemPrefix
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                        </ListItemPrefix>
                        <Typography
                          className="font-medium"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          100% Satisfaction Guarantee – Or we won't charge you a penny
                        </Typography>
                      </ListItem>
                      <ListItem
                        className="p-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <ListItemPrefix
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                        </ListItemPrefix>
                        <Typography
                          className="font-medium"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Project Management Approach – Which is hassle-free for
                          clients
                        </Typography>
                      </ListItem>
                      <ListItem
                        className="p-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <ListItemPrefix
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                        </ListItemPrefix>
                        <Typography
                          className="font-medium"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Diversified Services – Our support and knowledge is second
                          to none
                        </Typography>
                      </ListItem>
                      <ListItem
                        className="p-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <ListItemPrefix
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                        </ListItemPrefix>
                        <Typography
                          className="font-medium"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Experienced and certified technicians – All technical and
                          workplace certifications
                        </Typography>
                      </ListItem>
                      <ListItem
                        className="p-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <ListItemPrefix
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                        </ListItemPrefix>
                        <Typography
                          className="font-medium"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Service vehicles well equipped with tools and testing
                          equipment
                        </Typography>
                      </ListItem>
                      <ListItem
                        className="p-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <ListItemPrefix
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                        </ListItemPrefix>
                        <Typography
                          className="font-medium"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Subcontract Services – Unmarked vans, certified technicians,
                          and guaranteed expertise
                        </Typography>
                      </ListItem>
                    </List>
      
                    <Button variant="filled" className="mt-8">
                      Meet Our Team
                    </Button>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
};

export default Services;
