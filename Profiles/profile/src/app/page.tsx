import 'server-only'
import React from 'react'
import AppHeader from './common/app-header'
import AppFooter from './common/app-footer'
import CertificateList from './certificates/certificate-list'

export default function MainApp() {
  return (
    <div className="container py-1">
      <AppHeader />
      <CertificateList />
      <AppFooter />
    </div>
  )
}
