import React from "react"
import VideoFrame from "../videoframe"
import Img from "gatsby-image"
import { PostFragment, Maybe } from "../../../types/graphql-types"

type PropsType = {
  img?: Maybe<PostFragment["img"]>
  video?: Maybe<string>
}

const Thumbnail: React.FC<PropsType> = ({ img, video }) => {
  if (!img && !video) return null
  return video ? (
    <VideoFrame url={video} />
  ) : img?.fluid ? (
    <Img fluid={img.fluid} />
  ) : null
}

export default Thumbnail
