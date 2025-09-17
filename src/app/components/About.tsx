'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export default function About() {
  const { t, isLoading: langLoading } = useLanguage();
  const [aboutImage, setAboutImage] = useState<AboutImage | null>(null);

  useEffect(() => {
    // Fetch about image from JSON
    fetch('/data/images.json')
      .then(response => response.json())
      .then(data => {
        if (data.aboutImage) {
          setAboutImage(data.aboutImage);
        }
      })
      .catch(error => console.error('Error loading about image:', error));
  }, []);

  return (
    <section id="about" className="relative py-12 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.15'%3E%3Cpath d='M60 120L30 90L0 120V90L30 60L0 30V0L30 30L60 0L90 30L120 0V30L90 60L120 90V120L90 90L60 120ZM60 90L90 60L60 30L30 60L60 90ZM30 30L60 60L90 30L60 0L30 30ZM30 90L60 60L30 30L0 60L30 90ZM90 90L60 60L90 30L120 60L90 90Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center p-1.5 md:p-2 bg-emerald-100 rounded-full mb-4 md:mb-6">
            <div className="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full shadow-sm">
              <svg className="w-4 md:w-5 h-4 md:h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-emerald-700 font-medium text-xs md:text-sm">{t('about.badge')}</span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
            {t('about.title')}
            <span className="block text-emerald-600">{t('about.titleHighlight')}</span>
          </h2>
          
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="group">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                      {t('about.content.paragraph1').split(t('about.content.highlight1')).map((part, index, array) => (
                        index === array.length - 1 ? part : (
                          <span key={index}>
                            {part}
                            <span className="text-emerald-600 font-semibold">{t('about.content.highlight1')}</span>
                          </span>
                        )
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                      {t('about.content.paragraph2').split(t('about.content.highlight2')).map((part, index, array) => (
                        index === array.length - 1 ? part : (
                          <span key={index}>
                            {part}
                            <span className="text-emerald-600 font-semibold">{t('about.content.highlight2')}</span>
                          </span>
                        )
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                      {t('about.content.paragraph3').split(t('about.content.highlight3')).map((part, index, array) => (
                        index === array.length - 1 ? part : (
                          <span key={index}>
                            {part}
                            <span className="text-emerald-600 font-semibold">{t('about.content.highlight3')}</span>
                          </span>
                        )
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-emerald-100 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                <svg className="w-5 md:w-6 h-5 md:h-6 text-emerald-600 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                {t('about.keyFeatures.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {[
                  t('about.keyFeatures.items.curriculum'),
                  t('about.keyFeatures.items.exchange'),
                  t('about.keyFeatures.items.research'),
                  t('about.keyFeatures.items.promotion')
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-xs md:text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Islamic ornamental frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl transform rotate-3 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-500 to-teal-500 rounded-2xl transform -rotate-1 shadow-xl"></div>
              
              <div className="relative bg-white rounded-2xl p-3 md:p-4 shadow-2xl">
                {aboutImage ? (
                  <img
                    src={aboutImage.url}
                    alt={aboutImage.alt}
                    className="w-full h-60 md:h-80 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-60 md:h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-pulse w-12 md:w-16 h-12 md:h-16 bg-emerald-200 rounded-full mx-auto mb-3 md:mb-4"></div>
                      <p className="text-emerald-600 font-medium text-sm md:text-base">{t('about.loading')}</p>
                    </div>
                  </div>
                )}
                
                {/* Image caption */}
                <div className="mt-3 md:mt-4 text-center">
                  <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-emerald-50 rounded-full">
                    <svg className="w-3 md:w-4 h-3 md:h-4 text-emerald-600 mr-1.5 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-emerald-700 font-medium text-xs md:text-sm">
                      {t('about.imageCaption')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Islamic patterns around image */}
              <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-8 md:w-12 h-8 md:h-12 border-2 md:border-4 border-emerald-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-10 md:w-16 h-10 md:h-16 border-2 md:border-4 border-teal-300 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-4 md:-right-8 w-6 md:w-8 h-6 md:h-8 bg-emerald-400 rounded-full opacity-40 transform -translate-y-1/2"></div>
              <div className="absolute top-1/4 -left-3 md:-left-4 w-4 md:w-6 h-4 md:h-6 bg-teal-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
