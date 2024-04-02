"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="relative">
      <div className="mx-auto mt-48 max-w-2xl rounded-lg bg-pink md:max-w-7xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-12 xl:gap-x-8">
          {/* COLUMN 1 */}
          <div className="col-span-7">
            <div className="m-10 lg:my-20 lg:ml-32">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce
              >
                <h3 className="ls-51 mb-3 text-lg font-normal uppercase text-white">
                  Newsletter
                </h3>
              </Fade>
              <Fade
                direction="up"
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce
              >
                <h2 className="mb-8 text-3xl font-semibold text-white lg:text-5xl">
                  Subscribe our <br /> Newsletter.
                </h2>
              </Fade>

              <div>
                <Fade
                  direction="up"
                  delay={1200}
                  cascade
                  damping={1e-1}
                  triggerOnce
                >
                  <div className="shadow-fi relative flex flex-row-reverse rounded-full text-white focus-within:text-white">
                    <input
                      type="email"
                      name="email"
                      id="email-address"
                      className="w-full rounded-full py-6 pl-8 pr-[87px] text-sm text-black focus:text-black focus:outline-none sm:py-8"
                      placeholder="@ Enter your email address"
                      autoComplete="off"
                    />
                    <div className="absolute inset-y-0 right-0 flex justify-center pr-2">
                      <button
                        type="submit"
                        className="focus:shadow-outline p-1 focus:outline-none"
                      >
                        <Image
                          src={"/images/Newsletter/arrow.svg"}
                          alt="inputicon"
                          width={57}
                          height={71}
                        />
                      </button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="relative col-span-5 hidden md:block">
            <div>
              <Image
                src={"/images/Newsletter/soup.svg"}
                alt="soup-image"
                width={626}
                height={602}
                className="-mt-24"
              />
            </div>
            <div className="absolute top-[78%]">
              <Image
                src={"/images/Newsletter/onion.svg"}
                alt="onion-image"
                width={300}
                height={122}
              />
            </div>
            <div className="absolute right-[-23%] top-[30%] hidden lg:block">
              <Image
                src={"/images/Newsletter/lec.svg"}
                alt="lettuce-image"
                width={300}
                height={122}
              />
            </div>
            <div className="absolute bottom-[10%] left-[0%]">
              <Image
                src={"/images/Newsletter/yellow.svg"}
                alt="yellow-image"
                width={59}
                height={59}
              />
            </div>
            <div className="absolute bottom-[20%] right-[20%]">
              <Image
                src={"/images/Newsletter/blue.svg"}
                alt="blue-image"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
