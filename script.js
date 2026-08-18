/* ==========================================================================
   JACKIFY CLONE PLAYBACK ENGINE & INTERFACES
   ========================================================================== */

// 1. Song Data List (34 Songs Total)
const songs = [
    {
        id: 0,
        title: "Sattru Mun Varai",
        artist: "Ilaiyaraaja",
        album: "Neethaane En Ponvasantham",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787052458/Sattru-Mun-Varai-MassTamilan.com.mp3",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&auto=format&fit=crop&q=60",
        duration: "5:06",
        dateAdded: "2026-08-10",
        themeColor: "#4b1b6d"
    },
    {
        id: 1,
        title: "Die With A Smile",
        artist: "Lady Gaga & Bruno Mars",
        album: "Die With A Smile (Single)",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787052453/Die_With_A_Smile-_SambalpuriStar.In.mp3",
        cover: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=300&auto=format&fit=crop&q=60",
        duration: "4:11",
        dateAdded: "2026-08-11",
        themeColor: "#8c1c20"
    },
    {
        id: 2,
        title: "Samajavaragamana",
        artist: "Thaman S (Sid Sriram)",
        album: "Ala Vaikunthapurramuloo",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787052450/Samajavaragamana_-_SenSongsMp3.Co.mp3",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60",
        duration: "3:41",
        dateAdded: "2026-08-12",
        themeColor: "#165860"
    },
    {
        id: 3,
        title: "Buttabomma",
        artist: "Thaman S (Armaan Malik)",
        album: "Ala Vaikunthapurramuloo",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787052450/Buttabomma_-_SenSongsMp3.Co.mp3",
        cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60",
        duration: "3:47",
        dateAdded: "2026-08-14",
        themeColor: "#85701b"
    },
    {
        id: 4,
        title: "Ichu Ichu Ichu",
        artist: "Vijay Antony",
        album: "Vedi",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787052448/Ichu-Ichu-Ichu.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&auto=format&fit=crop&q=60",
        duration: "5:08",
        dateAdded: "2026-08-15",
        themeColor: "#9c4918"
    },
    {
        id: 5,
        title: "Azhage",
        artist: "Hiphop Tamizha",
        album: "Kathakali",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787052430/Azhage.mp3",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&auto=format&fit=crop&q=60",
        duration: "4:43",
        dateAdded: "2026-08-16",
        themeColor: "#1c6b3e"
    },
    {
        id: 6,
        title: "Yamunai Aatrile",
        artist: "Ilaiyaraaja",
        album: "Thalapathy",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053339/Yamunai-Aatrile.mp3",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&auto=format&fit=crop&q=60",
        duration: "4:32",
        dateAdded: "2026-08-18",
        themeColor: "#5c3d2e"
    },
    {
        id: 7,
        title: "Bombay Ponnu",
        artist: "Vijay Antony",
        album: "Vedi",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053248/Bombay-Ponnu.mp3",
        cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&auto=format&fit=crop&q=60",
        duration: "4:41",
        dateAdded: "2026-08-18",
        themeColor: "#7a123e"
    },
    {
        id: 8,
        title: "Anicham Poovazhagi",
        artist: "Harris Jayaraj",
        album: "Irandaam Ulagam",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053236/Anicham-Poovazhagi.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
        duration: "4:56",
        dateAdded: "2026-08-18",
        themeColor: "#1c3c5c"
    },
    {
        id: 9,
        title: "Asku Laska",
        artist: "Vijay Prakash, Chinmayi",
        album: "Nanban",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053248/Asku-Laska-MassTamilan.fm.mp3",
        cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&auto=format&fit=crop&q=60",
        duration: "6:14",
        dateAdded: "2026-08-18",
        themeColor: "#522b5c"
    },
    {
        id: 10,
        title: "Chikku Bukku Chikku",
        artist: "A.R. Rahman",
        album: "Gentleman",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053251/Chikku-Bukku-Chikku-MassTamilan.com.mp3",
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&auto=format&fit=crop&q=60",
        duration: "5:42",
        dateAdded: "2026-08-18",
        themeColor: "#1c5c3e"
    },
    {
        id: 11,
        title: "Azhagu (F)",
        artist: "G.V. Prakash Kumar",
        album: "Saivam",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053253/Azhagu-F.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&auto=format&fit=crop&q=60",
        duration: "4:28",
        dateAdded: "2026-08-18",
        themeColor: "#5c561c"
    },
    {
        id: 12,
        title: "Engae Andha Vennila",
        artist: "Hariharan",
        album: "Varushamellam Vasantham",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053267/Engae-Andha-Vennila.mp3",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&auto=format&fit=crop&q=60",
        duration: "5:17",
        dateAdded: "2026-08-18",
        themeColor: "#2b5c56"
    },
    {
        id: 13,
        title: "En Aayul Regai Neeyadi",
        artist: "Shankar Mahadevan",
        album: "Vaseegara",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053265/En-Aayul-Regai-Neeyadi.mp3",
        cover: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=300&auto=format&fit=crop&q=60",
        duration: "5:38",
        dateAdded: "2026-08-18",
        themeColor: "#5c1c2b"
    },
    {
        id: 14,
        title: "Arjunar Villu",
        artist: "Sukhwinder Singh",
        album: "Ghilli",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053258/Arjunar_Villu.mp3",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60",
        duration: "4:27",
        dateAdded: "2026-08-18",
        themeColor: "#7c4d1c"
    },
    {
        id: 15,
        title: "Jimikki Kammal",
        artist: "Shaan Rahman",
        album: "Velipadinte Pusthakam",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053277/Jimikki-Kammal.mp3",
        cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60",
        duration: "3:22",
        dateAdded: "2026-08-18",
        themeColor: "#3d5c1c"
    },
    {
        id: 16,
        title: "Ippadi Mazhai Aditthal",
        artist: "D. Imman",
        album: "Jilla",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053283/Ippadi-Mazhai-Aditthal.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&auto=format&fit=crop&q=60",
        duration: "4:47",
        dateAdded: "2026-08-18",
        themeColor: "#1c4d5c"
    },
    {
        id: 17,
        title: "Karakudi Ilavarasi En Nenja",
        artist: "Vijay Ebenezer",
        album: "Kalakalappu",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053298/Karakudi-Ilavarasi-En-Nenja-MassTamilan.com.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80",
        duration: "4:33",
        dateAdded: "2026-08-18",
        themeColor: "#5c1c4d"
    },
    {
        id: 18,
        title: "Isa - Andro",
        artist: "Andro",
        album: "Sonnaya Lunnaya",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053292/Isa_-_Andro_Lyrics_andro_sonnaya_lunnaya.mp3",
        cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&auto=format&fit=crop&q=60",
        duration: "3:01",
        dateAdded: "2026-08-18",
        themeColor: "#2f1c5c"
    },
    {
        id: 19,
        title: "Kada Veedhi",
        artist: "Vijay Antony",
        album: "Angadi Theru",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053285/Kada_Veedhi.mp3",
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&auto=format&fit=crop&q=60",
        duration: "5:02",
        dateAdded: "2026-08-18",
        themeColor: "#5c3b1c"
    },
    {
        id: 20,
        title: "Nalla Nanban",
        artist: "Harris Jayaraj",
        album: "Nanban",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053300/Nalla-Nanban-MassTamilan.fm.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&auto=format&fit=crop&q=60",
        duration: "4:24",
        dateAdded: "2026-08-18",
        themeColor: "#1c5c56"
    },
    {
        id: 21,
        title: "Nodivalandava 8D",
        artist: "Kannada Hit",
        album: "Nodi Valandava 8D",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053302/Nodivalandava_8D_Audio_Song.mp3",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&auto=format&fit=crop&q=60",
        duration: "3:45",
        dateAdded: "2026-08-18",
        themeColor: "#4a1c5c"
    },
    {
        id: 22,
        title: "Pudichiruka Illa Pudikalaya",
        artist: "Tamil Melodies",
        album: "Pudichiruka Single",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053314/Pudichiruka-Illa-Pudikalaya-MassTamilan.com.mp3",
        cover: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=300&auto=format&fit=crop&q=60",
        duration: "4:51",
        dateAdded: "2026-08-18",
        themeColor: "#1c5c4d"
    },
    {
        id: 23,
        title: "Oru Kuchi Oru Kulfi",
        artist: "Nivas K. Prasanna",
        album: "Thegidi",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053305/Oru-Kuchi-Oru-Kulfi-MassTamilan.com.mp3",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60",
        duration: "3:58",
        dateAdded: "2026-08-18",
        themeColor: "#5c4a1c"
    },
    {
        id: 24,
        title: "Sakkarai Nilave",
        artist: "Mani Sharma",
        album: "Youth",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053320/Sakkarai-Nilave.mp3",
        cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60",
        duration: "5:32",
        dateAdded: "2026-08-18",
        themeColor: "#1c3d5c"
    },
    {
        id: 25,
        title: "See You Again",
        artist: "Wiz Khalifa ft. Charlie Puth",
        album: "Furious 7 Soundtrack",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053327/See_You_Again_PenduJatt.Com.Se.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&auto=format&fit=crop&q=60",
        duration: "3:49",
        dateAdded: "2026-08-18",
        themeColor: "#3d3d3d"
    },
    {
        id: 26,
        title: "Vaa Kannamma",
        artist: "Yuvan Shankar Raja",
        album: "Dharma Durai",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053341/Vaa-Kannamma-MassTamilan.dev.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80",
        duration: "4:16",
        dateAdded: "2026-08-18",
        themeColor: "#5c2a1c"
    },
    {
        id: 27,
        title: "Yendhan Kan Munne",
        artist: "Harris Jayaraj",
        album: "Nanban",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053344/Yendhan-Kan-Munne-MassTamilan.fm.mp3",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&auto=format&fit=crop&q=60",
        duration: "5:26",
        dateAdded: "2026-08-18",
        themeColor: "#1c5c2d"
    },
    {
        id: 28,
        title: "Ramuloo Ramula",
        artist: "Thaman S",
        album: "Ala Vaikunthapurramuloo",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053347/Ramuloo_Ramula_-_SenSongsMp3.Co.mp3",
        cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&auto=format&fit=crop&q=60",
        duration: "4:10",
        dateAdded: "2026-08-18",
        themeColor: "#5c521c"
    },
    {
        id: 29,
        title: "Vaaya En Veera",
        artist: "Leon James",
        album: "Kanchana 2",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053349/Vaaya-En-Veera.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60",
        duration: "4:14",
        dateAdded: "2026-08-18",
        themeColor: "#5c1c1c"
    },
    {
        id: 30,
        title: "Watcha Udadha",
        artist: "Tamil Folk Mashup",
        album: "Watcha Udadha Single",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053580/Watcha_Udadha.mp3",
        cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&auto=format&fit=crop&q=60",
        duration: "3:30",
        dateAdded: "2026-08-18",
        themeColor: "#1c525c"
    },
    {
        id: 31,
        title: "Vaama Vaama",
        artist: "Tamil Hits",
        album: "Vaama Vaama Single",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787053580/Vaama_Vaama.mp3",
        cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&auto=format&fit=crop&q=60",
        duration: "4:02",
        dateAdded: "2026-08-18",
        themeColor: "#521c5c"
    },
    {
        id: 32,
        title: "Ulagena Uruveduthaay",
        artist: "Traditional",
        album: "Devotional Hits",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787054077/Ulagena_Uruveduthaay.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&auto=format&fit=crop&q=60",
        duration: "4:48",
        dateAdded: "2026-08-18",
        themeColor: "#1c1c5c"
    },
    {
        id: 33,
        title: "Kurumugil",
        artist: "Vishal Chandrashekhar",
        album: "Sita Ramam",
        url: "https://res.cloudinary.com/fwf68zqi/video/upload/v1787054079/Kurumugil-MassTamilan.dev.mp3",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&auto=format&fit=crop&q=60",
        duration: "3:40",
        dateAdded: "2026-08-18",
        themeColor: "#1c5c3d"
    }
];

// Lyrics Database for the Tracks
const lyricsData = {
    0: "Sattru mun varai pesiyadhey... En kannil neer thuliyaaga...\nIlaiyaraaja's magical melody in Neethaane En Ponvasantham.",
    1: "If the world was ending, I'd wanna be next to you...\nLady Gaga & Bruno Mars rocking the charts with Die With A Smile.",
    2: "Samajavaragamana... Ninu choosi aaga galana...\nSid Sriram's soulful vocals for Ala Vaikunthapurramuloo.",
    3: "Buttabomma Buttabomma, nannu chuttu koraa...\nArmaan Malik's blockbuster vocals for Thaman S.",
    4: "Ichu Ichu Ichu Kodukka vandhenadi...\nHigh-energy Tamil mass track composed by Vijay Antony.",
    5: "Azhage Azhage, un vizhigalil veezhndhenadi...\nHiphop Tamizha's melodic vibe in Kathakali.",
    6: "Yamunai aatrile eera kaatrile, kannanodu thaan...\nTraditional classical track from Mani Ratnam's Thalapathy.",
    7: "Bombay Ponnu, Chennai Vanthu, heart-a thiruduthey...\nVijay Antony's catchy track from Vedi.",
    8: "Anicham Poovazhagi... Unnai kanda naal mudhalaa...\nHarris Jayaraj's visual symphonic track in Irandaam Ulagam.",
    9: "Asku Laska, Emo Emo, Oru Devadhai pirandhalea...\nNanban's romantic multilingual love anthem.",
    10: "Chikku Bukku Chikku Bukku Raile... A.R. Rahman's iconic dance break in Gentleman.",
    11: "Azhagu, kutti azhagu, aval paadum paattu azhagu...\nUnni Krishnan's national award winning rendering in Saivam.",
    12: "Engae andha vennila... sirikkiya kaanaliye...\nSirpy's heartbreaking melody in Varushamellam Vasantham.",
    13: "En Aayul Regai Neeyadi, en kaadhal thozhiyaadi...\nShankar Mahadevan's energetic melody in Vaseegara.",
    14: "Arjunar villu, hari kadha sollu, ghilli da...\nVidyasagar's adrenaline-fueled folk hit in Ghilli.",
    15: "Entammede Jimikki Kammal, entappan konda poyi...\nShaan Rahman's viral sensational hit from Kerala.",
    16: "Ippadi mazhai adithaal, yeppadi naan varuven...\nShreya Ghoshal's romantic rainfall duet in Jilla.",
    17: "Karakudi Ilavarasi en nenja killi poana...\nUpbeat folk mass track in Kalakalappu.",
    18: "Sonnaya Lunnaya... Russian Hip-hop vibe by Andro.",
    19: "Kada veedhi poga venaam... Angadi Theru's urban folk melody.",
    20: "Nalla nanban vendum endru vaanil thedi ponadhey...\nHarris Jayaraj's ultimate friendship song in Nanban.",
    21: "Nodivalandava... 8D surround sound audio Kannada hit.",
    22: "Pudichiruka illa pudikalaya... tell me now babe...",
    23: "Oru kuchi oru kulfi, rendu bubblegum thaadi...\nNivas K. Prasanna's fresh indie romance track in Thegidi.",
    24: "Sakkarai nilave... ennai vittu odadhey...\nHariharan's passionate, classical-infused hit in Youth.",
    25: "It's been a long day without you my friend...\nCharlie Puth's emotional tribute in Fast & Furious 7.",
    26: "Vaa Kannamma, unna nenachu nenju uruguthey...\nYuvan Shankar Raja's beautiful rural composition in Dharma Durai.",
    27: "Yendhan kan munne... en manam thavikuthey...\nSoulful guitar-based melody in Nanban.",
    28: "Ramuloo Ramula... aagani hungama...\nBlockbuster Telugu energetic party single by Thaman S.",
    29: "Vaaya en veera, vaaya en thozha... Leon James' hit in Kanchana 2.",
    30: "Watcha udadha, watcha udadha... energetic Tamil folk mashup.",
    31: "Vaama Vaama... high energy Tamil dance single.",
    32: "Ulagena uruveduthaay, om sakthi ammaye...\nTraditional devotional chant.",
    33: "Kurumugil galil, unadhu mugam thaan... Sita Ramam's beautiful melody."
};

// 2. State Variables
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let likedSongs = new Set(); // store song IDs
let searchActive = false;

// History Stack for Header Back/Forward Arrows
let navHistory = ["home"];
let historyIndex = 0;

// Last volume value (defaults to 70%)
let volume = 0.7;
let lastNonZeroVolume = 0.7;

// DOM Elements
const audio = document.getElementById("main-audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");
const likeBtn = document.getElementById("like-btn");

const progressRange = document.getElementById("progress-range");
const progressFill = document.getElementById("progress-fill");
const progressThumb = document.getElementById("progress-thumb");
const currentTimeEl = document.getElementById("current-time");
const totalTimeEl = document.getElementById("total-time");

const volumeRange = document.getElementById("volume-range");
const volumeFill = document.getElementById("volume-fill");
const volumeMuteBtn = document.getElementById("volume-mute-btn");

const currentAlbumArt = document.getElementById("current-album-art");
const currentTitle = document.getElementById("current-title");
const currentArtist = document.getElementById("current-artist");

const quickPlayContainer = document.getElementById("quick-play-container");
const songsCardsContainer = document.getElementById("songs-cards-container");
const songRowsContainer = document.getElementById("song-rows-container");

const navHome = document.getElementById("nav-home");
const navSearch = document.getElementById("nav-search");
const navLibrary = document.getElementById("nav-library");
const searchContainer = document.getElementById("header-search-bar");
const searchInput = document.getElementById("search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const mainContent = document.querySelector(".main-content");
const greetingTitle = document.getElementById("greeting-title");

// Rebrand Login DOM Elements
const loginOverlay = document.getElementById("login-overlay");
const loginForm = document.getElementById("login-form");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginErrorBox = document.getElementById("login-error-box");
const loginErrorText = document.getElementById("login-error-text");
const profileDisplayName = document.getElementById("profile-display-name");

// Header Profile Dropdown Elements
const profileMenuBtn = document.getElementById("profile-menu-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const logoutBtn = document.getElementById("logout-btn");

// Navigation Arrows Elements
const headerPrevArrow = document.getElementById("header-prev-arrow");
const headerNextArrow = document.getElementById("header-next-arrow");

// 3. Initializations
window.addEventListener("DOMContentLoaded", () => {
    checkAuthentication();
    setGreeting();
    renderUI();
    loadSong(currentSongIndex);
    setupVolume();
    setupEventListeners();
});

// Check if credentials exist in localStorage
function checkAuthentication() {
    const isLoggedIn = localStorage.getItem("jackify_logged_in") === "true";
    const storedUser = localStorage.getItem("jackify_username");
    
    if (isLoggedIn && storedUser) {
        loginOverlay.classList.add("hidden");
        profileDisplayName.textContent = storedUser;
    } else {
        loginOverlay.classList.remove("hidden");
        // Pause any existing sound if landing on login screen
        pauseSong();
    }
}

// Set greeting based on local time
function setGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
        greetingTitle.textContent = "Good Morning";
    } else if (hours < 17) {
        greetingTitle.textContent = "Good Afternoon";
    } else {
        greetingTitle.textContent = "Good Evening";
    }
}

// Setup volume controls
function setupVolume() {
    audio.volume = volume;
    volumeRange.value = volume * 100;
    volumeFill.style.width = `${volume * 100}%`;
}

// 4. Render Interface Elements
function renderUI() {
    renderQuickPlay();
    renderCards(songs);
    renderTableRows(songs);
}

// Render the 6 welcome panel grid items (first 6 songs)
function renderQuickPlay() {
    quickPlayContainer.innerHTML = "";
    const firstSix = songs.slice(0, 6);
    firstSix.forEach((song) => {
        const card = document.createElement("div");
        card.classList.add("quick-play-card");
        card.setAttribute("data-id", song.id);
        
        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" class="quick-play-img">
            <div class="quick-play-info">
                <span>${song.title}</span>
                <button class="play-overlay-btn" title="Play">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
        `;
        
        card.addEventListener("click", (e) => {
            if (e.target.closest(".play-overlay-btn")) {
                e.stopPropagation();
                handlePlayOverlayClick(song.id);
            } else {
                selectAndPlaySong(song.id);
            }
        });
        
        quickPlayContainer.appendChild(card);
    });
}

// Render the Standard Card Grid
function renderCards(songsList) {
    songsCardsContainer.innerHTML = "";
    if (songsList.length === 0) {
        songsCardsContainer.innerHTML = `<p class="text-grey" style="grid-column: 1/-1; padding: 20px 0;">No songs found</p>`;
        return;
    }
    
    songsList.forEach((song) => {
        const card = document.createElement("div");
        card.classList.add("music-card");
        card.setAttribute("data-id", song.id);
        
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${song.cover}" alt="${song.title}" class="card-img">
                <button class="card-play-btn" title="Play">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
            <span class="card-title">${song.title}</span>
            <span class="card-desc">${song.artist}</span>
        `;
        
        card.addEventListener("click", (e) => {
            if (e.target.closest(".card-play-btn")) {
                e.stopPropagation();
                handlePlayOverlayClick(song.id);
            } else {
                selectAndPlaySong(song.id);
            }
        });
        
        songsCardsContainer.appendChild(card);
    });
}

// Render Table Rows
function renderTableRows(songsList) {
    songRowsContainer.innerHTML = "";
    if (songsList.length === 0) {
        songRowsContainer.innerHTML = `<tr><td colspan="5" class="text-grey" style="text-align: center; padding: 30px;">No songs matched your query</td></tr>`;
        return;
    }
    
    songsList.forEach((song, idx) => {
        const isLiked = likedSongs.has(song.id);
        const row = document.createElement("tr");
        row.classList.add("song-row");
        row.setAttribute("data-id", song.id);
        
        row.innerHTML = `
            <td class="col-num">
                <div class="index-column">
                    <span class="row-index">${idx + 1}</span>
                    <i class="fa-solid fa-play row-play-icon"></i>
                </div>
            </td>
            <td class="col-title">
                <div class="row-title-cell">
                    <img src="${song.cover}" alt="${song.title}" class="row-img">
                    <div class="row-details">
                        <span class="row-title-main">${song.title}</span>
                        <span class="row-artist">${song.artist}</span>
                    </div>
                </div>
            </td>
            <td class="col-album">${song.album}</td>
            <td class="col-date-added">${song.dateAdded}</td>
            <td class="col-duration">
                <div class="col-duration-content">
                    <button class="row-like-btn ${isLiked ? 'liked' : ''}" title="${isLiked ? 'Remove from library' : 'Save to library'}">
                        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <span>${song.duration}</span>
                </div>
            </td>
        `;
        
        row.addEventListener("click", (e) => {
            if (e.target.closest(".row-like-btn")) {
                e.stopPropagation();
                toggleLike(song.id);
            } else {
                selectAndPlaySong(song.id);
            }
        });

        // Double click to play
        row.addEventListener("dblclick", () => {
            selectAndPlaySong(song.id);
        });
        
        songRowsContainer.appendChild(row);
    });
}

// 5. Song Loader and Playback Actions
function loadSong(index) {
    const song = songs[index];
    audio.src = song.url;
    audio.load();
    
    // Update player footer
    currentAlbumArt.src = song.cover;
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
    
    // Update Dynamic Gradient Background Theme
    mainContent.style.background = `linear-gradient(to bottom, ${song.themeColor} 0%, var(--bg-dark-grey) 45%)`;
    
    // Update active highlight classes in DOM list containers
    updateActiveUIHighlighting(song.id);
    
    // Sync Like Status on Footer
    if (likedSongs.has(song.id)) {
        likeBtn.classList.add("liked");
        likeBtn.querySelector("i").className = "fa-solid fa-heart";
    } else {
        likeBtn.classList.remove("liked");
        likeBtn.querySelector("i").className = "fa-regular fa-heart";
    }
    
    // Reset range filled states
    progressRange.value = 0;
    progressFill.style.width = "0%";
    progressThumb.style.left = "0%";
    currentTimeEl.textContent = "0:00";
    totalTimeEl.textContent = song.duration;
}

function updateActiveUIHighlighting(songId) {
    // Quick Play Cards
    document.querySelectorAll(".quick-play-card").forEach(c => {
        if (parseInt(c.getAttribute("data-id")) === songId) {
            c.classList.add("active");
            const btn = c.querySelector(".play-overlay-btn");
            if (btn) {
                btn.classList.add("playing");
                btn.querySelector("i").className = isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
            }
        } else {
            c.classList.remove("active");
            const btn = c.querySelector(".play-overlay-btn");
            if (btn) {
                btn.classList.remove("playing");
                btn.querySelector("i").className = "fa-solid fa-play";
            }
        }
    });

    // Music Cards
    document.querySelectorAll(".music-card").forEach(c => {
        const btn = c.querySelector(".card-play-btn");
        if (parseInt(c.getAttribute("data-id")) === songId) {
            if (btn) {
                btn.classList.add("playing");
                btn.querySelector("i").className = isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
            }
        } else {
            if (btn) {
                btn.classList.remove("playing");
                btn.querySelector("i").className = "fa-solid fa-play";
            }
        }
    });

    // Song Table Rows
    document.querySelectorAll(".song-row").forEach(r => {
        const playIcon = r.querySelector(".row-play-icon");
        const indexSpan = r.querySelector(".row-index");
        
        if (parseInt(r.getAttribute("data-id")) === songId) {
            r.classList.add("active");
            if (playIcon && indexSpan) {
                if (isPlaying) {
                    playIcon.className = "fa-solid fa-pause row-play-icon";
                    indexSpan.style.display = "none";
                    playIcon.style.display = "block";
                } else {
                    playIcon.className = "fa-solid fa-play row-play-icon";
                    indexSpan.style.display = "block";
                    playIcon.style.display = "none";
                }
            }
        } else {
            r.classList.remove("active");
            if (playIcon && indexSpan) {
                playIcon.className = "fa-solid fa-play row-play-icon";
                indexSpan.style.display = "block";
                playIcon.style.display = "none";
            }
        }
    });
}

function selectAndPlaySong(id) {
    if (currentSongIndex === id) {
        togglePlayPause();
    } else {
        currentSongIndex = id;
        loadSong(currentSongIndex);
        playSong();
    }
}

function handlePlayOverlayClick(id) {
    if (currentSongIndex === id) {
        togglePlayPause();
    } else {
        currentSongIndex = id;
        loadSong(currentSongIndex);
        playSong();
    }
}

function playSong() {
    isPlaying = true;
    audio.play()
        .then(() => {
            playPauseBtn.querySelector("i").className = "fa-solid fa-pause";
            playPauseBtn.classList.add("playing");
            updateActiveUIHighlighting(songs[currentSongIndex].id);
        })
        .catch(err => {
            console.error("Audio playback error: ", err);
            isPlaying = false;
        });
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playPauseBtn.querySelector("i").className = "fa-solid fa-play";
    playPauseBtn.classList.remove("playing");
    updateActiveUIHighlighting(songs[currentSongIndex].id);
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function nextSong() {
    if (isShuffle) {
        let randomIndex = currentSongIndex;
        if (songs.length > 1) {
            while (randomIndex === currentSongIndex) {
                randomIndex = Math.floor(Math.random() * songs.length);
            }
        }
        currentSongIndex = randomIndex;
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
    } else {
        if (isShuffle) {
            let randomIndex = currentSongIndex;
            if (songs.length > 1) {
                while (randomIndex === currentSongIndex) {
                    randomIndex = Math.floor(Math.random() * songs.length);
                }
            }
            currentSongIndex = randomIndex;
        } else {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        }
        loadSong(currentSongIndex);
    }
    playSong();
}

// 6. Like Songs Library Mechanism
function toggleLike(id) {
    if (likedSongs.has(id)) {
        likedSongs.delete(id);
        showToast(`Removed "${songs[id].title}" from Your Library.`);
    } else {
        likedSongs.add(id);
        showToast(`Saved "${songs[id].title}" to Liked Songs.`);
    }
    
    // Re-render
    renderUI();
    
    // Sync footer like button if it is currently playing song
    if (songs[currentSongIndex].id === id) {
        if (likedSongs.has(id)) {
            likeBtn.classList.add("liked");
            likeBtn.querySelector("i").className = "fa-solid fa-heart";
        } else {
            likeBtn.classList.remove("liked");
            likeBtn.querySelector("i").className = "fa-regular fa-heart";
        }
    }
}

// 7. Navigation Arrow Handler
function pushToHistory(tabName) {
    // If not matching current active tab, add to nav stack
    if (navHistory[historyIndex] !== tabName) {
        // truncate forward history if we were in the middle of stack
        navHistory = navHistory.slice(0, historyIndex + 1);
        navHistory.push(tabName);
        historyIndex = navHistory.length - 1;
    }
    updateHistoryButtons();
}

function updateHistoryButtons() {
    headerPrevArrow.disabled = (historyIndex === 0);
    headerNextArrow.disabled = (historyIndex === navHistory.length - 1);
}

// 8. Custom Toast Notification System
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = "position: fixed; top: 30px; left: 50%; transform: translateX(-50%); background-color: #1db954; color: #000; padding: 14px 28px; border-radius: 500px; font-weight: 700; font-size: 14px; z-index: 2500; box-shadow: 0 10px 24px rgba(0,0,0,0.5); pointer-events: none; transition: opacity 0.3s ease, transform 0.3s ease; opacity: 0; transform: translate(-50%, -20px); text-align: center; white-space: pre-line;";
        document.body.appendChild(container);
    }
    container.textContent = message;
    container.style.opacity = "1";
    container.style.transform = "translate(-50%, 0)";
    
    // Clear previous timeout if multiple clicks happen
    if (window.toastTimeout) {
        clearTimeout(window.toastTimeout);
    }
    
    window.toastTimeout = setTimeout(() => {
        container.style.opacity = "0";
        container.style.transform = "translate(-50%, -20px)";
    }, 3000);
}

// 9. Interactive Popup Modal for Lyrics
function openLyricsModal() {
    const song = songs[currentSongIndex];
    let modal = document.getElementById('lyrics-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'lyrics-modal';
        modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.85); z-index: 2000; display: flex; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s ease; pointer-events: none; backdrop-filter: blur(5px);";
        
        modal.innerHTML = `
            <div style="background-color: #121212; padding: 40px; border-radius: 8px; max-width: 500px; width: 90%; text-align: center; border: 1px solid #282828; position: relative; box-shadow: 0 12px 36px rgba(0,0,0,0.6);">
                <button id="close-lyrics" style="position: absolute; right: 20px; top: 20px; background: transparent; border: none; color: #b3b3b3; font-size: 20px; cursor: pointer; transition: color 0.2s;"><i class="fa-solid fa-xmark"></i></button>
                <h2 style="margin-bottom: 8px; font-weight: 800;" id="lyrics-song-title">Song Title</h2>
                <h4 style="color: #1db954; margin-bottom: 24px; font-weight: 600;" id="lyrics-song-artist">Artist</h4>
                <p id="lyrics-content" style="font-size: 16px; line-height: 28px; white-space: pre-wrap; font-style: italic; color: #ffffff; max-height: 300px; overflow-y: auto; padding-right: 8px;">Lyrics here...</p>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('#close-lyrics').addEventListener('click', () => {
            modal.style.opacity = "0";
            modal.style.pointerEvents = "none";
        });
        
        // Close modal when clicking background
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.opacity = "0";
                modal.style.pointerEvents = "none";
            }
        });
    }
    
    document.getElementById('lyrics-song-title').textContent = song.title;
    document.getElementById('lyrics-song-artist').textContent = song.artist;
    
    const lyricsText = lyricsData[song.id] || "No lyrics compiled for this track yet.";
    document.getElementById('lyrics-content').textContent = lyricsText;
    
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";
}

// 10. Event Listener Bindings
function setupEventListeners() {
    
    // Login Submit Action
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const usernameVal = loginUsername.value.trim();
        const passwordVal = loginPassword.value.trim();
        
        if (usernameVal === "" || passwordVal === "") {
            loginErrorBox.classList.remove("hidden");
            loginErrorText.textContent = "Please fill in all credentials.";
            return;
        }
        
        // Accept any credentials for this front-end mockup
        localStorage.setItem("jackify_logged_in", "true");
        localStorage.setItem("jackify_username", usernameVal);
        
        profileDisplayName.textContent = usernameVal;
        
        // Hide overlay and show toast
        loginOverlay.classList.add("hidden");
        showToast(`Welcome back, ${usernameVal}! Login Successful.`);
    });

    // Profile Dropdown Toggle
    profileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle("hidden");
    });
    
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".profile-dropdown-container")) {
            profileDropdown.classList.add("hidden");
        }
    });

    // Logout Click Action
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("jackify_logged_in");
        localStorage.removeItem("jackify_username");
        checkAuthentication();
        showToast("Logged out successfully.");
    });

    // Play/Pause Deck Buttons
    playPauseBtn.addEventListener("click", togglePlayPause);
    prevBtn.addEventListener("click", prevSong);
    nextBtn.addEventListener("click", nextSong);
    
    // Keyboard Spacebar play pause shortcut
    document.addEventListener("keydown", (e) => {
        if (document.activeElement !== searchInput && document.activeElement !== loginUsername && document.activeElement !== loginPassword) {
            if (e.code === "Space") {
                e.preventDefault();
                togglePlayPause();
            }
        }
    });

    // Shuffle & Repeat Deck Actions
    shuffleBtn.addEventListener("click", () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle("active", isShuffle);
        showToast(isShuffle ? "Shuffle play enabled" : "Shuffle play disabled");
    });

    repeatBtn.addEventListener("click", () => {
        isRepeat = !isRepeat;
        repeatBtn.classList.toggle("active", isRepeat);
        showToast(isRepeat ? "Repeating current track" : "Repeat mode disabled");
    });

    // Like Button inside Player Footer
    likeBtn.addEventListener("click", () => {
        toggleLike(songs[currentSongIndex].id);
    });

    // Audio Player State Hooks
    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("ended", () => {
        if (isRepeat) {
            audio.currentTime = 0;
            playSong();
        } else {
            nextSong();
        }
    });
    audio.addEventListener("loadedmetadata", () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    // Progress Range Seek handlers
    progressRange.addEventListener("input", (e) => {
        const val = e.target.value;
        const seekTime = (val / 100) * audio.duration;
        currentTimeEl.textContent = formatTime(seekTime);
        updateProgressUIDirectly(val);
    });

    progressRange.addEventListener("change", (e) => {
        const val = e.target.value;
        audio.currentTime = (val / 100) * audio.duration;
        playSong();
    });

    // Volume Drag seek handlers
    volumeRange.addEventListener("input", (e) => {
        const val = e.target.value;
        volume = val / 100;
        audio.volume = volume;
        volumeFill.style.width = `${val}%`;
        updateVolumeIcon(volume);
        if (volume > 0) {
            lastNonZeroVolume = volume;
        }
    });

    // Mute/Unmute Toggling
    volumeMuteBtn.addEventListener("click", () => {
        if (audio.volume > 0) {
            audio.volume = 0;
            volumeRange.value = 0;
            volumeFill.style.width = "0%";
            updateVolumeIcon(0);
            showToast("Volume muted");
        } else {
            audio.volume = lastNonZeroVolume;
            volumeRange.value = lastNonZeroVolume * 100;
            volumeFill.style.width = `${lastNonZeroVolume * 100}%`;
            updateVolumeIcon(lastNonZeroVolume);
            showToast("Volume unmuted");
        }
    });

    // Header Back/Forward buttons action
    headerPrevArrow.addEventListener("click", () => {
        if (historyIndex > 0) {
            historyIndex--;
            navigateToTab(navHistory[historyIndex]);
            updateHistoryButtons();
        }
    });

    headerNextArrow.addEventListener("click", () => {
        if (historyIndex < navHistory.length - 1) {
            historyIndex++;
            navigateToTab(navHistory[historyIndex]);
            updateHistoryButtons();
        }
    });

    function navigateToTab(tabName) {
        if (tabName === "home") {
            navHome.click();
        } else if (tabName === "search") {
            navSearch.click();
        } else if (tabName === "library") {
            navLibrary.click();
        }
    }

    // Sidebar Navigation clicks
    navSearch.addEventListener("click", (e) => {
        e.preventDefault();
        navHome.classList.remove("active");
        navLibrary.classList.remove("active");
        navSearch.classList.add("active");
        searchContainer.classList.remove("hidden");
        searchInput.focus();
        
        pushToHistory("search");
    });

    navHome.addEventListener("click", (e) => {
        e.preventDefault();
        navSearch.classList.remove("active");
        navLibrary.classList.remove("active");
        navHome.classList.add("active");
        searchContainer.classList.add("hidden");
        
        searchInput.value = "";
        searchClearBtn.classList.add("hidden");
        renderUI();
        
        pushToHistory("home");
    });

    navLibrary.addEventListener("click", (e) => {
        e.preventDefault();
        navHome.classList.remove("active");
        navSearch.classList.remove("active");
        navLibrary.classList.add("active");
        searchContainer.classList.add("hidden");
        
        const likedSongsList = songs.filter(s => likedSongs.has(s.id));
        renderCards(likedSongsList);
        renderTableRows(likedSongsList);
        
        pushToHistory("library");
    });

    // Create Playlist triggers
    document.getElementById("create-playlist-btn").addEventListener("click", (e) => {
        e.preventDefault();
        createNewPlaylist();
    });

    document.getElementById("create-playlist-plus-btn").addEventListener("click", (e) => {
        e.preventDefault();
        createNewPlaylist();
    });

    function createNewPlaylist() {
        const name = prompt("Enter a name for your new playlist:");
        if (name && name.trim() !== "") {
            const list = document.querySelector(".playlist-list");
            const a = document.createElement("a");
            a.href = "#";
            a.className = "playlist-link";
            a.textContent = name.trim();
            a.addEventListener("click", (e) => {
                e.preventDefault();
                showToast(`Switched to playlist: "${name.trim()}"`);
            });
            list.appendChild(a);
            showToast(`Playlist "${name.trim()}" created successfully!`);
        }
    }

    // Liked Songs shortcut trigger
    document.getElementById("liked-songs-shortcut").addEventListener("click", (e) => {
        e.preventDefault();
        navLibrary.click();
    });

    // Install app mock
    document.getElementById("install-app-btn").addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Starting Jackify Desktop Setup download...");
    });

    // Premium upgrading mock
    document.getElementById("explore-premium-btn").addEventListener("click", () => {
        showToast("Premium Plan: Loading Jackify subscription details...");
    });

    // Show All Songs shortcut button
    document.getElementById("show-all-songs-btn").addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Viewing full catalog. Currently displaying all 34 tracks.");
        renderCards(songs);
    });

    // Lyrics overlay button click
    document.getElementById("lyrics-btn").addEventListener("click", openLyricsModal);

    // Queue summary list display
    document.getElementById("queue-btn").addEventListener("click", () => {
        let queueText = "Playing Next:\n";
        for (let i = 1; i <= 3; i++) {
            const nextIdx = (currentSongIndex + i) % songs.length;
            queueText += `• ${songs[nextIdx].title} - ${songs[nextIdx].artist}\n`;
        }
        showToast(queueText);
    });

    // Connect Device mock
    document.getElementById("device-btn").addEventListener("click", () => {
        showToast("Active Playback Source: Jackify Web Player (This Browser)");
    });

    // HTML5 Standard Fullscreen toggle
    document.getElementById("fullscreen-btn").addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
                .then(() => {
                    showToast("Entered Full Screen");
                })
                .catch(err => {
                    showToast("Fullscreen request denied by browser policies.");
                });
        } else {
            document.exitFullscreen();
            showToast("Exited Full Screen");
        }
    });

    // Profile Dropdown Menu Static options click actions
    document.getElementById("menu-account-btn").addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Opening account setting portal mock...");
    });
    
    document.getElementById("menu-profile-btn").addEventListener("click", (e) => {
        e.preventDefault();
        showToast(`Viewing Profile details for "${localStorage.getItem("jackify_username")}"`);
    });
    
    document.getElementById("menu-premium-btn").addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Premium Subscriptions starting from $5.99/mo.");
    });

    // Footer static mock links
    document.querySelectorAll(".footer-static-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showToast(`Navigating to company page: "${link.textContent}" mock...`);
        });
    });

    // Search input typing logic
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length > 0) {
            searchClearBtn.classList.remove("hidden");
        } else {
            searchClearBtn.classList.add("hidden");
        }
        
        // Filter songs
        const filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(query) || 
            song.artist.toLowerCase().includes(query) ||
            song.album.toLowerCase().includes(query)
        );
        
        renderCards(filteredSongs);
        renderTableRows(filteredSongs);
    });

    searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchClearBtn.classList.add("hidden");
        renderUI();
        searchInput.focus();
    });
}

// 11. Helper Functions
function updateProgressBar() {
    if (!audio.duration) return;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressRange.value = progressPercent;
    updateProgressUIDirectly(progressPercent);
    currentTimeEl.textContent = formatTime(audio.currentTime);
}

function updateProgressUIDirectly(percentage) {
    progressFill.style.width = `${percentage}%`;
    progressThumb.style.left = `${percentage}%`;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateVolumeIcon(vol) {
    const icon = volumeMuteBtn.querySelector("i");
    if (vol === 0) {
        icon.className = "fa-solid fa-volume-xmark";
    } else if (vol < 0.3) {
        icon.className = "fa-solid fa-volume-off";
    } else if (vol < 0.7) {
        icon.className = "fa-solid fa-volume-low";
    } else {
        icon.className = "fa-solid fa-volume-high";
    }
}
