
import {version} from '../package.json'

import * as whenx from './whenx'
import * as thenx from './thenx'

let main= whenx
// console.info(main)
main.whenx= whenx
main.thenx= thenx
main.version= version

/**
 * @desc
 * @module Object
 * @return {object}
 * @member {function} whenx
 * @member {function} thenx
 */
module.exports= main
