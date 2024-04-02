"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface cardDataProps {
  imgSrc: string;
  heading: string;
  subheading: string;
  link: string;
}

const cardData: cardDataProps[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Menu variations",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
    link: "Learn more",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Cooking warw",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
    link: "Learn more",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Best chef",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
    link: "Learn more",
  },
  {
    imgSrc: "/images/Features/featureFour.svg",
    heading: "Fast food",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
    link: "Learn more",
  },
];

const Features = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-40" id="about-section">
        <div className="mb-14 text-center">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <h3 className="ls-51 mb-3 text-lg font-normal uppercase text-pink">
              Features
            </h3>
          </Fade>
          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <p className="text-3xl font-semibold text-lightgrey lg:text-5xl">
              Get a many of interesting <br /> features.
            </p>
          </Fade>
        </div>

        <div className="mt-32 grid gap-x-5 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
          <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce>
            {cardData.map((card) => (
              <Card
                key={card.heading}
                heading={card.heading}
                imgSrc={card.imgSrc}
                link={card.link}
                subheading={card.subheading}
              />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<cardDataProps> = ({
  imgSrc,
  heading,
  link,
  subheading,
}) => {
  return (
    <div className="card-b relative rounded-3xl p-8">
      <div className="absolute left-[0%] top-[-50%] flex justify-center rounded-full sm:top-[-40%] md:top-[-55%] lg:top-[-45%]">
        <Image src={imgSrc} alt={imgSrc} width={510} height={10} />
      </div>
      <h3 className="mt-16 text-center text-2xl font-semibold text-black">
        {heading}
      </h3>
      <p className="mt-2 text-center text-lg font-normal text-black text-opacity-50">
        {subheading}
      </p>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="hover-underline mt-2 text-center text-lg font-medium text-pink"
        >
          {link} <ChevronRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default Features;
