import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "EduNation Fest 2025: Pameran Pendidikan Islam Internasional",
      excerpt: "Perkembangan teknologi, khususnya kecerdasan buatan (AI), telah mengubah secara fundamental cara manusia bekerja, belajar, dan hidup. Di tengah derasnya arus perubahan global ini, dunia pendidikan dituntut untuk tidak hanya mengikuti perkembangan zaman, tetapi juga memimpin transformasi untuk masa depan yang lebih baik.",
      content: `
        <p>Perkembangan teknologi, khususnya kecerdasan buatan (AI), telah mengubah secara fundamental cara manusia bekerja, belajar, dan hidup. Di tengah derasnya arus perubahan global ini, dunia pendidikan dituntut untuk tidak hanya mengikuti perkembangan zaman, tetapi juga memimpin transformasi untuk masa depan yang lebih baik.</p>
        
        <p>EduNation Fest 2025 hadir sebagai respons terhadap tantangan tersebut. Acara ini merupakan pameran pendidikan Islam internasional yang akan menampilkan inovasi terdepan dalam dunia pendidikan Islam, menggabungkan nilai-nilai tradisional dengan teknologi modern.</p>
        
        <p>Event ini akan diselenggarakan pada 29-31 Agustus 2025 di Hall 8 ICE BSD City, dengan tema "Menuju Indonesia Emas & Pendidikan Global". Para peserta akan mendapatkan kesempatan untuk melihat langsung bagaimana institusi pendidikan Islam dapat beradaptasi dengan era digital tanpa kehilangan jati diri dan nilai-nilai keislaman.</p>
      `,
      source: "Berita Satu",
      date: "2025-05-21",
      link: "https://www.beritasatu.com/network/beritakotaid/569664/edunation-fest-2025-pameran-pendidikan-islam-internasional#google_vignette"
    },
    {
      id: 2,
      title: "EduNation Fest 2025: Pameran Pendidikan Islam Internasional untuk Generasi Masa Depan",
      excerpt: "Di tengah pesatnya perkembangan teknologi, khususnya kecerdasan buatan (AI), transformasi dalam dunia pendidikan menjadi hal yang tak terhindarkan. Lembaga pendidikan Islam perlu mengadaptasi pendekatan pembelajaran yang mengintegrasikan teknologi modern dengan nilai-nilai islami.",
      content: `
        <p>Di tengah pesatnya perkembangan teknologi, khususnya kecerdasan buatan (AI), transformasi dalam dunia pendidikan menjadi hal yang tak terhindarkan. Lembaga pendidikan Islam perlu mengadaptasi pendekatan pembelajaran yang mengintegrasikan teknologi modern dengan nilai-nilai islami.</p>
        
        <p>EduNation Fest 2025 menjadi platform yang tepat untuk mempertemukan para pendidik, teknolog, dan praktisi pendidikan Islam dalam satu forum yang komprehensif. Acara ini tidak hanya menampilkan produk dan layanan pendidikan, tetapi juga menyediakan workshop, seminar, dan diskusi panel yang berkaitan dengan masa depan pendidikan Islam.</p>
        
        <p>Generasi masa depan membutuhkan pendidikan yang tidak hanya fokus pada aspek akademis, tetapi juga karakter dan spiritualitas. EduNation Fest 2025 akan menunjukkan bagaimana hal ini dapat dicapai melalui pendekatan yang holistik dan terintegrasi.</p>
      `,
      source: "GENZ.ID",
      date: "2025-05-21",
      link: "https://genz.id/edunation-fest-2025-pameran-pendidikan-islam-internasional/"
    },
    {
      id: 3,
      title: "KOPIN Luncurkan Konsorsium Pendidikan Islam Internasional",
      excerpt: "Konsorsium Pendidikan Islam Internasional (KOPIN) resmi diluncurkan sebagai wadah kolaboratif untuk memperkuat ekosistem pendidikan Islam berstandar global di Indonesia.",
      content: `
        <p>Konsorsium Pendidikan Islam Internasional (KOPIN) resmi diluncurkan sebagai wadah kolaboratif untuk memperkuat ekosistem pendidikan Islam berstandar global di Indonesia. Inisiatif ini hadir untuk menjawab tantangan globalisasi dan digitalisasi dalam dunia pendidikan.</p>
        
        <p>KOPIN bertujuan untuk memfasilitasi kerja sama antar lembaga pendidikan Islam terakreditasi A di Indonesia, baik sekolah maupun pesantren, untuk mencapai standar internasional tanpa kehilangan identitas keislaman.</p>
        
        <p>Melalui KOPIN, diharapkan terbangun sinergi yang produktif dalam berbagai bidang seperti pengembangan kurikulum, pertukaran pelajar dan guru, riset kolaboratif, serta promosi pendidikan Islam Indonesia di tingkat internasional.</p>
      `,
      source: "beritakota.id",
      date: "2025-05-21",
      link: "https://beritakota.id/edunation-fest-2025-pameran-pendidikan-islam-internasional/"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Berita & Artikel
            </h1>
            <p className="text-xl text-gray-600">
              Informasi terbaru seputar KOPIN dan EduNation Fest 2025
            </p>
          </div>

          <div className="space-y-12">
            {news.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm text-green-600 font-semibold">
                      {article.source}
                    </span>
                    <span className="text-sm text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-600">
                      {new Date(article.date).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {article.title}
                  </h2>
                  
                  <div className="prose max-w-none text-gray-700 mb-6">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  </div>
                  
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold hover:underline"
                  >
                    Baca artikel lengkap
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
