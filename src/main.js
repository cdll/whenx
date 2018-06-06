
const version= require('../package.json').version

const whenx= require('./whenx')
const thenx= require('./thenx')

let main= whenx
console.info(main)
main.__proto__.whenx= whenx
main.__proto__.thenx= thenx
main.__proto__.version= version

/**
 * @desc
 * @module Function
 * @return {object}
 * @member {function} whenx
 * @member {function} thenx
 */
module.exports= main

console.info(main.version)
