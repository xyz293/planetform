import {searchJob} from '../../../../api/job'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.scss'
const SearchJob = ({keyword}) => {
    const navigate = useNavigate()
    const [jobList,setJobList] = useState([])
    const getJob = async () => {
        const res = await searchJob({keyword})
        console.log(res)
        setJobList(res.data.data)
    }
    useEffect(()=>{
        getJob()
    },[])
  return (
  <div className="SearchJob">
    {jobList.map((item) => (
      <div className="job-card" key={item._id} onClick={()=>{
        navigate(`/detail/${item._id}`)
      }}>
        <div className="job-title">{item.title}</div>
        <div className="company-name">{item.companyName}</div>
        <div className="salary">{item.salary}</div>
        <div className="job-desc">职责：{item.description}</div>
        <div className="job-requirements">
          岗位要求：{item.requirements.skills}
        </div>
        <div className="job-benefits">福利待遇：{item.benefits}</div>
        <div className="job-location-type">
          <span>工作地点：{item.location}</span>
          <span>公司人数：{item.total}</span>
          <span>工作类型：{item.employmentType}</span>
          <span>工作时间：{item.worktime}</span>
        </div>
      </div>
    ))}
  </div>
)

}
export default SearchJob