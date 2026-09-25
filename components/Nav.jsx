"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/product", label: "Product" },
  { href: "/partners", label: "For Partners" },
  { href: "/users", label: "Users" },
  { href: "/investors", label: "Investors" },
  { href: "/developers", label: "Developers" },
  { href: "/contribute", label: "Contribute" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const root = document.documentElement;
    const isLight = root.classList.contains("light");
    if (isLight) {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("afrifoundry-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("afrifoundry-theme", "light");
    }
  }

  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 lg:h-[72px] lg:max-w-6xl xl:max-w-7xl xl:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display text-lg font-bold lg:text-xl">
          <Image src="/logo.jpg" alt="AfriFoundry logo" width={30} height={30} className="rounded lg:h-8 lg:w-8" />
          AfriFoundry
        </Link>

        <div
          className={`${open ? "flex" : "hidden"} fixed left-0 right-0 top-16 flex-col gap-1 border-b border-line bg-bg p-6 md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-end md:gap-1 md:border-none md:bg-transparent md:p-0 lg:gap-2.5 xl:gap-4`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-ink-dim transition-colors hover:text-ink lg:px-1 lg:text-[0.95rem] xl:text-base"
            >
              {l.label}
            </Link>
          ))}

          <a
            href="https://afri3b.afrifoundry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gold px-4 py-2 text-sm font-semibold text-[#17140c] transition-transform hover:-translate-y-0.5 md:ml-3 md:mt-0 lg:ml-4 lg:px-5 lg:py-2.5 lg:text-[0.95rem] xl:text-base"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            Try Afri3B
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-[34px] w-[34px] rounded-md border border-line text-sm lg:h-9 lg:w-9 lg:text-base"
          >
            ◐
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="text-xl md:hidden"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
