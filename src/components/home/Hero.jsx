import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import show01 from "../../assets/hero/show-01.webp";
import show02 from "../../assets/hero/show-02.webp";
import show03 from "../../assets/hero/show-03.webp";
import show04 from "../../assets/hero/show-04.webp";
import show05 from "../../assets/hero/show-05.webp";
import show06 from "../../assets/hero/show-06.webp";
import show07 from "../../assets/hero/show-07.webp";
import show08 from "../../assets/hero/show-08.webp";
import show09 from "../../assets/hero/show-09.webp";

const heroImages = [
  show01,
  show02,
  show03,
  show04,
  show05,
  show06,
  show07,
  show08,
  show09,
];

const SLIDE_INTERVAL = 3000;
const FADE_DURATION = 1500;

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Start with only the first image.
  const [loadedImages, setLoadedImages] = useState(() => new Set([0]));

  // Preload an image without displaying it.
  const preloadImage = (index) => {
    const normalizedIndex =
      (index + heroImages.length) % heroImages.length;

    setLoadedImages((previous) => {
      if (previous.has(normalizedIndex)) {
        return previous;
      }

      return new Set([...previous, normalizedIndex]);
    });
  };

  // Load images 2 and 3 shortly after the page loads.
  useEffect(() => {
    const timer = setTimeout(() => {
      preloadImage(1);
      preloadImage(2);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Automatically advance every 3 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) =>
        (previous + 1) % heroImages.length
      );
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Preload upcoming slides.
  useEffect(() => {
    preloadImage(currentImage);
    preloadImage(currentImage + 1);
    preloadImage(currentImage + 2);
  }, [currentImage]);

  const previousSlide = () => {
    const previous =
      (currentImage - 1 + heroImages.length) % heroImages.length;

    preloadImage(previous);
    setCurrentImage(previous);
  };

  const nextSlide = () => {
    const next = (currentImage + 1) % heroImages.length;

    preloadImage(next);
    setCurrentImage(next);
  };

  const goToSlide = (index) => {
    preloadImage(index);
    setCurrentImage(index);
  };

  return (
    <section className="relative isolate flex min-h-[720px] items-center justify-center overflow-hidden bg-[#0B1D5A] px-6 py-24 text-center text-white md:min-h-[780px]">

      {/* BACKGROUND SLIDESHOW */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {heroImages.map((image, index) => {
          if (!loadedImages.has(index)) return null;

          return (
            <img
              key={image}
              src={image}
              alt=""
              aria-hidden="true"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                index === currentImage
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          );
        })}
      </div>

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#0B1D5A]/65" />

      {/* PURPLE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#2A1E68]/45 via-transparent to-[#2A1E68]/80" />

      {/* BLUE GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-[3] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#4FCBFF]/20 blur-[120px]" />

      {/* LEFT ARROW */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous show photo"
        className="
          absolute
          left-3
          top-1/2
          z-30
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-[#0B1D5A]/60
          text-white
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#2A1E68]/90
          sm:left-5
          sm:h-12
          sm:w-12
          lg:left-8
          lg:h-14
          lg:w-14
        "
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next show photo"
        className="
          absolute
          right-3
          top-1/2
          z-30
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-[#0B1D5A]/60
          text-white
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#2A1E68]/90
          sm:right-5
          sm:h-12
          sm:w-12
          lg:right-8
          lg:h-14
          lg:w-14
        "
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center">

        {/* LOGO */}
        <img
          src="/bktcg-logo.webp"
          alt="BKTCG Show"
          className="mx-auto mb-8 w-56 drop-shadow-2xl sm:w-72 md:w-96"
        />

        {/* HEADING */}
        <h1 className="max-w-4xl text-4xl font-black tracking-tight drop-shadow-lg sm:text-5xl md:text-7xl">
          Brooklyn{" "}
          <span className="text-[#FFA500]">
            TCG
          </span>{" "}
          Show
        </h1>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/90 drop-shadow-md sm:text-lg md:text-xl">
          The Home of Brooklyn's Trading Card Community, Where Brooklyn's
          Collectors Come Together
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/events"
            className="rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-3 font-bold text-[#0B1D5A] shadow-lg transition hover:scale-105"
          >
            Get Tickets
          </Link>

          <Link
            to="/events"
            className="rounded-xl border border-white/40 bg-[#0B1D5A]/25 px-8 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            View Events
          </Link>

        </div>

        {/* SLIDESHOW INDICATORS */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`View show photo ${index + 1}`}
              aria-current={currentImage === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "w-8 bg-[#FFA500]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;