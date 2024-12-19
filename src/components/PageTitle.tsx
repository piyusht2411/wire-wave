import React, { ReactNode } from "react";
import { Typography } from "@material-tailwind/react";

interface PageTitleProps {
  section: string;
  heading: string;
  children: ReactNode;
}

function PageTitle({ section, heading, children }: PageTitleProps) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography
        variant="lead"
        className="font-semibold"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder=""
      >
        {section}
      </Typography>
      <Typography
        variant="h2"
        color="blue-gray"
        className="my-3"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder=""
      >
        {heading}
      </Typography>
      <Typography
        variant="lead"
        className="text-blue-gray-500"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder=""
      >
        {children}
      </Typography>
    </div>
  );
}

export default PageTitle;
