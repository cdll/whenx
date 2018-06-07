# whenx.js
make weapp methods promisify

## Usage ##
As usual we call weapp methods by ``wx[funcName]`` with an object params like 
````javascript
wx.login({
  ...
  ,success(){}
  ,fail(){}
  ,complete(){}
})
````
Now within ``whenx`` we can just call ``wx[funcName]`` easily and got an thenable response like 
````javascript
import * as whenx from 'path/to/whenx'
whenx.login({
  ...
})
.then(result=>{
  //todo with result
}, err=>{
  //todo with error
})
````

And also like wepy/mpvue or any other libs that we dont change ``complete`` method into ``Promise.finally`` also cause the Promise inside weapp doesnot support, while we are also considering make some polyfill to do with it. 

###DEMO
````javascript
//service.js
import * as whenx from './whenx'

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
````

If u have any problems or ideas, just tell me by [issues](https://github.com/cdll/whenx/issues/new)
