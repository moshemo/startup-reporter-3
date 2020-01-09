import React from 'react'
import SEO from 'Components/seo'
import MainLayout from 'Layouts/main'

import { HomeList } from 'Modules'

const IndexPage = () => {
  return (
    <MainLayout>
      <SEO title="Startup Reporter" />

      <HomeList />
    </MainLayout>
  )
}

export default IndexPage
