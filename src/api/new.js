import request from '../ulits/request'
export const getNewList = () => {
    return request({
        url: '/news/list',
        method: 'get',
    })
}
export const getNewDetail = ({title}) => {
    return request({
        url: '/news/detail',
        method: 'post',
        data: {
            title:title
        }
    })
}
export const Newview = ({title}) => {
    return request({
        url: '/news/update',
        method: 'post',
        data: {
            title:title
        }
    })
}
