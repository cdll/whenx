<center>

[![](https://img.shields.io/npm/v/whenx.svg)](https://www.npmjs.com/package/whenx)
[![install size](https://img.shields.io/npm/l/whenx.svg)](https://github.com/cdll/whenx/blob/master/LICENSE)
[![](https://img.shields.io/npm/dm/whenx.svg)](https://github.com/cdll/whenx)
[![install size](https://packagephobia.now.sh/badge?p=whenx)](https://packagephobia.now.sh/result?p=whenx)
[![](https://img.badgesize.io/https://unpkg.com/whenx/whenx.min.js?compression=gzip&?maxAge=3600)](https://unpkg.com/whenx@latest)

</center>

# whenx.js
make weapp methods promisify

## Usage ##
As usual we call weapp methods by ``wx[method]`` with an object params like
````javascript
wx.login({
  ...
  ,success(result){
    //todo with result
  }
  ,fail(error){
    //todo with error
  }
  ,complete(){}
})
````
Now within ``whenx`` we can just call ``wx[method]`` easily and got a thenable response like
````javascript
const whenx= require('path/to/whenx')
whenx.login({
  ...
  ,complete(){}
})
.then(result=>{
  //todo with result
}, error=>{
  //todo with error
})
````

And also like wepy/mpvue or any other libs that we dont change ``complete`` method into ``Promise.finally`` also cause the Promise inside weapp doesnot support, while we are also considering make some polyfill to do with it.

### DEMO ###
````javascript
//service.js
const whenx= require('path/to/whenx')

const service= {
  http: (opts)=> whenx.request(opts)
    .then(res=>{
      return res
    }, err=>{
      // console.warn(err)
      Promise.reject(error)
    })
  ,login: ()=> new Promise.all([
      whenx.login({})
      whenx.getUserInfo({
        timeout: 2000
        ,withCredentials: true
      })
    ])
    .then(res=>{
      // console.info(res[0].code)
      // console.group('userInfo')
      //   console.info(res[1].userInfo)
      //   console.info(res[1].rawData)
      //   console.info(res[1].signature)
      //   console.info(res[1].encryptedData)
      //   console.info(res[1].lv)
      // console.groupEnd('userInfo')
      return {
        code: res[0].code
        ,userInfo: res[1]
      }
    }, err=>{
      return whenx.showModal({
        title: 'failed'
        ,content: 'login failed, try again?'
        ,showCancel: true
      })
      .then(res=>{
        return service.login()
      }, err=>{
        Promise.reject(err)
      })
    })
}

module.exports= service

//pages/page/page.js
const service= require('path/to/service')

Page({
  data: {}
  onLoad(){
    return service.login()
    .then(res=>{
      //ue logic with res
    }, err=>{
      //ue logic with err
    })
  }
})
````

If u have any problems or ideas, just tell me by [issues](https://github.com/cdll/whenx/issues/new)
