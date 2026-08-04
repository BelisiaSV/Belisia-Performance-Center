import Link from "next/link";
import { players } from "@/lib/mock-data";
import { PLAYER_STATUS_LABEL } from "@/lib/labels";

export default function PlayersPage() {
  return (
    <>
      <header className="topbar">
        <h1>Spelers</h1>
        <div className="sub">A-kern — status en belasting per speler</div>
      </header>
      <div className="content">
        <div className="card elev-sm">
          <table className="table">
            <thead>
              <tr>
                <th>Naam</th>
                <th>Positie</th>
                <th>Leeftijd</th>
                <th>Status</th>
                <th>ACWR</th>
                <th>Laatste sessie</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <tr key={p.id}>
                  <td>
                    <Link href={`/players/${p.id}`}>{p.name}</Link>
                  </td>
                  <td>{p.position}</td>
                  <td>{p.age}</td>
                  <td>
                    <span className={`tag ${PLAYER_STATUS_LABEL[p.status].className}`}>
                      {PLAYER_STATUS_LABEL[p.status].label}
                    </span>
                  </td>
                  <td>{p.acwr.toFixed(2)}</td>
                  <td>{p.lastSession}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
