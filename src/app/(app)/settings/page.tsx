"use client";

import Image from "next/image";
import { useState } from "react";
import { useClub } from "@/lib/club-context";
import styles from "./settings.module.css";

const SWATCHES = [
  { color: "oklch(70% 0.11 224)", label: "Sky blue" },
  { color: "oklch(58% 0.19 25)", label: "Rood" },
  { color: "oklch(60% 0.14 150)", label: "Groen" },
  { color: "oklch(45% 0.09 265)", label: "Indigo" },
];

export default function SettingsPage() {
  const { clubName, setClubName, modules, toggleModule } = useClub();
  const [draft, setDraft] = useState(clubName);
  const [saved, setSaved] = useState(false);
  const [swatch, setSwatch] = useState(0);

  const onSave = () => {
    setClubName(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <>
      <header className="topbar">
        <h1>Organisatie-instellingen</h1>
        <div className="sub">
          Branding voor deze club-omgeving — bepaalt hoe het platform eruitziet
          voor SV Belisia
        </div>
      </header>
      <div className="content">
        <div className={styles.brandGrid}>
          <div
            className="card elev-sm"
            style={{ padding: "var(--space-4)", gap: "var(--space-4)" }}
          >
            <div className="card-kicker">Multi-tenant configuratie</div>
            <div className="field">
              <label htmlFor="orgname">Clubnaam (weergavenaam)</label>
              <input
                className="input"
                id="orgname"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="tenantid">Tenant-ID</label>
              <input
                className="input"
                id="tenantid"
                defaultValue="belisia-sv"
                readOnly
                style={{ opacity: 0.7 }}
              />
              <div className={styles.readonlyNote}>
                Unieke identificatie binnen Platform for Professionals — niet
                wijzigbaar.
              </div>
            </div>
            <div className="field">
              <label htmlFor="subdomain">Subdomein</label>
              <input
                className="input"
                id="subdomain"
                defaultValue="belisia.platformforprofessionals.app"
                readOnly
                style={{ opacity: 0.7 }}
              />
            </div>
            <div className="field">
              <label>Clublogo</label>
              <Image
                src="/images/logo.webp"
                alt="Clublogo"
                width={88}
                height={88}
                style={{ borderRadius: 12 }}
              />
              <div className={styles.readonlyNote}>
                Dit logo wordt automatisch overal in het platform toegepast —
                zijbalk, inlogscherm en spelersweergave.
              </div>
            </div>
            <div className="field">
              <label>Primaire kleur</label>
              <div className={styles.swatches}>
                {SWATCHES.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    aria-label={s.label}
                    className={`${styles.swatchOpt} ${i === swatch ? styles.selected : ""}`}
                    style={{ background: s.color }}
                    onClick={() => setSwatch(i)}
                  >
                    {i === swatch && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              <div className={styles.readonlyNote}>
                {SWATCHES[swatch].label} — het huidige Belisia SV-clubkleur.
                Elke club op het platform kiest hier haar eigen kleur.
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={onSave}>
              {saved ? "Opgeslagen ✓" : "Wijzigingen opslaan"}
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div className="card elev-sm" style={{ padding: "var(--space-4)", gap: "var(--space-3)" }}>
              <div className="card-title" style={{ fontSize: 15 }}>
                Voorbeeld
              </div>
              <div className={styles.previewNav}>
                <Image
                  src="/images/logo.webp"
                  alt=""
                  width={26}
                  height={26}
                  style={{ borderRadius: 7 }}
                />
                <span className={styles.previewName}>{draft}</span>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginLeft: "auto", padding: "6px 12px", fontSize: 12.5 }}
                >
                  Inloggen
                </button>
              </div>
              <p className="text-muted" style={{ fontSize: 12, margin: 0 }}>
                Zo verschijnen navigatie en knoppen voor gebruikers binnen deze
                club-omgeving.
              </p>
            </div>

            <div className="card elev-sm" style={{ padding: "var(--space-4)" }}>
              <div className="card-title" style={{ fontSize: 15 }}>
                Actieve modules
              </div>
              <div className={styles.moduleList} style={{ marginTop: 6 }}>
                {modules.map((mod) => (
                  <div className={styles.moduleRow} key={mod.key}>
                    <div>
                      <div className={styles.mName}>{mod.name}</div>
                      <div className={styles.mSub}>{mod.sub}</div>
                    </div>
                    <div className={styles.mRight}>
                      <span className={styles.mState}>
                        {mod.active ? "Actief" : "Uitgeschakeld"}
                      </span>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={mod.active}
                          onChange={() => toggleModule(mod.key)}
                        />
                        <span className="switch-track" />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
