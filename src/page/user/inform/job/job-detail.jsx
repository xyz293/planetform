import {getJobDetail } from '../../../../api/job'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
const SearchDetail = () => {
    const [jobDetail,setJobDetail] = useState({})
    const params = useParams()
    const _id = params.id
    const showDetail = async () => {
        const res = await getJobDetail(_id)
        console.log(res)
    }
    useEffect(() => {
       console.log(_id)
       showDetail()
    }, [])
    return (
        <div>
            nihao
        </div>
    )
}
export default SearchDetail
