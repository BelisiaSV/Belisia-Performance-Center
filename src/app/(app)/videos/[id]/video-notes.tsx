"use client";

import { useState } from "react";
import type { VideoNote } from "@/lib/mock-data";

export function VideoNotes({ initialNotes }: { initialNotes: VideoNote[] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [draft, setDraft] = useState("");

  const addNote = () => {
    const text = draft.trim();
    if (!text) return;
    setNotes((prev) => [...prev, { author: "Jij", text }]);
    setDraft("");
  };

  return (
    <div className="card elev-sm">
      <div className="card-title" style={{ fontSize: 15 }}>
        Aantekeningen
      </div>
      {notes.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 6 }}>
          {notes.map((note, i) => (
            <div
              key={i}
              style={{
                paddingTop: i === 0 ? 0 : 8,
                borderTop: i === 0 ? "none" : "1px solid var(--color-divider)",
              }}
            >
              <div style={{ fontSize: 12, color: "var(--color-accent-300)" }}>{note.author}</div>
              <div style={{ fontSize: 14 }}>{note.text}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="card-body">Nog geen aantekeningen bij deze video.</p>
      )}
      <div className="field" style={{ marginTop: 6 }}>
        <label htmlFor="new-note">Nieuwe aantekening</label>
        <textarea
          className="input"
          id="new-note"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Bijv. Rechterflank herhalen volgende training..."
        />
      </div>
      <button type="button" className="btn btn-primary" style={{ alignSelf: "flex-start" }} onClick={addNote}>
        Aantekening toevoegen
      </button>
    </div>
  );
}
