import {Outlet} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {Button} from 'antd'
import {useEffect} from 'react'
const Firstpage = () => {
    const navigate =useNavigate()
    useEffect(()=>{
       navigate('news')
    },[])
    return (
        <div>
            <div>
                <Button type='primary' onClick={()=>{
                   navigate('news')
                }}>
                    时事新闻
                </Button>
                <Button type='primary' onClick={()=>{
                    
                }}>
                   创新政策
                </Button>
                <Button type='primary' onClick={()=>{
                    navigate('job')
                }}>
                  岗位信息
                </Button>
            </div>
          <Outlet />
        </div>
    )
}
export default Firstpage