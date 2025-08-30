import request from '../ulits/request'
export const getProductList = () => {
    return request({
        url: '/product/list',
        method: 'get',
    })
}
export const searchProduct = (keyword) => {
    return request({
        url: '/product/search',
        method: 'post',
        data: {
            keyword
        }
    })
}
