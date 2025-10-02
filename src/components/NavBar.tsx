"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Simple navigation items – adjust to match your Figma design.
const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastYRef.current;
          // Only toggle after a small threshold to avoid jitter on trackpads
            if (Math.abs(delta) > 6) {
              if (delta > 0 && currentY > 48) {
                // scrolling down
                setHidden(true);
              } else {
                // scrolling up
                setHidden(false);
              }
            }
          lastYRef.current = currentY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/50 text-gray-200 transition-transform duration-300 will-change-transform ${hidden ? "-translate-y-full" : "translate-y-0"}`}
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
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
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
