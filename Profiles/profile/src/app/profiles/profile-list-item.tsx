import "server-only"
import { CertificateData } from "@/lib/ts-interfaces"
import CertificateImg from "@/src/app/profiles/certificate-img"

export default function CertificateListItem({ rec }: { rec: CertificateData }) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
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
              <CertificateImg id={rec.certificateImg?.[0]?.url ?? ""} />
            </div>
          </div>
        </div>
      </div>
    )
}