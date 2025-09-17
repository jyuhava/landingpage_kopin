'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FGDImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

interface Speaker {
  id: number;
  url: string;
  alt: string;
  name: string;
  role: string;
  description: string;
  expertise?: string[];
}

export default function FGD2() {
  const { t, getData } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<FGDImage | null>(null);

  // Get data from translation files instead of external JSON
  const getImages = (): FGDImage[] => {
    try {
      const images = getData('fgd2.gallery.images');
      return Array.isArray(images) ? images : [];
    } catch {
      return [];
    }
  };

  const getSpeakers = (): Speaker[] => {
    try {
      const speakers = getData('fgd2.speakers.data');
      return Array.isArray(speakers) ? speakers : [];
    } catch {
      return [];
    }
  };
  
  const fgdImages = getImages();
  const speakers = getSpeakers();

  return (
    <section id="fgd2" className="relative py-20 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpath d='M50 50m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3Cpath d='M50 20v60M20 50h60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-yellow-100 rounded-full mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-700 font-medium text-sm">{t('fgd2.badge')}</span>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {t('fgd2.title')}
            <span className="block text-emerald-600">{t('fgd2.titleHighlight')}</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('fgd2.description').split(t('fgd2.highlight1')).map((part, index, array) => (
                index === array.length - 1 ? (
                  part.split(t('fgd2.highlight2')).map((subPart, subIndex, subArray) => (
                    subIndex === subArray.length - 1 ? subPart : (
                      <span key={`${index}-${subIndex}`}>
                        {subPart}
                        <span className="text-emerald-600 font-semibold">{t('fgd2.highlight2')}</span>
                      </span>
                    )
                  ))
                ) : (
                  <span key={index}>
                    {part}
                    <span className="text-emerald-600 font-semibold">{t('fgd2.highlight1')}</span>
                  </span>
                )
              ))}
            </p>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-16">{t('fgd2.speakers.title')}</h3>
          
          <div className="space-y-16">
            {speakers.map((speaker, index) => (
              <div key={speaker.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                {/* Speaker Image */}
                <div className="w-full lg:w-2/5">
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    
                    {/* Main image container */}
                    <div className="relative bg-gradient-to-br from-white to-emerald-50 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={speaker.url}
                          alt={speaker.alt}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent"></div>
                      
                      {/* Speaker info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                          <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2">{speaker.name}</h4>
                          <div className="inline-flex items-center space-x-2 bg-emerald-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white font-semibold text-sm">{speaker.role}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative corner */}
                      <div className="absolute top-4 right-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="w-full lg:w-3/5">
                  <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-3xl -z-10"></div>
                    
                    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-8">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-emerald-700 font-bold text-sm uppercase tracking-wide">{speaker.role}</span>
                          </div>
                          <h4 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{speaker.name}</h4>
                          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="relative">
                        <div className="absolute -left-4 top-0 text-6xl text-emerald-200 font-serif leading-none">"</div>
                        <p className="text-gray-700 leading-relaxed text-lg pl-8 relative z-10">
                          {speaker.description}
                        </p>
                        <div className="absolute -right-4 bottom-0 text-6xl text-emerald-200 font-serif leading-none rotate-180">"</div>
                      </div>
                      
                      {/* Expertise tags */}
                      <div className="mt-8 pt-8 border-t border-emerald-100">
                        <div className="flex flex-wrap gap-3">
                          {speaker.expertise && speaker.expertise.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className={`text-white px-4 py-2 rounded-full text-sm font-medium ${
                                skillIndex === 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                                skillIndex === 1 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                                skillIndex === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                                'bg-gradient-to-r from-orange-500 to-red-500'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">{t('fgd2.gallery.title')}</h3>
          
          {fgdImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fgdImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image container */}
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* View icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      {image.alt}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-emerald-200 rounded-full mx-auto mb-4"></div>
                <p className="text-emerald-600 font-medium">{t('fgd2.gallery.loading')}</p>
              </div>
            </div>
          )}
        </div>

        {/* Next Event Teaser */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-9 8h10a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <div className="font-semibold">{t('fgd2.nextEvent.label')}</div>
              <div className="text-sm opacity-90">{t('fgd2.nextEvent.date')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedImage.alt}</h3>
              <p className="text-gray-600">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
