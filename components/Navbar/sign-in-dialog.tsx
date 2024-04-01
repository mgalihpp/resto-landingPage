"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const SignInDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="hidden md:block">
          <button
            type="button"
            className="navbutton flex justify-end rounded-full bg-bgpink px-4 py-4 text-xl font-medium text-pink hover:bg-pink hover:text-white lg:px-8"
            onClick={openModal}
          >
            Sign in
          </button>
        </div>
      </div>

      <Transition as={Fragment} show={isOpen} appear>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <Link
                          href="/"
                          className="flex items-center justify-center"
                        >
                          <Image
                            src="/images/Logo/Logo.svg"
                            alt="logo"
                            width={46}
                            height={46}
                          />
                          <span className="ml-4 text-2xl font-semibold text-black">
                            Chef&apos;s Kitchen
                          </span>
                        </Link>
                        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-lightgrey">
                          Sign in to your account
                        </h2>
                      </div>
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email-address"
                              autoComplete="email"
                              required
                              placeholder="Email address"
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div>
                            <label htmlFor="password" className="sr-only">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              autoComplete="current-password"
                              required
                              placeholder="Password"
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="remember-me"
                              name="remember-me"
                              className="h-4 w-4 rounded border-lightgrey text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <Link
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="group relative w-full justify-center rounded-md border border-transparent bg-pink px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="size-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span>
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="hover:bg-blue--200 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignInDialog;
