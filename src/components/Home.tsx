"use client";
import React, { useState } from "react";
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
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import featuresData from "@/data/features-data";
import teamData from "@/data/team-data";
import contactData from "@/data/contact-data";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import TeamCard from "./TeamCard";
import FlipCards from "./FlipCards";
import Image from "next/image";
import teamImage from "@/assests/img/teamwork.png";
import card1 from "@/assests/img/card-1.jpg";
import card2 from "@/assests/img/card-2.png";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFeedback(
          "Message sent successfully! We’ll get back to you within 24 hours."
        );
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setFeedback(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setFeedback("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const companies = [
    {
      name: `Google`,
      img: `company1.png`
    },
    {
      name:`Facebook`,
      img:`company2.png`
    },
    {
      name:`Pinterest`,
      img:`company3.png`
    },
    {
      name:`Blackrock`,
      img:`company4.png`
    },
    {
      name:`Amazon`,
      img:`company5.jpg`
    }
  ]

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
                Building Connections That Empower Your Future
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                At Wire Wave Information Networks, we combine cutting-edge
                technology with unparalleled service to deliver infrastructure
                solutions that drive success. Let us connect your vision to
                endless possibilities.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-white gap-4 items-center justify-center">
            {featuresData.map(({ title, description, image, href }) => (
              <FlipCards
                key={title}
                title={title}
                description={description}
                image={image}
                href={href}
              />
            ))}
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
                Experience Excellence with Every Interaction
              </Typography>
              <Typography
                className="mb-8 font-normal text-blue-gray-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Simplify your user experience with intuitive tooltips and
                popovers. Easily integrate them with JavaScript for seamless
                functionality. Kickstart your projects with our pre-built
                pages—customize text and images to make them uniquely yours
              </Typography>
              <Button variant="filled">read more</Button>
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
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder=""
                >
                  <Image
                    alt="Card Image"
                    src={card2}
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
                    Enterprise Solutions, Redefined
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Delivering Top-Notch Services for Unstoppable Growth
                  </Typography>
                  <Typography
                    className="font-normal text-blue-gray-500"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Just like the Arctic Ocean’s resilience through seasons, our
                    services adapt and evolve to meet your business needs. Trust
                    us to provide innovative solutions that stand the test of
                    time.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-10 pb-20 lg:pt-20">
        <div className="container mx-auto">
          <PageTitle section="Our Clients" heading="Loved by many. Trusted by all.">
            Our clients are our biggest supporters. Would you like to know what
            they think about us? Take a look for yourself in the testimonials
            below.
          </PageTitle>
          <div className="mt-16 relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              grabCursor={true}
              mousewheel={true}
              className="mySwiper"
            >
              {companies.map((item, ind) => (
                <SwiperSlide key={ind} className="pt-14">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <img
                      src={`/images/companies/${item.img}`}
                      alt={item.name}
                      className="h-60 w-60 object-contain"
                    />
                    {/* <p className="text-gray-700 text-xl font-semibold spacing-2">{item.name}</p> */}
                  </div>
                </SwiperSlide>
              ))}
              <div className="absolute top-[4%] right-[4%] flex-row gap-2 z-10 hidden lg:flex pt-[20px]">
                <div className="swiper-button-prev !w-max">
                  <ArrowLeftCircleIcon className="h-8 w-8" />
                </div>
                <div className="swiper-button-next !w-max">
                  <ArrowRightCircleIcon className="h-8 w-8" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <div className="mt-8 flex flex-wrap items-center lg:mt-32">
        <div className="mx-auto flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
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
              <Image alt="Card Image" src={card1} className="h-full w-full" />
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
                Empowering Innovation at Every Step
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
                Enhance user interactions with effortless tooltips and popovers,
                powered by simple JavaScript integrations. Get started quickly
                with our pre-designed pages—customizable to fit your unique
                vision and ready to deploy with ease.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="mx-auto mt-12 w-full px-4 lg:-mt-8 md:w-5/12">
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
            Partner with Us for Seamless Experiences
          </Typography>
          <Typography
            className="mb-8 font-normal text-blue-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Enhance user interactions with effortless tooltips and popovers,
            powered by simple JavaScript integrations. Get started quickly with
            our pre-designed pages—customizable to fit your unique vision and
            ready to deploy with ease.
          </Typography>
          <Button variant="filled">read more</Button>
        </div>
      </div>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle
            section="Business Growth"
            heading="Experienced & skilled IT services all over Canada"
          >
            We are a leading Canada-based provider of IT and data services for
            small and medium-sized businesses. Our solutions are affordable,
            high-quality, and technically robust, designed to meet all your
            business needs. Backed by a skilled and dependable team, we serve as
            your trusted support partner.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2"
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
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full mt-12 lg:w-5/12"
          >
            <div className="mb-8 flex gap-8 flex-wrap">
              <Input
                variant="outlined"
                size="lg"
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin=""
              />
              <Input
                variant="outlined"
                size="lg"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin=""
              />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              required
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder=""
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                     Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin=""
            />
            <Button
              variant="gradient"
              size="lg"
              className="mt-8"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {feedback && (
              <Typography
                variant="small"
                color={feedback.includes("success") ? "green" : "red"}
                className="mt-4 text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {feedback}
              </Typography>
            )}
          </form>
        </div>
      </section>

    </>
  );
}

export default Home;
