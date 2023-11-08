import "server-only"
import { Suspense } from "react"
import { CertificateData } from "@/lib/ts-interfaces"
import CertificateImg from "@/src/app/profiles/certificate-img"

export default function CertificateListItem({ rec }: { rec: CertificateData }) {
    return (
        <div className="card m-1">
          <div className="row g-0">
            <div className="col-7">
              <div className="card-body">
                <h6 className="card-title smaller-item">{rec.title}</h6>
                <p className="card-text small text">
                  {(rec.descriptionShort ?? "").substring(0, 60)}...
                </p>
              </div>
            </div>
            <div className="col-5 align-middle mt-2 ">
              <Suspense fallback={<SessionVideoLoading />}>
              <CertificateImg id={rec.sessionVideos?.[0]?.youTubeUrl ?? ""} />
              </Suspense>
            </div>
          </div>
        </div>
    )
}

function SessionVideoLoading() {
  return (
    <div className="card m-1">
      <a target="#">
        <div className="spinner" style={{ width: "105px", height: "105px" }}>

        </div>
      </a>
    </div>
  )
}