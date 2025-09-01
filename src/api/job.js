import request from '../ulits/request'
export const getJobList = () => {
    return request({
        url: '/job/list',
        method: 'get',
    })
}
export const searchJob = ({keyword}) => {
    return request({
        url: '/job/search',
        method: 'post',
        data: {
            keyword: keyword
        }
    })
}
export const getJobDetail = (_id) => {
  return request({
    url: `/job/detail/${_id}`,
    method: 'get'
  });
};