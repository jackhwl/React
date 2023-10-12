import 'server-only'

import { CertificateData } from "@/lib/ts-interfaces"
import CeretificateListItem from "@/src/app/certificates/certificate-list-item"
import certificatesData from "../../../data/certificates.json"

export default function CertificateList() {
    return (
        <div className="container">
            <div className="row">
                { certificatesData.data.certificates?.map(function (rec: CertificateData) {
                    return <CertificatListItem key={rec.id} rec={rec} />
                })}
            </div>
        </div>
    )
}