'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.cards.address.title')}</h3>
            <a
              href="https://www.google.com/maps?q=Grand+Galaxy+City,+Jl.+Boulevard+Raya+Blok+RGF+No.16,+RT.007/RW.018,+Jaka+Setia,+Kec.+Bekasi+Sel.,+Kota+Bks,+Jawa+Barat+17147"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors leading-relaxed block"
            >
              {t('contact.cards.address.address').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t('contact.cards.address.address').split('\n').length - 1 && <br />}
                </span>
              ))}
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.cards.email.title')}</h3>
            <a
              href="mailto:info@kopinindonesia.org"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              {t('contact.cards.email.email')}
            </a>
            <p className="text-sm text-gray-500 mt-2">
              {t('contact.cards.email.response')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.cards.whatsapp.title')}</h3>
            <a
              href="https://wa.me/6282118087397?text=Assalamualaikum%2C%20saya%20tertarik%20dan%20ingin%20menanyakan%20event%20KOPIN%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors text-lg"
            >
              {t('contact.cards.whatsapp.phone')}
            </a>
            <p className="text-sm text-gray-500 mt-2">
              {t('contact.cards.whatsapp.contact')}
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t('contact.form.title')}</h3>
            <p className="text-gray-600">
              {t('contact.form.subtitle')}
            </p>
          </div>
          
          <form className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  {t('contact.form.fields.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder={t('contact.form.fields.name.placeholder')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  {t('contact.form.fields.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder={t('contact.form.fields.email.placeholder')}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="institution" className="block text-sm font-semibold text-gray-700">
                  {t('contact.form.fields.institution.label')}
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder={t('contact.form.fields.institution.placeholder')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                  {t('contact.form.fields.phone.label')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                  placeholder={t('contact.form.fields.phone.placeholder')}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('contact.form.fields.subject.label')}
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
              >
                <option value="">{t('contact.form.fields.subject.placeholder')}</option>
                <option value="edunation">{t('contact.form.fields.subject.options.edunation')}</option>
                <option value="membership">{t('contact.form.fields.subject.options.membership')}</option>
                <option value="collaboration">{t('contact.form.fields.subject.options.collaboration')}</option>
                <option value="general">{t('contact.form.fields.subject.options.general')}</option>
                <option value="other">{t('contact.form.fields.subject.options.other')}</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                {t('contact.form.fields.message.label')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none"
                placeholder={t('contact.form.fields.message.placeholder')}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 px-12 rounded-full font-bold text-lg hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {t('contact.form.button')}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">{t('contact.social.title')}</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/kopinindonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.985-5.368 11.985-11.986C24.002 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.877-.808-1.297-1.959-1.297-3.257 0-1.297.42-2.448 1.297-3.326.878-.877 2.029-1.297 3.326-1.297 1.298 0 2.449.42 3.327 1.297.877.878 1.297 2.029 1.297 3.326 0 1.298-.42 2.449-1.297 3.257-.878.807-2.029 1.297-3.327 1.297zm0-7.75c-.98 0-1.82.35-2.519 1.05-.699.7-1.05 1.54-1.05 2.52 0 .98.351 1.82 1.05 2.52.699.699 1.539 1.049 2.519 1.049.98 0 1.82-.35 2.52-1.049.699-.7 1.049-1.54 1.049-2.52 0-.98-.35-1.82-1.049-2.52-.7-.7-1.54-1.05-2.52-1.05zm5.84 7.315v-2.52h2.52v2.52h-2.52zm0-3.57v-2.52h2.52v2.52h-2.52z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/edunationfest/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.985-5.368 11.985-11.986C24.002 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.877-.808-1.297-1.959-1.297-3.257 0-1.297.42-2.448 1.297-3.326.878-.877 2.029-1.297 3.326-1.297 1.298 0 2.449.42 3.327 1.297.877.878 1.297 2.029 1.297 3.326 0 1.298-.42 2.449-1.297 3.257-.878.807-2.029 1.297-3.327 1.297zm0-7.75c-.98 0-1.82.35-2.519 1.05-.699.7-1.05 1.54-1.05 2.52 0 .98.351 1.82 1.05 2.52.699.699 1.539 1.049 2.519 1.049.98 0 1.82-.35 2.52-1.049.699-.7 1.049-1.54 1.049-2.52 0-.98-.35-1.82-1.049-2.52-.7-.7-1.54-1.05-2.52-1.05zm5.84 7.315v-2.52h2.52v2.52h-2.52zm0-3.57v-2.52h2.52v2.52h-2.52z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-600 mt-4">
            {t('contact.social.accounts')}
          </p>
        </div>
      </div>
    </section>
  );
}
