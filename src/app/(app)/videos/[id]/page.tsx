import Link from "next/link";
import { notFound } from "next/navigation";
import { videos } from "@/lib/mock-data";
import { VIDEO_TAG_LABEL } from "@/lib/labels";
import { VideoNotes } from "./video-notes";

export function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }));
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = videos.find((v) => v.id === id);
  if (!video) notFound();

  return (
    <>
      <header className="topbar">
        <h1>{video.title}</h1>
        <div className="sub">
          {video.session} · {video.date} ·{" "}
          <Link href="/videos">terug naar Video&apos;s &amp; sessies</Link>
        </div>
      </header>
      <div className="content">
        <div
          className="card elev-sm"
          style={{
            aspectRatio: "16 / 9",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--color-bg)",
          }}
        >
          <svg width="56" height="56" viewBox="0 0 256 256" fill="var(--color-accent)">
            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
          </svg>
          <span className="text-muted" style={{ marginTop: 8, fontSize: 12 }}>
            {video.duration}
          </span>
        </div>

        <div className="card elev-sm">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="tag tag-accent">{VIDEO_TAG_LABEL[video.tag]}</span>
            <span className="card-title" style={{ fontSize: 15 }}>
              Beschrijving
            </span>
          </div>
          <p className="card-body" style={{ marginTop: 6 }}>
            {video.description}
          </p>
        </div>

        <VideoNotes initialNotes={video.notes} />
      </div>
    </>
  );
}
