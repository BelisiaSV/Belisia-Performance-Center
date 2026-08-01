import { players } from "@/lib/mock-data";

const STATUS_TAG: Record<
  (typeof players)[number]["status"],
  { label: string; className: string }
> = {
  fit: { label: "Fit", className: "tag-accent" },
  belast: { label: "Belast", className: "tag-outline" },
  geblesseerd: { label: "Geblesseerd", className: "tag-neutral" },
};

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
                  <td>{p.name}</td>
                  <td>{p.position}</td>
                  <td>{p.age}</td>
                  <td>
                    <span className={`tag ${STATUS_TAG[p.status].className}`}>
                      {STATUS_TAG[p.status].label}
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
