"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import {
  FingerPrintIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import featuresData from "@/data/features-data";
import teamData from "@/data/team-data";
import contactData from "@/data/contact-data";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import FeatureCard from "./FeatureCard";
import TeamCard from "./TeamCard";
import FlipCards from "./FlipCards";
import Image from "next/image";
import teamImage from "@/assests/img/teamwork.png";
import card1 from "@/assests/img/card-1.jpg";
import card2 from "@/assests/img/card-2.png";

function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('../assests/img/banner.jpg')] bg-cover bg-center" />
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
                Building Connections That Empower
                Your Future
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                At Wire Wave Information Networks,
                we combine cutting-edge technology
                with unparalleled service to
                deliver infrastructure solutions
                that drive success. Let us connect
                your vision to endless
                possibilities.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-white gap-4 items-center justify-center">
            {featuresData.map(
              ({ title, description, image }) => (
                <FlipCards
                  title={title}
                  description={description}
                  image={image}
                />
              )
            )}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Experience Excellence with Every
                Interaction
              </Typography>
              <Typography
                className="mb-8 font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {/* Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript. */}
                Simplify your user experience with
                intuitive tooltips and popovers.
                Easily integrate them with
                JavaScript for seamless
                functionality. Kickstart your
                projects with our pre-built
                pages—customize text and images to
                make them uniquely yours
              </Typography>
              <Button variant="filled">
                read more
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card
                className="shadow-lg border shadow-gray-500/10 rounded-lg"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <CardHeader
                  floated={false}
                  className="relative h-56"
                  onPointerEnterCapture={
                    undefined
                  }
                  onPointerLeaveCapture={
                    undefined
                  }
                  placeholder=""
                >
                  <Image
                    alt="Card Image"
                    src={card2}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody
                  onPointerEnterCapture={
                    undefined
                  }
                  onPointerLeaveCapture={
                    undefined
                  }
                  placeholder=""
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    placeholder={undefined}
                    onPointerEnterCapture={
                      undefined
                    }
                    onPointerLeaveCapture={
                      undefined
                    }
                  >
                    Enterprise Solutions,
                    Redefined
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                    placeholder={undefined}
                    onPointerEnterCapture={
                      undefined
                    }
                    onPointerLeaveCapture={
                      undefined
                    }
                  >
                    Delivering Top-Notch Services
                    for Unstoppable Growth
                  </Typography>
                  <Typography
                    className="font-normal text-blue-gray-500"
                    placeholder={undefined}
                    onPointerEnterCapture={
                      undefined
                    }
                    onPointerLeaveCapture={
                      undefined
                    }
                  >
                    Just like the Arctic Ocean’s
                    resilience through seasons,
                    our services adapt and evolve
                    to meet your business needs.
                    Trust us to provide innovative
                    solutions that stand the test
                    of time.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* team section */}
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle
            section="Our Team"
            heading="Here are our heroes"
          >
            Meet the dedicated individuals behind
            our success. With their expertise and
            passion, they drive innovation,
            excellence, and outstanding results.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map((item, ind) => (
              <TeamCard
                key={ind}
                img={item.img}
                name={item.name}
                position={item.position}
                socials={
                  <div className="flex items-center gap-2">
                    {item.socials.map(
                      (item, ind) => (
                        <IconButton
                          key={ind}
                          color={item.color}
                          variant="text"
                          placeholder={undefined}
                          onPointerEnterCapture={
                            undefined
                          }
                          onPointerLeaveCapture={
                            undefined
                          }
                        >
                          <i
                            className={`fa-brands text-xl fa-${item.name}`}
                          />
                        </IconButton>
                      )
                    )}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <div className="mt-32 flex flex-wrap items-center">
        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
          <Card
            className="shadow-lg border shadow-gray-500/10 rounded-lg"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder=""
          >
            <CardHeader
              floated={false}
              className="relative h-56"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <Image
                alt="Card Image"
                src={card1}
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Empowering Innovation at Every
                Step
              </Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 mt-2 font-bold"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Seamless Experiences
              </Typography>
              <Typography
                className="font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Enhance user interactions with
                effortless tooltips and popovers,
                powered by simple JavaScript
                integrations. Get started quickly
                with our pre-designed
                pages—customizable to fit your
                unique vision and ready to deploy
                with ease.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
            <GlobeAltIcon className="h-8 w-8 text-white " />
          </div>
          <Typography
            variant="h3"
            className="mb-3 font-bold"
            color="blue-gray"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Partner with Us for Seamless
            Experiences
          </Typography>
          <Typography
            className="mb-8 font-normal text-blue-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {/* Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript. */}
            "Enhance user interactions with
            effortless tooltips and popovers,
            powered by simple JavaScript
            integrations. Get started quickly with
            our pre-designed pages—customizable to
            fit your unique vision and ready to
            deploy with ease.
          </Typography>
          <Button variant="filled">
            read more
          </Button>
        </div>
      </div>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle
            section="Business Growth"
            heading="Experienced & skilled IT services all over Canada"
          >
            We are a leading Canada-based provider
            of IT and data services for small and
            medium-sized businesses. Our solutions
            are affordable, high-quality, and
            technically robust, designed to meet
            all your business needs. Backed by a
            skilled and dependable team, we serve
            as your trusted support partner.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(
              ({ title, icon, description }) => (
                <Card
                  key={title}
                  color="transparent"
                  shadow={false}
                  className="text-center text-blue-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={
                    undefined
                  }
                  onPointerLeaveCapture={
                    undefined
                  }
                >
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                    {React.createElement(icon, {
                      className:
                        "w-5 h-5 text-white",
                    })}
                  </div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2"
                    placeholder={undefined}
                    onPointerEnterCapture={
                      undefined
                    }
                    onPointerLeaveCapture={
                      undefined
                    }
                  >
                    {title}
                  </Typography>
                  <Typography
                    className="font-normal text-blue-gray-500"
                    placeholder={undefined}
                    onPointerEnterCapture={
                      undefined
                    }
                    onPointerLeaveCapture={
                      undefined
                    }
                  >
                    {description}
                  </Typography>
                </Card>
              )
            )}
          </div>
          <PageTitle
            section="Contact Us"
            heading="Want to work with us?"
          >
            Complete this form and we will get
            back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8 flex-wrap">
              <Input
                variant="outlined"
                size="lg"
                label="Full Name"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin=""
              />
              <Input
                variant="outlined"
                size="lg"
                label="Email Address"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin=""
              />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Message"
              rows={8}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                  onPointerEnterCapture={
                    undefined
                  }
                  onPointerLeaveCapture={
                    undefined
                  }
                  placeholder=""
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{
                className: "-ml-2.5",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin=""
            />
            <Button
              variant="gradient"
              size="lg"
              className="mt-8"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
