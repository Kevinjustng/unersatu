"use client";
import Image from "next/image";

export default function DetailHero({ title, subtitle, image }) {
  return (
    <section className="relative w-full h-80 md:h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-2">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium">{subtitle}</p>
      </div>
    </section>
  );
}
