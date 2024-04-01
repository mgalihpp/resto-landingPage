import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        "fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out" +
        (isOpen
          ? " translate-x-0 opacity-100 transition-opacity duration-500"
          : " -translate-x-full opacity-0 transition-all delay-500")
      }
    >
      <section
        className={
          "delay-400 absolute left-0 h-full w-[340px] max-w-lg transform bg-white shadow-xl transition-all duration-500 ease-in-out" +
          (isOpen ? " translate-x-0" : " -translate-x-full")
        }
      >
        <article className="relative flex h-full w-[340px] max-w-lg flex-col space-y-6 pb-10">
          <header className="flex items-center justify-between px-4 py-4">
            <Link
              href="/"
              className="flex flex-shrink-0 items-center"
            >
              <Image
                src="/images/Logo/Logo.svg"
                alt="logo"
                width={36}
                height={36}
              />
              <span className="ml-4 text-2xl font-semibold text-black">
                Chef&apos;s Kicthen
              </span>
            </Link>

            <XMarkIcon
              className="block size-6"
              onClick={() => setIsOpen(false)}
            />
          </header>
          <div onClick={() => setIsOpen(false)}>{children}</div>
        </article>
      </section>
      <section
        className="h-full w-screen cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
};

export default Drawer;
