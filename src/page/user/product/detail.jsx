import {useEffect} from 'react'
const Detail = () => {
   const userStr = localStorage.getItem('user')
    const use = JSON.parse(userStr)
    const token = use.state.token
    useEffect(()=>{
   if(!token){
    alert('请先登录')
   }
    },[token])
   return(
    <div>
      详情
    </div>
   )
}
export default Detail