import 'server-only'
import React from 'react'
import AppHeader from './common/app-header'
import AppFooter from './common/app-footer'
import ProfileList from './profiles/profile-list'

export default function MainApp() {
  return (
    <div className="container py-1">
      <AppHeader />
      <ProfileList />
      <AppFooter />
    </div>
  )
}
