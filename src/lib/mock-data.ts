export interface Player {
  id: string;
  name: string;
  position: string;
  age: number;
  status: "fit" | "belast" | "geblesseerd";
  acwr: number;
  lastSession: string;
}

export const players: Player[] = [
  { id: "p1", name: "Milan Vranken", position: "Doelman", age: 24, status: "fit", acwr: 1.02, lastSession: "Gisteren" },
  { id: "p2", name: "Seppe Coenegrachts", position: "Verdediger", age: 22, status: "fit", acwr: 0.98, lastSession: "Gisteren" },
  { id: "p3", name: "Yorick Timmermans", position: "Verdediger", age: 27, status: "belast", acwr: 1.34, lastSession: "Gisteren" },
  { id: "p4", name: "Ruben Achten", position: "Middenvelder", age: 21, status: "fit", acwr: 1.05, lastSession: "2 dagen geleden" },
  { id: "p5", name: "Wout Pirotte", position: "Middenvelder", age: 25, status: "geblesseerd", acwr: 0.41, lastSession: "9 dagen geleden" },
  { id: "p6", name: "Nathan Beckers", position: "Aanvaller", age: 23, status: "fit", acwr: 1.11, lastSession: "Gisteren" },
  { id: "p7", name: "Dries Vandebosch", position: "Aanvaller", age: 20, status: "fit", acwr: 0.95, lastSession: "Gisteren" },
  { id: "p8", name: "Kobe Erkens", position: "Verdediger", age: 29, status: "belast", acwr: 1.28, lastSession: "2 dagen geleden" },
];

export interface TrainingVideo {
  id: string;
  title: string;
  session: string;
  date: string;
  duration: string;
  tag: "training" | "wedstrijd" | "analyse";
}

export const videos: TrainingVideo[] = [
  { id: "v1", title: "Positioneel spel 4-3-3", session: "Training dinsdag", date: "29 jul 2026", duration: "18:24", tag: "training" },
  { id: "v2", title: "Persie & omschakeling", session: "Training donderdag", date: "31 jul 2026", duration: "12:07", tag: "training" },
  { id: "v3", title: "Belisia SV — KFC Bilzen", session: "Competitiewedstrijd", date: "27 jul 2026", duration: "94:00", tag: "wedstrijd" },
  { id: "v4", title: "Standaardsituaties — corners", session: "Wedstrijdanalyse", date: "28 jul 2026", duration: "9:41", tag: "analyse" },
  { id: "v5", title: "Sprintduels — highlights", session: "Training dinsdag", date: "29 jul 2026", duration: "4:52", tag: "training" },
];

export interface SessionEntry {
  id: string;
  title: string;
  type: "veld" | "kracht" | "wedstrijd" | "hersteld";
  date: string;
  load: number;
  rpe: number;
}

export const sessions: SessionEntry[] = [
  { id: "s1", title: "Krachttraining onderlichaam", type: "kracht", date: "ma 27 jul", load: 320, rpe: 6 },
  { id: "s2", title: "Veldtraining — positioneel", type: "veld", date: "di 28 jul", load: 480, rpe: 7 },
  { id: "s3", title: "Herstel & mobiliteit", type: "hersteld", date: "wo 29 jul", load: 110, rpe: 2 },
  { id: "s4", title: "Veldtraining — omschakeling", type: "veld", date: "do 30 jul", load: 510, rpe: 8 },
  { id: "s5", title: "Belisia SV — KFC Bilzen", type: "wedstrijd", date: "za 1 aug", load: 640, rpe: 9 },
];
