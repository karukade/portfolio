import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"
import LinkInline from "../linkInline"
import { Maybe } from "../../../types/graphql-types"

const options = {
  renderNode: {
    // eslint-disable-next-line react/display-name
    [INLINES.HYPERLINK]: (node: any) => {
      const {
        content,
        data: { uri },
      } = node
      const { value } = content[0]
      return <LinkInline uri={uri} value={value} />
    },
  },
}

const Description: React.FC<{ json: Maybe<string> }> = ({ json }) => {
  if (!json) return null
  return <>{documentToReactComponents(JSON.parse(json), options)}</>
}

export default Description
