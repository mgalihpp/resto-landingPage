"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pb-24">
        <div className="grid grid-cols-1 space-x-1 lg:grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
              <h1 className="mb-5 text-center text-4xl font-semibold text-lightgrey lg:text-start lg:text-7xl">
                Cook anything <br /> with experts
              </h1>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
              <p className="mb-10 text-center font-normal text-grey lg:text-start lg:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
                <br /> accusantium doloremque laudantium, totam
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce
            >
              <div className="justify-center align-middle md:flex lg:justify-start">
                <button className="mr-6 w-full rounded-full bg-pink px-6 py-5 text-xl font-medium text-white md:w-auto lg:px-14">
                  <Link href="#cook-section">Let&apos;s Cook</Link>
                </button>
                <button className="mt-5 flex w-full items-center justify-center rounded-full border border-pink px-10 py-5 text-xl font-medium text-pink hover:bg-pink hover:text-white md:mt-0 md:w-auto">
                  <Link href="#about-section">Explore now</Link>
                </button>
              </div>
            </Fade>
          </div>
          
          <div className="col-span-6 flex justify-center relative">
            <div className="flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute">
              <Image
                src={"/images/Banner/pizza.svg"}
                alt="pizza-image"
                width={68}
                height={68}
              />
              <p className="text-lg font-normal">
                More than 500+ <br /> recipes.
              </p>
            </div>
            <Image
              src="/images/Banner/banner-image.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
