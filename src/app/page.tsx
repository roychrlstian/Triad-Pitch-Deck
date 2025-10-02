import SlideSection, { type SlideData } from "../components/SlideSection";

const slides: SlideData[] = [
  { file: "/1.jpg", id: "hero", alt: "Hero", priority: true },
  { file: "/2.jpg", id: "about", alt: "About" },
  { file: "/3.jpg", id: "team-a", alt: "Team section A" },
  { file: "/4.jpg", id: "team-b", alt: "Team section B" },
  { file: "/5.jpg", id: "partners", alt: "Partners" },
  { file: "/6.jpg", id: "services", alt: "Services" },
  { file: "/7.jpg", id: "contact", alt: "Contact" },
];

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-[40px]">
      {slides.map((s) => (
        <SlideSection key={s.id} {...s} />
      ))}
    </main>
  );
}
