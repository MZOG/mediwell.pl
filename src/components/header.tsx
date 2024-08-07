"use client";
import { cn } from "@/lib/utils";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const products = [
  {
    name: "Dla lekarzy",
    href: "/uslugi/dla-lekarzy",
    icon: ChartPieIcon,
  },
  {
    name: "Dla centrów medycznych",
    href: "/uslugi/dla-centrow-medycznych",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Dla szpitali",
    href: "/uslugi/dla-szpitali",
    icon: ChartPieIcon,
  },
  {
    name: "Dla dentystów",
    href: "/uslugi/dla-dentystow",
    icon: FingerPrintIcon,
  },
  {
    name: "Dla fizjoterapeutów",
    href: "/uslugi/dla-fizjoterapeutow",
    icon: SquaresPlusIcon,
  },
  {
    name: "Dla psychiatrów i psychoterapeutów",
    href: "/uslugi/dla-psychiatrow-i-psychoterapeutow",
    icon: ArrowPathIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <header>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between py-6 px-5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-xl md:text-2xl leading-none font-semibold"
          >
            <span className="sr-only">Your Company</span>
            Medi<span className="text-secondary">well</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className={cn("text-[15px] leading-6 text-primary")}>
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button
              className={cn(
                "flex items-center focus:outline-none gap-x-1 text-[15px] leading-6 text-primary"
              )}
            >
              Usługi
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-primary"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg focus:outline-none">
                {({ close }) => (
                  <div className="p-4">
                    {products.map((item) => (
                      <Link
                        onClick={() => {
                          close();
                        }}
                        href={item.href}
                        key={item.name}
                        className={cn(
                          "group cursor-pointer relative flex text-primary items-center gap-x-6 rounded-lg p-2 text-[15px] leading-6 hover:bg-gray-50"
                        )}
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-secondary"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <p className="block group-hover:text-secondary">
                            {item.name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/realizacje"
            className={cn("text-[15px] leading-6 text-primary font-normal")}
          >
            Realizacje
          </Link>
          <Link
            href="/o-nas"
            className={cn("text-[15px] leading-6 text-primary")}
          >
            O nas
          </Link>
          <Link
            href="/kontakt"
            className={cn("text-[15px] leading-6 text-primary")}
          >
            Kontakt
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex items-center gap-2 lg:flex-1 lg:justify-end">
          <Button asChild variant="outline">
            <Link href="/zostan-klientem">Darmowa wycena</Link>
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#EFEFEF] px-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/"
              className="-m-1.5 p-1.5 text-lg font-semibold leading-none"
            >
              <span className="sr-only">Your Company</span>
              Medi<span className="text-secondary">well</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-secondary hover:bg-gray-50"
                >
                  Start
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open, close }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-secondary hover:bg-gray-50">
                        Usługi
                        <ChevronDownIcon
                          className={cn(
                            open && "rotate-180",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            onClick={() => close()}
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-[15px] leading-7 text-secondary hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-secondary hover:bg-gray-50"
                >
                  Portfolio
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/o-nas"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-secondary hover:bg-gray-50"
                >
                  O nas
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/kontakt"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-secondary hover:bg-gray-50"
                >
                  Kontakt
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/zostan-klientem"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-secondary hover:bg-gray-50"
                >
                  Zostań klientem
                </Link>
              </div>
              <div className="py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="mailto:kontakt@mediwell.pl"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-secondary hover:bg-gray-50"
                >
                  kontakt@mediwell.pl
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="tel:739907919"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-secondary hover:bg-gray-50"
                >
                  +48 739 907 919
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
