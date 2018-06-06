
const thenx= (name, opts= {})=>{
  // console.info(`func: ${name}`)
  return new Promise((resolve, reject)=>{
    wx[name]( Object.assign(opts, {
      success: res=> resolve(res)
      ,fail: err=> reject(err)
      ,complete: opts.complete
    }) )
  })
}

/**
 * @desc
 * @module Function
 * @param {string} name
 * @param {object} opts
 * @return {promise}
 */
module.exports= thenx
