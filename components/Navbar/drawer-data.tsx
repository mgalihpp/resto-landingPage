import Link from "next/link";
import React from "react";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home-section", current: false },
  { name: "About us", href: "#about-section", current: false },
  { name: "Recipe", href: "#cook-section", current: false },
  { name: "Gallery", href: "#gallery-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DrawerData = () => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-md">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={classNames(
                  item.current
                    ? "text-black"
                    : "hover:opacity-100",
                  " block rounded-md py-2 text-base font-medium opacity-50 hover:text-black",
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>

            <button className="navbutton flex w-full justify-center rounded-full bg-bgpink px-4 py-3 text-base font-medium text-pink hover:text-white lg:px-8">
              Sign in
            </button>
            <button className="navbutton flex w-full justify-center rounded-full border border-bgpink bg-transparent px-4 py-3 text-base font-medium text-pink hover:bg-pink hover:text-white lg:px-8">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
