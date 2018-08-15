
const thenx= require('./thenx')

const whenx= function(){
  let _wx= {}
  for(let k in wx){
    if(typeof wx[k] === 'function'){
      // console.info(`func: ${k}`)
      _wx[k]= (v)=> thenx.call(this, k, v)
    }
  }
  return _wx
}()

/**
 * @desc
 * @module Object
 * @return {bject}
 */
module.exports= whenx
