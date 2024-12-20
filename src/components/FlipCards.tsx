import React from "react";

const FlipBoxComponent = ({
  title,
  description,
  image,
}: any) => {
  return (
    <div className="box-item">
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

            <img
              src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
              alt=""
              className="flip-box-img"
            />
          </div>
        </div>
        <div
          className="flip-box-back text-center"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="inner color-white flex flex-col justify-center items-center">
            <p className="bg-black/70 text-xl p-1.5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBoxComponent;
