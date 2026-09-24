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
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold lg:text-xl">
          <Image src="/logo.jpg" alt="AfriFoundry logo" width={30} height={30} className="rounded lg:h-8 lg:w-8" />
          AfriFoundry
        </Link>

        <div
          className={`${open ? "flex" : "hidden"} fixed left-0 right-0 top-16 flex-col gap-1 border-b border-line bg-bg p-6 md:static md:flex md:flex-row md:items-center md:gap-0.5 md:border-none md:bg-transparent md:p-0 lg:gap-1`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-ink-dim transition-colors hover:text-ink lg:px-3 lg:text-[0.95rem] xl:text-base"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://afri3b.afrifoundry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 mt-2 whitespace-nowrap rounded-md bg-gold px-4 py-2 text-sm font-semibold text-[#17140c] md:ml-2 md:mt-0 lg:text-[0.95rem] xl:text-base"
          >
            Try Afri3B →
          </a>
        </div>

        <div className="flex items-center gap-2">
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
