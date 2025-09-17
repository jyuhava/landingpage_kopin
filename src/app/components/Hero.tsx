'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export default function Hero() {
  const { t, isLoading: langLoading } = useLanguage();
  const [heroImages, setHeroImages] = useState<HeroImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Fetch images from JSON
    fetch('/data/images.json')
      .then(response => response.json())
      .then(data => {
        if (data.heroImages) {
          setHeroImages(data.heroImages);
        }
      })
      .catch(error => console.error('Error loading images:', error));
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-09-05T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (heroImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      }, 12000); // Change image every 12 seconds
      return () => clearInterval(interval);
    }
  }, [heroImages]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  if (heroImages.length === 0 || langLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-600 font-medium">{t('hero.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="group p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="group p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <div className="text-white space-y-8">
              {/* Logo and Title */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://kopinindonesia.org/real_logo_kopin.png"
                    alt="KOPIN Logo"
                    className="h-16 w-auto filter brightness-0 invert"
                  />
                  <div className="h-12 w-px bg-white/30"></div>
                  <div>
                    <div className="text-emerald-400 font-medium text-sm tracking-wider uppercase">
                      {t('hero.consortium.subtitle')}
                    </div>
                    <div className="text-white/80 text-sm">
                      {t('hero.consortium.established')}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                    {t('hero.title')}
                    <span className="block text-emerald-400">{t('hero.titleHighlight')}</span>
                  </h1>
                  <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                    {t('hero.description')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#about"
                  className="group inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('hero.buttons.learnMore')}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
                >
                  {t('hero.buttons.contact')}
                </Link>
              </div>
            </div>

            {/* Right Column - Declaration Card */}
            <div className="lg:ml-8">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="text-center space-y-6">
                  {/* Declaration Header */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t('hero.declaration.badge')}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                      {t('hero.declaration.title')}<br />
                      {t('hero.declaration.titleSecondLine')}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
                  </div>

                  {/* Event Details */}
                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="text-gray-600">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{t('hero.declaration.date')}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm mt-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{t('hero.declaration.venue')}</span>
                      </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { value: timeLeft.days, label: t('hero.declaration.countdown.days') },
                        { value: timeLeft.hours, label: t('hero.declaration.countdown.hours') },
                        { value: timeLeft.minutes, label: t('hero.declaration.countdown.minutes') },
                        { value: timeLeft.seconds, label: t('hero.declaration.countdown.seconds') }
                      ].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border p-3">
                          <div className="text-2xl font-bold text-emerald-600">{item.value}</div>
                          <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf-9KQmex5Lzoda2asfK8g2vlmBlzO4s23aHskE9jVa6uilWA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center">
                      {t('hero.declaration.register')}
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-8 h-2 bg-white rounded-full'
                  : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-white/70 text-sm font-medium vertical-text transform rotate-90 origin-center">
            {t('hero.scroll')}
          </div>
          <div className="w-px h-8 bg-white/30 animate-pulse"></div>
          <svg className="w-4 h-4 text-white/70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
