import React from "react";
import ArrowImage from "@/assests/img/arrow.png";
import Image from "next/image";
import Link from "next/link";

const FlipBoxComponent = ({ title, description, image, href }: any) => {
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
            <svg
              className="bg-white bg-opacity-50 rounded-lg mt-4"
              xmlns="http://www.w3.org/2000/svg"
              width="90px"
              height="90px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                fill="#000000"
              />
            </svg>
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
          <Link href={href} className="mt-2 py-4 px-4 bg-white text-black rounded-lg shadow-xl font-semibold">Know More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBoxComponent;
