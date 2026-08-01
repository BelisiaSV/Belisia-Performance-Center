import Link from "next/link";
import { players, sessions, videos } from "@/lib/mock-data";

export default function DashboardPage() {
  const belast = players.filter((p) => p.status !== "fit").length;
  const nextSession = sessions[sessions.length - 1];

  return (
    <>
      <header className="topbar">
        <h1>Dashboard</h1>
        <div className="sub">Overzicht van de A-kern — SV Belisia</div>
      </header>
      <div className="content">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-4)",
          }}
        >
          <div className="card elev-sm">
            <div className="card-kicker">Spelersgroep</div>
            <div className="card-title">{players.length}</div>
            <p className="card-body">spelers in de A-kern</p>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Belast / geblesseerd</div>
            <div className="card-title">{belast}</div>
            <p className="card-body">spelers met verhoogd risico</p>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Sessies deze week</div>
            <div className="card-title">{sessions.length}</div>
            <p className="card-body">training &amp; wedstrijd</p>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Volgende sessie</div>
            <div className="card-title" style={{ fontSize: 17 }}>
              {nextSession.title}
            </div>
            <p className="card-body">{nextSession.date}</p>
          </div>
        </div>

        <div className="card elev-sm">
          <div className="card-title" style={{ fontSize: 15 }}>
            Recente sessies
          </div>
          <table className="table" style={{ marginTop: 6 }}>
            <thead>
              <tr>
                <th>Sessie</th>
                <th>Type</th>
                <th>Datum</th>
                <th>Belasting</th>
                <th>RPE</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s.id}>
                  <td>{s.title}</td>
                  <td>
                    <span className="tag tag-neutral">{s.type}</span>
                  </td>
                  <td>{s.date}</td>
                  <td>{s.load}</td>
                  <td>{s.rpe}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="/sessions" className="btn btn-ghost" style={{ marginTop: 6, alignSelf: "flex-start" }}>
            Alle sessies bekijken
          </Link>
        </div>

        <div className="card elev-sm">
          <div className="card-title" style={{ fontSize: 15 }}>
            Recent geüpload
          </div>
          <table className="table" style={{ marginTop: 6 }}>
            <thead>
              <tr>
                <th>Video</th>
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
          <Link href="/videos" className="btn btn-ghost" style={{ marginTop: 6, alignSelf: "flex-start" }}>
            Alle video&apos;s bekijken
          </Link>
        </div>
      </div>
    </>
  );
}
