function Mypromise(callback) {
    var self = this
    // 记录状态null为pending, true为resolve, false为reject
    var state = null
    // 记录resolve的参数
    var param = null
    // then方法返回的promise对象的resolve和reject
    var nextResolve = null
    var nextReject = null
    // 记录then方法的参数,onFulfilled和onReject
    var asynconFulfilled = null
    var asynconReject = null
    // 执行并且改变promise对象状态
    callback(resolve, reject)
    this.then = function(onFulfilled, onReject) {
        // 返回一个新的Promise对象
        return new  self.constructor(function(resolve, reject) {
            // 判断异步代码是否执行完毕 (是否resolve/reject)
            // 若执行完毕就在 .then方法里立即执行, 否则就将参数记录下来,等待state就绪再执行...
            if (state === true) {
                doAsynconFulfilled(onFulfilled, resolve, reject)
            }else if (state === false) {
                doAsynconRejected(onReject, resolve, reject)
            }else {
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconReject = onReject
            }
        })
    }

    // resolve方法
    function resolve(data) {
        state = true
        param = data
        if (nextResolve) {
            doAsynconFulfilled(asynconFulfilled, nextResolve, nextReject)
        }
    }
    // reject方法
    function reject(err) {
        state = false
        param = err
        if (nextResolve) {
            doAsynconRejected(asynconReject, nextResolve, nextReject)
        }
    }

    function doAsynconFulfilled(onFulfilled, resolve, reject) {
        window.setTimeout(function() {
            // 判断onFulfilled是否为function ,不是则忽略它
            if (typeof onFulfilled === 'function') {
                // 执行onFulfilled获取返回值promise()
                var promise = onFulfilled(param)
                // 如果promise为undefined 执行if
                // 如果promise为Mypromise对象 执行else if
                // 如果promise为非Mypromise对象 执行 else
                if (promise === undefined) {
                    resolve(param)
                }else if(promise.constructor === self.constructor) {
                    // 等待传递进来的promise 对象执行完毕,然后根据传递进来的promise对象的状态执行resolve/reject
                    promise.then(function() {
                        resolve(param)
                    }, function(param) {
                        reject(param)
                    })
                }else {
                    // 执行then方法返回对象的resolve
                    resolve(promise)
                }
            }else {
                resolve(param)
            }
        }, 0)
    }
    
    function doAsynconRejected(onReject, resolve, reject) {
        window.setTimeout(function () {
            if (typeof onReject === 'function') {
                var promise = onReject(param)
                if (promise === undefined) {
                    reject(param)
                }else if (promise.constructor === self.constructor) {
                    promise.then(function(param) {
                        resolve(param)
                    }, function(param) {
                        reject(param)
                    })
                }else {
                    reject(promise)
                }
            }else {
                reject(param)
            }
        }, 0)
    }
}
