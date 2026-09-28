export interface JobPortal {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  recommendedFor: string;
  url: string;
  pros: string[];
}

export const JOB_PORTALS: JobPortal[] = [
  {
    id: 'make-it-in-germany',
    name: 'Make it in Germany',
    category: 'Resmi Devlet Portalı',
    badge: 'Federal Hükümet Onaylı',
    description: "Almanya Federal Hükümeti'nin yurt dışından gelen nitelikli iş gücü için oluşturduğu resmi portal. Vize koşulları ve doğrudan iş ilanları yer alır.",
    recommendedFor: 'Tüm yabancı adaylar, sağlıkçılar, mühendisler ve teknisyenler',
    url: 'https://www.make-it-in-germany.com/en/working-in-germany/jobs',
    pros: ['Resmi ve %100 güvenilir', 'Yabancı iş gücüne açık iş ilanları', 'Türkçe ve İngilizce dil desteği']
  },
  {
    id: 'arbeitsagentur',
    name: 'Bundesagentur für Arbeit (Jobbörse)',
    category: 'Federal İş Ajansı',
    badge: 'En Büyük Veritabanı',
    description: "Almanya'nın resmi Federal İş Ajansı veritabanı. Almanya çapında yüz binlerce aktif iş ilanını en güncel haliyle listeler.",
    recommendedFor: 'Her sektörden uzman, meslek lisesi mezunu, zanaatkâr ve usta',
    url: 'https://www.arbeitsagentur.de/jobsuche/',
    pros: ['Almanya genelinde en kapsamlı ilan havuzu', 'Doğrudan işveren iletişim bilgileri', 'Ücretsiz ve devlete bağlı']
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Deutschland',
    category: 'Uluslararası Profesyonel Ağ',
    badge: 'Kurumsal & Global',
    description: "Uluslararası şirketler, teknoloji girişimleri ve kurumsal pozisyonlar için vazgeçilmez platform. Doğrudan İK yöneticileriyle bağlantı kurulabilir.",
    recommendedFor: 'Yazılım, IT, mühendislik, finans, pazarlama ve yönetim pozisyonları',
    url: 'https://www.linkedin.com/jobs/search/?location=Germany',
    pros: ['İngilizce çalışma ortamı sunan şirketler', 'İK yöneticilerine doğrudan mesaj atabilme', 'Kolay başvuru (Easy Apply)']
  },
  {
    id: 'indeed',
    name: 'Indeed Deutschland',
    category: 'Genel İş Portalı',
    badge: 'En Popüler',
    description: "Almanya'da en çok ziyaret edilen iş arama motorlarından biri. Küçük işletmelerden büyük holdinglere kadar geniş bir yelpaze sunar.",
    recommendedFor: 'Üretim, lojistik, hizmet, perakende, teknisyenlik ve sağlık',
    url: 'https://de.indeed.com',
    pros: ['Hızlı filtreleme ve lokasyon bazlı arama', 'Basit ve pratik başvuru adımları', 'Maaş tahminleri ve şirket yorumları']
  },
  {
    id: 'stepstone',
    name: 'StepStone',
    category: 'Uzman & Kalifiye İlanlar',
    badge: 'Kalifiye Pozisyonlar',
    description: "Almanya'da özellikle orta ve üst düzey uzmanlar, mühendisler ve sağlık çalışanları için sektörün en köklü kariyer sitesi.",
    recommendedFor: 'Mühendislik, tıp, hemşirelik, IT, finans ve kimya endüstrisi',
    url: 'https://www.stepstone.de',
    pros: ['Nitelikli ve yüksek maaşlı ilanlar', 'Detaylı pozisyon açıklamaları', 'Güçlü İK filtreleme algoritmaları']
  },
  {
    id: 'xing',
    name: 'Xing Jobs',
    category: 'DACH Bölgesi Yerel İş Ağı',
    badge: 'Almanya’nın LinkedIn’i',
    description: "Almanya, Avusturya ve İsviçre'de LinkedIn kadar ve bazı geleneksel sektörlerde daha da yaygın olarak kullanılan yerel iş ağı.",
    recommendedFor: 'Orta ölçekli Alman şirketleri (Mittelstand) ve Almanca odaklı pozisyonlar',
    url: 'https://www.xing.com/jobs',
    pros: ['Geleneksel Alman KOBİ’lerine (Mittelstand) erişim', 'Yerel İK uzmanlarının yoğun kullanımı', 'Bölgesel iş ağları']
  }
];

export const MISTAKES_VS_SOLUTIONS = [
  {
    mistake: 'Her ilana aynı standart belgeleri göndermek',
    solution: 'Her ilanın gereksinimlerine göre motivasyon mektubundaki ilgili deneyimlerinizi öne çıkarın ve şirket ismini doğru belirtin.',
    tag: 'Özelleştirme'
  },
  {
    mistake: "CV'nin 2–3 sayfadan uzun ve karmaşık olması",
    solution: "Alman formatında (Lebenslauf) maksimum 1 veya 2 sayfa, kronolojik, sadece pozisyonla ilgili deneyimleri içeren net bir yapı kurun.",
    tag: 'CV Formatı'
  },
  {
    mistake: 'Motivasyon mektubunu internetten kopyala-yapıştır yapmak',
    solution: 'Şirketin ürününü veya projesini neden seçtiğinizi, kendi tecrübenizin o ekibe ne katacağını 3 net paragrafta anlatın.',
    tag: 'Anschreiben'
  },
  {
    mistake: 'Almanca seviyesini CV ve mektupta hiç belirtmemek',
    solution: "A1 veya A2 olsa bile seviyenizi açıkça yazın ve 'Halen dil kursuna devam etmekteyim' ifadesini ekleyerek gelişim azminizi kanıtlayın.",
    tag: 'Dil Durumu'
  },
  {
    mistake: 'Oturum/vize durumu hakkında işverene bilgi vermemek',
    solution: '2024 Nitelikli Göç Yasası gereği işverenin vize sponsoru olmasına gerek olmadığını ve süreci kendinizin yürüteceğini açıkça beyan edin.',
    tag: 'Yasal Beyan'
  }
];

export const GOLDEN_RULES = [
  {
    number: '01',
    title: 'Daima PDF Formatında Gönderin',
    description: 'Word (.docx) formatı cihazdan cihaza yazı tiplerini ve mizanpajı bozar, amatör görünür. Tüm dosyalarınızı temiz PDF olarak dışa aktarın.'
  },
  {
    number: '02',
    title: 'Standart Dosya İsimlendirmesi',
    description: 'Rastgele isimler yerine: Ali_Yilmaz_Lebenslauf.pdf ve Ali_Yilmaz_Anschreiben.pdf formatını kullanarak İK uzmanının arşivini kolaylaştırın.'
  },
  {
    number: '03',
    title: 'Net ve Kurumsal E-posta Başlığı',
    description: 'Konu satırına mutlaka: "Bewerbung als [Pozisyon Adı] – [Adınız Soyadınız]" yazın. Örneğin: "Bewerbung als Elektriker – Ahmet Kaya".'
  }
];

export const FAQS = [
  {
    q: "Almanya'da iş bulmak için danışmanlık veya aracı firmalara para ödemek şart mı?",
    a: "Kesinlikle hayır. Almanya'da çalışan binlerce Türk vatandaşı hiçbir aracıya tek kuruş ödemeden, yalnızca resmi portallar (Jobbörse, Make it in Germany, StepStone, LinkedIn vb.) üzerinden doğrudan işverenlerle iletişime geçerek iş bulmuştur. Bütün resmi başvuru ve vize süreçleri bireysel olarak yürütülebilir."
  },
  {
    q: "2024 Nitelikli İş Gücü Göç Yasası (Fachkräfteeinwanderungsgesetz) bana ne avantaj sağlıyor?",
    a: "En büyük devrim vize sponsorluğu konusundadır. Alman işverenin sizin için vize masrafı veya resmi bürokratik kefalet yüklenmesine gerek yoktur. İşverenden aldığınız geçerli iş sözleşmesi ile tüm vize ve konsolosluk işlemlerinizi tamamen kendi adınıza bağımsız olarak yürütürsünüz."
  },
  {
    q: "Almancam A1 veya A2 seviyesinde, yine de başvuru yapabilir miyim?",
    a: "Evet! Birçok teknik, üretim, lojistik ve mutfak pozisyonunda başlangıç seviyesi Almanca kabul görmektedir. Önemli olan dilden kaçmak değil, başvurunuzda 'Şu anda aktif olarak A2/B1 kursuna devam ediyorum' diyerek Almanya'ya uyum sağlama iradenizi göstermenizdir."
  },
  {
    q: "Mesleki denklik (Anerkennung) nedir ve ne zaman gereklidir?",
    a: "Doktorluk, hemşirelik, öğretmenlik veya avukatlık gibi yasal olarak 'düzenlemeye tabi' (reglementierte Berufe) mesleklerde tam denklik şarttır. Düzenlemeye tabi olmayan mesleklerde ise denklik sürecini başlatmış olmak ('Ich befinde mich im Anerkennungsverfahren') dahi işverenlerin gözünde çok olumlu bir referanstır."
  },
  {
    q: "Günde kaç başvuru yapmalıyım?",
    a: "Kalite her zaman miktardan üstündür. Günde 50 yere standart form doldurmak yerine; ilanı dikkatle incelenmiş, şirket adı ve pozisyonu özelleştirilmiş günde 3 ile 5 kaliteli başvuru yapmak kabul alma oranınızı katbekat artırır."
  }
];
