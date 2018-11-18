
var thenx= require('./thenx')

var whenx= function(){
  var _wx= {}
  for(var k in wx){
    if(typeof wx[k] === 'function'){
      // console.info(`func: ${k}`)
      _wx[k]= (v)=> thenx.call(this, k, v)
    }
    else{
      // console.info(`val: ${k}`)
      _wx[k]= wx[k]
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
