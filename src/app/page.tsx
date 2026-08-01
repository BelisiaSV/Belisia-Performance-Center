"use client";

import Image from "next/image";
import Link from "next/link";
import { useClub } from "@/lib/club-context";
import styles from "./login.module.css";

export default function LoginPage() {
  const { clubName } = useClub();

  return (
    <div className={styles.loginPage} data-screen-label="Login">
      <div className={`${styles.loginHero} lighten`}>
        <Image
          className={styles.heroImage}
          src="/images/hero.webp"
          alt="Sfeerbeeld A-kern Belisia SV"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 56vw"
        />
        <div className={styles.loginScrim} />
        <div className={styles.loginTopbar}>
          <div className={styles.brandRow}>
            <Image
              className={styles.logoImg}
              src="/images/logo.webp"
              alt="Logo"
              width={60}
              height={60}
            />
            <div>
              <div className={styles.brandName}>{clubName}</div>
              <div className={styles.brandSub}>
                SV Belisia · 1e Amateur VV · Sportpark Katteberg, Bilzen
              </div>
            </div>
          </div>
          <span className={`tag tag-outline ${styles.platformBadge}`}>
            Platform for Professionals
          </span>
        </div>
        <div className={styles.loginMotto}>
          <span className={styles.kicker}>Meer dan een club</span>
          <h1>Prestaties in beeld, van training tot terrein.</h1>
        </div>
      </div>
      <div className={styles.loginPanel}>
        <div className={`card elev-lg ${styles.loginCard}`}>
          <div className="card-kicker">Aanmelden</div>
          <h2 className="card-title">Welkom terug</h2>
          <p className="card-body">
            Log in met je clubaccount om trainingsvideo&apos;s,
            GPS-belastingdata en periodisering te bekijken.
          </p>
          <div className="field">
            <label htmlFor="email">E-mailadres</label>
            <input
              className="input"
              id="email"
              type="email"
              defaultValue="trainer@belisiasv.be"
            />
          </div>
          <div className="field">
            <label htmlFor="pw">Wachtwoord</label>
            <input
              className="input"
              id="pw"
              type="password"
              defaultValue="demo1234"
            />
          </div>
          <Link href="/dashboard" className="btn btn-primary btn-block">
            Inloggen
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </Link>
          <Link href="/player" className="btn btn-ghost btn-block">
            Bekijk spelersweergave
          </Link>
          <p className={`${styles.loginFoot} text-muted`}>
            Wachtwoord vergeten? Neem contact op met je club-beheerder.
          </p>
        </div>
        <footer className={`${styles.loginPageFoot}`}>
          {clubName} draait op <strong>Platform for Professionals</strong>{" "}
          — wit-label performance-platform voor voetbalclubs.
        </footer>
      </div>
    </div>
  );
}
