/*
    专门针对mock接口
    axios的二次封装
    1.配置通用的基础路径和超时
    2.显示请求进度条
    3.成功返回的数据不再是response，而直接是响应体数据response.data
    4.统一处理请求数据，具体请求也可以选择处理或不处理
*/
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


/* 1.配置通用的基础路径和超时 */
// service是一个能发任意ajax请求的函数，当然可以作为对象使用
const service = axios.create({
    baseURL: '/mock',    // 基础路径
    timeout: 20000, // 超时时间
})

// 添加请求拦截器
// config包含当前请求的所有信息
service.interceptors.request.use((config) => {
    /* 2.显示请求进度条 */
    NProgress.start()
    // 必须返回config
    return config   // 后面就会根据返回的config,使用xhr对象发ajax请求
})

// 添加响应拦截器
service.interceptors.response.use(
    response => {   // 请求成功返回的回调
        NProgress.done()
        /* 3.结束请求进度条：在响应拦截器成功的回调中 */
        // return response
        // 通过链式调用的规则，使得下一步可以直接得到请求数据
        return response.data
    },
    error => {  // 请求失败返回的回调
        /* 3.结束请求进度条：在响应拦截器失败的回调中 */
        // 错误写法:  return error
        // throw error
        NProgress.done()
        /* 4.统一处理请求数据，具体请求也可以选择处理或不处理 */
        alert(error.message || '未知的请求错误!')
        return Promise.reject(error)
    }
)

// 伪代码
/* service.get('/xxx').then((response) => {
    // const result = response.data
}).catch(error => {
    // 做一些提示之外的特定工作
}) */

// 向外暴露 service
export default service