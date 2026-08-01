import { videos } from "@/lib/mock-data";

const TAG_LABEL: Record<(typeof videos)[number]["tag"], string> = {
  training: "Training",
  wedstrijd: "Wedstrijd",
  analyse: "Analyse",
};

export default function VideosPage() {
  return (
    <>
      <header className="topbar">
        <h1>Video&apos;s &amp; sessies</h1>
        <div className="sub">
          Upload &amp; koppeling van trainingsvideo&apos;s per sessie
        </div>
      </header>
      <div className="content">
        <div className="card elev-sm" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="card-title" style={{ fontSize: 15 }}>
              Nieuwe video toevoegen
            </div>
            <p className="card-body" style={{ margin: 0 }}>
              Koppel een opname aan een training of wedstrijd.
            </p>
          </div>
          <button type="button" className="btn btn-primary">
            Video uploaden
          </button>
        </div>

        <div className="card elev-sm">
          <table className="table">
            <thead>
              <tr>
                <th>Titel</th>
                <th>Sessie</th>
                <th>Type</th>
                <th>Datum</th>
                <th>Duur</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((v) => (
                <tr key={v.id}>
                  <td>{v.title}</td>
                  <td>{v.session}</td>
                  <td>
                    <span className="tag tag-accent">{TAG_LABEL[v.tag]}</span>
                  </td>
                  <td>{v.date}</td>
                  <td>{v.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
