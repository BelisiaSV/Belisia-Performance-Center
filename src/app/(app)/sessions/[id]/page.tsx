import Link from "next/link";
import { notFound } from "next/navigation";
import { players, sessions } from "@/lib/mock-data";
import { SESSION_TYPE_LABEL } from "@/lib/labels";

export function generateStaticParams() {
  return sessions.map((s) => ({ id: s.id }));
}

export default async function SessionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = sessions.find((s) => s.id === id);
  if (!session) notFound();

  const present = session.attendance.filter((a) => a.present);
  const absent = session.attendance.filter((a) => !a.present);
  const gemiddeldeRpe =
    present.length > 0
      ? (present.reduce((sum, a) => sum + a.rpe, 0) / present.length).toFixed(1)
      : "—";

  return (
    <>
      <header className="topbar">
        <h1>{session.title}</h1>
        <div className="sub">
          {session.date} ·{" "}
          <Link href="/sessions">terug naar Sessie-analyse</Link>
        </div>
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
            <div className="card-kicker">Type</div>
            <div className="card-title" style={{ fontSize: 17 }}>
              <span className="tag tag-neutral">{SESSION_TYPE_LABEL[session.type]}</span>
            </div>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Teambelasting</div>
            <div className="card-title">{session.load}</div>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Gem. RPE (aanwezig)</div>
            <div className="card-title">{gemiddeldeRpe}</div>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Aanwezigheid</div>
            <div className="card-title">
              {present.length}/{session.attendance.length}
            </div>
          </div>
        </div>

        <div className="card elev-sm">
          <div className="card-title" style={{ fontSize: 15 }}>
            Belasting per speler
          </div>
          <table className="table" style={{ marginTop: 6 }}>
            <thead>
              <tr>
                <th>Speler</th>
                <th>Positie</th>
                <th>Belasting</th>
                <th>RPE</th>
              </tr>
            </thead>
            <tbody>
              {present.map((a) => {
                const player = players.find((p) => p.id === a.playerId);
                return (
                  <tr key={a.playerId}>
                    <td>
                      <Link href={`/players/${a.playerId}`}>{player?.name ?? a.playerId}</Link>
                    </td>
                    <td>{player?.position ?? "—"}</td>
                    <td>{a.load}</td>
                    <td>{a.rpe}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {absent.length > 0 && (
          <div className="card elev-sm">
            <div className="card-title" style={{ fontSize: 15 }}>
              Afwezig
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
              {absent.map((a) => {
                const player = players.find((p) => p.id === a.playerId);
                return (
                  <Link key={a.playerId} href={`/players/${a.playerId}`} className="tag tag-outline">
                    {player?.name ?? a.playerId}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
