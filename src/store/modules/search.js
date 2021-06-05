/* 
管理搜索模块的数据
*/
import { reqSearch } from '@/api'

const state = {
    productList: {}, // 搜索出的商品列表相关数据的对象 ,数据类型根据文档返回data数据的结构
}
const mutations = {
    /* 
    接收保存商品列表相关数据对象
    */
    RECEIVE_PRODUCT_LIST(state, productList) {
        state.productList = productList
    }
}
const actions = {

    /* 
    根据指定的搜索条件, 异步获取商品列表的action
    */
    async getProductList({ commit }, searchParams) {
        // 因为不想删除search组件中的options中的属性，所以用浅拷贝
        searchParams = { ...searchParams }
        // 删除searchParams空串或数组属性
        // 浏览器会在传json数据时将undefined的数据干掉
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)) {
                delete searchParams[key]
            }
        })

        // 1. ajax请求, 获取数据
        const result = await reqSearch(searchParams)
        // 2. 如果成功, 提交给mutation
        if (result.code === 200) {
            // const productList = result.data
            commit('RECEIVE_PRODUCT_LIST', result.data)
        }
    }
}
const getters = {
    /* 商品分页列表 */
    goodsList(state) {  // 此处的state为当前模块的state
        return state.productList.goodsList || []
    },
    /* 品牌列表 */
    trademarkList(state) {  // 此处的state为当前模块的state
        return state.productList.trademarkList || []
    },
    /* 属性列表 */
    attrsList(state) {  // 此处的state为当前模块的state
        return state.productList.attrsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}