"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import PageTitle from "@/components/PageTitle";
import { toast } from "sonner";
// import Image from "next/image";
// import contactBanner from "@/assests/img/contact-banner.jpg";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        toast.success(
          "Message sent successfully to your email! We’ll follow up soon."
        );
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        toast.error(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('../assests/img/contact-us-banner.jpg')] bg-cover bg-center" />
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
                Contact Us
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Ready to connect? Reach out to Wire Wave Information Networks
                for expert solutions and unparalleled support. We’re here to
                help you build the future of your business.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <section className="mt-8 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <PageTitle
            section="Get in Touch"
            heading="We’d Love to Hear From You"
          >
            Whether you have questions, need a quote, or want to discuss your
            next project, our team is ready to assist. Fill out the form
            below—we’ll send a confirmation to your email and get back to you
            within 24 hours.
          </PageTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex gap-4 flex-wrap">
                    <Input
                      variant="outlined"
                      size="lg"
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
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
                      placeholder="Your Email"
                      type="email"
                      required
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      crossOrigin=""
                    />
                  </div>
                  {/* <Input
                    variant="outlined"
                    size="lg"
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin=""
                  /> */}
                  <Textarea
                    variant="outlined"
                    size="lg"
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
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
                        I agree to the
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
                    fullWidth
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardBody>
            </Card>
            <div className="flex flex-col gap-8">
              <Card
                color="transparent"
                shadow={false}
                className="text-blue-gray-900"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <CardBody
                  className="p-0"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder=""
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-3 text-center shadow-lg">
                      <EnvelopeIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-bold"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Email Us
                      </Typography>
                      <Typography
                        className="font-normal text-blue-gray-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        info@wirewave.com
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card
                color="transparent"
                shadow={false}
                className="text-blue-gray-900"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <CardBody
                  className="p-0"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder=""
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-3 text-center shadow-lg">
                      <PhoneIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-bold"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Call Us
                      </Typography>
                      <Typography
                        className="font-normal text-blue-gray-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        +1 (800) 555-1234
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card
                color="transparent"
                shadow={false}
                className="text-blue-gray-900"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <CardBody
                  className="p-0"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder=""
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-3 text-center shadow-lg">
                      <MapPinIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-bold"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Visit Us
                      </Typography>
                      <Typography
                        className="font-normal text-blue-gray-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        123 Network Lane, Toronto, ON M5V 2T6, Canada
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card
                color="transparent"
                shadow={false}
                className="text-blue-gray-900"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                <CardBody
                  className="p-0"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder=""
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-gray-900 p-3 text-center shadow-lg">
                      <ClockIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-bold"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Hours
                      </Typography>
                      <Typography
                        className="font-normal text-blue-gray-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Monday - Friday: 9 AM - 5 PM <br />
                        24/7 Support Available
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-gray-900 text-white">
        <div className="container mx-auto text-center">
          <Typography
            variant="h2"
            className="mb-6 font-bold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Let’s Build Your Future Together
          </Typography>
          <Typography
            className="mx-auto mb-12 max-w-3xl opacity-80"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Have a question or ready to start? Contact Wire Wave today and let
            us connect your vision to endless possibilities.
          </Typography>
          <Button variant="filled" color="white" size="lg">
            Send Us a Message
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
