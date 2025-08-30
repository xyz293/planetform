import { getNewList } from '../../../../api/new'
import { useState, useEffect } from 'react'
import '../inform.scss'
import { Button } from 'antd'

const New = ({ setShownew, setNewtitle }) => {
  const [newList, setNewList] = useState([])
  const [page, setPage] = useState(0)

  const getNew = async () => {
    try {
      const res = await getNewList()
      console.log(res)
      setNewList(res.data.data)
    } catch (error) {
      console.error("Error fetching news:", error)
    }
  }

  useEffect(() => {
    getNew()
  }, [])

  return (
    <div className='container'>
      {/* 退出按钮 */}
      {newList.slice(page * 5, (page + 1) * 5).map((item) => {
        const formattedDate = new Date(item.createdAt).toLocaleDateString()  // 格式化日期
        return (
          <div key={item._id} onClick={() => {
            setShownew(true)
            setNewtitle(item.title)
          }} className='news-item'>
            <h1>{item.title}</h1>
            <img className='imgshow' src={item.cover} alt={item.title} />
            <p>类别：{item.category}</p>
            <p>内容：{item.excerpt}</p>
            <span>作者：{item.author}</span>
            <span>点击量：{item.views}</span>
            <p>简介：{item.jieshao}</p>
            <p>发布时间：{formattedDate}</p>
          </div>
        )
      })}
      
      {/* 分页按钮 */}
      <div className='pagination'>
        <Button type='primary' onClick={() => {
          if (page > 0) setPage(page - 1)
        }} className='pagination-btn'>
          上一页
        </Button>
        <Button type='primary' onClick={() => {
          if (page < newList.length / 5 - 1) setPage(page + 1)
        }} className='pagination-btn'>
          下一页
        </Button>
      </div>
    </div>
  )
}

export default New
