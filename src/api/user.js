import request from '../ulits/request'
export const register = (user) => {
    return request({
        url: '/user/register',
        method: 'post',
        data:user
    })
}
export const login = (user) => {
    return request({
        url: '/user/login',
        method: 'post',
        data:user
    })
}
export const getUserInfo = ({name}) => {
    return request({
        url: '/user/info',
        method: 'post',
        data:{
            name:name
        }
    })
}