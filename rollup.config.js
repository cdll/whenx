
const resolve= require('rollup-plugin-node-resolve')
const commonjs= require('rollup-plugin-commonjs')
const json= require('rollup-plugin-json')
const minify= require('rollup-plugin-babel-minify')
const pkg= require('./package.json')

const banner = `/*
	${pkg.name} v${pkg.version}
	https://github.com/cdll/whenx
	Released under the MIT License.
*/`

module.exports= [{
  input: 'src/main.js'
  ,output: [
    {
      file: 'whenx.js'
      , format: 'iife'
      , sourcemap: false
      ,banner: banner
      ,strict: true
      ,freeze: false
      ,name: 'whenx'
    }
  ]
  ,plugins: [
    json()
    ,resolve({})
    ,commonjs({})
  ] 
}, {
  input: 'src/main.js'
  ,output: [
    {
      file: 'whenx.min.js'
      , format: 'iife'
      , sourcemap: true
      ,indent: false
      ,banner: banner
      ,strict: false
      ,freeze: false
      ,silent: true
      ,name: 'whenx'
    }
  ]
  ,plugins: [
    json()
    ,resolve({})
    ,commonjs({})
    ,minify({
      comments: false
    })
  ] 
}]
