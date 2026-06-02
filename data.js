/* =========================================================
   SITE DATA — bilingual (zh / en)
   Source: 莊明中網站資料庫 (artworks_database.json) + 展覽海報
   ========================================================= */
window.SITE = {
  brand: { zh: "莊明中", en: "Chuang Min-Chung", role: { zh:"當代油畫藝術家", en:"Contemporary Painter" } },

  nav: [
    { id:"home",    zh:"首頁",   en:"Home" },
    { id:"about",   zh:"關於",   en:"About" },
    { id:"works",   zh:"作品",   en:"Works" },
    { id:"exhibitions", zh:"展覽", en:"Exhibitions" },
    { id:"academic",zh:"學術",   en:"Academic" },
    { id:"collab",  zh:"合作",   en:"Collaborate" },
    { id:"contact", zh:"聯絡",   en:"Contact" },
  ],

  hero: {
    manifesto: {
      zh: ["凝神靜氣，", "描繪萬象之美——", "讓<a>海底射來的光</a>，", "成為心海的風景。"],
      en: ["With stilled spirit", "I paint the beauty of all things —", "letting <a>light from the sea floor</a>", "become the landscape of an inner ocean."]
    },
    meta: [
      { n:"25+", zh:"次個展", en:"Solo Shows" },
      { n:"100+", zh:"次聯展", en:"Group Shows" },
      { n:"40", zh:"年創作生涯", en:"Years of Practice" },
    ]
  },

  about: {
    intro: {
      zh: "莊明中教授是台灣當代藝術界的中流砥柱，其創作與教育貢獻深遠影響台灣藝術發展。作為國立台中教育大學美術學系專任教授，他不僅培育眾多藝術人才，更以獨特的藝術語言為台灣藝壇注入新的活力。",
      en: "Professor Chuang Min-Chung is a pivotal figure in Taiwan's contemporary art scene, whose creative practice and dedication to education have profoundly shaped its development. As a full professor in the Department of Fine Arts at National Taichung University of Education, he has nurtured a generation of artists while infusing the field with a singular visual language."
    },
    paras: {
      zh: [
        "1963 年生於台中大安，海岸與漁村是他最初的風景。作品以豐富多彩的色彩運用著稱，善於以鮮明對比創造視覺衝擊，又能巧妙平衡色調，營造和諧的整體氛圍——既展現他對色彩理論的深刻理解，也映照出他對生活的熱愛與對美的敏銳感知。",
        "創作主題涵蓋海洋與蘭嶼、蝶舞花季、鄉土節慶，以及取材自蒙古、埃及的古文明系列。他擅長將日常的平凡事物轉化為富有詩意與哲理的畫面，並持續探索複合媒材與肌理，使作品始終保持鮮活的生命力。",
        "海洋，是他長年凝視的母題。從〈海洋進行式〉到〈心海凝視〉，再到 2025 年〈海底射來的光〉，他在流動的光影中追問自我與自然的交融，於靜謐中見澎湃。"
      ],
      en: [
        "Born in Da'an, Taichung in 1963, the coastline and fishing villages were his earliest landscape. His paintings are renowned for their luminous colour — bold contrasts held in delicate tonal balance — revealing both a deep grasp of colour theory and an acute sensitivity to beauty in everyday life.",
        "His subjects span the ocean and Lanyu, butterflies and blossom, folk festivals, and an 'ancient civilisation' series drawn from Mongolia and Egypt. He transforms the ordinary into the poetic, continually experimenting with mixed media and texture to keep each work vividly alive.",
        "The sea has been his lifelong motif. From 'Ocean in Motion' to 'Gazing at the Heart-Sea,' and on to 2025's 'Light from the Sea Floor,' he searches within flowing light for the union of self and nature — finding turbulence within stillness."
      ]
    },
    journeyTitle: { zh:"創作足跡", en:"Creative Journeys" },
    journey: [
      { img:"ph_child", zh:"1968 年，五歲於台中大安老家", en:"1968, aged five at the family home in Da'an, Taichung" },
      { img:"ph_seaside", zh:"1995 年於台中大安港海邊", en:"1995, on the shore of Da'an Harbour, Taichung" },
      { img:"ph_mongolia", zh:"2007 年於蒙古博物館蒐集恐龍化石資料", en:"2007, researching dinosaur fossils at a museum in Mongolia" },
      { img:"ph_egypt", zh:"2003 年於埃及人面獅身像前", en:"2003, before the Great Sphinx in Egypt" },
    ],
    education: {
      title: { zh:"學經歷", en:"Education & Career" },
      items: [
        { yr:"PhD", zh:"北京中央美術學院 美術學博士", en:"Ph.D. in Fine Art, Central Academy of Fine Arts, Beijing" },
        { yr:"MFA", zh:"國立臺灣師範大學 美術學系", en:"Department of Fine Arts, National Taiwan Normal University" },
        { yr:"現職", zh:"國立台中教育大學美術學系 專任教授", en:"Full Professor, Dept. of Fine Arts, NTCU" },
        { yr:"兼任", zh:"國立臺灣師範大學美術學系 兼任教授", en:"Adjunct Professor, Dept. of Fine Arts, NTNU" },
        { yr:"行政", zh:"曾任 台中教育大學美術系系所主任、秘書室主任秘書", en:"Former Chair of Fine Arts Dept. & Chief Secretary, NTCU" },
      ]
    },
    philosophyTitle: { zh:"藝術教育理念", en:"Philosophy of Art Education" },
    philosophyLead: {
      zh:"建立在四個相互關聯的層面——從基礎的創意培養，到更廣泛的社會實踐。",
      en:"Built on four interconnected dimensions — from the cultivation of creativity to broader social practice."
    },
    pillars: [
      { zh:"啟發創意思維", en:"Spark Creative Thinking", d:{ zh:"培養創新能力、激發想像力，讓學生從基礎開始探索藝術的無限可能。", en:"Nurturing innovation and imagination, letting students explore art's infinite possibilities from the ground up." } },
      { zh:"技法與理論並重", en:"Craft Meets Theory", d:{ zh:"融合實踐與理論，建立全面的藝術視野，深化學生的藝術涵養。", en:"Uniting practice and theory to build a complete artistic vision and deepen cultivation." } },
      { zh:"鼓勵個性化表現", en:"Encourage Individual Voice", d:{ zh:"發展獨特的藝術語言，培養個人風格，建立創作者的獨特視角。", en:"Developing a unique artistic language and personal perspective." } },
      { zh:"連結社會實踐", en:"Connect to Society", d:{ zh:"將藝術創作與社會議題結合，培養社會責任感，實現藝術的社會價值。", en:"Linking creation to social issues, realising art's value within community." } },
    ]
  },

  works: {
    intro: { zh:"在流動的光與色之間，凝視萬象。", en:"Gazing into all things, between flowing light and colour." },
    cats: [
      { id:"all", zh:"全部", en:"All" },
      { id:"ocean", zh:"海洋・蘭嶼", en:"Ocean & Lanyu" },
      { id:"butterfly", zh:"蝶舞・花季", en:"Butterfly & Bloom" },
      { id:"folk", zh:"鄉土・節慶", en:"Folk & Festival" },
      { id:"ancient", zh:"古文明", en:"Ancient" },
      { id:"rebirth", zh:"蛻變・重生", en:"Metamorphosis" },
    ],
    items: [
      { img:"art03", cat:"ocean", zh:"南島協奏曲", en:"Austronesian Concerto", yr:"2017", series:{zh:"海洋系列",en:"Ocean Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"162×130cm (100F)", note:{zh:"以紅色為主色調，汪洋大海中的拼板舟在波浪中湧動，在驚濤駭浪中譜出悅耳的協奏曲。", en:"In a key of red, a tatala surges through the open sea — a concerto sung amid towering waves."} },
      { img:"art18", cat:"ocean", zh:"蘭嶼秘境", en:"Secret Lanyu", yr:"2015", series:{zh:"海洋系列",en:"Ocean Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"130×162cm (100F)", note:{zh:"海風吹起，飛揚的泡泡、跳躍的飛魚在交織的拼板舟上，傳頌著古老的傳說。", en:"As the sea wind rises, drifting bubbles and leaping flying-fish carry an ancient legend across the woven canoes."} },
      { img:"art17", cat:"ocean", zh:"拼板舟的故事", en:"Tale of the Tatala", yr:"2015", series:{zh:"海洋系列",en:"Ocean Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"97×130cm (60F)", note:{zh:"海洋劇場中，停泊的拼板舟、跳躍的飛魚，當樂聲響起，靜謐的光影中敘述著這島嶼的故事。", en:"In the theatre of the sea, a moored tatala and leaping fish — when the music rises, the island's story is told in quiet light."} },
      { img:"art20", cat:"ocean", zh:"生命樂章", en:"Movement of Life", yr:"2015", series:{zh:"海洋系列",en:"Ocean Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"130×162cm (100F)", note:{zh:"透過肌理與符號的融合，跳躍的飛魚勾勒著生命的印記，在潮起潮落中譜出生命的樂章。", en:"Texture and symbol fuse; leaping fish trace the marks of life, composing its movement between the tides."} },
      { img:"art13", cat:"ocean", zh:"船歌", en:"Boat Song", yr:"2011", series:{zh:"海洋系列",en:"Ocean Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"112×154cm", note:{zh:"紅橙的汪洋、自然的色塊與焦黑的泥土，在達悟族勇士的吶喊中歌頌大海。", en:"A red-orange ocean, raw fields of colour and scorched earth — a hymn to the sea in the cry of a Tao warrior."} },
      { img:"art14", cat:"ocean", zh:"蘭嶼交響", en:"Lanyu Symphony", yr:"2011", series:{zh:"海洋系列",en:"Ocean Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"112×154cm", note:{zh:"飛魚在汪洋大海中飛揚、跳躍，與捕獵的拼板舟構築了一首舞曲，也譜出了大海的詩篇。", en:"Flying-fish soar and leap; with the hunting canoes they build a dance, a poem of the open sea."} },
      { img:"art15", cat:"ocean", zh:"魚眼系列 2", en:"Fish-Eye II", yr:"2016", series:{zh:"魚眼系列",en:"Fish-Eye Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"直徑 60cm / Ø60cm", note:{zh:"魚眼包覆著飛躍變形的金魚與迷幻的美人魚，透過光的折射，在祕境裡呼吸。", en:"A fish-eye holds leaping goldfish and a dreamlike mermaid, breathing in a secret realm through the refraction of light."} },
      { img:"art16", cat:"ocean", zh:"魚眼系列 3", en:"Fish-Eye III", yr:"2016", series:{zh:"魚眼系列",en:"Fish-Eye Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"直徑 60cm / Ø60cm", note:{zh:"被大海包覆著的金魚與女王頭在汪洋裡共舞，迴旋的水流傳達了遠方來的消息。", en:"Goldfish and the Queen's Head rock dance within the sea; swirling currents carry word from afar."} },
      { img:"art24", cat:"ocean", zh:"海洋進行式 I", en:"Ocean in Motion I", yr:"2018", series:{zh:"海洋進行式系列",en:"Ocean in Motion Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"112×80cm", note:{zh:"皺痕、肌理、流動的色彩在飛魚的穿梭中與海對話，揭開古老傳說的面紗。", en:"Creases, texture and flowing colour converse with the sea as the fish weave through, lifting the veil of an ancient legend."} },
      { img:"art25", cat:"ocean", zh:"海洋進行式 II", en:"Ocean in Motion II", yr:"2018", series:{zh:"海洋進行式系列",en:"Ocean in Motion Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"112×80cm", note:{zh:"皺痕、肌理、流動的色彩在飛魚的穿梭中與海對話，談論著海洋久遠的故事。", en:"Texture and flowing colour speak with the sea through the darting fish, recounting its long-ago stories."} },
      { img:"art26", cat:"ocean", zh:"海洋進行式 III", en:"Ocean in Motion III", yr:"2018", series:{zh:"海洋進行式系列",en:"Ocean in Motion Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"112×80cm", note:{zh:"流動的色彩與飛魚穿梭，揭開古老傳說的面紗。", en:"Flowing colour and weaving fish lift the veil of an ancient legend."} },
      { img:"art27", cat:"ocean", zh:"海洋進行式 IV", en:"Ocean in Motion IV", yr:"2018", series:{zh:"海洋進行式系列",en:"Ocean in Motion Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"112×80cm", note:{zh:"與海對話，談論著海洋久遠的故事。", en:"A dialogue with the sea, telling of its distant past."} },
      { img:"art28", cat:"ocean", zh:"海洋進行式 V", en:"Ocean in Motion V", yr:"2018", series:{zh:"海洋進行式系列",en:"Ocean in Motion Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"112×80cm", note:{zh:"皺痕、肌理與流動的色彩，在飛魚的穿梭中譜寫海洋的進行式。", en:"Creases, texture and colour in motion — the ocean's continuous present, written through the fish."} },
      { img:"art40", cat:"ocean", zh:"螺與海的交談與對抗", en:"Shell & Sea: Dialogue and Defiance", yr:"1999", series:{zh:"海洋系列",en:"Ocean Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"80×80cm", note:{zh:"運用鸚鵡螺和菊石，在大海衝擊下生存對抗的景象，以隱喻描寫生命力的滋長。", en:"Nautilus and ammonite endure the sea's force — a metaphor for the growth of life's vital power."} },
      { img:"art37", cat:"ocean", zh:"水中搖滾", en:"Underwater Rock", yr:"2012", series:{zh:"魚眼系列",en:"Fish-Eye Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"130×162cm (100F)", note:{zh:"以金魚為主題，在金魚與泡泡的交織游動中，藉由黃橙色與靜謐光線，產生富有節奏感的水中搖滾組曲。", en:"Goldfish and bubbles drift and interweave under quiet amber light — a rhythmic rock suite beneath the water."} },
      { img:"art19", cat:"ocean", zh:"童年記趣", en:"Childhood Delights", yr:"2015", series:{zh:"魚眼系列",en:"Fish-Eye Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"61×73cm (20F)", note:{zh:"人看魚、魚看人，孩童邊嬉戲邊述說著童年的故事，游動的金魚也聽得津津有味。", en:"People watch fish and fish watch back; as children spin childhood tales, the gliding goldfish listen, enthralled."} },

      { img:"art12", cat:"butterfly", zh:"蝶舞", en:"Butterfly Dance", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"91×117cm (50F)", note:{zh:"律動的圓、線、色塊及翩翩起舞的蝴蝶，譜出了繽紛燦爛的樂章。", en:"Pulsing circles, lines and blocks of colour with fluttering butterflies compose a brilliant, many-hued movement."} },
      { img:"art21", cat:"butterfly", zh:"蝶舞三重奏 1", en:"Butterfly Trio I", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"146×112cm (80F)", note:{zh:"潑灑、壓印與自由滴流中，層層堆疊出絢麗的色彩，暈染了蝴蝶的飛舞。", en:"Splash, press and free-flowing drips layer into radiant colour, dissolving into the flight of butterflies."} },
      { img:"art22", cat:"butterfly", zh:"蝶舞三重奏 2", en:"Butterfly Trio II", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"146×112cm (80F)", note:{zh:"潑灑、壓印與自由滴流，層層堆疊出絢麗色彩，譜出蝶舞三重奏。", en:"Splashed, pressed and dripped layers of brilliant colour sing the butterfly trio."} },
      { img:"art23", cat:"butterfly", zh:"蝶舞三重奏 3", en:"Butterfly Trio III", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"146×112cm (80F)", note:{zh:"色彩在自由的流動中暈染蝴蝶的飛舞，完成了蝶舞三重奏的終章。", en:"Colour flows freely into the butterflies' flight, completing the final movement of the trio."} },
      { img:"art05", cat:"butterfly", zh:"田園交響", en:"Pastoral Symphony", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"130×162cm (100F)", note:{zh:"飛舞的蝴蝶穿梭在香蕉園裡，黃橙、藍紫的色彩在田園間與洪流裡交織出悅耳的音符。", en:"Butterflies weave through a banana grove; amber and violet interlace across the fields into sweet, ringing notes."} },
      { img:"art10", cat:"butterfly", zh:"香蕉新樂園", en:"Banana Paradise", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"91×117cm (50F)", note:{zh:"在一個豐收的季節，蝴蝶造訪了結實纍纍的香蕉園，構築輕快的田園組曲。", en:"In a season of plenty, butterflies visit a heavy-laden banana grove — a light pastoral suite."} },
      { img:"art09", cat:"butterfly", zh:"春頌", en:"Ode to Spring", yr:"2018", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"80×65cm (25F)", note:{zh:"滋長的泡泡與舞動的蝴蝶在靜謐的花園裡引吭高歌，歌頌著春的來臨。", en:"Swelling bubbles and dancing butterflies sing out in a quiet garden, in praise of spring's arrival."} },
      { img:"art07", cat:"butterfly", zh:"春日變奏曲", en:"Spring Variations", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"73×91cm (30F)", note:{zh:"紅、橙、金、黃飛舞的色彩與花的綻放，在旋轉舞動下預告了春的訊息。", en:"Red, orange, gold and yellow whirl with opening blossoms, announcing the news of spring."} },
      { img:"art08", cat:"butterfly", zh:"夏日寄情", en:"Summer Reverie", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"73×91cm (30F)", note:{zh:"在絢爛的夏日中，黃色與橙色交織出溫暖的陽光，花與蝶的共舞洋溢著熱情的舞曲。", en:"In a radiant summer, yellow and orange weave warm sunlight; flower and butterfly dance an ardent waltz."} },
      { img:"art11", cat:"butterfly", zh:"綻放", en:"Blossom", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"73×91cm (30F)", note:{zh:"灑落的色彩、揮灑的筆觸繪出蛻變躍動的蝴蝶，忽隱忽現地綻放生命的光彩。", en:"Scattered colour and sweeping strokes draw the transforming butterfly, blossoming in glimpses with the radiance of life."} },
      { img:"art06", cat:"butterfly", zh:"共舞", en:"Dancing Together", yr:"2016", series:{zh:"蝶舞系列",en:"Butterfly Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"73×91cm (30F)", note:{zh:"午后時光，慵懶的黑貓在蝴蝶翩翩起舞的引領下，一同悠然共舞。", en:"In the afternoon hours, a languid black cat, led by fluttering butterflies, joins their unhurried dance."} },

      { img:"art30", cat:"folk", zh:"台灣搖滾", en:"Taiwan Rock", yr:"2012", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"162×780cm", note:{zh:"女王頭、龍頭、廟宇、花布和交織的魚，在這島嶼上譜出輕快節奏的台灣搖滾，展現多元活潑的生命力。", en:"Queen's Head, dragon, temple, floral cloth and interwoven fish strike up a brisk Taiwan rock, alive with diversity and vigour."} },
      { img:"art51", cat:"folk", zh:"回家", en:"Homecoming", yr:"2010", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"390×162cm", note:{zh:"蝴蝶、魚、雞骨頭在不同的年代中來來去去，榮枯與浮沉中尋找生命的根源。", en:"Butterflies, fish and bones come and go across the ages; through flourish and decline, a search for life's root."} },
      { img:"art47", cat:"folk", zh:"祈一・王船祭", en:"Wang-Yeh Boat Rite", yr:"1997", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"水彩",en:"Watercolour"}, size:"270×103cm", note:{zh:"南臺灣驅邪祈福的宗教儀式，藉由燒王船驅除瘟疫、帶來國泰民安，作者以繪畫呈現其盛況。", en:"A southern Taiwanese rite that burns the Wang-Yeh boat to drive out plague and bless the land — its grandeur rendered in paint."} },
      { img:"art42", cat:"folk", zh:"鑼鼓迎慶", en:"Drums of Celebration", yr:"2016", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"97×130cm (60F)", note:{zh:"鑼鼓聲中，飛龍騰空向前躍進，在泡泡和龍珠的烘托下，呈現歡欣鼓舞的節慶。", en:"To the beat of gong and drum a dragon leaps skyward; bubbles and pearl set off a jubilant festival."} },
      { img:"art41", cat:"folk", zh:"平安進行式", en:"Procession of Peace", yr:"2016", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"73×91cm (30F)", note:{zh:"運用年年有餘及金紙祈福的涵義，將魚與紙船的符號結合，呈現平安進行式的祈福儀式。", en:"Drawing on 'surplus year by year' and joss-paper blessing, fish and paper boat unite in a procession of peace."} },
      { img:"art39", cat:"folk", zh:"豐收進行曲", en:"Harvest March", yr:"2016", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"130×162cm (100F)", note:{zh:"運用台灣圖像——鳳梨與蝴蝶，與色塊肌理營造，在具象與抽象間構成一幅豐收季節的景象。", en:"Taiwanese motifs of pineapple and butterfly, built up in textured colour, form a scene of harvest between figure and abstraction."} },
      { img:"art04", cat:"folk", zh:"慶豐收協奏曲", en:"Harvest Concerto", yr:"2018", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"60×50cm (12F)", note:{zh:"流動的線條在靜謐的藍調裡，雞群們爭相覓食的熱鬧景象，譜出豐收的農村曲。", en:"Flowing lines over a quiet blue; a bustle of feeding hens sings the village song of harvest."} },
      { img:"art33", cat:"folk", zh:"祝福", en:"Blessing", yr:"2015", series:{zh:"鄉土節慶系列",en:"Folk & Festival Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"直徑 80cm / Ø80cm", note:{zh:"兩隻魚彷彿人在對話，在喜氣的花布上和金色背景的輝映下互道祝福，構成一幅圓滿和諧的圖像。", en:"Two fish converse like people, exchanging blessings over festive cloth and gold — a round, harmonious image."} },

      { img:"art57", cat:"ancient", zh:"大遷徙", en:"The Great Migration", yr:"2008", series:{zh:"古文明系列",en:"Ancient Civilisation Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"130×162cm (100F)", note:{zh:"骨骼奔馳在大戈壁的草原上，一種記憶的回溯與歷史的想像，描述大遷徙的場景。取材於蒙古國，由台中市立美術館收藏。", en:"Skeletons race across the Gobi grassland — a recollection of memory and historical imagining of the great migration. Drawn from Mongolia; collected by the Taichung Museum of Art."} },
      { img:"art71", cat:"ancient", zh:"沙漠極光", en:"Desert Aurora", yr:"2019", series:{zh:"古文明系列",en:"Ancient Civilisation Series"}, medium:{zh:"複合媒材",en:"Mixed media"}, size:"116.5×91cm (50F)", note:{zh:"描寫埃及建造亞斯文水壩，許多神殿古蹟沉入水中，後經聯合國教科文組織重新遷回陸地，雄偉古蹟重見昔日光彩。", en:"When Egypt built the Aswan Dam, temples sank beneath the water; relocated by UNESCO, these majestic monuments regained their former glory."} },
      { img:"art29", cat:"ancient", zh:"歷史光影中的布拉格", en:"Prague in the Light of History", yr:"1999", series:{zh:"古文明系列",en:"Ancient Civilisation Series"}, medium:{zh:"油彩、壓克力、畫布",en:"Oil & acrylic on canvas"}, size:"162×520cm (100F×4)", note:{zh:"充滿浪漫人文的布拉格，紅瓦白牆、古典優雅的教堂，在鐘樓鐘聲與白鴿的飛舞中，敘述歷史流變中的城市。", en:"Romantic, humane Prague — red roofs and white walls, an elegant cathedral — its history told amid tolling bells and circling doves."} },

      { img:"art01", cat:"rebirth", zh:"破繭", en:"Breaking the Cocoon", yr:"2018", series:{zh:"蛻變系列",en:"Metamorphosis Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"60×50cm (12F)", note:{zh:"在渲洩的洪流中尋找自由的途徑，掙脫潛在的束縛，褪去繭後生命獲得重生。", en:"Within a pouring torrent, a path to freedom — breaking unseen bonds, life is reborn once the cocoon is shed."} },
      { img:"art02", cat:"rebirth", zh:"振翅", en:"Beating Wings", yr:"2018", series:{zh:"蛻變系列",en:"Metamorphosis Series"}, medium:{zh:"油彩、畫布",en:"Oil on canvas"}, size:"60×50cm (12F)", note:{zh:"在雷射光衝擊下期待將碎裂的翅膀修復，帶著層層縫補的印記，再次飛翔。", en:"Under shattering laser light, broken wings long to be mended — bearing the marks of many stitches, to fly once more."} },
    ]
  },

  exhibitions: {
    featured: {
      img:"poster_sealight",
      titleZh:"海底射來的光 —— 莊明中 2025 油畫創作展",
      titleEn:"Light from the Sea Floor — Chuang Min-Chung 2025 Oil Painting Exhibition",
      descZh:"六十七件作品，宛如「海底射來的光」，穿越濾光的層層水域，在幽微與閃耀之間，映照出莊明中四十年的創作軌跡。藝評家謝里法譽為「像剛打開的珍珠寶盒」，少見而珍貴。",
      descEn:"Sixty-seven works, like 'light from the sea floor,' pass through filtering layers of water — between the faint and the radiant, they mirror forty years of Chuang's practice. Critic Shaih Lifa called it 'a pearl casket just opened' — rare and precious.",
      info:[
        { k:{zh:"展期",en:"Dates"}, v:"2025.10.11 – 2026.01.11" },
        { k:{zh:"地點",en:"Venue"}, v:{zh:"佛光緣美術館台北館（信義區松隆路 327 號 10F 之一）",en:"Fo Guang Yuan Art Gallery, Taipei (10F-1, No.327 Songlong Rd., Xinyi Dist.)"} },
        { k:{zh:"時間",en:"Hours"}, v:{zh:"每日 10:00–20:30（週一休館，免費參觀）",en:"Daily 10:00–20:30 (closed Mon, free admission)"} },
        { k:{zh:"開幕",en:"Opening"}, v:{zh:"2025.10.12（日）14:00 開幕暨現場導覽",en:"Sun 12 Oct 2025, 2:00 PM — opening & guided tour"} },
        { k:{zh:"講座",en:"Lecture"}, v:{zh:"2025.11.16（日）14:30　莊明中教授主講「海底射來的光—莊明中的藝術世界」",en:"Sun 16 Nov 2025, 2:30 PM — talk by Prof. Chuang: 'Light from the Sea Floor — My Artistic World'"} },
      ]
    },
    second: {
      img:"poster_heartsea",
      titleZh:"心海凝視 —— 莊明中油畫創作展",
      titleEn:"Gazing at the Heart-Sea — Chuang Min-Chung Oil Painting Exhibition",
      descZh:"海洋議題一直是莊明中的創作主題。此次展覽源於作者先天兩千三百度的高度近視——雖然看待世界很模糊，卻比別人看見更多的變化。前一年因視網膜剝離而靜養沉思，他開始描繪自我內心變動的風景，成為這次個展的主題「心海凝視」。",
      descEn:"The ocean has always been Chuang's theme. This show grew from his congenital extreme myopia (–2300 diopters): though the world appears blurred, he sees more change than others. After a year recovering from a retinal detachment, he began to paint the shifting landscape within — the theme of this exhibition.",
      info:[
        { k:{zh:"展期",en:"Dates"}, v:"2021.04.11 – 04.30" },
        { k:{zh:"地點",en:"Venue"}, v:{zh:"RISE ART STUDIO（台北市大安區仁愛路四段 230 號 1F）",en:"RISE ART STUDIO (1F, No.230, Sec.4, Ren'ai Rd., Da'an Dist., Taipei)"} },
        { k:{zh:"時間",en:"Hours"}, v:{zh:"週一至週五 11:00–17:30",en:"Mon–Fri 11:00–17:30"} },
      ]
    },
    timeline: [
      { yr:"2025", zh:"海底射來的光 — 莊明中 2025 油畫創作展", en:"Light from the Sea Floor", ty:{zh:"個展",en:"Solo"}, venue:{zh:"佛光緣美術館台北館",en:"Fo Guang Yuan Art Gallery, Taipei"} },
      { yr:"2021", zh:"心海凝視 — 莊明中油畫創作展", en:"Gazing at the Heart-Sea", ty:{zh:"個展",en:"Solo"}, venue:{zh:"RISE ART STUDIO，台北",en:"RISE ART STUDIO, Taipei"} },
      { yr:"2018", zh:"海洋進行式 — 莊明中油畫個展", en:"Ocean in Motion", ty:{zh:"個展",en:"Solo"}, venue:{zh:"國立中興大學",en:"National Chung Hsing University"} },
      { yr:"2010", zh:"飛魚祭・海洋系列 於中央美術學院美術館展出", en:"Flying-Fish Festival · Ocean Series", ty:{zh:"展出",en:"Show"}, venue:{zh:"中央美院美術館，北京",en:"CAFA Art Museum, Beijing"} },
      { yr:"歷年", zh:"國內外聯展 逾一百次", en:"100+ group exhibitions, in Taiwan and abroad", ty:{zh:"聯展",en:"Group"}, venue:{zh:"",en:""} },
      { yr:"歷程", zh:"個展二十五次・出版創作專輯十冊", en:"25 solo exhibitions · 10 published albums", ty:{zh:"歷程",en:"Career"}, venue:{zh:"",en:""} },
    ],
    galleryTitle: { zh:"展覽與創作現場", en:"Exhibitions & Studio" },
    crowdTitle: { zh:"現場盛況", en:"Opening Crowds & Scale" },
    crowdLead: { zh:"從美術館到國際設計展，每一次展出都吸引大批觀眾與藝文同好齊聚。", en:"From museum halls to international design fairs, each showing draws large crowds of audiences and art lovers." },
    crowd: [
      { img:"ex_fgs", zh:"佛光緣美術館台北館—〈海底射來的光〉開幕大合照", en:"Fo Guang Yuan Art Gallery, Taipei — 'Light from the Sea Floor' opening group photo" },
      { img:"ex_seaport", zh:"台中港區藝術中心—展場座談會座無虛席", en:"Taichung Seaport Art Center — a packed gallery talk" },
      { img:"ex_dadun", zh:"台中大墩文化中心—展覽現場人潮絡繹", en:"Taichung Dadun Cultural Center — a steady stream of visitors" },
      { img:"ex_thai", zh:"泰國家具設計展—飛魚意象聯名單椅成焦點", en:"Thailand furniture design fair — the flying-fish chair collaboration draws the crowd" },
      { img:"ex_sony", zh:"Sony 相機展—蝶舞花季系列作品展出", en:"Sony camera showcase — the Butterfly & Bloom series on display" },
    ],
    gallery: [
      { img:"art48", zh:"〈飛魚祭〉520×162cm（100F×4），2009 — 莊明中於巨幅作品前", en:"'Flying-Fish Festival', 520×162cm, 2009 — the artist before the monumental work" },
      { img:"art50", zh:"創作〈農村曲〉700×205cm，2010", en:"Creating 'Village Song', 700×205cm, 2010" },
      { img:"art49", zh:"繪製〈永保平安〉520×162cm（100F×4），2009", en:"Painting 'Eternal Peace', 520×162cm, 2009" },
      { img:"ph_flyingfish", zh:"莊明中與〈飛魚祭〉作品，於台北國父紀念館", en:"With 'Flying-Fish Festival' at the Sun Yat-sen Memorial Hall, Taipei" },
      { img:"ph_studio", zh:"於工作室全神貫注進行新作", en:"Absorbed in new work at the studio" },
      { img:"ph_xubing", zh:"2010 與徐冰副院長合影於〈飛魚祭〉前（北京）", en:"2010, with Vice-Dean Xu Bing before 'Flying-Fish Festival' (Beijing)" },
      { img:"ph_louvre", zh:"2015 於巴黎羅浮宮參訪美術史名作", en:"2015, studying masterworks at the Louvre, Paris" },
      { img:"ph_gobi", zh:"2007 騎行於蒙古國大戈壁", en:"2007, riding across the Mongolian Gobi" },
    ]
  },

  academic: {
    intro: {
      zh: "從全國性評審到藝術機構顧問，莊明中教授以專業眼光與公正態度，長年為台灣藝術界的發展把關。",
      en: "From national juror to museum advisor, Professor Chuang has long safeguarded the development of Taiwan's art world with professional insight and impartiality."
    },
    stats: [
      { n:"25+", zh:"個展", en:"Solo Shows" },
      { n:"100+", zh:"聯展", en:"Group Shows" },
      { n:"10", zh:"創作專輯", en:"Albums" },
      { n:"PhD", zh:"美術學博士", en:"Doctorate" },
    ],
    blocks: [
      { ic:"⚖", title:{zh:"全國性藝術評審",en:"National Juror"},
        body:{zh:"多次擔任全國美展、文化部藝術銀行收藏、全國百號油畫大展等重要藝術活動的評審委員，為台灣藝術創作的高品質與多樣性把關。",
              en:"Repeatedly served as juror for the National Art Exhibition, the Ministry of Culture's Art Bank acquisitions, and the National 100-Size Oil Painting Exhibition — upholding quality and diversity in Taiwanese art."} },
      { ic:"◷", title:{zh:"地方美展推手",en:"Regional Advocacy"},
        body:{zh:"參與台中市大墩美展、磺溪美展、台灣中部美術展等地方性藝術活動，提升展覽的專業水準，促進地方藝術文化的繁榮，為在地藝術家創造更多展示與成長的機會。",
              en:"Involved in regional events such as the Dadun, Huangxi and Central Taiwan Fine Arts Exhibitions — raising professional standards and fostering local artistic culture and opportunity."} },
      { ic:"❖", title:{zh:"美術館典藏委員",en:"Museum Acquisition Committee"},
        body:{zh:"擔任國立台灣美術館油畫典藏品點檢審查委員，及台中市立美術館、桃園市立美術館典藏委員，為公共藝術資源的管理與策劃提供專業意見。",
              en:"Acquisition committee member for the National Taiwan Museum of Fine Arts, Taichung Museum of Art, and Taoyuan Museum of Fine Arts — advising on the stewardship of public art collections."} },
      { ic:"✎", title:{zh:"藝術教育與學術",en:"Education & Scholarship"},
        body:{zh:"任教於國立台中教育大學美術學系逾二十年，指導碩士論文與創作研究，並曾任系所主任，推動課程革新與跨領域藝術教育。",
              en:"Over two decades teaching in the Department of Fine Arts at NTCU — supervising graduate theses and creative research, and serving as department chair to drive curriculum renewal and interdisciplinary art education."} },
    ],
    rolesTitle: { zh:"評審與顧問身分", en:"Jury & Advisory Roles" },
    collectionsTitle: { zh:"公共典藏", en:"Public Collections" },
    collectionsLead: { zh:"作品為多所公立美術館與機構典藏。", en:"Works held in the collections of major public museums and institutions." },
    collections: [
      { zh:"國立台灣美術館", en:"National Taiwan Museum of Fine Arts" },
      { zh:"台中市立美術館", en:"Taichung Museum of Art" },
      { zh:"桃園市立美術館", en:"Taoyuan Museum of Fine Arts" },
      { zh:"文化部藝術銀行", en:"Art Bank Taiwan, Ministry of Culture" },
      { zh:"國立台中教育大學", en:"National Taichung University of Education" },
      { zh:"國父紀念館", en:"Sun Yat-sen Memorial Hall" },
      { zh:"中央美術學院美術館（北京）", en:"CAFA Art Museum, Beijing" },
      { zh:"私人收藏（台灣・中國・歐美）", en:"Private collections (Taiwan, China, Europe & US)" },
    ],
    feature: { img:"ph_yiying",
      capZh:"中央美術學院易英教授談莊明中的當代繪畫",
      capEn:"Prof. Yi Ying of the Central Academy of Fine Arts on Chuang's contemporary painting" },
    exchangeTitle: { zh:"學術交流與講座", en:"Academic Exchange & Lectures" },
    exchangeLead: {
      zh:"從資深優良教師表揚、跨國學術研討會到大學人文講座，莊明中持續在教育與學術的現場分享創作與思考。",
      en:"From honours for distinguished teaching to international symposia and university humanities lectures, Chuang continues to share his practice and thinking in the field of education and scholarship."
    },
    exchange: [
      { img:"acx_award", tall:false,
        title:{ zh:"資深優良教師表揚", en:"Honoured as a Distinguished Senior Teacher" },
        body:{ zh:"四十年的教育歲月，不是一場短跑，而是一趟需要耐力與堅持的馬拉松。每一堂課、每一個眼神、每一次陪伴，都是挑戰，也是充實。能在這條路上分享知識、傳遞愛與希望，是我最大的榮耀；帶著感恩與喜悅接受這份肯定，也願這份溫暖繼續傳遞下去。",
               en:"Forty years of teaching is not a sprint but a marathon of endurance and persistence. Every class, every gaze, every moment of accompaniment is both a challenge and a fulfilment. To share knowledge and pass on love and hope along this road is my greatest honour." } },
      { img:"acx_lecture", tall:false,
        title:{ zh:"〈萬象凝神—莊明中的藝術世界〉講座", en:"Lecture — 'Stillness Among All Things: My Artistic World'" },
        body:{ zh:"從魚、海洋議題到生命敘事，從對光的探尋、形式的解放，到台灣符號的運用與當代藝術的呈現——藝術家莊明中與謝里法教授、陳懷恩教授，皆有精彩的講述與對談。感謝大家的熱情參與。",
               en:"From fish and the ocean to the narrative of life, from the search for light and the liberation of form to Taiwanese symbols and contemporary expression — a rich dialogue between Chuang and Professors Shaih Lifa and Chen Huai-en." } },
      { img:"acx_symposium", tall:false,
        title:{ zh:"「凝結核」台日韓國際學術研討會", en:"'Condensation Nucleus' Taiwan–Japan–Korea Symposium" },
        body:{ zh:"榮幸受邀參與這次台日韓國際學術研討會。美術史的發展與故事就在周圍發生，藉由過去歷史的探索與對話，引發創作的省思，是一段難得的經驗。",
               en:"Honoured to take part in this Taiwan–Japan–Korea international symposium. Art history unfolds all around us; revisiting the past in dialogue sparks fresh reflection on creation — a rare and valuable experience." } },
      { img:"acx_taitung", tall:false,
        title:{ zh:"台東大學人文講座—海族讚歌的油畫創作", en:"NTTU Humanities Lecture — 'Ode to the Sea Peoples'" },
        body:{ zh:"感謝受邀台東大學人文講座，分享「海族讚歌」的油畫創作，回溯 1985 年以來描繪蘭嶼達悟族飛魚的故事。面對跨領域同學的提問，也激起了不一樣的浪花，有如蒙太奇般的浮現。",
               en:"Grateful to be invited to the National Taitung University humanities lecture to share the 'Ode to the Sea Peoples' paintings, tracing the story of the Tao people's flying-fish painted since 1985. The students' interdisciplinary questions stirred new waves of thought." } },
      { img:"acx_xubing", tall:false,
        title:{ zh:"與中央美院徐冰副院長合影於〈飛魚祭〉前", en:"With Vice-Dean Xu Bing of CAFA before 'Flying-Fish Festival'" },
        body:{ zh:"數年前與中央美術學院徐冰副院長，於我的作品〈飛魚祭〉前合影。在中央美院攻讀博士的過程中，我確實學習到許多知識，也獲得長足的進步。若你喜歡我的〈飛魚祭〉系列，別忘了留言讓我知道——未來我們可以分享更多這個時期的創作。",
               en:"A few years ago, photographed with Vice-Dean Xu Bing of the Central Academy of Fine Arts before my work 'Flying-Fish Festival'. Pursuing my doctorate at CAFA, I truly learned a great deal and made real progress." } },
    ],
    criticsTitle: { zh:"藝評選粹", en:"Critical Acclaim" },
    critics: [
      { quote:{zh:"觀賞莊明中三十多年的油畫創作，得到的印象是：他的作品近年來越畫越大，長度超過 520 公分或 780 公分的作品比比皆是。這表示他的創作信心越來越高，畫面越大才能滿足他所欲申訴的藝術意涵。",
               en:"After thirty years of his oil painting, the impression is clear: his works have grown ever larger — 520 or even 780 centimetres long are commonplace. It shows a rising confidence; only a larger surface can hold all he wishes to say."},
        who:{zh:"王秀雄　國立臺灣師範大學美術研究所 名譽教授",en:"Wang Hsiu-Hsiung — Professor Emeritus, Graduate Institute of Fine Arts, NTNU"} },
      { quote:{zh:"莊明中的作品運用很多現代的語言，但卻是立足於後現代的高度，他的表達是一種思想的圖式。我們從他的畫中可以尋找到許多審美的趣味和表現的技巧，但若沒有思想的支撐，一切都會歸於平淡。",
               en:"Chuang's work employs much modern vocabulary, yet stands at a post-modern height; his expression is a schema of thought. One finds in his paintings great aesthetic pleasure and technical skill — but without the support of thought, all would fade into the ordinary."},
        who:{zh:"易英　中央美術學院 教授",en:"Yi Ying — Professor, Central Academy of Fine Arts, Beijing"} },
      { quote:{zh:"他將海洋、飛魚與拼板舟化為流動的符號，在具象與抽象之間，譜出屬於這座島嶼的視覺樂章。色彩是他的語言，肌理是他的節奏。",
               en:"He turns the ocean, the flying-fish and the tatala into flowing symbols; between figuration and abstraction, he composes a visual music that belongs to this island. Colour is his language, texture his rhythm."},
        who:{zh:"謝里法　藝術史家・畫家",en:"Shaih Lifa — Art Historian & Painter"} },
    ]
  },

  collab: {
    intro: {
      zh: "誠摯邀請您與我們聯繫，洽談各類藝術合作計畫。無論是作品收藏、展覽策劃、藝術講座或創意提案，我們都非常歡迎。",
      en: "We warmly invite you to discuss artistic collaboration of every kind — from collection and exhibition to lectures and creative proposals."
    },
    cards: [
      { ic:"❖", zh:"作品收藏", en:"Acquisition & Collection", d:{zh:"為私人收藏、企業空間或機構典藏，提供原作與專輯的洽購與諮詢。",en:"Original works and albums for private collectors, corporate spaces and institutional collections."} },
      { ic:"◈", zh:"展覽策劃", en:"Exhibition Curation", d:{zh:"個展、聯展與主題策展的合作，從概念發想到現場呈現的完整規劃。",en:"Solo, group and thematic curation — from concept to realisation in the gallery."} },
      { ic:"✦", zh:"藝術講座", en:"Lectures & Talks", d:{zh:"美學、創作與藝術教育主題的專題講座與工作坊。",en:"Talks and workshops on aesthetics, creative practice and art education."} },
      { ic:"❉", zh:"公共藝術", en:"Public Art", d:{zh:"將藝術帶入社區與公共空間，提升公眾藝術素養與城市文化生活。",en:"Bringing art into communities and public space, enriching civic cultural life."} },
      { ic:"◇", zh:"委託創作", en:"Commissions", d:{zh:"因應空間與主題量身創作的油畫與複合媒材作品。",en:"Bespoke oil and mixed-media works tailored to space and theme."} },
      { ic:"✧", zh:"授權出版", en:"Licensing & Publishing", d:{zh:"圖像授權、出版合作與藝術衍生品的開發。",en:"Image licensing, publishing partnerships and art-derived products."} },
    ],
    future: {
      title:{zh:"未來展望",en:"Looking Ahead"},
      items:[
        { zh:"持續創新", en:"Continuous Innovation", d:{zh:"結合虛擬實境與人工智能等新興科技，開創更具互動性與沉浸感的藝術作品。",en:"Embracing VR and AI to create more interactive, immersive work."} },
        { zh:"國際交流", en:"International Exchange", d:{zh:"組織跨國藝術展覽與工作坊，提升台灣藝術在國際舞台上的能見度。",en:"Cross-border exhibitions and workshops to raise Taiwan's visibility abroad."} },
        { zh:"教育革新", en:"Educational Renewal", d:{zh:"推動跨學科的藝術教育模式，培養具多元視角的新一代藝術家。",en:"Interdisciplinary art education for a new generation of artists."} },
        { zh:"社會貢獻", en:"Social Contribution", d:{zh:"發起更多公共藝術項目，將藝術帶入社區與公共空間。",en:"Launching public art projects that bring art into the community."} },
      ]
    }
  },

  contact: {
    intro: {
      zh: "期待與您相遇在藝術的旅程中。歡迎追蹤社群媒體，第一時間獲得最新展覽資訊、創作故事與工作室動態。",
      en: "We look forward to meeting you on the journey of art. Follow along for the latest exhibitions, stories and studio news."
    },
    lines: [
      { k:{zh:"電子郵件",en:"Email"}, v:"chuang.yun.yen@gmail.com", href:"mailto:chuang.yun.yen@gmail.com", ic:"@" },
      { k:{zh:"Facebook",en:"Facebook"}, v:"facebook.com/lanternartfish", href:"https://www.facebook.com/lanternartfish", ic:"f" },
      { k:{zh:"Instagram",en:"Instagram"}, v:"@chuangminchung", href:"https://www.instagram.com/chuangminchung/", ic:"ig" },
      { k:{zh:"網站",en:"Website"}, v:"chuangminchung.com", href:"https://chuangminchung.com/", ic:"↗" },
    ],
    img:"ph_studio"
  },

  footer: {
    sig: { zh:"凝神靜氣，描繪萬象之美。", en:"With stilled spirit, painting the beauty of all things." }
  }
};
