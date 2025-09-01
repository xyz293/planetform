import { useState, useEffect ,useRef} from 'react';
import { Input, Button } from 'antd';
import { getJobList,searchJob} from '../../../../api/job';
import {useNavigate} from 'react-router-dom'
import Search from './search'
import './index.scss';

const Job = ({setVari}) => {
    const [jobList, setJobList] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate()
   const [keyword,setKeyword] = useState('')
   const [searchlists,setSearchlists] = useState([])
   const [page,setPage] = useState(0)
   const search = async (keyword) => {
    const res = await searchJob({keyword});
     console.log(res)
     setSearchlists(res.data.data)
     
  }
   const showJobList = async () => {
    const res = await getJobList();
     console.log(res)
     setJobList(res.data.data)
  }
  const [isSearch,setIsSearch] = useState(true)
  useEffect(() => {
    showJobList()
  }, []);

  return (
   <div>
   <div>
     <Input
      placeholder="请输入岗位公司名称"
       onClick={()=>{
        setIsSearch(false)
       }}
       
    onChange={async (e)=>{
  const value = e.target.value;
  setKeyword(value);
  clearTimeout(inputRef.current);
  inputRef.current = setTimeout(() => {
    search(value);  // 用最新值
    console.log(value);
  }, 500);
}}
    />
   </div>
    {isSearch===true?<div>
         <div>
     {
        jobList.slice(page*10,page*10+10).map((item) => {
            return (
                <div key={item._id} onClick={()=>{
                  navigate(`/detail/${item._id}`)
                }}>
                    <div>{item.location}</div>
                    <div>{item.salary}</div>
                    <div>{item.description}</div>
                    <div>{item.employmentType}</div>
                    <div>{item.title}</div>
                </div>
            )
        })
     }
   </div>
   <div>
    <Button  type='primary' onClick={()=>{
        if(page>0){
            setPage(page-1)
        }
    }}>上一页</Button>
    <Button  type='primary' onClick={()=>{
        if(page<jobList.length/10-1){
            setPage(page+1)
        }
    }}>下一页</Button>
   </div>
        </div>
        :<Search setIsSearch={setIsSearch} setKeyword={setKeyword} searchlist={searchlists} setVari={setVari}/>
        }
   </div>
  )
};

export default Job;
