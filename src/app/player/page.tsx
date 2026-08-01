"use client";

import Image from "next/image";
import Link from "next/link";
import { useClub } from "@/lib/club-context";
import { sessions, videos } from "@/lib/mock-data";
import styles from "./player.module.css";

export default function PlayerDashboardPage() {
  const { clubName } = useClub();
  const nextSession = sessions[sessions.length - 1];

  return (
    <div>
      <div className={styles.topNav}>
        <Image
          className={styles.logoImg}
          src="/images/logo.webp"
          alt="Clublogo"
          width={32}
          height={32}
        />
        <span className={styles.name}>{clubName}</span>
        <span className="tag tag-outline" style={{ marginLeft: "auto" }}>
          Spelersweergave
        </span>
        <Link href="/" className="btn btn-ghost">
          Uitloggen
        </Link>
      </div>

      <div className={styles.content}>
        <div>
          <h1 style={{ fontSize: 26 }}>Welkom terug</h1>
          <p className="text-muted">
            Jouw persoonlijke overzicht — trainingen, belasting en video&apos;s.
          </p>
        </div>

        <div className={styles.statGrid}>
          <div className="card elev-sm">
            <div className="card-kicker">Volgende sessie</div>
            <div className="card-title" style={{ fontSize: 17 }}>
              {nextSession.title}
            </div>
            <p className="card-body">{nextSession.date}</p>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Mijn ACWR</div>
            <div className="card-title">1.05</div>
            <p className="card-body">binnen het veilige bereik</p>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Sessies deze week</div>
            <div className="card-title">{sessions.length}</div>
            <p className="card-body">training &amp; wedstrijd</p>
          </div>
        </div>

        <div className="card elev-sm">
          <div className="card-title" style={{ fontSize: 15 }}>
            Mijn video&apos;s
          </div>
          <table className="table" style={{ marginTop: 6 }}>
            <thead>
              <tr>
                <th>Titel</th>
                <th>Sessie</th>
                <th>Datum</th>
                <th>Duur</th>
              </tr>
            </thead>
            <tbody>
              {videos.slice(0, 3).map((v) => (
                <tr key={v.id}>
                  <td>{v.title}</td>
                  <td>{v.session}</td>
                  <td>{v.date}</td>
                  <td>{v.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
