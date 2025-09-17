'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://kopinindonesia.org/real_logo_kopin.png" 
                alt="KOPIN Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">{t('footer.logo.title')}</h3>
                <p className="text-gray-400 text-sm">{t('footer.logo.subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/edunationfest/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C23.974 5.367 18.607.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.quickLinks.benefits')}
                </Link>
              </li>
              <li>
                <Link href="#edunation" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.quickLinks.edunation')}
                </Link>
              </li>
              <li>
                <Link href="#agenda" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.quickLinks.agenda')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.resources.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.resources.blog')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.resources.faq')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.resources.documents')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.resources.gallery')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.legal.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.legal.terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.legal.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
