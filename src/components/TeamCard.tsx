import React, { ReactNode } from "react";
import { Card, Avatar, Typography } from "@material-tailwind/react";
import { StaticImageData } from "next/image";

interface TeamCardProps {
  img: StaticImageData;
  name: string;
  position?: string;
  socials?: ReactNode;
}

function TeamCard({ img, name, position = "", socials = null }: TeamCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="text-center"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placeholder=""
    >
      <Avatar
        src={img.src}
        alt={name}
        size="xxl"
        variant="rounded"
        className="h-full w-full shadow-lg shadow-gray-500/25"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder=""
      />
      <Typography
        variant="h5"
        color="blue-gray"
        className="mt-6 mb-1"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder=""
      >
        {name}
      </Typography>
      {position && (
        <Typography
          className="font-bold text-blue-gray-500"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder=""
        >
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  );
}

export default TeamCard;
