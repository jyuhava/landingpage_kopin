import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-20">

        <div className="w-full h-[470px] bg-[url('https://kopinindonesia.org/foto_fgd_5.jpeg')] bg-center">
            <div className="bg-slate-900/80 w-full h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full place-content-center">
                    {/* Header Section */}
                    <div className="text-center mb-16 flex flex-col gap-4">
                        <h1 className="text-5xl font-bold text-white-800 mb-4">
                        EduNation International Education Festival 2025
                        </h1>
                        <p className="text-2xl text-green-600 font-semibold mb-2">
                        Towards Indonesia Emas & Global Education
                        </p>
                        <p className="text-xl text-white-600">
                        7–9 November 2025 | Assembly Hall, Jakarta International Convention Center (JICC), Indonesia
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Welcome Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome to EduNationFest 2025
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                EduNationFest is not just an exhibition — it is a global platform for education, innovation, and collaboration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Hosted by the International Islamic Education Consortium (KOPIN), the festival brings together leading universities, schools, policymakers, scholars, and investors to create opportunities that shape the future of education in Indonesia and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This three-day event offers inspiration, networking, and cultural exchange, connecting Indonesia's vibrant education ecosystem with the world.
              </p>
            </div>
          </div>

          {/* Why EduNationFest Matters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why EduNationFest Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="text-2xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">For Students & Parents</h3>
                <p className="text-gray-600">Access reliable information about global study opportunities, scholarships, and career pathways.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="text-2xl mb-3">🌐</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">For Institutions</h3>
                <p className="text-gray-600">Showcase excellence, recruit top Indonesian talents, and build international recognition.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">For Educators & Policymakers</h3>
                <p className="text-gray-600">Exchange best practices, explore new curricula, and discuss the future of global Islamic education.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="text-2xl mb-3">💼</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">For Investors</h3>
                <p className="text-gray-600">Discover sustainable, high-impact investment opportunities in one of the world's fastest-growing education markets.</p>
              </div>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Event Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl mb-3">🎓</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Education Exhibition</h3>
                <p className="text-gray-600">Explore leading institutions from Indonesia, the Middle East, Asia, and beyond.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl mb-3">🎤</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">EduTalk (Four Perspectives)</h3>
                <p className="text-gray-600">Engage with regulators, thought leaders, education experts, and Muslim scholars.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl mb-3">🏆</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">National & International Competitions</h3>
                <p className="text-gray-600">Debate, public speaking, poetry, digital content creation, film, design, photography, and more.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl mb-3">🤝</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Institutional Matchmaking</h3>
                <p className="text-gray-600">Build collaborations through exchange programs, joint research, double degrees, and investment partnerships.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl mb-3">🍴</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Food & Culture Pavilion</h3>
                <p className="text-gray-600">Enjoy curated halal culinary experiences and cultural showcases.</p>
              </div>
            </div>
          </div>

          {/* Distinguished Guests & Speakers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Distinguished Guests & Speakers
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EduNationFest will host influential leaders and global experts, including:
              </p>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">H.E. Jusuf Kalla – Former Vice President of Indonesia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Prof. Dr. Anies Baswedan – Former Governor of Jakarta, Former Minister of Education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Prof. Dr. Muhadjir Effendy – Coordinating Minister for Human Development and Culture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Leading academics, innovators, and internationally recognized Muslim scholars</span>
                </div>
              </div>
            </div>
          </div>

          {/* Opportunities for Global Partners */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Opportunities for Global Partners
            </h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EduNationFest offers exclusive opportunities for institutions and sponsors to gain visibility and impact:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Exhibition Booths</h3>
                  <p className="text-gray-600 mb-2">Tailored packages for local and international participants.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Sponsorship Tiers</h3>
                  <p className="text-gray-600 mb-2">Title, Main, Official, and Supporting packages with high-value benefits (logo placement, keynote slots, workshops, media exposure, and more).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic Partnerships</h3>
                  <p className="text-gray-600 mb-2">Engage in collaborative programs, joint initiatives, and long-term investment ventures.</p>
                </div>
              </div>
            </div>
          </div>

          {/* About KOPIN */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              About KOPIN
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                The International Islamic Education Consortium (KOPIN) is a strategic forum of leading accredited Islamic educational institutions in Indonesia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                KOPIN bridges Islamic education with global standards, ensuring excellence and innovation while upholding timeless values.
              </p>
            </div>
          </div>

          {/* Join Us in Jakarta */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Join Us in Jakarta
            </h2>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg text-center">
              <p className="text-xl leading-relaxed">
                From 7–9 November 2025, Jakarta will become the hub where education meets opportunity.
              </p>
              <p className="text-xl leading-relaxed mt-4">
                Whether you are a student, educator, policymaker, or investor, EduNationFest 2025 is your gateway to Indonesia's future in global education.
              </p>
            </div>
          </div>

          {/* Contact & Registration */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Contact & Registration
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6 text-center">
                📌 For sponsorship, exhibition, or partnership inquiries:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Adra</h3>
                  <a href="tel:+6281318274233" className="text-green-600 hover:text-green-700 font-semibold">
                    +62 813 1827 4233
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Abdurrahman</h3>
                  <a href="tel:+6285893812675" className="text-green-600 hover:text-green-700 font-semibold">
                    +62 858 9381 2675
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">YaaFi</h3>
                  <a href="tel:+6281385116830" className="text-green-600 hover:text-green-700 font-semibold">
                    +62 813 8511 6830
                  </a>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-2xl text-gray-800">✨ EduNationFest 2025 – Collaborating today, transforming education tomorrow. ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
