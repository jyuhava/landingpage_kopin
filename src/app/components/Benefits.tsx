'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      key: 'curriculum',
      icon: (
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      key: 'reputation',
      icon: (
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      key: 'collaboration',
      icon: (
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      key: 'training',
      icon: (
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500"
    },
    {
      key: 'expansion',
      icon: (
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      key: 'competitiveness',
      icon: (
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="benefits" className="relative py-12 md:py-20 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/20 overflow-hidden">
      {/* Subtle Islamic Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpath d='M50 50m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3Cpath d='M50 50m-10 0a10 10 0 1 1 20 0a10 10 0 1 1 -20 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>

      {/* Simple decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center p-1.5 md:p-2 bg-emerald-100 rounded-full mb-4 md:mb-6">
            <div className="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full shadow-sm">
              <svg className="w-4 md:w-5 h-4 md:h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-emerald-700 font-medium text-xs md:text-sm">{t('benefits.badge')}</span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
            {t('benefits.title')}
            <span className="block text-emerald-600">{t('benefits.titleHighlight')}</span>
          </h2>
          
          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('benefits.description')}
          </p>
          
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mt-4 md:mt-6"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-white/20 hover:-translate-y-2 overflow-hidden"
            >
              {/* Simple subtle pattern overlay */}
              <div className="absolute inset-0 opacity-3 group-hover:opacity-5 transition-opacity duration-500">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.2'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }}
                ></div>
              </div>

              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-3 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Clean icon container */}
              <div className="relative mb-4 md:mb-6">
                <div className={`inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors">
                  {t(`benefits.items.${benefit.key}.title`)}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {t(`benefits.items.${benefit.key}.description`)}
                </p>
              </div>

              {/* Simple hover indicator */}
              <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Simple subtle background pattern */}
            <div className="absolute inset-0 opacity-8">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}
              ></div>
            </div>

            <div className="relative px-6 md:px-8 py-8 md:py-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-white/20 rounded-full mb-4 md:mb-6 backdrop-blur-sm">
                  <svg className="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                  {t('benefits.cta.title')}
                  <span className="block">{t('benefits.cta.titleSecondLine')}</span>
                </h3>
                
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                  {t('benefits.cta.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf-9KQmex5Lzoda2asfK8g2vlmBlzO4s23aHskE9jVa6uilWA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-emerald-600 rounded-full text-sm md:text-base font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>{t('benefits.cta.button')}</span>
                    <svg className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>

                  <div className="flex items-center space-x-3">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-white/20 backdrop-blur-sm rounded-full p-2.5 md:p-3 flex items-center justify-center">
                      <img 
                        src="https://kopinindonesia.org/real_logo_kopin.png" 
                        alt="KOPIN Logo" 
                        className="h-10 md:h-12 w-auto filter brightness-0 invert"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold text-sm md:text-base">{t('benefits.cta.logoText.name')}</div>
                      <div className="text-white/80 text-xs md:text-sm">{t('benefits.cta.logoText.established')}</div>
                      <div className="text-white/60 text-xs">{t('benefits.cta.logoText.tagline')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
