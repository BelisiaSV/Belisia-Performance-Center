import Link from "next/link";
import { sessions } from "@/lib/mock-data";
import { SESSION_TYPE_LABEL } from "@/lib/labels";

export default function SessionsPage() {
  const gemiddeldeLoad = Math.round(
    sessions.reduce((sum, s) => sum + s.load, 0) / sessions.length,
  );

  return (
    <>
      <header className="topbar">
        <h1>Sessie-analyse</h1>
        <div className="sub">Belasting en RPE per sessie deze week</div>
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
            <div className="card-kicker">Sessies</div>
            <div className="card-title">{sessions.length}</div>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Gem. belasting</div>
            <div className="card-title">{gemiddeldeLoad}</div>
          </div>
          <div className="card elev-sm">
            <div className="card-kicker">Zwaarste sessie</div>
            <div className="card-title" style={{ fontSize: 17 }}>
              {sessions.reduce((a, b) => (b.load > a.load ? b : a)).title}
            </div>
          </div>
        </div>

        <div className="card elev-sm">
          <table className="table">
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
                  <td>
                    <Link href={`/sessions/${s.id}`}>{s.title}</Link>
                  </td>
                  <td>
                    <span className="tag tag-neutral">{SESSION_TYPE_LABEL[s.type]}</span>
                  </td>
                  <td>{s.date}</td>
                  <td>{s.load}</td>
                  <td>{s.rpe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
