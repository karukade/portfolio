//svg-sprite-loaderを通した後の値
declare module "*.svg" {
  const content: {
    id: string
    viewBox: string
    content?: string
    url?: string
  }
  export default content
}
