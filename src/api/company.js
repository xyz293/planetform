import request from '../ulits/request'
export const getCompanyList = () => {
    return request({
        url: '/company/list',
        method: 'get'
    })
}
export const Companysearch = ({title}) => {
  return request({
    url:  '/company/search',
    method: 'post',
    data: {
        title: title
    }
  });
};