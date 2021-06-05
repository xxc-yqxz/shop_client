/*
    包含应用的所有接口的接口请求函数
    函数内部调用ajax函数发送请求
    函数返回的是Promise对象
*/
// import 'ajax'    -->此种代表引入第三方模块，会从node_modules中寻找
import ajax from './ajax'
import mockAjax from './mockAjax'

/* 首页三级分类
    /api/product/getBaseCategoryList
   请求方式:get
*/
export function reqCategoryList() {
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/product/getBaseCategoryList')  // 发送不带参数的get请求
    return ajax({
        url: '/product/getBaseCategoryList',
        // method: 'get' // 默认就是get,所以可以省略此行
    })
}

/*
获取首页广告轮播列表
/api/cms/banner GET
*/
export const reqBannerList = () => ajax('/cms/banner')

/*
mock接口函数
*/
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')

// reqRecommends().then(result => {
//     console.log('xxc-', result)
// })

/* 
搜索分页列表
/api/list  POST
*/
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)