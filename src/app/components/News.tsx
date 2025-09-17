'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function News() {
  const { t, getData } = useLanguage();
  const newsData = getData('news');

  if (!newsData) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.articles?.map((article: any, index: number) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* News Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <p className="text-sm font-medium">{t('news.imageAlt')}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-green-600">{article.source}</p>
                    <p className="text-gray-500">{article.date}</p>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-semibold hover:underline"
                  >
                    {t('news.readMore')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            {t('news.viewMore')}
          </button>
        </div>
      </div>
    </section>
  );
}
