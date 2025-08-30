import request from '../ulits/request'
export const showImg = () => {
    return request({
        url: '/img/list',
        method: 'get',
    })
}