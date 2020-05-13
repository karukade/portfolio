import React from "react"
import jsIcon from "../images/js.svg"
import cssIcon from "../images/css.svg"
import firebaseIcon from "../images/firebase.svg"
import githubIcon from "../images/github.svg"
import htmlIcon from "../images/html.svg"
import nodejsIcon from "../images/nodejs.svg"
import nuxtIcon from "../images/nuxt.svg"
import reactIcon from "../images/react.svg"
import scssIcon from "../images/scss.svg"
import tsIcon from "../images/ts.svg"
import vueIcon from "../images/vue.svg"

export const icons = {
  css: cssIcon,
  firebase: firebaseIcon,
  github: githubIcon,
  html: htmlIcon,
  js: jsIcon,
  nodejs: nodejsIcon,
  nuxt: nuxtIcon,
  react: reactIcon,
  scss: scssIcon,
  ts: tsIcon,
  vue: vueIcon,
}

const Component: React.FC<{ name: keyof typeof icons }> = props => {
  return (
    <svg viewBox={`${icons[props.name].viewBox}`}>
      <use xlinkHref={`#${icons[props.name].id}`} />
    </svg>
  )
}

export default Component
