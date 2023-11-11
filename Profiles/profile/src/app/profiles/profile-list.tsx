import 'server-only'

import { CertificateData } from "@/lib/ts-interfaces"
import ProfileListItem from "@/src/app/profiles/profile-list-item"
import profileData from "../../../data/profiles.json"
import ProfileListItemClient from './profile-list-item-client'

export default function ProfileList() {
    return (
        <div className="container">
            <div className="row">
                { profileData.data.sessions?.map(function (rec: CertificateData) {
                    return (
                        <ProfileListItemClient key={rec.id} title={rec.title} >
                            <ProfileListItem rec={rec} />
                        </ProfileListItemClient>
                    
                    )
                })}
            </div>
        </div>
    )
}