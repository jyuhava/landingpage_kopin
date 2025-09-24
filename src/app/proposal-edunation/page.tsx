import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProposalEduNationPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="w-full h-[470px] bg-[url('https://kopinindonesia.org/foto_fgd_5.jpeg')] bg-center">
            <div className="bg-slate-900/80 w-full h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full place-content-center">
                    {/* Header Section */}
                    <div className="text-center mb-16 flex flex-col gap-4">
                        <h1 className="text-5xl font-bold text-white-800 mb-4">
                        Proposal Edu Nation Fest 2025
                        </h1>
                        <p className="text-2xl text-green-400 font-semibold mb-2">
                          Educational International Festival
                        </p>
                        <p className="text-xl">
                          "Towards Indonesia Emas & Global Education"
                        </p>
                        <p className="text-lg mt-2">
                          7-9 November | Assembly Hall, JICC
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Greetings Section */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">GREETINGS</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <img
                      src="/edunation/ali_saman_greetings.png"
                      alt="Dr. Ali Saman Hasan"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm text-gray-600 mb-2">Ustadz Dr. Ali Saman Hasan, Lc., L.LM., M.A</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Segala puji bagi Allah SWT yang telah memberikan kita nikmat iman, Islam,
                      serta kesempatan untuk terus berkhidmat dalam dunia pendidikan. Shalawat
                      serta salam semoga senantiasa tercurah kepada junjungan kita, Nabi
                      Muhammad ﷺ, keluarga, sahabat, dan pengikut beliau hingga akhir zaman.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Atas nama Konsorsium Pendidikan Islam Internasional (KOPIN), saya
                      menyampaikan apresiasi yang sebesar-besarnya atas terselenggaranya
                      EdunationFest 2025, sebuah ajang pameran pendidikan internasional yang
                      akan menjadi titik temu penting bagi para pendidik, lembaga, dan generasi
                      muda dalam membangun ekosistem pendidikan Islam yang kolaboratif,
                      inovatif, dan berstandar global.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      KOPIN hadir sebagai wadah strategis untuk menghubungkan lembaga
                      pendidikan Islam di Indonesia dengan jejaring internasional, memastikan
                      bahwa nilai-nilai Islam dapat terus dihidupkan sejalan dengan perkembangan
                      global. Melalui kegiatan seperti EdunationFest 2025, kita berharap akan lahir
                      sinergi baru, ide-ide segar, serta peluang kerja sama yang dapat memperkuat
                      daya saing pendidikan Islam Indonesia di kancah dunia.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Saya mengajak seluruh peserta, lembaga, dan mitra untuk menjadikan
                      momentum ini sebagai langkah nyata dalam membangun peradaban Islam
                      yang unggul melalui pendidikan. Semoga Allah SWT meridai setiap ikhtiar
                      kita, memudahkan jalan kita, dan menjadikan acara ini penuh manfaat serta
                      keberkahan.
                    </p>
                    <p className="text-right font-semibold mt-4">
                      Dr. Ali Saman Hasan, Lc., L.LM., M.A.<br />
                      Ketua KOPIN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mengapa Diadakan Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Mengapa Diadakan EduNation Fest 2025
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <img
                  src="/edunation/mengapa_diadakan_edunation_fest_2025.png"
                  alt="Mengapa Diadakan"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="grid md:grid-cols-1 gap-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Mencari Talenta-Talenta Terbaik dari Indonesia
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Di sisi lain, institusi pendidikan internasional saat ini sedang aktif mencari talenta-
                    talenta muda dari Indonesia. Mereka menyadari potensi besar generasi muda
                    Indonesia yang memiliki semangat belajar tinggi, daya saing global, dan
                    kemampuan beradaptasi dalam berbagai lingkungan multikultural. Hal ini menjadi
                    peluang besar bagi siswa Indonesia untuk mengejar pendidikan berkualitas dan
                    membangun masa depan yang lebih baik.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2. Menampilkan Keunggulan Program Pendidikan
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Melalui Edunation Festival, institusi pendidikan dari berbagai negara
                    memiliki kesempatan untuk menampilkan keunggulan program pendidikan,
                    fasilitas, serta pendekatan pembelajaran mereka secara langsung kepada
                    publik Indonesia. Festival ini menjadi wadah interaktif yang tidak hanya
                    memberikan informasi, tetapi juga membuka akses dan jaringan antara
                    pelajar Indonesia dengan dunia pendidikan global.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Minimnya Akses Informasi yang Komprehensif
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Di era globalisasi dan persaingan internasional yang semakin ketat, akses
                    terhadap informasi pendidikan yang komprehensif dan terpercaya menjadi
                    kebutuhan mendesak bagi para pelajar dan orang tua di Indonesia. Namun,
                    kenyataannya masih banyak calon siswa dan mahasiswa yang mengalami
                    kesulitan dalam memperoleh informasi lengkap mengenai pilihan pendidikan,
                    baik di dalam maupun luar negeri, dari jenjang SD hingga perguruan tinggi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">PORTOFOLIO</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lingkup Sekolah */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">LINGKUP SEKOLAH</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <img src="/edunation/portfolio_1.png" alt="WAFAIR" className="w-20 h-20 rounded-lg shadow-md" />
                    <div>
                      <h4 className="font-semibold text-gray-800">1. WAFAIR</h4>
                      <p className="text-sm text-gray-600">
                        Pameran pendidikan yang berada dalam lingkup sekolah. Acara ini diadakan untuk
                        mengenalkan berbagai perguruan tinggi kepada para siswa, bertujuan untuk
                        memberikan wawasan bagi para siswa tentang jalur perguruan tinggi, beasiswa,
                        dan karier.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src="/edunation/portfolio_2.png" alt="Campus Sharing" className="w-20 h-20 rounded-lg shadow-md" />
                    <div>
                      <h4 className="font-semibold text-gray-800">2. Campus Sharing 2023</h4>
                      <p className="text-sm text-gray-600">
                        Ramah tamah yang mempertemukan siswa Al Wafi dari jenjang SMP dan SMA
                        dengan para alumni. Dalam acara ini, para alumni yang saat ini tersebar di
                        berbagai perguruan tinggi, baik di dalam maupun luar negeri, akan berbagi
                        pengalaman dan informasi seputar kehidupan kampus.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src="/edunation/portfolio_3.png" alt="Al-Irsyad EduFest" className="w-20 h-20 rounded-lg shadow-md" />
                    <div>
                      <h4 className="font-semibold text-gray-800">3. Al-Irsyad EduFest</h4>
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
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">LINGKUP NASIONAL</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <img src="/edunation/portfolio_nasional_1.png" alt="EXPO ASESI" className="w-20 h-20 rounded-lg shadow-md" />
                    <div>
                      <h4 className="font-semibold text-gray-800">1. EXPO ASESI</h4>
                      <p className="text-sm text-gray-600">
                        Pameran pendidikan Islam yang diselenggarakan oleh ASESI (Perkumpulan
                        Komunikasi Sekolah Sunnah Indonesia). Kegiatan ini menjadi ajang strategis bagi
                        sekolah-sekolah Sunnah dan pesantren dari seluruh Indonesia.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src="/edunation/portfolio_nasional_2.png" alt="PULDAPIA EXPO" className="w-20 h-20 rounded-lg shadow-md" />
                    <div>
                      <h4 className="font-semibold text-gray-800">2. PULDAPIA EXPO</h4>
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

          {/* Our Event Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">OUR EVENT</h2>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-8 text-center">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold">1. Perlombaan Pendidikan</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold">2. Pameran Pendidikan</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold">3. EduTalk (4 Kacamata)</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-semibold">4. Institutional Matchmaking</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Pameran Pendidikan Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">PAMERAN PENDIDIKAN</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="/edunation/edunation_fest_national.png" alt="Lembaga Pendidikan Nasional" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Lembaga Pendidikan Nasional</h3>
                <ul className="text-left mt-4 space-y-2">
                  <li>• SD (Sekolah Dasar)</li>
                  <li>• SMP/MTS (Sekolah Menengah Pertama / Madrasah Tsanawiyah)</li>
                  <li>• SMA/MA (Sekolah Menengah Atas / Madrasah Aliyah)</li>
                  <li>• Perguruan tinggi</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="/edunation/edunation_fest_international.png" alt="Lembaga Pendidikan Internasional" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Lembaga Pendidikan Internasional</h3>
                <ul className="text-left mt-4 space-y-2">
                  <li>• SD (Sekolah Dasar)</li>
                  <li>• SMP/MTS (Sekolah Menengah Pertama / Madrasah Tsanawiyah)</li>
                  <li>• SMA/MA (Sekolah Menengah Atas / Madrasah Aliyah)</li>
                  <li>• Perguruan tinggi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EduTalk Sections */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">EDUTALK (4 KACAMATA)</h2>

            {/* Regulator */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gray-100 py-3 rounded-lg">
                - REGULATOR PENDIDIKAN -
              </h3>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
                  <img src="/edunation/abdul_muti.png" alt="Prof. Dr. H. Abdul Mu'ti, M.Ed., M.A." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">1. Prof. Dr. H. Abdul Mu'ti, M.Ed., M.A.</h4>
                  <p className="text-gray-600">Menteri Pendidikan Dasar dan Menengah Republik Indonesia</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
                  <img src="/edunation/brian_yuliarto.png" alt="Prof. Brian Yuliarto, S.T., M.Eng., Ph.D." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">2. Prof. Brian Yuliarto, S.T., M.Eng., Ph.D.</h4>
                  <p className="text-gray-600">Kementerian Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
                  <img src="/edunation/nasarudin_umar.png" alt="Prof. Dr. KH. Nasaruddin Umar" className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">3. Prof. Dr. KH. Nasaruddin Umar</h4>
                  <p className="text-gray-600">Menteri Agama Republik Indonesia</p>
                </div>
              </div>
            </div>

            {/* Tokoh Pendidikan */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gray-100 py-3 rounded-lg">
                - TOKOH PENDIDIKAN -
              </h3>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
                  <img src="/edunation/jusuf_kalla.png" alt="Drs. H. Muhammad Jusuf Kalla" className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">1. Drs. H. Muhammad Jusuf Kalla</h4>
                  <p className="text-gray-600">Wakil Presiden Republik Indonesia Periode 2004-2009 & 2014-2019</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
                  <img src="/edunation/anies_baswedan.png" alt="Prof. Dr. (H.C.) Anies Rasyid Baswedan, M.B.A., Ph.D." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">2. Prof. Dr. (H.C.) Anies Rasyid Baswedan, M.B.A., Ph.D.</h4>
                  <p className="text-gray-600">Gubernur DKI Jakarta periode 2017–2022, Menteri Pendidikan dan Kebudayaan Kabinet Kerja (2014-2016)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border-l-4 border-pink-500">
                  <img src="/edunation/muhadjir_efendi.png" alt="Prof. Dr. Muhadjir Effendy, M.AP" className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">3. Prof. Dr. Muhadjir Effendy, M.AP</h4>
                  <p className="text-gray-600">Plt. Menteri Pemuda dan Olahraga (2023), Plt. Menteri Sosial (2020 dan 2024), Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan (2019-2024), Menteri Pendidikan dan Kebudayaan (2016-2019)</p>
                </div>
              </div>
            </div>

            {/* Pakar Pendidikan */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gray-100 py-3 rounded-lg">
                - PAKAR PENDIDIKAN -
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/taufik_kasturi.png" alt="Prof. Taufik Kasturi, M.Si., Ph.D." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">1. Prof. Taufik Kasturi, M.Si., Ph.D.</h4>
                  <p className="text-gray-600">Dekan Fakultas Psikologi, UMS (2021-2025), Wakil Rektor Bidang Kemahasiswaan, UMS (2017-2021), Dekan Fakultas Psikologi, UMS (2014-2017)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/putra_asga_eevri.png" alt="Putra Asga Elevri, S.Si., M.Si." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">2. Putra Asga Elevri, S.Si., M.Si.</h4>
                  <p className="text-gray-600">Analis Kebijakan Jabatan Fungsional Madya (2020-2022), Direktur Guru Pendidikan Menengah dan Pendidikan Khusus (2022-Sekarang), Kepala Sub Direktorat (2019-2020)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/muhammad_zuhdi.png" alt="Prof. Muhammad Zuhdi M.Ed., Ph.D." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">3. Prof. Muhammad Zuhdi M.Ed., Ph.D.</h4>
                  <p className="text-gray-600">Kepala UI Halal Center (2021-2024), Wakil Rektor Bidang Sumber Daya Manusia dan Aset UI (2019-2020), Direktur SKSG dan Kaprodi KTTI (2014-2019), Atase Pendidikan dan Kebudayaan (2009-2013)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/maila_dinia.png" alt="Prof. Maila Dinia Husni Rahiem, M.A., Ph.D." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">4. Prof. Maila Dinia Husni Rahiem, M.A., Ph.D.</h4>
                  <p className="text-gray-600">Konsultor editor internasional International Journal of Children's, Stanford/Elsevier Top 2% Scientists Worldwide 2024</p>
                </div>
              </div>
            </div>

            {/* Cendekiawan Muslim */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gray-100 py-3 rounded-lg">
                - CENDEKIAWAN MUSLIM -
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/rizal_yuliar_putrananda.png" alt="Ustadz Rizal Yuliar Putrananda, Lc." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">1. Ustadz Rizal Yuliar Putrananda, Lc.</h4>
                  <p className="text-gray-600">Pengasuh Pesantren Al-Lu'lu' Wal Marjan, Pembimbing Umroh di Dauroh Travel, pemateri di Rodja TV</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/abdul_aziz_al_owainy.png" alt="Ustadz Abdul Aziz Al Owainy, Lc." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">2. Ustadz Abdul Aziz Al Owainy, Lc.</h4>
                  <p className="text-gray-600">Sekretaris yayasan Imam Muzani Boarding School</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/mufy_hanif_thalib.png" alt="Ustadz Mufy Hanif Thalib, Lc." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">3. Ustadz Mufy Hanif Thalib, Lc.</h4>
                  <p className="text-gray-600">Pemateri tetap di kanal Yufid TV, Alumus University Islamic Medina, Pembimbing/Tour Leader Umroh Nakhla Tour</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/abdurrahman_zahier.png" alt="Ustadz Abdurrahman Zahier, BBA." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">4. Ustadz Abdurrahman Zahier, BBA.</h4>
                  <p className="text-gray-600">Pengajar sharia di Hijra (2025 - saat ini), Konsultan sharia di paragoncrop (2024 - saat ini), Pengajar fiqh muamalah ITAF (2019 - 2022)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/abdullah_roy.png" alt="Dr. Abdullah Roy, M.A" className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">5. Dr. Abdullah Roy, M.A</h4>
                  <p className="text-gray-600">Pengajar di masjid Nabawi (2013 - 2017), Founder HSI Abdullah Roy, Ketua STIT Riyadhussholihin, Dosen di STDI Imam syafii</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/abduh_tuasikal.png" alt="Dr. K.H. Muhammad Abduh Tuasikal, S.T., M.Sc." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">6. Dr. K.H. Muhammad Abduh Tuasikal, S.T., M.Sc.</h4>
                  <p className="text-gray-600">Pembina pondok pesantren Darush Sholihin, Pembina yayasan Darush Sholihin, Pembina dan penasehat KPMI, Anggota MUI Gunung Kidul</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/abu_yahya_badrussalam.png" alt="Ustadz Abu Yahya Badrusalam, Lc." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">7. Ustadz Abu Yahya Badrusalam, Lc.</h4>
                  <p className="text-gray-600">Pembina dan pengasuh Radio Rodja, Pemateri di Safdah TV, Pengajar di mahad Ulum Syariyyah, Penasehat di Al Minhaj Islamic Boarding School</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/raehanul_bahrain.png" alt="Ustadz dr. Raehanul Bahraen, M.Sc, Sp.PK" className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">8. Ustadz dr. Raehanul Bahraen, M.Sc, Sp.PK</h4>
                  <p className="text-gray-600">Dosen Fakultas kedokteran Universitas Mataram, Dokter Spesialis Patologi Klinik di RSUP NTB, Ketua Yayasan Pendidikan Islam Al-Atsari, Pembina KIPMI</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/khalid_basalamah.png" alt="Dr. Khalid Zeed Basalamah, Lc., M.A." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">9. Dr. Khalid Zeed Basalamah, Lc., M.A.</h4>
                  <p className="text-gray-600">Ketua umum yayasan Ats-Tsabath, Ketua forum pengirim dai Irian, Penasehat wesaltv Jakarta, Direktur di PT. Ajwad</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img src="/edunation/nuzul_dzikri.png" alt="Ustadz Muhammad Nuzul Dzikri, Lc." className="w-24 h-24 rounded-lg shadow-md mb-3 mx-auto" />
                  <h4 className="font-semibold text-gray-800">10. Ustadz Muhammad Nuzul Dzikri, Lc.</h4>
                  <p className="text-gray-600">Pemateri tetap di masjid Nurul iman Blok M, Pemateri kajian mahasiswa FK UI (2013-2014), Pemateri di YISC di masjid Al Azhar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Perlombaan Pendidikan Nasional */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Perlombaan Pendidikan Nasional</h2>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">SMP</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">SMA</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Perguruan Tinggi</h3>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Kategori Perlombaan</h4>
                  <p className="text-sm">
                    Perlombaan kami dirancang dengan sistem hybrid yang inovatif, memadukan kompetisi daring dan luring untuk
                    menjangkau peserta dari seluruh Indonesia secara maksimal. Perlombaan offline akan diadakan di Jakarta
                    Convention Center (JCC) pada 7-9 November, bertepatan dengan Edufest.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Tujuan Perlombaan Edukasi</h4>
                  <p className="text-sm">
                    Perlombaan ini bertujuan untuk mengembangkan potensi dan membangun jaringan di kalangan
                    pelajar dan mahasiswa. Melalui kompetisi ini, kami berupaya menciptakan komunitas yang saling
                    mendukung dan menginspirasi dari seluruh Indonesia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Target Peserta</h4>
                  <p className="text-sm">
                    Perlombaan ini menargetkan pelajar setingkat SMA/SMK hingga mahasiswa dari berbagai universitas di seluruh Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Matchmaking Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">MATCHMAKING</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Latar Belakang & Tujuan</h3>
                <p className="text-gray-700">
                  Forum pertemuan strategis lembaga pendidikan & investor di EduNation 2025
                  Menghubungkan sekolah, kampus, kurikulum internasional, dan lembaga investasi
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">2. Tujuan Utama:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Membangun jejaring global antar sekolah & kampus</li>
                  <li>Adopsi kurikulum internasional (IB)</li>
                  <li>Kolaborasi riset & pertukaran akademik</li>
                  <li>Investasi pembangunan sekolah & digitalisasi pendidikan</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">3. Bentuk Kerjasama:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Sekolah Indonesia – Kampus LN → Student exchange, pathway program, beasiswa bersama</li>
                  <li>Kampus Indonesia – Kampus LN → Joint research, double degree, pertukaran dosen/mahasiswa</li>
                  <li>Implementasi IB → Workshop, roadmap akreditasi, pendampingan guru</li>
                  <li>Investor – Sekolah → Pitching pembangunan gedung, PPP, investasi digitalisasi</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">4. Nilai Tambah:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Sekolah → akses kurikulum & jejaring global</li>
                  <li>Kampus Indonesia → reputasi internasional & riset kolaboratif</li>
                  <li>Kampus LN → pintu masuk ke pasar pendidikan Indonesia</li>
                  <li>Investor → peluang investasi berkelanjutan di sektor pendidikan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Food & Beverage Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">FOOD & BEVERAGE</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Area F&B Edunation Fest 2025 menghadirkan kurasi kuliner tepercaya yang menghidupkan suasana,
                memperpanjang waktu kunjung, dan membuka panggung aktivasi merek bernilai tinggi.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Value Proposition:</h3>
                  <p className="text-gray-600">Pilihan kuliner berkualitas + traffic tinggi = engagement nyata & konversi lebih cepat.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Brand Playground:</h3>
                  <p className="text-gray-600">Eksklusivitas kategori, penempatan logo strategis, menu highlight di kanal resmi, hingga sampling terkontrol.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Trust & Compliance:</h3>
                  <p className="text-gray-600">Halal dan higienis, ramah lingkungan, patuh kebijakan venue JICC Senayan (7–9 Nov 2025).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Target Market Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">TARGET MARKET</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="font-semibold text-gray-800">Orang Tua/Wali Murid</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="font-semibold text-gray-800">Murid/Mahasiswa</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="font-semibold text-gray-800">Guru/Tenaga Pengajar</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="font-semibold text-gray-800">Masyarakat Umum</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsorship Package Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sponsorship Package</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8 text-center">
                <img src="/edunation/sponsorship_package.png" alt="Sponsorship Package" className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-md" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-3">1. Title sponsor</h3>
                  <p className="text-sm text-gray-600 mb-2">Full naming rights. Keynote di stage. (15') Workshop (45'): 2 sesi. VIP Ticket + Chair. MC Mention. Penayangan video sponsor. Booth Sponsor. Sampling rights. Hak pakai konten foto/video. Collab social media; Distribusi produk/brosur/voucher. Logo (Tier 1) pada: ID card, feed, banner, flyer, spanduk, lanyard, gelang.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-3">2. Main partner</h3>
                  <p className="text-sm text-gray-600 mb-2">Workshop (45'): 1 sesi. VIP Ticket + Chair; MC Mention; Penayangan video sponsor; Booth Sponsor; Sampling rights; Hak pakai konten foto/video. Collab social media; Distribusi produk/brosur/voucher. Logo (Tier 2) pada: ID card, feed, banner, flyer, spanduk, lanyard, gelang. Keynote di stage (15')</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-3">3. Official partner</h3>
                  <p className="text-sm text-gray-600 mb-2">VIP Ticket + Chair; MC Mention; Penayangan video sponsor; Booth Sponsor; Sampling rights; Hak pakai konten foto/video. Collab social media; Distribusi produk/brosur/voucher. Logo (Tier 3) pada: ID card, feed, banner, flyer, spanduk, lanyard, gelang. Keynote di stage (10')</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-3">4. Supporting partner</h3>
                  <p className="text-sm text-gray-600 mb-2">VIP Ticket + Chair; MC Mention; Penayangan video sponsor; Booth Sponsor; Sampling rights; Hak pakai konten foto/video. Collab social media; Distribusi produk/brosur/voucher. Logo (Tier 4) pada: ID card, feed, banner, flyer, spanduk, lanyard, gelang.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Keterangan Tambahan</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tier 1 (Title / Logo Tier 1): 90% dari lebar logo Edunation</li>
                  <li>• Tier 2 (Main/Presenting / Logo Tier 2): 70% dari lebar logo Edunation</li>
                  <li>• Tier 3 (Official / Logo Tier 3): 50% dari lebar logo Edunation</li>
                  <li>• Tier 4 (Supporting / Logo Tier 4): 35% dari lebar logo Edunation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package Summary Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Package Summary</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="/edunation/benefit_sponsor_1.png" alt="Benefit Sponsor 1" className="w-full h-auto rounded-lg mb-4" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="/edunation/benefit_sponsor_2.png" alt="Benefit Sponsor 2" className="w-full h-auto rounded-lg mb-4" />
              </div>
            </div>
          </div>

          {/* Layout Area Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">LAYOUT AREA</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <img src="/edunation/layout_area.png" alt="Layout Area" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>

          {/* Facility Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Facility</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8 text-center">
                <img src="/edunation/facility.png" alt="Facility" className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-md" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">1. Fascia</h3>
                  <p className="text-sm text-gray-600">Nama Exhibitor (max 30 kata) dengan stiker vinyl</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">2. Karpet</h3>
                  <p className="text-sm text-gray-600">Karpet Abu-Abu dalam Booth</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">3. Lampu TL</h3>
                  <p className="text-sm text-gray-600">Penerangan dalam Booth</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">4. Furnitur</h3>
                  <p className="text-sm text-gray-600">1 Buah Meja & 2 Buah Kursi sebagai Meja Resepsionis Booth</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">5. Panel Booth</h3>
                  <p className="text-sm text-gray-600">Panel Booth 3 sisi dengan R8. Jika Posisi Hook maka akan ada 2 sisi & 2 Fascia</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">6. Listrik</h3>
                  <p className="text-sm text-gray-600">Listrik 2A untuk kebutuhan standar listrik pameran</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Your Space Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">SECURE YOUR SPACE</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <img src="/edunation/pricing.png" alt="Pricing" className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-md" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact & Registration</h2>
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
