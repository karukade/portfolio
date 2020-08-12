'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

const { onCreateNode } = require("./gatsby-node/index")

exports.onCreateNode = onCreateNode