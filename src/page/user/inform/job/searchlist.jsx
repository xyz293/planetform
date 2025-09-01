import {Button} from 'antd'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import Company  from '../../inform/search/company' 
import SearchJob  from '../../inform/search/searchjob'
const SearchList = () => {
    const [index,setIndex] = useState(1) 
    const show=(index)=>{
        switch(index){
            case 1:
                return <SearchJob title={title} />
            case 2:
                return <Company title={title} />
            case 3:
                return <SearchContent />
        }
    }
    const params = useParams()
    const title = params.title
    useEffect(()=>{
    },[])
    return(
        <div>
           <div>
          <Button type='primary' onClick={()=>setIndex(1)}>岗位</Button>
          <Button type='primary' onClick={()=>setIndex(2)}>公司</Button>
          <Button type='primary' onClick={()=>setIndex(3)}>内容</Button>
        </div>
        <div>
            {title}
        </div>
          {show(index)}
        </div>
    )
}
export default SearchList