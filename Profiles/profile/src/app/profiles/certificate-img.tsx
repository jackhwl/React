import "server-only";
//import imgDataAll from "../../../data/imgdata.json";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getSessionVideo(id: string) {
  await delay(2000);
  const res = await fetch(`http://localhost:3000/api/youtubedata/${id}`);
  if (!res.ok) { throw new Error("Error fetching session video")}
  const data = await res.json();
  return data
}

export default async function CertificateImg({ id }: { id: string }) {
  if (!id || id.length === 0) {
    return null;
  }
  const imgData = await getSessionVideo(id)
  return (
    <div className="card">
      <a target="_blank" href={`https://www.youtube.com/watch?v=${id}`}>
        <img
          src={imgData?.snippet?.thumbnails?.medium?.url}
          className="card-img-top"
          alt="youtube thumb"
        />
      </a>
      <div
        className="card-body d-flex justify-content-end"
        style={{ backgroundColor: "dimgray", padding: "4px 8px" }}
      >
        <p
          className="card-text fst-italic text-white mb-0"
          style={{ lineHeight: 1, fontSize: "11px" }}
        >
          Views {imgData?.statistics?.viewCount ?? "---"}
        </p>
      </div>
    </div>
  );
}