import 'server-only'

import { CertificateData } from "@/lib/ts-interfaces"
import ProfileListItem from "@/src/app/profiles/profile-list-item"
import profileData from "../../../data/profiles.json"

export default function ProfileList() {
    return (
        <div className="container">
            <div className="row">
                { profileData.data.sessions?.map(function (rec: CertificateData) {
                    return <ProfileListItem key={rec.id} rec={rec} />
                })}
            </div>
        </div>
    )
}