"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type ModuleKey =
  | "video"
  | "gps"
  | "mas"
  | "periodisering"
  | "matchanalyse";

export interface ModuleInfo {
  key: ModuleKey;
  name: string;
  sub: string;
  active: boolean;
}

export const DEFAULT_CLUB_NAME = "Belisia Performance Center";

const STORAGE_KEY = "pfp_club_name";

const DEFAULT_MODULES: ModuleInfo[] = [
  {
    key: "video",
    name: "Trainingsvideo's",
    sub: "Upload & koppeling per sessie",
    active: true,
  },
  {
    key: "gps",
    name: "GPS & belasting (Johan Sports)",
    sub: "Automatische synchronisatie",
    active: true,
  },
  {
    key: "mas",
    name: "MAS-testing",
    sub: "Testresultaten & trends",
    active: true,
  },
  {
    key: "periodisering",
    name: "Periodisering",
    sub: "Belastingsfases per speler",
    active: true,
  },
  {
    key: "matchanalyse",
    name: "Wedstrijdanalyse",
    sub: "Binnenkort beschikbaar",
    active: false,
  },
];

interface ClubContextValue {
  clubName: string;
  setClubName: (name: string) => void;
  modules: ModuleInfo[];
  toggleModule: (key: ModuleKey) => void;
}

const ClubContext = createContext<ClubContextValue | null>(null);

// Read/write pfp_club_name through useSyncExternalStore so the client can
// pick up the persisted value without a setState-in-effect render cascade,
// while SSR/first paint safely fall back to the default name.
let storeListeners: Array<() => void> = [];
function emitStoreChange() {
  for (const listener of storeListeners) listener();
}
function subscribeToStore(listener: () => void) {
  storeListeners.push(listener);
  return () => {
    storeListeners = storeListeners.filter((l) => l !== listener);
  };
}
function getStoredClubName() {
  return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_CLUB_NAME;
}
function getServerClubName() {
  return DEFAULT_CLUB_NAME;
}

export function ClubProvider({ children }: { children: ReactNode }) {
  const clubName = useSyncExternalStore(
    subscribeToStore,
    getStoredClubName,
    getServerClubName,
  );
  const [modules, setModules] = useState<ModuleInfo[]>(DEFAULT_MODULES);

  const setClubName = (name: string) => {
    window.localStorage.setItem(STORAGE_KEY, name);
    emitStoreChange();
  };

  const toggleModule = (key: ModuleKey) => {
    setModules((prev) =>
      prev.map((m) => (m.key === key ? { ...m, active: !m.active } : m)),
    );
  };

  const value = useMemo(
    () => ({ clubName, setClubName, modules, toggleModule }),
    [clubName, modules],
  );

  return <ClubContext.Provider value={value}>{children}</ClubContext.Provider>;
}

export function useClub() {
  const ctx = useContext(ClubContext);
  if (!ctx) throw new Error("useClub must be used within a ClubProvider");
  return ctx;
}
