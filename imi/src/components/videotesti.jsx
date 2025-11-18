"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const saffron = "#FF6F00";

export default function VideoTestimonials({
  testimonials = sampleTestimonials(),
}) {
  const [openId, setOpenId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const modalVideoRef = useRef(null);
  const sliderRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Items per slide based on screen size
  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  useEffect(() => {
    if (openId !== null) {
      const idx = testimonials.findIndex((t) => t.id === openId);
      setActiveIndex(idx >= 0 ? idx : 0);

      setTimeout(() => modalVideoRef.current?.focus?.(), 80);

      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [openId, testimonials]);

  function onKeyDown(e) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextModal();
    if (e.key === "ArrowLeft") prevModal();
  }

  function openModal(id) {
    setOpenId(id);
  }

  function closeModal() {
    try {
      modalVideoRef.current?.pause();
    } catch (err) {}
    setOpenId(null);
  }

  function nextModal() {
    setActiveIndex((i) => {
      const nextIndex = Math.min(i + 1, testimonials.length - 1);
      setOpenId(testimonials[nextIndex].id);
      return nextIndex;
    });
  }

  function prevModal() {
    setActiveIndex((i) => {
      const prevIndex = Math.max(i - 1, 0);
      setOpenId(testimonials[prevIndex].id);
      return prevIndex;
    });
  }

  function nextSlide() {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }

  function prevSlide() {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl items-center mx-auto px-4 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Student Video Testimonials
          </h2>
          <div className="h-1 w-24 mx-auto rounded" style={{ backgroundColor: saffron }}></div>
          <p className="mt-4 text-gray-600 text-lg">
            Hear from our successful students about their journey
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-2 md:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ backgroundColor: saffron }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ backgroundColor: saffron }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className={`grid gap-6 px-2 ${isMobile ? 'grid-cols-1 justify-items-center' : 'md:grid-cols-3'}`}>
                    {testimonials
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((t, idx) => (
                        <article
                          key={`${slideIndex}-${idx}`}
                          className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${isMobile ? 'w-full max-w-sm' : 'w-full'}`}
                          style={{ borderColor: saffron }}
                        >
                          <button
                            onClick={() => openModal(t.id)}
                            className="group relative w-full h-48 flex items-center justify-center focus:outline-none overflow-hidden"
                          >
                            {t.poster ? (
                              <img
                                src={t.poster}
                                loading="lazy"
                                alt={t.name}
                                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="bg-gray-200 w-full h-48 flex items-center justify-center text-gray-400">
                                No Preview
                              </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: saffron }}>
                              <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                          </button>

                          <div className="p-5">
                            <p className="font-bold text-lg text-gray-800 truncate">{t.name}</p>
                            <p className="text-sm font-medium mt-1" style={{ color: saffron }}>{t.role}</p>
                            <p className="text-sm mt-3 line-clamp-2 text-gray-600 italic">
                              "{t.quote}"
                            </p>
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-3 h-3 rounded-full transition-all"
                style={{
                  backgroundColor: currentSlide === index ? saffron : '#d1d5db'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video */}
              <div className="relative bg-black">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>

                <video
                  ref={modalVideoRef}
                  key={openId}
                  className="w-full h-[56vw] max-h-[65vh] bg-black"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                >
                  <source
                    src={
                      testimonials.find((t) => t.id === openId)?.videoSrc
                    }
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 border-t-4" style={{ borderColor: saffron }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-gray-800">
                      {testimonials.find((t) => t.id === openId)?.name}
                    </h3>

                    <p className="text-sm font-medium mt-1" style={{ color: saffron }}>
                      {testimonials.find((t) => t.id === openId)?.role}
                    </p>

                    <p className="mt-4 text-gray-700 text-base italic leading-relaxed">
                      "{testimonials.find((t) => t.id === openId)?.quote}"
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevModal}
                      disabled={activeIndex === 0}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed border-2"
                      style={{ 
                        borderColor: saffron, 
                        color: saffron,
                        backgroundColor: 'white'
                      }}
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span className="hidden sm:inline">Prev</span>
                    </button>
                    <button
                      onClick={nextModal}
                      disabled={activeIndex === testimonials.length - 1}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ backgroundColor: saffron }}
                      aria-label="Next"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------------------------------------------
   Sample Default Data
---------------------------------------------------- */
function sampleTestimonials() {
  return [
    {
      id: "t1",
      name: "Ritika Sharma",
      role: "PG Diploma — Broadcast Journalism",
      videoSrc: "/videos/ritika.mp4",
      poster: "/images/ritika.jpg",
      quote: "IMI ने मुझे स्क्रीन पर खड़े होने का आत्मविश्वास दिया।",
    },
    {
      id: "t2",
      name: "Saurabh Verma",
      role: "Alumni — Graphic Design",
      videoSrc: "/videos/saurabh.mp4",
      poster: "/images/saurabh.jpg",
      quote: "सीखा हुआ हर टूल मेरे career में काम आया।",
    },
    {
      id: "t3",
      name: "Anjali Mehta",
      role: "Student — Motion Graphics",
      videoSrc: "/videos/anjali.mp4",
      poster: "/images/anjali.jpg",
      quote: "Professional projects ने मेरी reel मजबूत बनाई।",
    },
    {
      id: "t1",
      name: "Ritika Sharma",
      role: "PG Diploma — Broadcast Journalism",
      videoSrc: "/videos/ritika.mp4",
      poster: "/images/ritika.jpg",
      quote: "IMI ने मुझे स्क्रीन पर खड़े होने का आत्मविश्वास दिया।",
    },
    {
      id: "t2",
      name: "Saurabh Verma",
      role: "Alumni — Graphic Design",
      videoSrc: "/videos/saurabh.mp4",
      poster: "/images/saurabh.jpg",
      quote: "सीखा हुआ हर टूल मेरे career में काम आया।",
    },
    {
      id: "t3",
      name: "Anjali Mehta",
      role: "Student — Motion Graphics",
      videoSrc: "/videos/anjali.mp4",
      poster: "/images/anjali.jpg",
      quote: "Professional projects ने मेरी reel मजबूत बनाई।",
    },
  ];
}
