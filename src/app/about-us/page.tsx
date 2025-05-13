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
  FingerPrintIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LightBulbIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import aboutTeam from "@/assests/img/teams.png";
import aboutInfra from "@/assests/img/team-strength.png";
import aboutMission from "@/assests/img/our-mission.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/images/about-us-banner.jpg')] bg-cover bg-center" />
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
                Excellence in Network Infrastructure Since 2018
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Wire Wave Information Networks is a nationwide provider of
                infrastructure services for enterprises of all sizes throughout
                Canada. Our commitment to excellence, innovation, and
                unparalleled service has made us a trusted partner for
                businesses seeking reliable network solutions.
              </Typography>
            </div>
          </div>
        </div>
      </div>

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
                  alt="Wire Wave Team"
                  src={aboutTeam}
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
                  Who We Are
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Wire Wave Information Networks is designed to meet the growing
                  demand for network infrastructure services and wireless
                  technology across Canada. Built on a technological foundation
                  with a strong focus on quality service, we deliver solutions
                  tailored to the unique needs of our customers. Integrity and
                  reliability have been the cornerstones of our successful
                  growth, and we remain committed to keeping our organization at
                  the forefront of the technology and networking industry.
                </Typography>
              </CardBody>
            </Card>

            <div>
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Our Commitment to Excellence
              </Typography>
              <Typography
                className="mb-8 font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                "It is our belief that when Wire Wave Information Networks takes
                on a project, we also take on a commitment to you, the client.
                This commitment includes everyone from our company to your
                project manager and all support and site personnel. We are
                dedicated to achieving mutual success through responsive
                communication, technical excellence, and uncompromising
                service."
              </Typography>
              <Button variant="filled">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <PageTitle
            section="Our Mission & Vision"
            heading="Powering Your Success Through Technology"
          >
            We strive to use our experience, technical expertise, cutting-edge
            tools, and top-notch talent to democratize access to the best IT
            solutions available, helping businesses of all sizes realize their
            vision for growth and success.
          </PageTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <LightBulbIcon className="h-8 w-8 text-white" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Our Mission
              </Typography>
              <Typography
                className="mb-6 font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Our mission is to leverage our expertise and experience to help
                businesses manifest their vision. We aim to provide innovative
                infrastructure solutions that enable our clients to stay ahead
                of the competition and achieve operational excellence. Through
                our commitment to quality and customer satisfaction, we build
                lasting partnerships that drive mutual success.
              </Typography>

              <Typography
                variant="h4"
                className="mb-3 mt-8 font-bold"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Our Vision
              </Typography>
              <Typography
                className="mb-8 font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                To become a world-class digital transformation partner through
                innovation, expertise, in-depth research, continuous learning,
                strategic partnerships, and efficiency. We create products and
                services that enable clients to reach new heights of success
                while maintaining the highest standards of technical excellence
                and customer care.
              </Typography>
            </div>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg overflow-hidden"
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
                  alt="Mission and Vision"
                  src={aboutMission}
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
                  Services Excellence Since 2018
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We understand that cabling and network infrastructure are
                  vital components of your entire IT system. Our team works
                  closely with you to understand your business, provide
                  consultation, implementation, and installation services, as
                  well as ongoing customer support to ensure your systems
                  operate at peak performance.
                </Typography>
              </CardBody>
            </Card>
          </div>
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

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <PageTitle
            section="Our Services"
            heading="Comprehensive Network Solutions"
          >
            Wire Wave Information Networks provides a wide range of services to
            meet all your infrastructure needs. From data cabling to security
            systems, our team of experts ensures seamless integration and
            optimal performance.
          </PageTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
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
                  Data and Voice Cabling
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We provide professional installation of horizontal cable (Cat
                  5, Cat 6, Cat 6A) and backbone cable (multi-pair copper or
                  fiber optic) to ensure reliable connectivity throughout your
                  facility.
                </Typography>
              </CardBody>
            </Card>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
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
                  Data Center Solutions
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We build state-of-the-art data centers by supplying and
                  installing racks, cabinets, cable trays, patch panels, and
                  horizontal and vertical cable management systems designed for
                  optimal performance.
                </Typography>
              </CardBody>
            </Card>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
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
                  Fiber Optic Solutions
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Speed up your network with our professionally trained
                  technicians who install and set up fiber optic cable
                  connections in a neat and timely manner, including single-mode
                  and multi-mode installations.
                </Typography>
              </CardBody>
            </Card>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
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
                  Security Camera Systems
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  For better security of your business, we can install and
                  configure IP or non-IP based security systems, allowing you to
                  monitor your office activity over the internet at any time and
                  from any place.
                </Typography>
              </CardBody>
            </Card>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
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
                  Access Control Systems
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We run and install key access control systems for single doors
                  to multiple doors, enhancing security and providing convenient
                  access management for your facility.
                </Typography>
              </CardBody>
            </Card>

            <Card
              className="shadow-lg border shadow-gray-500/10 rounded-lg"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <CardBody
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
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
                  VoIP Services
                </Typography>
                <Typography
                  className="font-normal text-blue-gray-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  We offer VoIP services at effective prices with 24/7 support.
                  Our team specializes in setting up business VoIP systems and
                  handling their routing and switching services for seamless
                  communications.
                </Typography>
              </CardBody>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="filled" size="lg">
              Explore Our Services
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
            Ready to Transform Your Network Infrastructure?
          </Typography>
          <Typography
            className="mx-auto mb-12 max-w-3xl opacity-80"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Contact Wire Wave Information Networks today to discuss how we can
            help you design, implement, and maintain a network infrastructure
            that meets your business needs and drives your success.
          </Typography>
          <Button variant="outlined" color="white" size="lg" className="mr-4">
            Request a Quote
          </Button>
          <Button variant="filled" color="white" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
