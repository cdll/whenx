
const thenx= (name, opts= {})=>{
  // console.info(`func: ${name}`)
  return new Promise((resolve, reject)=>{
    const method= wx[name]( Object.assign(opts, {
      success: res=> resolve(res)
      ,fail: err=> reject(err)
      ,complete: opts.complete
    }) )
    if(opts.progress){
      if(typeof opts.progress== "function"){
        let task= method
        Function.call(opts.progress, task)
      }
      else console.warn(`[whenx]progress must be a function to call with task but not: ${typeof(opts.progress)}`)
    }
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
