import type { Player, SessionEntry, TrainingVideo } from "@/lib/mock-data";

export const PLAYER_STATUS_LABEL: Record<
  Player["status"],
  { label: string; className: string }
> = {
  fit: { label: "Fit", className: "tag-accent" },
  belast: { label: "Belast", className: "tag-outline" },
  geblesseerd: { label: "Geblesseerd", className: "tag-neutral" },
};

export const SESSION_TYPE_LABEL: Record<SessionEntry["type"], string> = {
  veld: "Veldtraining",
  kracht: "Kracht",
  wedstrijd: "Wedstrijd",
  hersteld: "Herstel",
};

export const VIDEO_TAG_LABEL: Record<TrainingVideo["tag"], string> = {
  training: "Training",
  wedstrijd: "Wedstrijd",
  analyse: "Analyse",
};
