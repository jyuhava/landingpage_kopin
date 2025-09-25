import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProposalEdunation() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Hero Section dengan efek parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://kopinindonesia.org/foto_fgd_5.jpeg')] bg-cover bg-center bg-fixed"
          style={{ transform: 'translateZ(0)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium mb-4 border border-green-500/30">
              Educational International Festival
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Proposal <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Edu Nation</span> Fest 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            "Towards Indonesia Emas & Global Education"
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-lg font-semibold">7-9 November 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-lg font-semibold">Assembly Hall, JICC</p>
            </div>
          </div>
          
          <div className="mt-12 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                      Ketua KOPIN
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                    GREETINGS
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
                  </h2>
                  
                  <p className="text-sm text-gray-600 mb-2 font-medium">Ustadz Dr. Ali Saman Hasan, Lc., L.LM., M.A</p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="bg-white/50 p-4 rounded-lg border-l-4 border-green-500">
                      Segala puji bagi Allah SWT yang telah memberikan kita nikmat iman, Islam,
                      serta kesempatan untuk terus berkhidmat dalam dunia pendidikan. Shalawat
                      serta salam semoga senantiasa tercurah kepada junjungan kita, Nabi
                      Muhammad ﷺ, keluarga, sahabat, dan pengikut beliau hingga akhir zaman.
                    </p>
                    
                    <p>
                      Atas nama Konsorsium Pendidikan Islam Internasional (KOPIN), saya
                      menyampaikan apresiasi yang sebesar-besarnya atas terselenggaranya
                      EdunationFest 2025, sebuah ajang pameran pendidikan internasional yang
                      akan menjadi titik temu penting bagi para pendidik, lembaga, dan generasi
                      muda dalam membangun ekosistem pendidikan Islam yang kolaboratif,
                      inovatif, dan berstandar global.
                    </p>
                    
                    <p>
                      KOPIN hadir sebagai wadah strategis untuk menghubungkan lembaga
                      pendidikan Islam di Indonesia dengan jejaring internasional, memastikan
                      bahwa nilai-nilai Islam dapat terus dihidupkan sejalan dengan perkembangan
                      global. Melalui kegiatan seperti EdunationFest 2025, kita berharap akan lahir
                      sinergi baru, ide-ide segar, serta peluang kerja sama yang dapat memperkuat
                      daya saing pendidikan Islam Indonesia di kancah dunia.
                    </p>
                    
                    <p className="bg-white/50 p-4 rounded-lg border-l-4 border-blue-500">
                      Saya mengajak seluruh peserta, lembaga, dan mitra untuk menjadikan
                      momentum ini sebagai langkah nyata dalam membangun peradaban Islam
                      yang unggul melalui pendidikan. Semoga Allah SWT meridai setiap ikhtiar
                      kita, memudahkan jalan kita, dan menjadikan acara ini penuh manfaat serta
                      keberkahan.
                    </p>
                  </div>
                  
                  <p className="text-right font-semibold mt-6 text-gray-800">
                    Dr. Ali Saman Hasan, Lc., L.LM., M.A.<br />
                    <span className="text-green-600">Ketua KOPIN</span>
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
              Mengapa Diadakan EduNation Fest 2025
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Festival pendidikan internasional yang menghubungkan talenta Indonesia dengan peluang global</p>
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
                        Mencari Talenta-Talenta Terbaik dari Indonesia
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Di sisi lain, institusi pendidikan internasional saat ini sedang aktif mencari talenta-
                        talenta muda dari Indonesia. Mereka menyadari potensi besar generasi muda
                        Indonesia yang memiliki semangat belajar tinggi, daya saing global, dan
                        kemampuan beradaptasi dalam berbagai lingkungan multikultural.
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
                        Menampilkan Keunggulan Program Pendidikan
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Melalui Edunation Festival, institusi pendidikan dari berbagai negara
                        memiliki kesempatan untuk menampilkan keunggulan program pendidikan,
                        fasilitas, serta pendekatan pembelajaran mereka secara langsung kepada
                        publik Indonesia.
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
                        Minimnya Akses Informasi yang Komprehensif
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Di era globalisasi dan persaingan internasional yang semakin ketat, akses
                        terhadap informasi pendidikan yang komprehensif dan terpercaya menjadi
                        kebutuhan mendesak bagi para pelajar dan orang tua di Indonesia.
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
              PORTOFOLIO
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Pengalaman kami dalam menyelenggarakan acara pendidikan berkualitas</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lingkup Sekolah */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">LINGKUP SEKOLAH</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_1.png" alt="WAFAIR" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. WAFAIR</h4>
                    <p className="text-sm text-gray-600">
                      Pameran pendidikan yang berada dalam lingkup sekolah. Acara ini diadakan untuk
                      mengenalkan berbagai perguruan tinggi kepada para siswa, bertujuan untuk
                      memberikan wawasan bagi para siswa tentang jalur perguruan tinggi, beasiswa,
                      dan karier.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_2.png" alt="Campus Sharing" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. Campus Sharing 2023</h4>
                    <p className="text-sm text-gray-600">
                      Ramah tamah yang mempertemukan siswa Al Wafi dari jenjang SMP dan SMA
                      dengan para alumni. Dalam acara ini, para alumni yang saat ini tersebar di
                      berbagai perguruan tinggi, baik di dalam maupun luar negeri, akan berbagi
                      pengalaman dan informasi seputar kehidupan kampus.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_3.png" alt="Al-Irsyad EduFest" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">3. Al-Irsyad EduFest</h4>
                    <p className="text-sm text-gray-600">
                      Kegiatan tahunan yang diinisiasi oleh alumni Pesantren Islam Al Irsyad
                      Tengaran untuk para santri tingkat SMA. Acara ini menghadirkan Campus Expo,
                      workshop, sharing alumni, dan tryout ITAF.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lingkup Nasional */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">LINGKUP NASIONAL</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_nasional_1.png" alt="EXPO ASESI" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. EXPO ASESI</h4>
                    <p className="text-sm text-gray-600">
                      Pameran pendidikan Islam yang diselenggarakan oleh ASESI (Perkumpulan
                      Komunikasi Sekolah Sunnah Indonesia). Kegiatan ini menjadi ajang strategis bagi
                      sekolah-sekolah Sunnah dan pesantren dari seluruh Indonesia.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group hover:bg-gray-50 p-4 rounded-xl transition-colors">
                  <div className="flex-shrink-0">
                    <img src="/edunation/portfolio_nasional_2.png" alt="PULDAPIA EXPO" className="w-20 h-20 rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. PULDAPIA EXPO</h4>
                    <p className="text-sm text-gray-600">
                      Festival pendidikan islam yang mempertemukan berbagai lembaga pendidikan
                      islam, termasuk sekolah dan pesantren, dalam satu ajang kolaborasi dan promosi.
                      Diselenggarakan di Jakarta Convention Center sebagai bagian dari Indonesia Muslim
                      Life fest.
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
              OUR EVENT
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Berbagai kegiatan menarik yang akan menghiasi EduNation Fest 2025</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">1. Perlombaan Pendidikan</h3>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">2. Pameran Pendidikan</h3>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">3. EduTalk (4 Kacamata)</h3>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/30">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">4. Institutional Matchmaking</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Pameran Pendidikan Section dengan card yang lebih menarik */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              PAMERAN PENDIDIKAN
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Menghubungkan lembaga pendidikan nasional dan internasional dengan calon peserta didik</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src="/edunation/edunation_fest_national.png" alt="Lembaga Pendidikan Nasional" className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Lembaga Pendidikan Nasional</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    SD (Sekolah Dasar)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    SMP/MTS (Sekolah Menengah Pertama / Madrasah Tsanawiyah)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    SMA/MA (Sekolah Menengah Atas / Madrasah Aliyah)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Perguruan tinggi
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src="/edunation/edunation_fest_international.png" alt="Lembaga Pendidikan Internasional" className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Lembaga Pendidikan Internasional</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    SD (Sekolah Dasar)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    SMP/MTS (Sekolah Menengah Pertama / Madrasah Tsanawiyah)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    SMA/MA (Sekolah Menengah Atas / Madrasah Aliyah)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Perguruan tinggi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* EduTalk Sections dengan tab navigation */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              EDUTALK (4 KACAMATA)
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Berbagai perspektif dari para ahli dan praktisi pendidikan</p>
          </div>

          {/* Regulator */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">REGULATOR PENDIDIKAN</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdul_muti.png" alt="Prof. Dr. H. Abdul Mu'ti, M.Ed., M.A." className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. Prof. Dr. H. Abdul Mu'ti, M.Ed., M.A.</h4>
                    <p className="text-gray-600 text-sm mt-2">Menteri Pendidikan Dasar dan Menengah Republik Indonesia</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/brian_yuliarto.png" alt="Prof. Brian Yuliarto, S.T., M.Eng., Ph.D." className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. Prof. Brian Yuliarto, S.T., M.Eng., Ph.D.</h4>
                    <p className="text-gray-600 text-sm mt-2">Kementerian Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/nasarudin_umar.png" alt="Prof. Dr. KH. Nasaruddin Umar" className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. Prof. Dr. KH. Nasaruddin Umar</h4>
                    <p className="text-gray-600 text-sm mt-2">Menteri Agama Republik Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tokoh Pendidikan */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">TOKOH PENDIDIKAN</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/jusuf_kalla.png" alt="Drs. H. Muhammad Jusuf Kalla" className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. Drs. H. Muhammad Jusuf Kalla</h4>
                    <p className="text-gray-600 text-sm mt-2">Wakil Presiden Republik Indonesia Periode 2004-2009 & 2014-2019</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/anies_baswedan.png" alt="Prof. Dr. (H.C.) Anies Rasyid Baswedan, M.B.A., Ph.D." className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. Prof. Dr. (H.C.) Anies Rasyid Baswedan, M.B.A., Ph.D.</h4>
                    <p className="text-gray-600 text-sm mt-2">Gubernur DKI Jakarta periode 2017–2022, Menteri Pendidikan dan Kebudayaan Kabinet Kerja (2014-2016)</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-500 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/muhadjir_efendi.png" alt="Prof. Dr. Muhadjir Effendy, M.AP" className="w-24 h-24 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. Prof. Dr. Muhadjir Effendy, M.AP</h4>
                    <p className="text-gray-600 text-sm mt-2">Plt. Menteri Pemuda dan Olahraga (2023), Plt. Menteri Sosial (2020 dan 2024), Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan (2019-2024), Menteri Pendidikan dan Kebudayaan (2016-2019)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pakar Pendidikan */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">PAKAR PENDIDIKAN</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/taufik_kasturi.png" alt="Prof. Taufik Kasturi, M.Si., Ph.D." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. Prof. Taufik Kasturi, M.Si., Ph.D.</h4>
                    <p className="text-gray-600 text-sm mt-2">Dekan Fakultas Psikologi, UMS (2021-2025), Wakil Rektor Bidang Kemahasiswaan, UMS (2017-2021), Dekan Fakultas Psikologi, UMS (2014-2017)</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/putra_asga_eevri.png" alt="Putra Asga Elevri, S.Si., M.Si." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. Putra Asga Elevri, S.Si., M.Si.</h4>
                    <p className="text-gray-600 text-sm mt-2">Analis Kebijakan Jabatan Fungsional Madya (2020-2022), Direktur Guru Pendidikan Menengah dan Pendidikan Khusus (2022-Sekarang), Kepala Sub Direktorat (2019-2020)</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="\edunation\muhammad_zuhdi.png" alt="Prof. Muhammad Zuhdi M.Ed., Ph.D." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. Prof. Muhammad Zuhdi M.Ed., Ph.D.</h4>
                    <p className="text-gray-600 text-sm mt-2">Kepala UI Halal Center (2021-2024), Wakil Rektor Bidang Sumber Daya Manusia dan Aset UI (2019-2020), Direktur SKSG dan Kaprodi KTTI (2014-2019), Atase Pendidikan dan Kebudayaan (2009-2013)</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="\edunation\maila_dinia.png" alt="Prof. Maila Dinia Husni Rahiem, M.A., Ph.D." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">4. Prof. Maila Dinia Husni Rahiem, M.A., Ph.D.</h4>
                    <p className="text-gray-600 text-sm mt-2">Konsultor editor internasional International Journal of Children’s Stanford/Elsevier Top 2% Scientists Worldwide 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENDEKIAWAN MUSLIM */}
          <div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-2xl p-6 text-center">
              <h3 className="text-2xl font-bold">CENDEKIAWAN MUSLIM</h3>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/rizal_yuliar_putrananda.png" alt="Ustadz Rizal Yuliar Putrananda, Lc." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">1. Ustadz Rizal Yuliar Putrananda, Lc.</h4>
                    <p className="text-gray-600 text-sm">Pengasuh Pesantren Al-Lu’lu’ Wal Marjan</p>
                    <p className="text-gray-600 text-sm">Pembimbing Umroh di Dauroh Travel</p>
                    <p className="text-gray-600 text-sm">pemateri di Rodja TV</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdul_aziz_al_owainy.png" alt="Ustadz Abdul Aziz Al Owainy, Lc." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">2. Ustadz Abdul Aziz Al Owainy, Lc.</h4>
                    <p className="text-gray-600 text-sm">Sekretaris yayasan Imam Muzani Boarding School</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/mufy_hanif_thalib.png" alt="Ustadz Mufy Hanif Thalib, Lc." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">3. Ustadz Mufy Hanif Thalib, Lc.</h4>
                    <p className="text-gray-600 text-sm">Pemateri tetap di kanal Yufid TV </p>
                    <p className="text-gray-600 text-sm">Alumus University Islamic Medina </p>
                    <p className="text-gray-600 text-sm">Pembimbing/Tour Leader Umroh Nakhla Tour</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdurrahman_zahier.png" alt="Ustadz Abdurrahman Zahier, BBA." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">4. Ustadz Abdurrahman Zahier, BBA.</h4>
                    <p className="text-gray-600 text-sm">Pengajar sharia di Hijra (2025 - saat ini)</p>
                    <p className="text-gray-600 text-sm">Konsultan sharia di paragoncrop ( 2024 - saat ini)</p>
                    <p className="text-gray-600 text-sm">Pengajar fiqh muamalah ITAF  (2019 - 2022)</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abdullah_roy.png" alt="Dr. Abdullah Roy, M.A" className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">5. Dr. Abdullah Roy, M.A</h4>
                    <p className="text-gray-600 text-sm">Pengajar di masjid Nabawi ( 2013 - 2017)</p>
                    <p className="text-gray-600 text-sm">Founder HSI Abdullah Roy </p>
                    <p className="text-gray-600 text-sm">Ketua STIT Riyadhussholihin </p>
                    <p className="text-gray-600 text-sm">Dosen di STDI Imam syafii</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abduh_tuasikal.png" alt="Dr. K.H. Muhammad Abduh Tuasikal, S.T., M.Sc." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">6. Dr. K.H. Muhammad Abduh Tuasikal, S.T., M.Sc.</h4>
                    <p className="text-gray-600 text-sm">Pembina pondok pesantren Darush Sholihin </p>
                    <p className="text-gray-600 text-sm">Pembina yayasan Darush Sholihin </p>
                    <p className="text-gray-600 text-sm">Pembina dan penasehat KPMI </p>
                    <p className="text-gray-600 text-sm">Anggota MUI Gunung Kidul</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/abu_yahya_badrussalam.png" alt="Ustadz Abu Yahya Badrusalam, Lc." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">7. Ustadz Abu Yahya Badrusalam, Lc.</h4>
                    <p className="text-gray-600 text-sm">Pembina dan pengasuh Radio Rodja</p>
                    <p className="text-gray-600 text-sm">Pemateri di Safdah TV </p>
                    <p className="text-gray-600 text-sm">Pengajar di mahad Ulum Syariyyah  </p>
                    <p className="text-gray-600 text-sm">Penasehat di Al Minhaj Islamic Boarding School</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/raehanul_bahrain.png" alt="Ustadz dr. Raehanul Bahraen, M.Sc, Sp.PK" className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">8. Ustadz dr. Raehanul Bahraen, M.Sc, Sp.PK</h4>
                    <p className="text-gray-600 text-sm">Dosen Fakultas kedokteran Universitas Mataram</p>
                    <p className="text-gray-600 text-sm">Dokter Spesialis Patologi Klinik di RSUP NTB</p>
                    <p className="text-gray-600 text-sm">Ketua Yayasan Pendidikan Islam Al-Atsari </p>
                    <p className="text-gray-600 text-sm">Pembina KIPMI (Komunitas Ilmuan dan Profesional Muslim Indonesia)</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/khalid_basalamah.png" alt="Dr. Khalid Zeed Basalamah, Lc., M.A." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">9. Dr. Khalid Zeed Basalamah, Lc., M.A.</h4>
                    <p className="text-gray-600 text-sm">Ketua umum yayasan Ats-Tsabath </p>
                    <p className="text-gray-600 text-sm">Ketua forum pengirim dai Irian </p>
                    <p className="text-gray-600 text-sm">Penasehat wesaltv Jakarta </p>
                    <p className="text-gray-600 text-sm">Direktur di PT. Ajwad</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img src="/edunation/nuzul_dzikri.png" alt="Ustadz Muhammad Nuzul Dzikri, Lc." className="w-20 h-20 rounded-full shadow-md mb-4 object-cover" />
                    <h4 className="font-semibold text-gray-800">10. Ustadz Muhammad Nuzul Dzikri, Lc.</h4>
                    <p className="text-gray-600 text-sm">Pemateri tetap di masjid Nurul iman Blok M </p>
                    <p className="text-gray-600 text-sm">Pemateri kajian mahasiswa FK UI (2013-2014)</p>
                    <p className="text-gray-600 text-sm">Pemateri di YISC di masjid Al Azhar</p>
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
              INSTITUTIONAL MATCHMAKING
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Menghubungkan lembaga pendidikan dengan calon mitra strategis</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Tujuan Institutional Matchmaking</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Memfasilitasi pertemuan antara lembaga pendidikan nasional dan internasional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Menciptakan peluang kerja sama yang saling menguntungkan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Membangun jaringan pendidikan yang kuat dan berkelanjutan</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Manfaat bagi Peserta</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Akses langsung ke lembaga pendidikan terkemuka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Peluang untuk membangun kemitraan strategis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Kesempatan untuk berbagi praktik terbaik dalam pendidikan</span>
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
              TARGET PESERTA
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Berbagai kalangan yang akan terlibat dalam Edunation Fest 2025</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9 5m-9-5v10" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Pelajar</h3>
              <p className="text-gray-600 text-sm">SD, SMP, SMA, dan Mahasiswa</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Orang Tua</h3>
              <p className="text-gray-600 text-sm">Wali murid dan calon wali murid</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Lembaga Pendidikan</h3>
              <p className="text-gray-600 text-sm">Sekolah, kampus, dan pesantren</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Pemerhati Pendidikan</h3>
              <p className="text-gray-600 text-sm">Penggiat dan pemerhati dunia pendidikan</p>
            </div>
          </div>
        </div>

        {/* Target Jumlah Pengunjung Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              TARGET JUMLAH PENGUNJUNG
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Jumlah pengunjung yang ditargetkan untuk Edunation Fest 2025</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="text-6xl font-bold mb-4">15.000+</div>
              <p className="text-xl">Pengunjung Selama 3 Hari Pelaksanaan</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">5.000+</div>
                <p>Hari Pertama</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">5.000+</div>
                <p>Hari Kedua</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="text-3xl font-bold">5.000+</div>
                <p>Hari Ketiga</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section dengan visual yang menarik */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              TIMELINE
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Rencana pelaksanaan Edunation Fest 2025</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-4 gap-0">
              <div className="bg-gradient-to-b from-green-500 to-blue-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">1</div>
                <h3 className="text-xl font-semibold">Persiapan</h3>
                <p className="mt-2">Juli - September 2025</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-500 to-purple-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">2</div>
                <h3 className="text-xl font-semibold">Promosi</h3>
                <p className="mt-2">Oktober 2025</p>
              </div>
              
              <div className="bg-gradient-to-b from-purple-500 to-pink-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <h3 className="text-xl font-semibold">Pelaksanaan</h3>
                <p className="mt-2">7-9 November 2025</p>
              </div>
              
              <div className="bg-gradient-to-b from-pink-500 to-red-500 text-white p-6 text-center">
                <div className="text-4xl font-bold mb-2">4</div>
                <h3 className="text-xl font-semibold">Evaluasi</h3>
                <p className="mt-2">Desember 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section dengan form yang menarik */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              KONTAK KAMI
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Hubungi kami untuk informasi lebih lanjut tentang Edunation Fest 2025</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Telepon</h4>
                      <p className="text-gray-600">+62 812-3456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@edunationfest2025.com</p>
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
                      <h4 className="font-semibold text-gray-800">Alamat</h4>
                      <p className="text-gray-600">Assembly Hall, Jakarta International Convention Center (JICC), Jakarta</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Masukkan alamat email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Pesan</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Tulis pesan Anda di sini"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:-translate-y-1"
                  >
                    Kirim Pesan
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