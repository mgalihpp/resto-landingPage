"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

// corousel

interface CorouselType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: CorouselType[] = [
  {
    profession: "Senior Chef",
    name: "Shoo Thar Mien",
    imgSrc: "/images/Expert/boyone.svg",
  },
  {
    profession: "Junior Chef",
    name: "Shoo Thar Mien",
    imgSrc: "/images/Expert/girl.png",
  },
  {
    profession: "Junior Chef",
    name: "Shoo Thar Mien",
    imgSrc: "/images/Expert/boytwo.svg",
  },
  {
    profession: "Junior Chef",
    name: "Shoo Thar Mien",
    imgSrc: "/images/Expert/girl.png",
  },
  {
    profession: "Junior Chef",
    name: "Shoo Thar Mien",
    imgSrc: "/images/Expert/girl.png",
  },
  {
    profession: "Junior Chef",
    name: "Shoo Thar Mien",
    imgSrc: "/images/Expert/girl.png",
  },
];

const Expert = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-darkpink py-10 sm:py-20">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <h2 className="ls-51 mb-3 text-lg font-normal uppercase tracking-widest text-pink">
              expert chefs
            </h2>
          </Fade>
          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <h3 className="text-3xl font-semibold text-black lg:text-5xl">
              Let&apos;s meet the expert.
            </h3>
          </Fade>
        </div>

        <Slider {...settings}>
            {postData.map((post, index) => (
                <div key={index}>
                    <div className="m-3 py-14 my-10 text-center">
                        <div className="relative">
                            <Image 
                            src={post.imgSrc}
                            alt={post.name}
                            width={362}
                            height={262}
                            className="inline-block m-auto"
                            />
                            <div className="absolute top-[50%] right-[2%]">
                                <Image 
                                src='/images/Expert/Linkedin.svg'
                                alt="linkedin"
                                width={220}
                                height={120}
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-lightblack">
                                {post.name}
                            </h3>
                            <h4 className="text-lg font-normal text-lightblack pt-4 pb-2 opacity-50">
                                {post.profession}
                            </h4>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Expert;
