import Link from "next/link";
import { notFound } from "next/navigation";
import { players, sessions } from "@/lib/mock-data";
import { PLAYER_STATUS_LABEL, SESSION_TYPE_LABEL } from "@/lib/labels";
import { Sparkline } from "@/components/sparkline";

export function generateStaticParams() {
  return players.map((p) => ({ id: p.id }));
}

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const player = players.find((p) => p.id === id);
  if (!player) notFound();

  const playerSessions = sessions
    .map((s) => ({
      session: s,
      attendance: s.attendance.find((a) => a.playerId === player.id),
    }))
    .filter((row) => row.attendance);

  return (
    <>
      <header className="topbar">
        <h1>{player.name}</h1>
        <div className="sub">
          {player.position} · {player.age} jaar ·{" "}
          <Link href="/players">terug naar Spelers</Link>
        </div>
      </header>
      <div className="content">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-4)",
          }}
        >
          <div className="card elev-sm">
            <div className="card-kicker">Status</div>
            <div className="card-title" style={{ fontSize: 17 }}>
              <span className={`tag ${PLAYER_STATUS_LABEL[player.status].className}`}>
                {PLAYER_STATUS_LABEL[player.status].label}
              </span>
            </div>
            <p className="card-body">{player.note}</p>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">ACWR</div>
            <div className="card-title">{player.acwr.toFixed(2)}</div>
            <p className="card-body">acute:chronische belastingsratio</p>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Periodisatie</div>
            <div className="card-title" style={{ fontSize: 17 }}>
              {player.periodizationPhase}
            </div>
            <p className="card-body">huidige trainingsfase</p>
          </div>
        </div>

        <div className="card elev-sm">
          <div className="card-title" style={{ fontSize: 15 }}>
            Belasting — laatste 6 weken
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", marginTop: 6 }}>
            <Sparkline values={player.weeklyLoad} width={240} height={56} />
            <div style={{ display: "flex", gap: "var(--space-4)", fontSize: 13 }}>
              {player.weeklyLoad.map((load, i) => (
                <div key={i} className="text-muted" style={{ textAlign: "center" }}>
                  <div style={{ color: "var(--color-text)", fontWeight: 500 }}>{load}</div>
                  <div>W{i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card elev-sm">
          <div className="card-title" style={{ fontSize: 15 }}>
            MAS-testing resultaten
          </div>
          {player.masResults.length > 0 ? (
            <table className="table" style={{ marginTop: 6 }}>
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>MAS-snelheid</th>
                  <th>VO2max</th>
                </tr>
              </thead>
              <tbody>
                {player.masResults.map((r) => (
                  <tr key={r.date}>
                    <td>{r.date}</td>
                    <td>{r.masSpeed} km/u</td>
                    <td>{r.vo2max} ml/kg/min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="card-body">Nog geen testresultaten geregistreerd.</p>
          )}
        </div>

        <div className="card elev-sm">
          <div className="card-title" style={{ fontSize: 15 }}>
            Sessies
          </div>
          <table className="table" style={{ marginTop: 6 }}>
            <thead>
              <tr>
                <th>Sessie</th>
                <th>Type</th>
                <th>Datum</th>
                <th>Aanwezig</th>
                <th>Belasting</th>
                <th>RPE</th>
              </tr>
            </thead>
            <tbody>
              {playerSessions.map(({ session, attendance }) => (
                <tr key={session.id}>
                  <td>
                    <Link href={`/sessions/${session.id}`}>{session.title}</Link>
                  </td>
                  <td>
                    <span className="tag tag-neutral">{SESSION_TYPE_LABEL[session.type]}</span>
                  </td>
                  <td>{session.date}</td>
                  <td>{attendance?.present ? "Ja" : "Nee"}</td>
                  <td>{attendance?.present ? attendance.load : "—"}</td>
                  <td>{attendance?.present ? attendance.rpe : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
