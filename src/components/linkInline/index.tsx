import React from "react"

const LinkInline: React.FC<{ value: string; uri: string }> = ({
  value,
  uri,
}) => (
  <a href={uri} target="_blank" rel="noopener noreferrer">
    {value}
  </a>
)

export default LinkInline
