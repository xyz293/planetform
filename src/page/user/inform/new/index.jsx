import New from './new'
import NewDetail from './detail'
import {useState} from 'react'
const Mainnew = () => {
    const [shownew,setShownew] = useState(false)
    const [title,setTitle] = useState('')
  return (
    <div>
     {shownew===false?<New setShownew={setShownew} setNewtitle={setTitle}/>:<NewDetail title={title} setShownew={setShownew}/>}
    </div>
  )
}
export default Mainnew
