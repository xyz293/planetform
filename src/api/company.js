import request from '../ulits/request'
export const getCompanyList = () => {
    return request({
        url: '/company/list',
        method: 'get'
    })
}
export const Companysearch = (title) => {
  console.log(title)
  return request({
    url:  `/company/search/${title}`,
    method: 'post',
  });
};