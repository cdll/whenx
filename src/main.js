
import {
  version
} from '../package.json'

import * as whenx from './whenx'
import * as thenx from './thenx'

var main= whenx
// console.info(main)
main.whenx= whenx
main.thenx= thenx
main._version_= version

/**
 * @desc
 * @module Object
 * @return {object}
 * @member {function} whenx
 * @member {function} thenx
 */
export default main
