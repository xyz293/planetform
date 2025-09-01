import {getCompanyList} from '../../../../api/company'
import {useState,useEffect} from 'react'
const Company = ({title}) => {
    const [companyList,setCompanyList] = useState([])
    const getCompany = async () => {
        const res = await getCompanyList()
        console.log(res)
    }
    useEffect(()=>{
        getCompany()
    },[])
    
    return (
        <div>
            公司{title}
        </div>
    )
}
export default Company