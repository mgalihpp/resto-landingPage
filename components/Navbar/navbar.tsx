"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignInDialog from "./sign-in-dialog";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./drawer";
import DrawerData from "./drawer-data";

interface NavigationItems {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItems[] = [
  { name: "Home", href: "#home-section", current: false },
  { name: "About us", href: "#about-section", current: false },
  { name: "Recipe", href: "#cook-section", current: false },
  { name: "Gallery", href: "#gallery-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
          <div className="relative flex h-12 items-center sm:h-20">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <Link
                href="/"
                className="flex flex-shrink-0 items-center"
              >
                <div className="relative h-9 w-9 sm:h-14 sm:w-14">
                  <Image src="/images/Logo/Logo.svg" fill alt="logo" />
                </div>

                <span className="ml-4 text-2xl font-semibold text-black">
                  Chef&apos;s Kitchen
                </span>
              </Link>

              {/* LINKS */}

              <div className="hidden items-center lg:flex">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={classNames(
                        item.current
                          ? "text-black"
                          : "navLinks hover:opacity-100",
                        " space-links rounded-md px-3 py-4 text-lg font-normal opacity-50 hover:text-black",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden gap-6 lg:flex">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/Navbar/phone.svg"
                    alt="phone image"
                    width={19}
                    height={19}
                  />
                  <p className="text-lg font-medium">+1(909) 235-9814</p>
                </div>
                <SignInDialog />
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block size-6 cursor-pointer"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <DrawerData />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
