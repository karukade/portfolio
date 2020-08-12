import { CreateNodeArgs } from "gatsby"
import { PostFragment } from "../types/graphql-types"
import unified, { Processor } from "unified"
import markdown from "remark-parse"
import visit from "unist-util-visit"

export interface VisitNode {
  type: string
  url: string
  children: { type: string; value: string }[]
  [key: string]: unknown
}

const processor = unified().use(markdown)

export const onCreateNode = async ({
  node,
  actions,
}: CreateNodeArgs<PostFragment>) => {
  if (node.internal.type !== "ContentfulPost") return
  const { links } = node
  if (!links) return

  const { createNodeField } = actions
  const parsedLinks = await Promise.all(
    (links as string[])
      .filter(link => link)
      .map(async link => {
        return process(processor, link as string)
      })
  )
  createNodeField({
    name: "parsedLinks",
    node,
    value: parsedLinks,
  })
}

const process = async (processor: Processor, rowData: string) => {
  const parsed = await processor.parse(rowData)
  let link!: string
  let value!: string
  visit<VisitNode>(parsed, "link", node => {
    link = node.url
    value = node.children[0].value
  })
  return {
    link,
    value,
  }
}
