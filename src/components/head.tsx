/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
import React from "react"
import { Helmet } from "react-helmet"
import fonts from "../plugins/adobe-fonts"

const Head: React.FC = () => (
  <Helmet>
    <script>
      {fonts}
    </script>
  </Helmet>
)

export default Head
