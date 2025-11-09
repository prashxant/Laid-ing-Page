"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "./container";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Links = [
  {
    name: "Feature",
    href: "/feature",
  },
  {
    name: "Product",
    href: "/product",
  },
  {
    name: "Social",
    href: "/social",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <Mobilenavbar />
    </div>
  );
};

export const Mobilenavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex justify-between px-4 py-2 md:hidden">
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-4" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
              background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              background: "rgba(255,255,255,0.5)",
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-50 h-full w-screen px-4 py-2"
          >
            <div className="flex justify-between">
              <Logo />
              <button
                className="absolute top-2 right-2"
                onClick={() => setOpen(false)}
              >
                <IconX />
              </button>
            </div>
            <div className="my-10 flex flex-col gap-6 text-2xl">
              {Links.map((link, idx) => (
                <motion.div
                initial={{
                  opacity:0,
                  x:-4
                }}
                animate={{
                  opacity:1,
                  x:0
                }}
                transition={{
                  duration:0.2,
                  delay: idx * 0.1
                }}
                key={idx + link.name}>
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-2xl font-medium text-neutral-600 dark:text-neutral-800"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="hidden items-center justify-between p-4 lg:flex">
      <Logo />
      <div className="flex items-center gap-4">
        {Links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-800"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="rounded-md px-4 py-2 text-sm">
          Login
        </Link>
        <Button className="rounded-md bg-black px-4 py-2 text-sm text-white">
          Signup
        </Button>
      </div>
    </Container>
  );
};
