"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import { portfolioItems } from "@/lib/portfolio";
import { www } from "@/lib/www";

const portfolioCTA = [
  {
    name: "Więcej realizacji",
    href: "/realizacje",
    icon: PlayCircleIcon,
  },
];

const callsToAction = [
  {
    name: "Darmowa konsultacja",
    href: "/darmowa-konsultacja",
    icon: PlayCircleIcon,
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-5"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="font-bold text-lg md:text-[17px]">
              <span className="sr-only">Your Company</span>
              Medi<span className="text-main">well</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              {({ close }) => (
                <>
                  <PopoverButton className="flex outline-none items-center gap-x-1 text-sm/6 font-medium">
                    Strony internetowe
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </PopoverButton>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <PopoverPanel
                      transition
                      className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                      <div className="p-4">
                        {www.map((item) => (
                          <div
                            onClick={() => close()}
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                          >
                            {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                aria-hidden="true"
                                className="size-6 text-gray-600 group-hover:text-main"
                              />
                            </div> */}
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-medium"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              {/* <p className="mt-1 text-gray-600">
                                {item.description}
                              </p> */}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className=" bg-gray-50">
                        {callsToAction.map((item) => (
                          <Link
                            onClick={() => close()}
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-medium hover:bg-gray-100"
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-5 flex-none text-gray-400"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative hidden">
              {({ close }) => (
                <>
                  <PopoverButton className="flex outline-none items-center gap-x-1 text-sm/6 font-medium">
                    Realizacje
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </PopoverButton>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <PopoverPanel
                      transition
                      className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                      <div className="p-4">
                        {portfolioItems.map((item) => (
                          <div
                            onClick={() => close()}
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                          >
                            {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              aria-hidden="true"
                              className="size-6 text-gray-600 group-hover:text-main"
                            />
                          </div> */}
                            <div className="flex-auto">
                              <Link
                                href={item.portfolioDescription}
                                className="block font-medium"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-gray-600 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                        {portfolioCTA.map((item) => (
                          <Link
                            onClick={() => close()}
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-medium hover:bg-gray-100"
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-5 flex-none text-gray-400"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/blog" className="text-sm/6 font-medium">
              Blog
            </Link>
            <Link href="/kontakt" className="text-sm/6 font-medium">
              Kontakt
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/darmowa-konsultacja" className="text-sm/6 font-medium">
              Darmowa konsultacja
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-5 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="font-bold text-lg md:text-[17px] sm:hidden"
              >
                <span className="sr-only">Your Company</span>
                Medi<span className="text-main">well</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md text-gray-700 self-end ml-auto"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 px-5 pr-3.5 pl-3 text-base font-medium hover:bg-gray-50">
                      Strony internetowe
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...www, ...callsToAction].splice(0, 6).map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-medium hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3 hidden">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 px-5 pr-3.5 pl-3 text-base font-medium hover:bg-gray-50">
                      Ralizacje
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...portfolioItems, ...portfolioCTA].map((item) => (
                        <DisclosureButton
                          onClick={() => setMobileMenuOpen(false)}
                          key={item.name}
                          as="a"
                          // @ts-expect-error nie ma portfolioDescription w portfolioCTA
                          href={item.portfolioDescription}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-medium hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/kontakt"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-gray-50"
                  >
                    Kontakt
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/darmowa-konsultacja"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium hover:bg-gray-50"
                  >
                    Darmowa konsultacja
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
