import React, { ReactNode } from "react";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

type CardColor =
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";

interface FeatureCardProps {
  color?: CardColor;
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

function FeatureCard({
  color = "blue",
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card
      className="rounded-lg shadow-lg shadow-gray-500"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placeholder=""
    >
      <CardBody
        className="px-8 text-center"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder=""
      >
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder=""
        >
          {icon}
        </IconButton>
        <Typography
          variant="h5"
          className="mb-2"
          color="blue-gray"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder=""
        >
          {title}
        </Typography>
        <Typography
          className="font-normal text-blue-gray-600"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder=""
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
