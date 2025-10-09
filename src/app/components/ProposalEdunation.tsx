'use client';

import { useLanguage } from "../contexts/LanguageContext";

export default function ProposalEdunation() {
  const { t, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat...</p>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Section dengan efek parallax */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div 
          className="absolute inset-0 bg-[url('https://kopinindonesia.org/foto_fgd_5.jpeg')] bg-cover bg-center bg-fixed"
          style={{ transform: 'translateZ(0)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4 py-8 md:py-0">
          <div className="mb-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            {/* Festival Logos dan Badge - Mobile Friendly Design */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-4">
              {/* Logo Container Mobile - Horizontal di atas badge */}
              <div className="flex justify-center items-center gap-6 md:hidden mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/edunation/festival-logo.png" 
                    alt="Festival Logo Left" 
                    className="h-20 sm:h-24 w-auto object-contain max-w-[140px] sm:max-w-[160px] opacity-90"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="/edunation/festival-logo-right.png" 
                    alt="Festival Logo Right" 
                    className="h-20 sm:h-24 w-auto object-contain max-w-[140px] sm:max-w-[160px] opacity-90"
                  />
                </div>
              </div>
              
              {/* Logo Kiri - Desktop Only */}
              <div className="hidden md:flex flex-shrink-0">
                <img 
                  src="/edunation/festival-logo.png" 
                  alt="Festival Logo Left" 
                  className="h-20 lg:h-24 xl:h-28 w-auto object-contain max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] opacity-90"
                />
              </div>
              
              {/* Badge di tengah */}
              <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium border border-green-500/30 text-center">
                {t('hero.declaration.badge')}
              </span>
              
              {/* Logo Kanan - Desktop Only */}
              <div className="hidden md:flex flex-shrink-0">
                <img 
                  src="/edunation/festival-logo-right.png" 
                  alt="Festival Logo Right" 
                  className="h-20 lg:h-24 xl:h-28 w-auto object-contain max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] opacity-90"
                />
              </div>
            </div>
          </div>
          
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
              Edu Nation Fest 2025
            </span>
          </h1>

          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            "{t('hero.declaration.title')} {t('hero.declaration.titleSecondLine')}"
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20 w-full sm:w-auto">
              <p className="text-sm md:text-lg font-semibold">{t('eduNationFest.data.date')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20 w-full sm:w-auto">
              <p className="text-sm md:text-lg font-semibold">{t('eduNationFest.data.location')}</p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 animate-bounce">
            <svg className="w-5 h-5 md:w-6 md:h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Greetings Section dengan card modern */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    <img
                      src="\edunation\ali_saman.png"
                      alt="Dr. Ali Saman Hasan"
                      className="w-64 h-64 rounded-2xl shadow-lg object-cover"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {t('proposal.greetings.position')}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                    {t('proposal.greetings.title')}
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
                  </h2>
                  
                  <p className="text-sm text-gray-600 mb-2 font-medium">{t('proposal.greetings.subtitle')}</p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="bg-white/50 p-4 rounded-lg border-l-4 border-green-500">
                      {t('proposal.greetings.paragraphs.0')}
                    </p>
                    
                    <p>
                      {t('proposal.greetings.paragraphs.1')}
                    </p>
                    
                    <p>
                      {t('proposal.greetings.paragraphs.2')}
                    </p>
                    
                    <p>
                      {t('proposal.greetings.paragraphs.3')}
                    </p>
                    
                    <p className="bg-white/50 p-4 rounded-lg border-l-4 border-blue-500">
                      {t('proposal.greetings.paragraphs.4')}
                    </p>
                  </div>
                  
                  <p className="text-right font-semibold mt-6 text-gray-800">
                    {t('proposal.greetings.subtitle')}<br />
                    <span className="text-green-600">{t('proposal.greetings.position')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mengapa Diadakan Section dengan timeline visual */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.whyEduNation.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.whyEduNation.subtitle')}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-blue-50">
                <img
                  src="https://kopinindonesia.org/foto_fgd_5.jpeg"
                  alt="Mengapa Diadakan"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <div className="space-y-8">
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {t('proposal.whyEduNation.reasons.0.title')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('proposal.whyEduNation.reasons.0.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {t('proposal.whyEduNation.reasons.1.title')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('proposal.whyEduNation.reasons.1.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {t('proposal.whyEduNation.reasons.2.title')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('proposal.whyEduNation.reasons.2.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section dengan card interaktif */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.portfolio.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.portfolio.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lingkup Sekolah */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{t('proposal.portfolio.schoolScope.title')}</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_1.png" alt="WAFAIR" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. {t('proposal.portfolio.schoolScope.items.0.title')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('proposal.portfolio.schoolScope.items.0.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_2.png" alt="Campus Sharing" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. {t('proposal.portfolio.schoolScope.items.1.title')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('proposal.portfolio.schoolScope.items.1.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_3.png" alt="Al-Irsyad EduFest" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">3. {t('proposal.portfolio.schoolScope.items.2.title')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('proposal.portfolio.schoolScope.items.2.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lingkup Nasional */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{t('proposal.portfolio.nationalScope.title')}</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_nasional_1.png" alt="EXPO ASESI" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. {t('proposal.portfolio.nationalScope.items.0.title')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('proposal.portfolio.nationalScope.items.0.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_nasional_2.png" alt="PULDAPIA EXPO" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. {t('proposal.portfolio.nationalScope.items.1.title')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('proposal.portfolio.nationalScope.items.1.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Event Section dengan grid modern */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.ourEvent.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.ourEvent.subtitle')}</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">1. {t('proposal.ourEvent.events.0')}</h3>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">2. {t('proposal.ourEvent.events.1')}</h3>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">3. {t('proposal.ourEvent.events.2')}</h3>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">4. {t('proposal.ourEvent.events.3')}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Pameran Pendidikan Section dengan card yang lebih menarik */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.educationExpo.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.educationExpo.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src="/edunation/edunation_fest_national.png" alt="Lembaga Pendidikan Nasional" className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t('proposal.educationExpo.national.title')}</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.national.items.0')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.national.items.1')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.national.items.2')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.national.items.3')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.national.items.4')}
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src="/edunation/edunation_fest_international.png" alt="Lembaga Pendidikan Internasional" className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t('proposal.educationExpo.international.title')}</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.international.items.0')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.international.items.1')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.international.items.2')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.international.items.3')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    {t('proposal.educationExpo.international.items.4')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Active Participation Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.activeParticipation.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.activeParticipation.subtitle')}</p>
          </div>
          
          <div className="px-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              {/* Gambar Judul */}
              <div className="h-40 overflow-hidden">
                <img src="/edunation/active_participation_title.png" alt="Active Participation Title" className="w-full h-full object-contain" />
              </div>
              
              {/* Container untuk 2 gambar isi */}
              <div className="flex">
                {/* Gambar Kiri */}
                <div className="flex-1 h-48 overflow-hidden -mr-1">
                  <img src="/edunation/active_participation_left.png" alt="Active Participation Left" className="w-full h-full object-contain" />
                </div>
                
                {/* Gambar Kanan */}
                <div className="flex-1 h-48 overflow-hidden -ml-1">
                  <img src="/edunation/active_participation_right.png" alt="Active Participation Right" className="w-full h-full object-contain" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{t('proposal.activeParticipation.title')}</h3>
                <p className="text-gray-600 text-center">{t('proposal.activeParticipation.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* EduTalk Sections dengan tab navigation */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.eduTalk.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.eduTalk.subtitle')}</p>
          </div>

          {/* Regulator */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">{t('proposal.eduTalk.categories.regulator')}</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdul_muti.png" alt={t('proposal.eduTalk.speakers.regulators.0.name')} className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. {t('proposal.eduTalk.speakers.regulators.0.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.regulators.0.position')}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/brian_yuliarto.png" alt={t('proposal.eduTalk.speakers.regulators.1.name')} className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. {t('proposal.eduTalk.speakers.regulators.1.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.regulators.1.position')}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/nasarudin_umar.png" alt={t('proposal.eduTalk.speakers.regulators.2.name')} className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. {t('proposal.eduTalk.speakers.regulators.2.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.regulators.2.position')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tokoh Pendidikan */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">{t('proposal.eduTalk.categories.figure')}</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/jusuf_kalla.png" alt={t('proposal.eduTalk.speakers.figures.0.name')} className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. {t('proposal.eduTalk.speakers.figures.0.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.figures.0.position')}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/anies_baswedan.png" alt={t('proposal.eduTalk.speakers.figures.1.name')} className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. {t('proposal.eduTalk.speakers.figures.1.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.figures.1.position')}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/muhadjir_efendi.png" alt={t('proposal.eduTalk.speakers.figures.2.name')} className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. {t('proposal.eduTalk.speakers.figures.2.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.figures.2.position')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pakar Pendidikan */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">{t('proposal.eduTalk.categories.expert')}</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/taufik_kasturi.png" alt={t('proposal.eduTalk.speakers.experts.0.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. {t('proposal.eduTalk.speakers.experts.0.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.experts.0.position')}</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/putra_asga_eevri.png" alt={t('proposal.eduTalk.speakers.experts.1.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. {t('proposal.eduTalk.speakers.experts.1.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.experts.1.position')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/muhammad_zuhdi.png" alt={t('proposal.eduTalk.speakers.experts.2.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. {t('proposal.eduTalk.speakers.experts.2.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.experts.2.position')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/maila_dinia.png" alt={t('proposal.eduTalk.speakers.experts.3.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">4. {t('proposal.eduTalk.speakers.experts.3.name')}</h4>
                    <p className="text-gray-600 text-sm mt-2">{t('proposal.eduTalk.speakers.experts.3.position')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENDEKIAWAN MUSLIM */}
          <div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">{t('proposal.eduTalk.categories.scholar')}</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/rizal_yuliar_putrananda.png" alt={t('proposal.eduTalk.speakers.scholars.0.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. {t('proposal.eduTalk.speakers.scholars.0.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.0.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.0.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.0.position.2')}</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdul_aziz_al_owainy.png" alt={t('proposal.eduTalk.speakers.scholars.1.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. {t('proposal.eduTalk.speakers.scholars.1.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.1.position')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/mufy_hanif_thalib.png" alt={t('proposal.eduTalk.speakers.scholars.2.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. {t('proposal.eduTalk.speakers.scholars.2.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.2.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.2.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.2.position.2')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdurrahman_zahier.png" alt={t('proposal.eduTalk.speakers.scholars.3.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">4. {t('proposal.eduTalk.speakers.scholars.3.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.3.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.3.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.3.position.2')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdullah_roy.png" alt={t('proposal.eduTalk.speakers.scholars.4.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">5. {t('proposal.eduTalk.speakers.scholars.4.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.4.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.4.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.4.position.2')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.4.position.3')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abduh_tuasikal.png" alt={t('proposal.eduTalk.speakers.scholars.5.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">6. {t('proposal.eduTalk.speakers.scholars.5.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.5.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.5.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.5.position.2')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.5.position.3')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abu_yahya_badrussalam.png" alt={t('proposal.eduTalk.speakers.scholars.6.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">7. {t('proposal.eduTalk.speakers.scholars.6.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.6.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.6.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.6.position.2')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.6.position.3')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/raehanul_bahrain.png" alt={t('proposal.eduTalk.speakers.scholars.7.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">8. {t('proposal.eduTalk.speakers.scholars.7.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.7.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.7.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.7.position.2')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.7.position.3')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/khalid_basalamah.png" alt={t('proposal.eduTalk.speakers.scholars.8.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">9. {t('proposal.eduTalk.speakers.scholars.8.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.8.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.8.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.8.position.2')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.8.position.3')}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/nuzul_dzikri.png" alt={t('proposal.eduTalk.speakers.scholars.9.name')} className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">10. {t('proposal.eduTalk.speakers.scholars.9.name')}</h4>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.9.position.0')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.9.position.1')}</p>
                    <p className="text-gray-600 text-sm">{t('proposal.eduTalk.speakers.scholars.9.position.2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Matchmaking Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.institutionalMatchmaking.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.institutionalMatchmaking.subtitle')}</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{t('proposal.institutionalMatchmaking.objectives.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{t('proposal.institutionalMatchmaking.objectives.items.0')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{t('proposal.institutionalMatchmaking.objectives.items.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{t('proposal.institutionalMatchmaking.objectives.items.2')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{t('proposal.institutionalMatchmaking.benefits.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{t('proposal.institutionalMatchmaking.benefits.items.0')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{t('proposal.institutionalMatchmaking.benefits.items.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{t('proposal.institutionalMatchmaking.benefits.items.2')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Target Peserta Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.targetParticipants.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.targetParticipants.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9 5m-9-5v10" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('proposal.targetParticipants.categories.0.title')}</h3>
              <p className="text-gray-600 text-sm">{t('proposal.targetParticipants.categories.0.description')}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('proposal.targetParticipants.categories.1.title')}</h3>
              <p className="text-gray-600 text-sm">{t('proposal.targetParticipants.categories.1.description')}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('proposal.targetParticipants.categories.2.title')}</h3>
              <p className="text-gray-600 text-sm">{t('proposal.targetParticipants.categories.2.description')}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{t('proposal.targetParticipants.categories.3.title')}</h3>
              <p className="text-gray-600 text-sm">{t('proposal.targetParticipants.categories.3.description')}</p>
            </div>
          </div>
        </div>

        {/* Target Jumlah Pengunjung Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.targetVisitors.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.targetVisitors.subtitle')}</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="text-6xl font-bold mb-4">{t('proposal.targetVisitors.total')}</div>
              <p className="text-xl">{t('proposal.targetVisitors.duration')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{t('proposal.targetVisitors.daily.0.count')}</div>
                <p>{t('proposal.targetVisitors.daily.0.day')}</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{t('proposal.targetVisitors.daily.1.count')}</div>
                <p>{t('proposal.targetVisitors.daily.1.day')}</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">{t('proposal.targetVisitors.daily.2.count')}</div>
                <p>{t('proposal.targetVisitors.daily.2.day')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section dengan visual yang menarik */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.timeline.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.timeline.subtitle')}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-4 gap-0">
              <div className="bg-gradient-to-b from-green-500 to-blue-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">{t('proposal.timeline.phases.0.number')}</div>
                <h3 className="text-xl font-semibold">{t('proposal.timeline.phases.0.title')}</h3>
                <p className="mt-2">{t('proposal.timeline.phases.0.period')}</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-500 to-purple-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">{t('proposal.timeline.phases.1.number')}</div>
                <h3 className="text-xl font-semibold">{t('proposal.timeline.phases.1.title')}</h3>
                <p className="mt-2">{t('proposal.timeline.phases.1.period')}</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-500 to-pink-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">{t('proposal.timeline.phases.2.number')}</div>
                <h3 className="text-xl font-semibold">{t('proposal.timeline.phases.2.title')}</h3>
                <p className="mt-2">{t('proposal.timeline.phases.2.period')}</p>
              </div>
              
              <div className="bg-gradient-to-b from-pink-500 to-red-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">{t('proposal.timeline.phases.3.number')}</div>
                <h3 className="text-xl font-semibold">{t('proposal.timeline.phases.3.title')}</h3>
                <p className="mt-2">{t('proposal.timeline.phases.3.period')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section dengan form yang menarik */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              {t('proposal.contactUs.title')}
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t('proposal.contactUs.subtitle')}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('proposal.contactUs.contactInfo.title')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t('proposal.contactUs.contactInfo.phone.label')}</h4>
                      <p className="text-gray-600">{t('proposal.contactUs.contactInfo.phone.number')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t('proposal.contactUs.contactInfo.email.label')}</h4>
                      <p className="text-gray-600">{t('proposal.contactUs.contactInfo.email.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t('proposal.contactUs.contactInfo.address.label')}</h4>
                      <p className="text-gray-600">{t('proposal.contactUs.contactInfo.address.location')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('proposal.contactUs.form.title')}</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">{t('proposal.contactUs.form.fields.name.label')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('proposal.contactUs.form.fields.name.placeholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">{t('proposal.contactUs.form.fields.email.label')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('proposal.contactUs.form.fields.email.placeholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">{t('proposal.contactUs.form.fields.message.label')}</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('proposal.contactUs.form.fields.message.placeholder')}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:-translate-y-1"
                  >
                    {t('proposal.contactUs.form.button')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}