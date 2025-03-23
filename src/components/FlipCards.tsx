import React from "react";
import ArrowImage from "@/assests/img/arrow.png";
import Image from "next/image";

const FlipBoxComponent = ({ title, description, image }: any) => {
  return (
    <div className="box-item shadow-lg">
      <div className="flip-box">
        <div
          className="flip-box-front text-center"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="inner flex flex-col justify-center items-center color-white">
            <h3 className="flip-box-header text-2xl leading-10 p-1.5 bg-black/60 w-fit rounded-lg">
              {title}
            </h3>
            <Image src={ArrowImage} alt="" className="flip-box-img w-3/5" />
          </div>
        </div>
        <div
          className="flip-box-back text-center"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="inner color-white flex flex-col justify-center items-center">
            <p className="bg-black/70 text-xl p-1.5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBoxComponent;
