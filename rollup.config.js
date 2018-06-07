
const resolve= require('rollup-plugin-node-resolve')
const commonjs= require('rollup-plugin-commonjs')
const json= require('rollup-plugin-json')
const pkg= require('./package.json')

const banner = `/*
	${pkg.name} v${pkg.version}
	https://github.com/cdll/whenx
	Released under the MIT License.
*/`

module.exports= {
  input: 'src/main.js'
  ,output: [
    {
      file: 'dist/whenx.js'
      , format: 'cjs'
      , sourcemap: true
      ,...banner
    }
    ,{
      file: 'dist/whenx.min.js'
      , format: 'cjs'
      , sourcemap: true
      ,...banner
    }
  ]
  ,plugins: [
    json()
    ,resolve({browser: true})
    ,commonjs({

    })
  ] 
}
