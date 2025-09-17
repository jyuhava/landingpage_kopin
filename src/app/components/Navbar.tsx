'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t, isLoading } = useLanguage();

  const languages = [
    { code: 'id', name: 'ID', flag: '🇮🇩' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'ar', name: 'AR', flag: '🇸🇦' },
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  if (isLoading) {
    return <div className="h-20 bg-white shadow-lg fixed w-full z-50"></div>;
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">      {/* Top Header Bar */}      <div className="bg-green-600 text-white py-2">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="flex justify-between items-center text-sm">            <div className="flex items-center space-x-6">              <div className="flex items-center space-x-2">                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />                </svg>                <span>{t('navbar.topBar.email')}</span>              </div>              <div className="flex items-center space-x-2 hidden md:flex">                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />                </svg>                <span>{t('navbar.topBar.phone')}</span>              </div>            </div>            <div className="flex items-center space-x-4">              <a                href="https://www.instagram.com/edunationfest/"                target="_blank"                className="hover:text-green-200 transition-colors"              >                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>                </svg>              </a>              <span className="text-xs hidden sm:inline">{t('navbar.topBar.eventInfo')}</span>
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-green-700 transition-colors"
                >
                  <span className="text-sm">{currentLang.flag}</span>
                  <span className="text-xs font-medium">{currentLang.name}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg py-1 min-w-[80px] z-10">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                          language === lang.code ? 'bg-green-50 text-green-600' : 'text-gray-700'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>            </div>          </div>        </div>      </div>      {/* Main Navigation */}      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="flex justify-between h-20">          <div className="flex items-center">            <Link href="/" className="flex items-center space-x-3">              <Image                src="https://kopinindonesia.org/real_logo_kopin.png"                alt="KOPIN Logo"                width={50}                height={50}                className="object-contain"              />              <div>                <div className="text-2xl font-bold text-green-600">{t('navbar.logo.title')}</div>                <div className="text-xs text-gray-600 hidden sm:block">                  {t('navbar.logo.subtitle')}                </div>              </div>            </Link>          </div>          {/* Desktop Menu */}          <div className="hidden md:flex items-center space-x-8">            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">              {t('navbar.menu.about')}            </Link>            <Link href="#benefits" className="text-gray-700 hover:text-green-600 transition-colors font-medium">              {t('navbar.menu.benefits')}            </Link>            <Link href="#edunation" className="text-gray-700 hover:text-green-600 transition-colors font-medium">              {t('navbar.menu.edunation')}            </Link>            <div className="relative group">              <Link href="#agenda" className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center">                {t('navbar.menu.agenda')}                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />                </svg>              </Link>              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">                <Link href="#fgd1-previous" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">                  {t('navbar.submenu.fgd1')}                </Link>                <Link href="#fgd_1" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">                  {t('navbar.submenu.fgd2')}                </Link>                <Link href="#fgd_3" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">                  {t('navbar.submenu.fgd3')}                </Link>              </div>            </div>            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">              {t('navbar.menu.contact')}            </Link>            <a              href="https://docs.google.com/forms/d/e/1FAIpQLSf-9KQmex5Lzoda2asfK8g2vlmBlzO4s23aHskE9jVa6uilWA/viewform"              target="_blank"              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-xl"            >              {t('navbar.menu.register')}            </a>          </div>          {/* Mobile menu button */}          <div className="md:hidden flex items-center">            <button              onClick={() => setIsOpen(!isOpen)}              className="text-gray-700 hover:text-green-600 focus:outline-none"            >              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">                {isOpen ? (                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />                ) : (                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />                )}              </svg>            </button>          </div>        </div>        {/* Mobile Menu */}        {isOpen && (          <div className="md:hidden">            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">              <Link href="#about" className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                {t('navbar.menu.about')}
              </Link>
              <Link href="#benefits" className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                {t('navbar.menu.benefits')}
              </Link>
              <Link href="#edunation" className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                {t('navbar.menu.edunation')}
              </Link>
              <div className="px-3 py-1">
                <div className="text-sm font-semibold text-gray-500 mb-2">{t('navbar.submenu.agenda')}</div>
                <div className="pl-4 space-y-1">
                  <Link href="#fgd1-previous" className="block px-3 py-2 text-gray-600 hover:text-green-600 text-sm">
                    {t('navbar.submenu.fgd1')}
                  </Link>
                  <Link href="#fgd_1" className="block px-3 py-2 text-gray-600 hover:text-green-600 text-sm">
                    {t('navbar.submenu.fgd2')}
                  </Link>
                  <Link href="#fgd_3" className="block px-3 py-2 text-gray-600 hover:text-green-600 text-sm">
                    {t('navbar.submenu.fgd3')}
                  </Link>
                </div>
              </div>
              <Link href="#contact" className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                {t('navbar.menu.contact')}
              </Link>
              <div className="px-3 pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf-9KQmex5Lzoda2asfK8g2vlmBlzO4s23aHskE9jVa6uilWA/viewform"
                  target="_blank"
                  className="block w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center font-semibold"
                >
                  {t('navbar.menu.register')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
