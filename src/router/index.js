/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'

// 缓存原型上的push函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

// 指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    console.log('push', onResolve, onReject)
    // 如果指定了成功或失败的回调
    if (onResolve || onReject) {
        // 直接调用原本的push方法
        // originalPush(location,onResolve,onReject) // this不是router而是undefined
        return originPush.call(this, location, onResolve, onReject)
    }
    // 没有指定成功或失败回调，必须用catch处理
    return originPush.call(this, location).catch((err) => {
        // 如果是重复导航产生的错误，不再向外传递错误
        if (VueRouter.isNavigationFailure(err)) {
            return err  // 产生的是成功的promise,成功promise的value是err
        }
        // 如果是其它原因导致的原因，将错误向下传递
        // throw error
        return Promise.reject(err)
    })
}

// 指定新的push方法
VueRouter.prototype.replace = function (location, onResolve, onReject) {
    // 如果指定了成功或失败的回调
    if (onResolve || onReject) {
        // 直接调用原本的push方法
        // originReplace(location,onResolve,onReject) // this不是router而是undefined
        return originReplace.call(this, location, onResolve, onReject)
    }
    // 没有指定成功或失败回调，必须用catch处理
    return originReplace.call(this, location).catch((err) => {
        // 如果是重复导航产生的错误，不再向外传递错误
        if (VueRouter.isNavigationFailure(err)) {
            return err  // 产生的是成功的promise,成功promise的value是err
        } n41
        // 如果是其它原因导致的原因，将错误向下传递
        // throw error
        return Promise.reject(err)
    })
}

// 安装Vue插件
Vue.use(VueRouter)

// 向外暴露路由器对象
export default new VueRouter({
    // 模式
    mode: 'history', //不带#
    // 应用中所有路由
    routes
})