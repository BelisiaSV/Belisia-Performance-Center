export interface MasResult {
  date: string;
  masSpeed: number;
  vo2max: number;
}

export type PeriodizationPhase =
  | "Opbouwfase"
  | "Belastingsfase"
  | "Ontlastfase"
  | "Wedstrijdweek";

export interface Player {
  id: string;
  name: string;
  position: string;
  age: number;
  status: "fit" | "belast" | "geblesseerd";
  acwr: number;
  lastSession: string;
  note: string;
  periodizationPhase: PeriodizationPhase;
  weeklyLoad: number[];
  masResults: MasResult[];
}

export const players: Player[] = [
  {
    id: "p1",
    name: "Milan Vranken",
    position: "Doelman",
    age: 24,
    status: "fit",
    acwr: 1.02,
    lastSession: "Gisteren",
    note: "Volledig fit, geen aandachtspunten.",
    periodizationPhase: "Wedstrijdweek",
    weeklyLoad: [410, 430, 395, 420, 405, 415],
    masResults: [
      { date: "3 jun 2026", masSpeed: 15.8, vo2max: 54.1 },
      { date: "15 jul 2026", masSpeed: 16.1, vo2max: 54.8 },
    ],
  },
  {
    id: "p2",
    name: "Seppe Coenegrachts",
    position: "Verdediger",
    age: 22,
    status: "fit",
    acwr: 0.98,
    lastSession: "Gisteren",
    note: "Stabiele belasting, klaar voor wedstrijdweek.",
    periodizationPhase: "Wedstrijdweek",
    weeklyLoad: [380, 400, 410, 390, 405, 395],
    masResults: [
      { date: "3 jun 2026", masSpeed: 16.4, vo2max: 56.2 },
      { date: "15 jul 2026", masSpeed: 16.7, vo2max: 57.0 },
    ],
  },
  {
    id: "p3",
    name: "Yorick Timmermans",
    position: "Verdediger",
    age: 27,
    status: "belast",
    acwr: 1.34,
    lastSession: "Gisteren",
    note: "Belasting loopt sterk op — opvolgen deze week.",
    periodizationPhase: "Belastingsfase",
    weeklyLoad: [350, 370, 410, 460, 520, 560],
    masResults: [
      { date: "3 jun 2026", masSpeed: 15.9, vo2max: 53.4 },
      { date: "15 jul 2026", masSpeed: 15.7, vo2max: 52.9 },
    ],
  },
  {
    id: "p4",
    name: "Ruben Achten",
    position: "Middenvelder",
    age: 21,
    status: "fit",
    acwr: 1.05,
    lastSession: "2 dagen geleden",
    note: "In opbouw richting basisplaats.",
    periodizationPhase: "Opbouwfase",
    weeklyLoad: [400, 395, 410, 420, 415, 425],
    masResults: [
      { date: "3 jun 2026", masSpeed: 16.9, vo2max: 58.1 },
      { date: "15 jul 2026", masSpeed: 17.2, vo2max: 58.9 },
    ],
  },
  {
    id: "p5",
    name: "Wout Pirotte",
    position: "Middenvelder",
    age: 25,
    status: "geblesseerd",
    acwr: 0.41,
    lastSession: "9 dagen geleden",
    note: "Hamstringblessure — revalidatie via kinesist, geen veldtraining.",
    periodizationPhase: "Ontlastfase",
    weeklyLoad: [420, 410, 150, 80, 60, 90],
    masResults: [{ date: "3 jun 2026", masSpeed: 16.3, vo2max: 55.7 }],
  },
  {
    id: "p6",
    name: "Nathan Beckers",
    position: "Aanvaller",
    age: 23,
    status: "fit",
    acwr: 1.11,
    lastSession: "Gisteren",
    note: "Goede vorm, belasting binnen bereik.",
    periodizationPhase: "Wedstrijdweek",
    weeklyLoad: [380, 400, 420, 440, 450, 460],
    masResults: [
      { date: "3 jun 2026", masSpeed: 17.4, vo2max: 59.3 },
      { date: "15 jul 2026", masSpeed: 17.6, vo2max: 59.8 },
    ],
  },
  {
    id: "p7",
    name: "Dries Vandebosch",
    position: "Aanvaller",
    age: 20,
    status: "fit",
    acwr: 0.95,
    lastSession: "Gisteren",
    note: "Jongste van de kern — belasting bewust laag gehouden.",
    periodizationPhase: "Opbouwfase",
    weeklyLoad: [390, 385, 395, 380, 390, 375],
    masResults: [{ date: "15 jul 2026", masSpeed: 16.8, vo2max: 57.6 }],
  },
  {
    id: "p8",
    name: "Kobe Erkens",
    position: "Verdediger",
    age: 29,
    status: "belast",
    acwr: 1.28,
    lastSession: "2 dagen geleden",
    note: "Verhoogde belasting na terugkeer van schorsing.",
    periodizationPhase: "Belastingsfase",
    weeklyLoad: [360, 380, 420, 470, 500, 510],
    masResults: [
      { date: "3 jun 2026", masSpeed: 15.5, vo2max: 52.0 },
      { date: "15 jul 2026", masSpeed: 15.4, vo2max: 51.6 },
    ],
  },
];

export interface VideoNote {
  author: string;
  text: string;
}

export interface TrainingVideo {
  id: string;
  title: string;
  session: string;
  date: string;
  duration: string;
  tag: "training" | "wedstrijd" | "analyse";
  description: string;
  notes: VideoNote[];
}

export const videos: TrainingVideo[] = [
  {
    id: "v1",
    title: "Positioneel spel 4-3-3",
    session: "Training dinsdag",
    date: "29 jul 2026",
    duration: "18:24",
    tag: "training",
    description:
      "Volledige opname van het positiespel-onderdeel: balcirculatie tegen een 4-3-3-blok, focus op derde-mansacties en breedte houden.",
    notes: [
      { author: "T. Verhoeven", text: "Rechterflank herhalen — te weinig diepgang bij inspelen." },
      { author: "T. Verhoeven", text: "Mooie herkenning van de vrije man op 12:40." },
    ],
  },
  {
    id: "v2",
    title: "Persie & omschakeling",
    session: "Training donderdag",
    date: "31 jul 2026",
    duration: "12:07",
    tag: "training",
    description:
      "Pressingtriggers na balverlies en directe omschakeling naar de tegenaanval, in kleine partijvormen (4v4+2).",
    notes: [{ author: "T. Verhoeven", text: "Tempo van de eerste pressingactie moet omhoog." }],
  },
  {
    id: "v3",
    title: "Belisia SV — KFC Bilzen",
    session: "Competitiewedstrijd",
    date: "27 jul 2026",
    duration: "94:00",
    tag: "wedstrijd",
    description:
      "Volledige wedstrijdregistratie, competitie 1e Amateur VV — thuiswedstrijd tegen KFC Bilzen (2-1 winst).",
    notes: [
      { author: "T. Verhoeven", text: "Tweede helft: te veel ruimte weggegeven tussen lijnen." },
      { author: "Staf", text: "Standaardsituaties zie aparte analyse-clip." },
    ],
  },
  {
    id: "v4",
    title: "Standaardsituaties — corners",
    session: "Wedstrijdanalyse",
    date: "28 jul 2026",
    duration: "9:41",
    tag: "analyse",
    description:
      "Analyse van alle corners uit de wedstrijd tegen KFC Bilzen — zowel aanvallend als verdedigend georganiseerd.",
    notes: [{ author: "Staf", text: "Verdedigende zone-indeling aanpassen richting eerste paal." }],
  },
  {
    id: "v5",
    title: "Sprintduels — highlights",
    session: "Training dinsdag",
    date: "29 jul 2026",
    duration: "4:52",
    tag: "training",
    description: "Compilatie van 1-tegen-1 sprintduels tijdens de afsluitende partijvorm.",
    notes: [],
  },
];

export interface SessionAttendance {
  playerId: string;
  load: number;
  rpe: number;
  present: boolean;
}

export interface SessionEntry {
  id: string;
  title: string;
  type: "veld" | "kracht" | "wedstrijd" | "hersteld";
  date: string;
  load: number;
  rpe: number;
  attendance: SessionAttendance[];
}

export const sessions: SessionEntry[] = [
  {
    id: "s1",
    title: "Krachttraining onderlichaam",
    type: "kracht",
    date: "ma 27 jul",
    load: 320,
    rpe: 6,
    attendance: [
      { playerId: "p1", load: 280, rpe: 5, present: true },
      { playerId: "p2", load: 330, rpe: 6, present: true },
      { playerId: "p3", load: 360, rpe: 7, present: true },
      { playerId: "p4", load: 310, rpe: 6, present: true },
      { playerId: "p5", load: 0, rpe: 0, present: false },
      { playerId: "p6", load: 300, rpe: 6, present: true },
      { playerId: "p7", load: 290, rpe: 5, present: true },
      { playerId: "p8", load: 340, rpe: 6, present: true },
    ],
  },
  {
    id: "s2",
    title: "Veldtraining — positioneel",
    type: "veld",
    date: "di 28 jul",
    load: 480,
    rpe: 7,
    attendance: [
      { playerId: "p1", load: 420, rpe: 6, present: true },
      { playerId: "p2", load: 470, rpe: 7, present: true },
      { playerId: "p3", load: 520, rpe: 8, present: true },
      { playerId: "p4", load: 460, rpe: 7, present: true },
      { playerId: "p5", load: 90, rpe: 2, present: false },
      { playerId: "p6", load: 480, rpe: 7, present: true },
      { playerId: "p7", load: 440, rpe: 6, present: true },
      { playerId: "p8", load: 500, rpe: 8, present: true },
    ],
  },
  {
    id: "s3",
    title: "Herstel & mobiliteit",
    type: "hersteld",
    date: "wo 29 jul",
    load: 110,
    rpe: 2,
    attendance: [
      { playerId: "p1", load: 100, rpe: 2, present: true },
      { playerId: "p2", load: 110, rpe: 2, present: true },
      { playerId: "p3", load: 120, rpe: 3, present: true },
      { playerId: "p4", load: 105, rpe: 2, present: true },
      { playerId: "p5", load: 60, rpe: 1, present: true },
      { playerId: "p6", load: 110, rpe: 2, present: true },
      { playerId: "p7", load: 100, rpe: 2, present: true },
      { playerId: "p8", load: 115, rpe: 2, present: true },
    ],
  },
  {
    id: "s4",
    title: "Veldtraining — omschakeling",
    type: "veld",
    date: "do 30 jul",
    load: 510,
    rpe: 8,
    attendance: [
      { playerId: "p1", load: 440, rpe: 7, present: true },
      { playerId: "p2", load: 500, rpe: 8, present: true },
      { playerId: "p3", load: 560, rpe: 9, present: true },
      { playerId: "p4", load: 490, rpe: 8, present: true },
      { playerId: "p5", load: 80, rpe: 2, present: false },
      { playerId: "p6", load: 520, rpe: 8, present: true },
      { playerId: "p7", load: 470, rpe: 7, present: true },
      { playerId: "p8", load: 540, rpe: 9, present: true },
    ],
  },
  {
    id: "s5",
    title: "Belisia SV — KFC Bilzen",
    type: "wedstrijd",
    date: "za 1 aug",
    load: 640,
    rpe: 9,
    attendance: [
      { playerId: "p1", load: 560, rpe: 8, present: true },
      { playerId: "p2", load: 630, rpe: 9, present: true },
      { playerId: "p3", load: 690, rpe: 9, present: true },
      { playerId: "p4", load: 610, rpe: 9, present: true },
      { playerId: "p5", load: 0, rpe: 0, present: false },
      { playerId: "p6", load: 650, rpe: 9, present: true },
      { playerId: "p7", load: 600, rpe: 8, present: true },
      { playerId: "p8", load: 660, rpe: 9, present: true },
    ],
  },
];
