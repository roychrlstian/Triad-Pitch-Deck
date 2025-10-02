"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface SlideData {
  id: string;
  file: string;
  alt: string;
  priority?: boolean;
  overlay?: boolean;
}

interface Props extends SlideData {
  children?: React.ReactNode;
}

export default function SlideSection({ id, file, alt, priority, overlay = true, children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // IntersectionObserver for enter animation
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.45 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`snap-panel relative h-screen w-full overflow-hidden fade-panel mb-[10px] last:mb-0 ${
        visible ? "is-visible" : ""
      }`}
    >
      <Image
        src={file}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        /* On small screens let the full image be visible and fit width; on md+ go back to cover */
        className="zoom-img object-contain md:object-cover object-center select-none w-full h-full"
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 fade-layer bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0)_35%,rgba(0,0,0,0)_65%,rgba(0,0,0,0.55))]" />
      )}
      {children && (
        <div className="relative z-10 flex h-full w-full items-center justify-center p-8 text-center text-neutral-100">
          <div className="space-y-6 max-w-4xl" data-animate-container>
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
