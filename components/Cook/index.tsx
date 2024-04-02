"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Cook = () => {
  return (
    <div className="relative" id="cook-section">
      <div className="mx-auto max-w-7xl px-6 sm:pb-24 lg:pt-20">
        <div className="absolute bottom-[-18%] right-0 hidden lg:block">
          <Image
            src="/images/Cook/burger.png"
            alt="burger image"
            width={463}
            height={622}
          />
        </div>
        <div className="my-16 grid grid-cols-1 space-x-5 lg:grid-cols-12">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/Cook/cook.png"
              alt="chef"
              width={636}
              height={808}
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
              <h2 className="ls-51 mb-3 text-start text-lg font-normal uppercase text-pink">
                cook with us
              </h2>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
              <h3 className="text-start text-3xl font-semibold text-black lg:text-5xl">
                Cooking together with the expert.
              </h3>
            </Fade>
            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce
            >
              <p className="mb-10 mt-2 text-start font-normal text-grey md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem{" "}
              </p>
              <p className="mb-10 mt-1 text-start font-normal text-grey md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium....
              </p>
              <div className="flex justify-center align-middle md:justify-start">
                <button className="mr-6 rounded-full bg-pink/90 hover:bg-pink px-6 py-5 text-xl font-medium text-white lg:px-10">
                  Learn more
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;
