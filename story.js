/* =============================================
   story.js — Işık Taşı: Kan Bağının Sonu
   Tüm Bölümler ve Hikaye Akışı (Can Sistemi Ekli)
   ============================================= */

const storyState = {
  scene: null,
  lives: 3,
  flags: {}   // wizard_ally, brother_sent, bilge_wounded, bilge_dead, stone_stolen, stepped_trap
};

const storyScenes = {

  /* =============================================
     I. BÖLÜM: KARANLIĞIN KALBİNE YOLCULUK
     ============================================= */
  s1_giris: {
    bg: 'ch-bg-village',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Köy Meydanı',
    next: 's1_ya1',
    paragraphs: [
      'Köy meydanındaki kalabalığın ortasında, <em class="game-hl">Bilge</em>\'nin yüzündeki endişe dalga dalga yayılıyordu.',
      'Sethan, adımlarını hızlandırıp onun yanına vardı. Bilge, titreyen elleriyle Sethan\'ın omuzunu tuttu:',
      '"Evlat, felaket kapımızda... Köyün hayat kaynağı olan <em class="game-hl">Işık Taşı</em> çalındı. O taş olmadan bu topraklar sonsuz bir karanlığa gömülecek," dedi.'
    ]
  },

  s1_ya1: {
    bg: 'ch-bg-village',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Yol Ayrımı 1: İlk Adım',
    paragraphs: [
      'Işık Taşı\'nı geri getirmek için harekete geçme vakti gelmişti. Sethan bir karar vermeliydi.'
    ],
    choices: [
      {
        text: 'Hemen Yola Çık — Vakit kaybetme, şimdi çık!',
        icon: '⚔',
        next: 's1_orman',
        losesLife: true,
        consequence: 'Sethan öfkeyle hemen yola koyuldu. Ancak hazırlıksızdı. Yolda pusudaki savaşçılarla çarpışırken ağır yaralar aldı ve kan kaybederek köye dönmek zorunda kaldı. Yaraları sarıldıktan sonra bu kez daha hazırlıklı olarak yeniden yola çıktı.'
      },
      {
        text: 'Araştırma Yap — Bilge ile kadim kitapları incele, taşın yerini öğren.',
        icon: '📜',
        next: 's1_orman'
      }
    ]
  },

  s1_orman: {
    bg: 'ch-bg-forest',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Karanlık Kuzey Ormanı',
    next: 's1_ya2',
    paragraphs: [
      'Sethan\'ın hedefi, <em class="game-hl">Karanlık Kuzey Ormanı</em>\'ydı.',
      'Gölgeli ve kasvetli ağaçların altında ilerlerken ormanın tüm sesleri birden kesildi.',
      'Birden karşısına <em class="game-hl">Kara Büyücü</em> çıktı ve fısıldadı:',
      '"Demek sen de bu taşın peşindesin... Güçlerimizi birleştirelim."'
    ]
  },

  s1_ya2: {
    bg: 'ch-bg-forest',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Yol Ayrımı 2: Büyücünün Teklifi',
    paragraphs: [
      'Kara Büyücü gözlerini kısarak bir yanıt bekliyordu. Güvenebilir miydi?'
    ],
    choices: [
      {
        text: 'Teklifi Kabul Et — "Tamam, birlikte savaşalım."',
        icon: '🤝',
        next: 's1_gecit',
        setFlag: { wizard_ally: true }
      },
      {
        text: 'Teklifi Reddet — "Hayır, sana güvenmiyorum!" diyerek kılıcını çek.',
        icon: '⚔',
        next: 's1_gecit',
        losesLife: true,
        consequence: '"Hayır, sana güvenmiyorum!" diyerek kılıcını çekti. Büyücüyle girdiği çetin düelloda yaralandı; büyücü karanlığa karışarak gözden kaybolurken Sethan acı içinde yoluna devam etti.'
      }
    ]
  },

  s1_gecit: {
    bg: 'ch-bg-mountain',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Dağ Geçidi',
    next: 's1_kotu_orman',
    paragraphs: [
      '<em class="game-hl">Dağ Geçidi</em>\'ne ulaştığında, geçidi tutan devasa bir savaşçı öne çıktı:',
      '"Buradan geçiş yok! Sen kimsin?" dedi.',
      'Sethan yardım isteyince savaşçı, "O Işık Taşı\'nın peşinde olan kişi sen misin? Onu buraya Kül Kralı getirdi" dedi. Sethan yalvarınca savaşçı, "Sana güveniyorum, geçebilirsin" diyerek izin verdi.'
    ]
  },

  s1_kotu_orman: {
    bg: 'ch-bg-dark-forest',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Kötülük Ormanı',
    next: 's1_ya3',
    paragraphs: [
      'Geçidin arkası <em class="game-hl">Kötülük Ormanı</em>\'ydı.',
      'İçeri adım atar atmaz etrafını vahşi <em class="game-hl">Elfler</em> sardı ve biri alaycı bir şekilde gülümsedi:',
      '"Bakın burada kim varmış..."'
    ]
  },

  s1_ya3: {
    bg: 'ch-bg-dark-forest',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Yol Ayrımı 3: Elflerin Kuşatması',
    paragraphs: [
      'Etrafı tamamen sarılmıştı. Bu elflerden kurtulmak için hızlı bir plan gerekiyordu.'
    ],
    choices: [
      {
        text: 'Meydan Okuyarak Savaş — "Sizden korkum yok!" diyerek elflere saldır.',
        icon: '⚔',
        next: 's1_kale',
        losesLife: true,
        consequence: '"Sizden korkum yok!" diyerek elflere saldırdı. Savaşı kazandı ama aldığı darbelerle vücudunda derin yaralar açıldı.'
      },
      {
        text: 'Geri Çekilmeyi Dene — "Yanlışlıkla geldim" deyip çekilmeye çalış.',
        icon: '🏃',
        next: 's1_kale',
        losesLife: true,
        consequence: '"Yanlışlıkla geldim" deyip geri çekilmeye çalıştı ama elfler tarafından yakalanıp bir zindana kapatıldı. Odadan kaçmayı başardı ama kaçarken ciddi hasar aldı.'
      }
    ]
  },

  s1_kale: {
    bg: 'ch-bg-castle',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Karanlık Kale',
    next: 's1_ya4',
    paragraphs: [
      'Zorlukları aşan Sethan sonunda <em class="game-hl">Karanlık Kale</em>\'ye vardı.',
      'Taht odasındaki acımasız <em class="game-hl">Kül Kralı</em> henüz onu fark etmemişti. Taş tahtın hemen yanındaydı.'
    ]
  },

  s1_ya4: {
    bg: 'ch-bg-castle',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: "Yol Ayrımı 4: Kül Kralı'nın Odası",
    paragraphs: [
      'Kül Kralı arkası dönük halde duruyordu. Zaman daralıyordu.'
    ],
    choices: [
      {
        text: 'Kralın Çıkmasını Bekle — Sessizce bekle, kral gidince taşı al.',
        icon: '👁',
        next: 'gameover_decision',
        losesLife: true,
        isGameOverPath: true
      },
      {
        text: 'Tüm Gücünle Saldır — Ansızın ve var gücünle krala hücum et!',
        icon: '⚔',
        next: 's1_bitis'
      }
    ]
  },

  gameover_decision: {
    bg: 'ch-bg-castle',
    chapterTitle: 'OYUN BİTTİ',
    sceneTitle: 'Karanlığın Zaferi',
    isGameOver: true,
    paragraphs: [
      'Sessizce bekledi. Kral çıkınca taşı aldı ama dışarıda elflere yakalandı.',
      'Yaralarından dolayı kaçamadı ve oracıkta can verdi.',
      '<em>Işık Taşı ve köy sonsuza dek karanlığa gömüldü...</em>'
    ]
  },

  s1_bitis: {
    bg: 'ch-bg-dawn',
    chapterTitle: 'BÖLÜM I — Karanlığın Kalbine Yolculuk',
    sceneTitle: 'Bölüm Sonu',
    isChapterEnding: true,
    nextChapter: 2,
    paragraphs: [
      'Canını dişine takan Sethan, kralı gafil avlayıp bayıltmayı başardı.',
      'Hemen kralın zırhını giydi, parıldayan Işık Taşı\'nı zırhın içinde saklayarak kaleden uzaklaştı.',
      'Güneş ufukta yavaşça doğarken taşın sıcaklığı göğsünü ısıtıyordu.',
      '<em class="game-hl">BİRİNCİ BÖLÜMÜN SONU.</em>'
    ]
  },


  /* =============================================
     II. BÖLÜM: MASKELERİN DÜŞÜŞÜ (ESKİ 2, 3, 4, 5. BÖLÜMLERİN BİRLEŞİMİ)
     ============================================= */
  s2_giris: {
    bg: 'ch-bg-village-light',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Kurtuluş ve Yeni Tehlike',
    next: 's2_baskin',
    paragraphs: [
      'Uzun ve yıpratıcı yolculuğun ardından Sethan nihayet köyüne ulaştı.',
      'Işık Taşı’nı Bilge’ye teslim ettiği an yorgunluktan yere yığıldı. Şifacılar onu hemen tedaviye aldı.',
      'Bilge, taşı yerine takar takmaz köy harika bir şekilde aydınlandı, kadim ışık geri döndü.',
      'Ancak bu sevinç çok uzun sürmedi...'
    ]
  },

  s2_baskin: {
    bg: 'ch-bg-village-light',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Karanlık Planlar',
    next: 's2_ya5',
    paragraphs: [
      'Taşın geri alındığını duyan Elfler ve Kül Kralı, öfkeyle köye büyük bir baskın planı hazırladı.',
      'Bilge bu haberi casuslarından aldığında derin bir endişeyle bir karar vermek zorundaydı.'
    ]
  },

  s2_ya5: {
    bg: 'ch-bg-village-light',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Yol Ayrımı 5: Savunma Stratejisi',
    paragraphs: [
      'Düşman ordusu yola çıkmak üzere. Köyü nasıl koruyacaksın?'
    ],
    choices: [
      {
        text: 'Askerleri Topla — Köy sınırında savunma hattı kurup bekle.',
        icon: '🛡',
        next: 's2_baskin_sonuc_talan',
        losesLife: true,
        consequence: 'Köy sınırında savunmaya geçildi. Gelen büyük baskında köy talan oldu, Işık Taşı çalınamadı ama çok sayıda cesur asker can verdi.'
      },
      {
        text: 'Yan Krallıktan Yardım İste — Karşı krallığa elçi gönderip diplomasiyi seç.',
        icon: '✉',
        next: 's2_ya6'
      }
    ]
  },

  s2_ya6: {
    bg: 'ch-bg-kingdom-diplomacy',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Yol Ayrımı 6: Elçi Seçimi',
    paragraphs: [
      'Yan krallığa yardım istemek üzere acilen güvenilir bir elçi seçilmelidir.'
    ],
    choices: [
      {
        text: 'Kardeşini Gönder — Öz kardeşine güven, onu gönder.',
        icon: '🧑‍🤝‍🧑',
        next: 's2_baskin_sonuc_zafer',
        setFlag: { brother_sent: true }
      },
      {
        text: 'Kıdemli Asker — Tecrübeli bir askeri görevlendir.',
        icon: '💂',
        next: 's2_baskin_sonuc_talan',
        losesLife: true,
        consequence: 'Yan krallığa tecrübeli asker gönderildi. Ancak giden asker gizli bir casustu ve orduyu kasıtlı olarak geciktirdi. Sethan sarayda düşmanla savaşırken ağır bir yara aldı.'
      }
    ]
  },

  s2_baskin_sonuc_zafer: {
    bg: 'ch-bg-village-light',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Zafer Şöleni',
    next: 's3_giris',
    paragraphs: [
      'Sethan\'ın kardeşi karşı krallığa ulaştı ve son derece diplomatik, etkileyici bir dille yardım istedi.',
      'Sınıra hızla yetişen destek ordusuyla birlikte Kül Kralı\'nın baskını püskürtüldü.',
      'Köy kesin bir zafer kazandı ve <em class="game-hl">GALİP GELDİ</em>! Ancak arka plandaki sinsi gölgeler tamamen kaybolmamıştı.'
    ]
  },

  s2_baskin_sonuc_talan: {
    bg: 'ch-bg-village-raid',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Kül ve Yıkım',
    next: 's3_giris',
    paragraphs: [
      'Yardım gelmedi (ya da hazırlıksız yakalanıldı). Köy acımasızca yağmalandı, her yer ateşe verildi.',
      'Büyük bir yıkım yaşandı, ancak Işık Taşı son anda korundu.',
      'Köy <em class="game-hl">TALAN OLDU</em>. Enkazlar arasında gözyaşı ve öfke hakimdi.',
      'Bu baskının ardından sarayda sinsi bir hainin varlığı kesinleşti.'
    ]
  },

  s3_giris: {
    bg: 'ch-bg-interrogation',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Karanlık Sorgu Odası',
    next: 's3_kanitlar',
    paragraphs: [
      'Bilge, yaşananların ardından Sethan\'ın kardeşinden ve kıdemli askerden şüphelendi.',
      'Her ikisini de sarayın en karanlık sorgu odasına çekti.',
      'Ortadaki tek mumun titrek ışığında Bilge öfkeyle haykırdı:',
      '"Hanginiz hain?!"'
    ]
  },

  s3_kanitlar: {
    bg: 'ch-bg-interrogation',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Yalanlar ve Gerçekler',
    next: 's3_itiraf',
    paragraphs: [
      'Kardeş endişeyle: "Ben değilim, öz ağabeyime ve köyüme asla ihanet etmem!" derken,',
      'Asker diz çöküp: "Yıllardır beraber savaştık, bir kez bile yanlışım olmadı!" diyerek kendini savundu.',
      'Bilge odaları arattı. Askerin odasından düşman mührü taşıyan gizli mektuplar çıkarken,',
      'Kardeşin yatağının altından ise bataklık çamurlu ve taze kan lekeleri taşıyan çizmeler çıktı.',
      'Bilge zekice sordu: "Bu odaların aranacağını önceden kim biliyordu?"'
    ]
  },

  s3_itiraf: {
    bg: 'ch-bg-dungeon',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Hainin İtirafı',
    next: 's3_surgun_karari',
    paragraphs: [
      'Kardeşin alnından soğuk terler süzüldü. Çizmelerdeki kan henüz kurumamıştı.',
      'Suçüstü yakalanan kardeş durdu, yüzündeki maskeyi indirip karanlık bir tebessümle gülümsedi:',
      '"Yıllardır Sethan\'ın gölgesinde kalmaktan bıktım! Düşman bana hak ettiğim gücü teklif etti. Yine olsa yine yaparım!"',
      'Bilge derin bir acıyla emretti: "Onu zindana atın!"'
    ]
  },

  s3_surgun_karari: {
    bg: 'ch-bg-dungeon',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Sürgün Hükmü',
    next: 's3_bitis',
    paragraphs: [
      'Sethan şifa odasında gözlerini açıp bu acı gerçeği öğrendiğinde adeta buz kesti.',
      'Zor bir kararla seslendi: "Benim artık öyle bir kardeşim yok. Kanunlar neyi emrediyorsa o uygulansın."',
      '"Onu öldürüp burada hain mezarı bırakarak köyümüzü kirletmeyin. Onu sürgün edin."'
    ]
  },

  s3_bitis: {
    bg: 'ch-bg-exile-mist',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Sürgün',
    next: 's4_giris',
    paragraphs: [
      'Ertesi sabah kardeş, arkasına bile bakmadan Lanetli Topraklar\'a doğru itildi.',
      'Sisli ve kasvetli yolda yürürken yavaşça gözden kayboldu.'
    ]
  },

  s4_giris: {
    bg: 'ch-bg-palace-raid',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Karanlık Generalin Dönüşü',
    next: 's4_kargasa',
    paragraphs: [
      'Aradan uzun yıllar geçti. Köy huzura kavuşmuşken, bir gece yarısı kanlar içinde bir ulak saraya girdi:',
      '"Düşman sınırda! Savunma planlarımızı en ince ayrıntısına kadar biliyorlar. Başlarında siyah zırhlı, yüzü yara bere içinde bir general var!"',
      'Sethan, sürgün ettiği kardeşinin intikam için geri döndüğünü hemen anladı.',
      'Bilge, "Orduyu sınıra gönderelim" dese de Sethan sezgilerine güvendi: "Kardeşim sadece sınırdan saldırmaz, başkent savunmasız kalır."'
    ]
  },

  s4_kargasa: {
    bg: 'ch-bg-palace-raid',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'İsyan Ateşi',
    next: 's4_ya7',
    paragraphs: [
      'Tam o sırada sarayın cephaneliğinden acı çanlar çalmaya başladı.',
      'Kardeşin içerideki hain uyuyan hücreleri (hain subaylar) kapıları açmış, isyanı başlatmıştı.',
      'Sarayın ana kapısı büyük bir gürültüyle kırıldı ve siyah zırhıyla kardeş içeri girdi:',
      '"Beni öldürmeliydin Sethan! İçeriden yıkılmak nasıl bir his?"'
    ]
  },

  s4_ya7: {
    bg: 'ch-bg-palace-raid',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Yol Ayrımı 7: Saray Çarpışması',
    paragraphs: [
      'Saray alevler içinde, elfler ve hainler her yerde. Nasıl hareket edeceksin?'
    ],
    choices: [
      {
        text: 'Doğrudan Kardeşine Saldır — Öfkeyle kardeşinin üzerine atıl ve düelloya başla.',
        icon: '⚔',
        next: 's4_ya8_pathA',
        setFlag: { bilge_wounded: true },
        losesLife: true,
        consequence: 'Sethan öfkeyle kardeşine saldırdı ve iki kardeş amansız bir düelloya tutuştu. Ancak arkasını kollamadığı için düşman elfleri arkadan Bilge\'ye saldırdı ve Sethan, Bilge\'yi korumak için kendi vücudunu siper ederek ağır yaralandı.'
      },
      {
        text: 'Önce Muhafızları Temizle — Sarayı, elfleri ve hain subayları temizle.',
        icon: '🛡',
        next: 's4_ya8_pathB',
        consequence: 'Sethan önce etraftaki hainleri ve elfleri temizleyerek Bilge\'nin ve saray muhafızlarının hayatını kurtardı. Ancak bu kargaşada kardeşi sarayın karanlık koridorlarına kaçmayı başardı.'
      }
    ]
  },

  s4_ya8_pathA: {
    bg: 'ch-bg-palace-raid',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Yol Ayrımı 8: Kritik Karar Anı',
    paragraphs: [
      'Bilge yerde kanlar içinde yatıyor. Kardeşin ise düelloda açık vermiş ve köşeye sıkışmış durumda. Tercihin ne olacak?'
    ],
    choices: [
      {
        text: "Bilge'yi Kurtar — Düelloyu bırak, Bilge'ye şifa iksiri içir.",
        icon: '🧪',
        next: 's5_giris',
        setFlag: { stone_stolen: true },
        losesLife: true,
        consequence: 'Düelloyu bırakıp Bilge\'ye şifa iksiri içirmeye koştun. Bilge kurtuldu ama kardeşin bu kargaşadan yararlanıp Işık Taşı\'nı yerinden sökerek çalmayı başardı ve kaçarken sana zehirli bir hançer sapladı.'
      },
      {
        text: 'Kardeşini Kovalat — Bilge\'yi bırak, kaçan kardeşinin peşinden git.',
        icon: '🏃',
        next: 's5_giris',
        setFlag: { bilge_dead: true },
        consequence: 'Bilge\'yi geride bırakıp kaçan kardeşinin peşinden gittin. Onu yakaladın ancak arkada sadık akıl hocan Bilge aldığı ağır yaralardan dolayı hayatını kaybetti.'
      }
    ]
  },

  s4_ya8_pathB: {
    bg: 'ch-bg-palace-maze',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Yol Ayrımı 8: Koridor Labirenti',
    paragraphs: [
      'Saray temizlendi ama kardeşin gizli koridorlara kaçtı. Bilge arkandan haykırıyor:',
      '"Onu labirentlerde sıkıştırabilirsin! Acele et!"'
    ],
    choices: [
      {
        text: 'Gizli Geçitleri Kullan — Bilge\'nin tarif ettiği gizli yollardan git.',
        icon: '🗝',
        next: 's5_giris',
        consequence: 'Bilge\'nin gösterdiği gizli geçitleri kullanarak kardeşinin önüne çıkmayı başardın ve onu gafil avladın.'
      },
      {
        text: 'Ana Koridordan Koş — Doğrudan kaçtığı ana koridor boyunca koş.',
        icon: '🏃',
        next: 's5_giris',
        setFlag: { stepped_trap: true },
        losesLife: true,
        consequence: 'Kardeşinin arkasından düz koştun ancak onun kurduğu bubi tuzağına bastın. Üzerine ağır taşlar yıkıldı. Büyük bir acıyla taşların altından kurtuldun ve taht odasına yaralı bir şekilde girdin.'
      }
    ]
  },


  /* =============================================
     FİNAL (TAHT ODASINDA SON DÜELLO)
     ============================================= */
  s5_giris: {
    bg: 'ch-bg-throne-duel',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Kan Bağının Sonu',
    next: 's5_final_secim',
    paragraphs: [
      'Bütün yolların sonunda, iki kardeş taht odasında karşı karşıya geldi.',
      'Işık Taşı’nın parıltısı altında kılıçlar son kez çarpıştı, kıvılcımlar karanlığı aydınlattı.',
      'Yıpratıcı ve amansız bir dövüşün ardından Sethan, son bir hamleyle kardeşinin kılıcını elinden düşürdü ve kılıcının ucunu onun boğazına dayadı.'
    ]
  },

  s5_final_secim: {
    bg: 'ch-bg-throne-duel',
    chapterTitle: 'BÖLÜM II — Maskelerin Düşüşü',
    sceneTitle: 'Kader Anı',
    paragraphs: [
      'Kardeş yerde, tamamen mağlup edilmişti. Ancak gözlerindeki o kibirli nefret hala canlıydı:',
      '"Hadi, ne duruyorsun? Yıllar önce yapamadığını yap ve bitir işimi Sethan!" dedi.',
      'Hükmün ne olacak?'
    ],
    choices: [
      {
        text: 'Merhamet Sonu — Kılıcını indir. Onu zindana kapat.',
        icon: '🕊',
        next: 's5_son_merhamet'
      },
      {
        text: 'Adalet / Karanlık Son — Kılıcını kardeşinin kalbine sapla.',
        icon: '💀',
        next: 's5_son_adalet'
      }
    ]
  },

  s5_son_merhamet: {
    bg: 'ch-bg-sealed-dungeon',
    chapterTitle: 'FİNAL — Merhamet Sonu',
    sceneTitle: 'Mühürlü Karanlık',
    isEnding: true,
    paragraphs: [
      'Sethan kılıcını yavaşça indirir. "Seni öldürüp senin gibi bir canavara dönüşmeyeceğim," der.',
      'Kardeşini sarayın en derin yer altı zindanına kapatır ve kapısına büyüyle güçlü bir mühür vurur.',
      'Krallık kurtulmuştur, Işık Taşı yerindedir; ancak Sethan, zindandaki kardeşinin bir gün o mührü kırıp kırmayacağı korkusuyla yaşayacaktır.',
      '<em>Oyun, yeni bir macera için açık kapı bırakarak belirsiz bir huzurla biter.</em>'
    ]
  },

  s5_son_adalet: {
    bg: 'ch-bg-lonely-throne',
    chapterTitle: 'FİNAL — Adalet Sonu',
    sceneTitle: 'Yalnız Taht',
    isEnding: true,
    paragraphs: [
      'Sethan gözlerini kapatır. Bilge\'nin, ölen askerlerin ve dökülen kanların acısını hatırlar.',
      '"Kan bağı, ihaneti temizlemez," diyerek kılıcını kardeşinin kalbine saplar.',
      'Kardeş son nefesini verirken saray derin bir sessizliğe gömülür.',
      'Köy ve krallık kurtulmuştur; ancak Sethan, öz kardeşini öldürmenin verdiği ağır vicdan azabıyla tahtında yapayalnız kalacaktır.',
      '<em>Oyun, trajik bir zaferle biter.</em>'
    ]
  },
  
  generic_gameover: {
    bg: 'ch-bg-castle',
    chapterTitle: 'OYUN BİTTİ',
    sceneTitle: 'Tükendin...',
    isGameOver: true,
    paragraphs: [
      'Aldığın sayısız yara, zehirli oklar ve düelloların yorgunluğu bedenini tamamen tüketti.',
      'Dizlerinin üzerine çöktün ve karanlığın dünyayı yutmasına engel olamadın.',
      '<em>Işık Taşı ve krallık sonsuza dek yok oldu...</em>'
    ]
  }

};

/* ================================================
   RENDER VE OYUN MOTORU FONKSİYONLARI
   ================================================ */

function updateLivesDisplay() {
  const livesEl = document.getElementById('game-lives');
  if (!livesEl) return;
  
  let heartsHtml = '';
  for (let i = 0; i < 3; i++) {
    if (i < storyState.lives) {
      heartsHtml += '<span class="game-heart alive">♥</span>';
    } else {
      heartsHtml += '<span class="game-heart dead">♥</span>';
    }
  }
  livesEl.innerHTML = heartsHtml;
}

function renderScene(sceneId) {
  storyState.scene = sceneId;
  const scene = storyScenes[sceneId];
  if (!scene) return;

  // Arka plan teması
  const inner = document.getElementById('game-inner');
  if (inner) {
    inner.className = 'game-inner ' + (scene.bg || '');
  }

  // Sayfa başlığı güncelleme
  const chLabel = document.getElementById('game-chapter-label');
  if (chLabel) {
    chLabel.innerHTML = scene.chapterTitle || 'IŞIK TAŞI';
  }

  // Canları güncelle
  updateLivesDisplay();

  // Scroll'u en üste al
  const scrollArea = document.getElementById('game-scroll-area');
  if (scrollArea) scrollArea.scrollTop = 0;

  const titleEl   = document.getElementById('game-scene-title');
  const narEl     = document.getElementById('game-narration');
  const choicesEl = document.getElementById('game-choices');

  // Sahne Başlığı
  if (scene.sceneTitle && !scene.isEnding && !scene.isGameOver) {
    titleEl.textContent = scene.sceneTitle;
    titleEl.style.display = '';
  } else {
    titleEl.style.display = 'none';
  }

  // Hikaye metinleri
  narEl.innerHTML = scene.paragraphs.map(p => `<p>${p}</p>`).join('');

  // --- Game Over Sahneleri ---
  if (scene.isGameOver) {
    choicesEl.innerHTML = `
      <button class="game-btn game-btn-danger" onclick="restartStory()">Yeniden Başla</button>
      <button class="game-btn" onclick="showScreen('screen-menu')">Ana Menü</button>
    `;
    return;
  }

  // --- Final Sonları ---
  if (scene.isEnding) {
    choicesEl.innerHTML = `
      <div class="game-ending-card">
        <div class="game-ending-label">— OYUN TAMAMLANDI —</div>
        <p class="game-ending-desc">Tüm zorlu yol ayrımlarını aşarak hikayenin sonuna ulaştın.</p>
      </div>
      <button class="game-btn game-btn-primary" onclick="restartStory()">⚔ Yeniden Oyna</button>
      <button class="game-btn" onclick="showScreen('screen-menu')">← Ana Menüye Dön</button>
    `;
    return;
  }

  // --- Bölüm Sonu (Bölüm Geçişi - Yalnızca 1'den 2'ye geçerken) ---
  if (scene.isChapterEnding) {
    const nextSceneId = `s${scene.nextChapter}_giris`;
    choicesEl.innerHTML = `
      <div class="game-ending-card">
        <div class="game-ending-label">— BÖLÜM TAMAMLANDI —</div>
      </div>
      <button class="game-btn game-btn-primary" onclick="goNextScene('${nextSceneId}')">İkinci Bölüme Geç →</button>
    `;
    return;
  }

  // --- Düz Anlatı Sahneleri (Seçim Olmayan - Devam Et Butonu) ---
  if (!scene.choices) {
    choicesEl.innerHTML = `
      <button class="game-btn game-btn-primary" onclick="goNextScene('${scene.next}')">Devam Et →</button>
    `;
    return;
  }

  // --- Seçim Sahneleri ---
  choicesEl.innerHTML = scene.choices
    .map((c, i) => `
      <button class="game-choice-btn" onclick="makeStoryChoice(${i})">
        <span class="game-choice-icon">${c.icon}</span>
        <span class="game-choice-text">${c.text}</span>
      </button>
    `)
    .join('');
}

/* ---- Seçim yapıldığında ---- */
function makeStoryChoice(idx) {
  const scene  = storyScenes[storyState.scene];
  const choice = scene.choices[idx];
  const choicesEl = document.getElementById('game-choices');

  // Seçilen butonu vurgula, diğerlerini pasif et
  choicesEl.querySelectorAll('.game-choice-btn').forEach((b, i) => {
    b.disabled = true;
    b.style.opacity = i === idx ? '0.85' : '0.25';
    b.style.cursor  = 'default';
  });

  // Flag varsa kaydet
  if (choice.setFlag) {
    Object.assign(storyState.flags, choice.setFlag);
  }

  // Can azaltma mantığı
  if (choice.losesLife) {
    storyState.lives--;
    updateLivesDisplay();
  }

  // Can bittiyse (özel game over sahnesi yoksa genel olanı göster)
  if (storyState.lives <= 0) {
    // Biraz bekle ve generic game over'a gönder
    setTimeout(() => {
        goNextScene('generic_gameover');
    }, 800);
    return;
  }

  // Oyun sonu yolu ise (tek seferlik özel game over)
  if (choice.isGameOverPath) {
    setTimeout(() => goNextScene('gameover_decision'), 800);
    return;
  }

  // Sonuç (Consequence) varsa göster, yoksa doğrudan geçiş yap
  if (!choice.consequence) {
    goNextScene(choice.next);
    return;
  }

  choicesEl.innerHTML = `
    <div class="game-consequence">
      <span class="game-consequence-label">Seçimin Sonucu:</span>
      <p>${choice.consequence}</p>
    </div>
    <button class="game-btn game-btn-primary" onclick="goNextScene('${choice.next}')">Devam Et →</button>
  `;
}

/* ---- Sahne geçişi (Fade animasyonlu) ---- */
function goNextScene(nextSceneId) {
  const inner = document.getElementById('game-inner');
  if (inner) {
    inner.style.transition = 'opacity 0.3s ease';
    inner.style.opacity = '0';
    setTimeout(() => {
      renderScene(nextSceneId);
      inner.style.opacity = '1';
    }, 300);
  } else {
    renderScene(nextSceneId);
  }
}

/* ---- Oyuna Başlama / Sıfırlama ---- */
function startStory() {
  storyState.scene = null;
  storyState.flags = {};
  storyState.lives = 3;
  showScreen('screen-game');
  setTimeout(() => renderScene('s1_giris'), 450);
}

function restartStory() {
  startStory();
}
