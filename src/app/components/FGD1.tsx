'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FGDImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export default function FGD1() {
  const { t, getData } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<FGDImage | null>(null);

  // Get images from translation data instead of external JSON
  const getImages = (): FGDImage[] => {
    try {
      const images = getData('fgd1.gallery.images');
      return Array.isArray(images) ? images : [];
    } catch {
      return [];
    }
  };
  
  const fgdImages = getImages();

  return (
    <section id="fgd1-previous" className="relative py-20 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpath d='M40 40m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0'/%3E%3Cpath d='M40 40m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-emerald-700 font-medium text-sm">{t('fgd1.badge')}</span>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {t('fgd1.title')}
            <span className="block text-emerald-600">{t('fgd1.titleHighlight')}</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-9 8h10a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{t('fgd1.date')}</span>
            </div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">{t('fgd1.type')}</span>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('fgd1.description').split(t('fgd1.highlight1')).map((part, index, array) => (
                index === array.length - 1 ? (
                  part.split(t('fgd1.highlight2')).map((subPart, subIndex, subArray) => (
                    subIndex === subArray.length - 1 ? subPart : (
                      <span key={`${index}-${subIndex}`}>
                        {subPart}
                        <span className="text-emerald-600 font-semibold">{t('fgd1.highlight2')}</span>
                      </span>
                    )
                  ))
                ) : (
                  <span key={index}>
                    {part}
                    <span className="text-emerald-600 font-semibold">{t('fgd1.highlight1')}</span>
                  </span>
                )
              ))}
            </p>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">{t('fgd1.gallery.title')}</h3>
          
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
                <p className="text-emerald-600 font-medium">{t('fgd1.gallery.loading')}</p>
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
              <div className="font-semibold">{t('fgd1.nextEvent.label')}</div>
              <div className="text-sm opacity-90">{t('fgd1.nextEvent.date')}</div>
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
