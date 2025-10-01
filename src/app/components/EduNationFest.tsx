"use client";

import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface EduNationFestData {
  id: number;
  url: string;
  alt: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
}

export default function EduNationFest() {
  const { t, getData } = useLanguage();

  // Get data from translation files instead of external JSON
  const getFestData = (): EduNationFestData | null => {
    try {
      const data = getData('eduNationFest.data');
      return data || null;
    } catch {
      return null;
    }
  };
  
  const festData = getFestData();

  if (!festData) {
    return <div>{t('eduNationFest.loading')}</div>;
  }

  return (
    <section id="edunation" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">{festData.title}</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            {festData.description}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src={festData.url}
                alt={festData.alt}
                width={800}
                height={600}
                className="w-full h-auto pb-40 md:pb-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">"{festData.subtitle}"</h3>
                <p>{festData.date} | {festData.location}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-emerald-50 p-8 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">{t('eduNationFest.about.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('eduNationFest.about.description')}
              </p>
              
              <h3 className="text-xl font-semibold text-emerald-800 mb-4 mt-8">{t('eduNationFest.objectives.title')}</h3>
              <ul className="space-y-3 text-gray-700">
                {getData('eduNationFest.objectives.items')?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                  href="/about-edunation"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  {t('eduNationFest.actions.aboutUs')}
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdiOkABEcG-42Pasv5Xht-XoDycWReOMOELYLtOgChFh40pXw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors text-center"
                >
                  {t('eduNationFest.actions.register')}
                </a>
                <a
                  href="https://www.instagram.com/edunationfest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition duration-300 text-center"
                >
                  {t('eduNationFest.actions.followInstagram')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
