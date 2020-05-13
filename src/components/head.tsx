/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
import React from "react"
import { Helmet } from "react-helmet"

const Head: React.FC = () => (
  <Helmet>
    <script>
      {(function (d) {
        var config = {
            kitId: "jnt1uns",
            scriptTimeout: 3000,
            async: true,
          },
          h = d.documentElement,
          t = setTimeout(function () {
            h.className =
              h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"
          }, config.scriptTimeout),
          tk = d.createElement("script"),
          f = false,
          s = d.getElementsByTagName("script")[0],
          a
        h.className += " wf-loading"
        tk.src = "https://use.typekit.net/" + config.kitId + ".js"
        tk.async = true
        tk.onload = tk.onreadystatechange = function () {
          a = this.readyState
          if (f || (a && a != "complete" && a != "loaded")) return
          f = true
          clearTimeout(t)
          try {
            Typekit.load(config)

          } catch (e) {}
        }
        s.parentNode.insertBefore(tk, s)
      })(document) as any}
    </script>
  </Helmet>
)

export default Head