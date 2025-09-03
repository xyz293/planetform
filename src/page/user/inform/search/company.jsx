import {Companysearch} from '../../../../api/company'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
const Company = ({keyword}) => {
    const [companyList,setCompanyList] = useState([])
    console.log(keyword)
    const getCompany = async () => {

        const res = await Companysearch(keyword)
        console.log(res)
        setCompanyList(res.data.data)
    }
    useEffect(()=>{
        getCompany()
    },[])
    
    return (
        <div>
           {
            companyList.map((item) => (
                <div key={item._id} className='companyinfo'>
                  <div>
                    <img src={item.companyAvatar} alt={item.name} className='imgshow' />
                    <p> 公司名称：{item.companyTitle}</p>
                  </div>
                  <div>

                    <p>公司简介： {item.companyDescription}</p>
                  </div>
                  <div>
                <p>官方网站： <a href={item.companyWebsite}>{item.companyWebsite}</a></p>
                <p>公司邮箱：{item.companyEmail}</p>
                <p>公司电话：{item.companyPhone}</p>
                <p>公司地址：{item.companyLocation}</p>
                  </div>
                  <div>
                    {item.jobs.slice(0,4).map((job,index) => (
                       <div key={index+1}>
                          <p>岗位名称：{job.jobTitle}</p>
                        </div>
                    ))}
                    <Link>
                      查看更多
                    </Link>
                  </div>
                </div>
            ))
           }
        </div>
    )
}
export default Company