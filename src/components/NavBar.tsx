"use client";
import Image from "next/image";
import Link from "next/link";

// Simple navigation items – adjust to match your Figma design.
const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/40 backdrop-blur-md border-b border-black/10 dark:border-white/10"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3">
        <Link href="/" className="flex items-center gap-2 select-none">
          <Image
            src="/TRIAD.png"
            alt="Triad logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-semibold tracking-wide">TRIAD</span>
        </Link>
        <ul className="ml-auto hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
