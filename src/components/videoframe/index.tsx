import React from "react"
import styles from "./style.module.scss"

const VideoFrame: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className={styles.videoFrame}>
      <iframe
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoFrame
