import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://facebook.com",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://instagram.com",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/twitter.svg",
    link: "https://twitter.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About", "Careers", "Mobile", "Blog", "How we work?"],
  },
  {
    id: 2,
    section: "Contact",
    link: ["Help/FAQ", "Press", "Affiliates", "Hotel owners", "Partners"],
  },
  {
    id: 3,
    section: "More",
    link: ["Recipe", "Chef", "Food", "Support"],
  },
];

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN 1 */}

        <div className="sm:col-span-6 lg:col-span-5">
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="/images/Logo/Logo.svg"
              alt="logo"
              width={56}
              height={56}
            />
            <span className="ml-4 text-2xl font-semibold text-black">
              Chef&apos;s Kicthen
            </span>
          </Link>
          <h3 className="mb-4 mt-5 text-xs font-medium text-textbl lg:mb-16">
            Open an account in minutes, get full financial <br /> control for
            much longer.
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="textbase footer-icons flex size-10 items-center justify-center rounded-full bg-white shadow-xl hover:bg-pink">
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={item.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN 2 */}
        {products.map((product) => (
          <div className="sm:col-span-2" key={product.id}>
            <p className="mb-9 text-xl font-semibold text-black">
              {product.section}
            </p>
            <ul>
              {product.link.map((link, index) => (
                <li key={link} className="mb-5">
                  <Link
                    href="/"
                    className="space-links mb-6 text-base font-normal text-footerlinks"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ALL RIGHT REVERSED */}

      <div className="border-t-bordertop items-center justify-between border-t py-10 md:flex">
        <h4 className="text-center text-sm font-normal text-darkgrey md:text-start">
          &copy;2024 - Chef
        </h4>
        <div className="mt-5 flex justify-center gap-5 md:mt-0 md:justify-start">
          <h4 className="text-dark-grey text-sm font-normal">
            <Link href="/" target="_blank">
              Privacy Policy
            </Link>
          </h4>
          <div className="bg-bordertop h-5 w-0.5"></div>
          <h4 className="text-dark-grey text-sm font-normal">
            <Link href="/" target="_blank">
              Terms & Conditions
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
