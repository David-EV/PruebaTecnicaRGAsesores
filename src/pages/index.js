// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://crehana-blog.imgix.net/media/filer_public/4f/fe/4ffe7456-b63b-4e0f-8fd3-fc619bc0e345/habilidades-de-un-programador.jpg"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage