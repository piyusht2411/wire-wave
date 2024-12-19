"use client";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import PatternImage from "@/assests/img/pattern.png";
import Image from "next/image";
import TwitterLogo from "@/assests/img/twitter-logo.svg";
import GoogleLogo from "@/assests/img/google-logo.svg";

function SignUp() {
  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <Image
          src={PatternImage}
          className="h-full w-full object-cover rounded-3xl"
          alt="pattern"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography
            variant="h2"
            className="font-bold mb-4"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder=""
          >
            Join Us Today
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder=""
          >
            Enter your email and password to register.
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder=""
            >
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin=""
            />
          </div>
          <Checkbox
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder=""
            crossOrigin=""
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder=""
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register Now
          </Button>

          <div className="space-y-4 mt-8">
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md"
              fullWidth
            >
              <GoogleLogo />
              <span>Sign in With Google</span>
            </Button>
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md"
              fullWidth
            >
              <TwitterLogo />
              <span>Sign in With Twitter</span>
            </Button>
          </div>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            placeholder=""
          >
            Already have an account?
            <Link href="/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
