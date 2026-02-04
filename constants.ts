
import { ClassName, LevelConfig, Topic } from './types';

export const STUDENTS: Record<ClassName, string[]> = {
    "VII.1": ["AFGIAN TRI WIJAYA", "AFIFAH UFAIRAH", "ALIYA RATU SALSABILA", "ANITA MAWAR", "AZWAN FAIZ", "DANDI", "DIVAL ALFIANDRA", "FAUZIL RAHMAT", "FITRI AGUSTINA", "HILDA NURSIDQIAZIZAH", "ISRA FIRAHMAT", "ISTIQOMAH", "M.RISKI ADITYA", "MUAKIFATUN NAILAH USMAN", "MUH. UZNUL KHUDUD", "MUH. YAZID ALGHYFARI", "MUH.ALVIANSYAH", "MUHAMMAD ALIF", "MUHAMMAD ANAMTA MUCTIALI", "MUSTAFAINAL YAHYA", "MUTMAINNA", "NUR WAHYUNI", "NURUL APRILIA", "NUZULIA RAHMA", "REZKY AMELIA", "RIVAL MUHAJIRIN", "SALMIA", "SALSABILA AZ-ZAHRA", "SUFRIADY", "TIARA RAMADHANI", "ULFATUN NISA", "ZHUFAHIRA ADZHA PUTRI"],
    "VII.2": ["A. MARSYAH KOYRALA", "ALIF AKRAM", "ARFI AZAN", "AYIRA", "DIRHAN FAIS", "FIRKAN PUTRA", "FIRMANSYAH", "HASRUL", "ISMAIL", "KHAIRUL FAJAR", "MAJSYANDHA", "MUH. AGIH", "MUH. RENALDI", "MUH. RIFALDI", "MUHAMMAD ARIL", "NAILA", "NAZILAH AZAHRA", "NINDYA GURATTU AENI", "NUR AIVAH", "NUR FAUZIA ANNISA", "NUR FAZIRA", "NUR WAFIQAH", "NURAENI", "NURLINDA", "NURUL BIDASARI AULYA", "RIFYAH AMALIAH HAM", "ZAINAB ASVIA"],
    "VIII.1": ["A. ARIL ARDIANSYAH", "A. ASHAR ASDAR", "A.RISMA ASTARI", "AHSANUL QASAS", "AMELIA PUTRI", "ANDI NURAFIFA R.BASO", "ANDIKA", "ARIF RAHMAN", "ASMIRANDA", "ATIKAH FAJARWATY", "CHELSEA AMINITY PUTRI", "HAIKAL", "IIN INAYAH PUTRI", "JAYA SAPUTRA", "KASMIA DAHNIA", "KHAERUL AZZAM", "MARSIJI", "MOHAMMAD WAHYU", "MUH.ILLIAS", "MUHAMMAD ZIDAN ARKANA", "NURAENI", "NURLAILY", "NURSAHDA", "NURSYAKILA", "SUCI RAMADHANI", "SUL JALALIN WALIQRAM", "SYAMSURYADI", "SYARLINI"],
    "VIII.2": ["A. KHALIFATUL ADAWIYA", "AGHYVANNO ALIFQA AZZAM", "ANDI AMSYA", "ARIANTI", "ASKIA NUR FADILLAH", "FEBRIANI MAULIDYA", "IKBAL RADIMAN", "IRWANSYAH", "ISFA SALSABILA", "KHAERUL AZZAM", "MIKA NUR AKBA", "MUH ASRAM DANI", "MUH JAELANI", "MUH.RIJALUL HAQ", "MUHAMMAD AHAR ADHYRA", "MUHAMMAD FAHRI", "MUHAMMAD FAWWAZ", "MUHDIYATUL ADZQIYAH", "NENSI", "NURFATIMA", "NURUL AINI", "PUTRI DIANA", "RIFKATUL JANNA", "SAPUTRA EFENDI", "SELVY SAID", "SITI AQILA ANNISA", "SULFAIDAH"],
    "IX.1": ["ADITYA ANWAR", "ANDIRA", "HILYANA TULQHARIMA", "IBRAHIM", "M. FAISAL", "MUH AIMAN", "MUH. NUR IZAM", "MYFDA IFTARRA", "NITA YULINDA", "NUR KHALIZA", "NURUL AINI", "NURUL ALFIA QHOIMAH", "RAHIDATUL ARSYAD", "RIFKATUL AZIZAH", "RIFKY", "SYAHERIL", "YULIA ADISTIRAH", "YUSRA SYAHRU RAMADAN"],
    "IX.2": ["ABI FAITH PRADITIA", "AHMAD REZA AL FAIZI", "AMELIA NUR ASYIFA", "ASDIR", "BAIM ALYUDIA", "FAJAR", "HUSNUL FATIMAH", "IRMAYANA RAMADHANI", "MUH. ADIL ADHA", "MUH.IKHSAN ASRA", "NURIA MADHANI", "NURUL HIDAYAH", "RAFI ADRIANSYAH", "RAMIZAH ALYA", "SUKRI", "SYIFA SYAIKHAH", "WAHDANIAH PUTRI"],
    "IX.3": ["A. RIZWAN", "AFGAR PALESANGI", "AZHAR.S", "HERLINA", "IRNA ERFIANA", "JUSNIATI", "MELANI", "MUH. FATHAN", "MUH.AIDIL ADHA", "MUH.IRSYAM", "NORMAN", "NUR AZIZAH", "NURHALIZAH", "RIFAI ARDIANSYAH", "RIFYALRAID HAM", "SUCI AMALIA S", "SYARINA"]
};

export const JURNAL_SCHEDULE: Record<ClassName, string> = {
    "VII.1": "V - VII", "VII.2": "I - III",
    "VIII.1": "I - III", "VIII.2": "V - VII",
    "IX.1": "VI - VIII", "IX.2": "I - III", "IX.3": "VI - VIII"
};

export const JURNAL_COUNTS: Record<ClassName, number> = {
    "VII.1": 32, "VII.2": 27, "VIII.1": 28, "VIII.2": 28, "IX.1": 18, "IX.2": 17, "IX.3": 17
};

export const NILAI_CONFIG: Record<string, LevelConfig> = {
    "VII": { formatif: { count: 14, label: "LKPD" }, sumatif: { count: 3, label: "BAB" }, inisiatif: { count: 14, label: "INISIATIF" } },
    "VIII": { formatif: { count: 14, label: "LKPD" }, sumatif: { count: 3, label: "BAB" }, inisiatif: { count: 14, label: "INISIATIF" } },
    "IX": { formatif: { count: 6, label: "LKPD" }, sumatif: { count: 2, label: "BAB" }, inisiatif: { count: 6, label: "INISIATIF" } }
};

export const MATERI: Record<string, Topic[]> = {
    "VII": [
        { title: "Browser & Search Engine", icon: "fa-chrome" },
        { title: "Kredibilitas Sumber Informasi", icon: "fa-circle-check" },
        { title: "Media Pers Digital", icon: "fa-newspaper" },
        { title: "Hardware", icon: "fa-microchip" },
        { title: "Software", icon: "fa-compact-disc" },
        { title: "Brainware", icon: "fa-user-gear" }
    ],
    "VIII": [
        { title: "Pengantar Jaringan Kabel dan Nirkabel", icon: "fa-network-wired" },
        { title: "Keamanan Data dan Informasi", icon: "fa-user-shield" },
        { title: "Google Docs", icon: "fa-file-word" },
        { title: "Google Sheet", icon: "fa-file-excel" },
        { title: "Google Slides", icon: "fa-file-powerpoint" }
    ],
    "IX": [
        { title: "Ruang Publik Virtual", icon: "fa-globe" },
        { title: "Produksi Konten", icon: "fa-video" },
        { title: "Rekam Jejak Digital", icon: "fa-shoe-prints" },
        { title: "Dampak Sosial Didunia Digital", icon: "fa-users" }
    ]
};
