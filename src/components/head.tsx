/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import fonts from "../plugins/adobe-fonts"

//types
import { SiteMetaDataQuery } from "../../types/graphql-types"


const Head: React.FC = () => {
  const { site } = useStaticQuery<SiteMetaDataQuery>(graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteUrl
      }
    }
  }
`)
  return (
    <Helmet>
      <title>{site?.siteMetadata?.title}</title>
      <meta name="description" content={site?.siteMetadata?.description} />
      <meta name="keywords" content={site?.siteMetadata?.keywords} />
      <meta name="author" content={site?.siteMetadata?.author} />
      <meta property="og:url" content={site?.siteMetadata?.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={site?.siteMetadata?.title} />
      <meta property="og:description" content={site?.siteMetadata?.description} />
      <meta property="og:site_name" content={site?.siteMetadata?.title} />
      <script>
        {fonts}
      </script>
    </Helmet>
  )
}

export default Head
