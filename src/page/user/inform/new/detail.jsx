import { getNewDetail, Newview } from '../../../../api/new'
import { useEffect, useState } from 'react'
import '../inform.scss'
import { Spin, Button } from 'antd'

const NewDetail = ({ title, setShownew }) => {
  const [newDetail, setNewDetail] = useState({})
  const [comment, setComment] = useState([])
  const [isshow, setIsshow] = useState(false)

  const shownew = async () => {
    try {
      const res = await getNewDetail({ title })
      setNewDetail(res.data.data)
      setComment(res.data.data.comments)
      console.log(res)
    } catch (error) {
      console.error("Error fetching news details:", error)
    }
  }

  const addview = async () => {
    try {
      await Newview({ title })
    } catch (error) {
      console.error("Error adding view:", error)
    }
  }

  useEffect(() => {
    addview()
    shownew()
  }, [title])  // 依赖项改为 title

  const formattedDate = new Date(newDetail.createdAt).toLocaleDateString()  // 格式化日期

  return (
    <div className="news-detail-container">
      {/* 退出按钮 */}
      <button className="back-button" onClick={() => setShownew(false)}>← 返回</button>
      
      {/* 新闻详情 */}
      <div className="news-detail">
        <h1>{newDetail.title}</h1>
        <div className="meta-info">
          <span>点击数目：{newDetail.views}</span>
          <span>发布时间：{formattedDate}</span>
        </div>
        <div className="author-category">
          <span>作者：{newDetail.author}</span>
          <span>分类：{newDetail.category}</span>
        </div>
        <img 
          src={newDetail.cover || 'default_image_url'}  // 加载默认图片
          alt={newDetail.title} 
          className="imgshow" 
          onError={(e) => e.target.src = 'default_image_url'} // 图片加载失败时设置默认图片
        />
        <p>{newDetail.content}</p>
      </div>
      
      {/* 分割线 */}
      <hr />

      {/* 评论部分 */}
      <div className="comments-section">
        <h2>评论</h2>
        {comment.map((item, index) => (
          <div key={index + 1} className="comment-item">
            <p><strong>评论人：</strong>{item.user}</p>
            <p>{item.content}</p>
            <span>点赞：{item.likes}</span>
            <Button onClick={() => setIsshow(!isshow)} className="reply-btn">回复：{item.replyCount}</Button>
            <p>发布时间：{item.createdAt}</p>

            {/* 回复部分 */}
            <div className="reply-section">
              {isshow && item.replies.map((reply, index) => (
                <div key={index + 1} className="reply-item">
                  <p><strong>回复人：</strong>{reply.user}</p>
                  <p>{reply.content}</p>
                  <span>点赞：{reply.likes}</span>
                  <p>发布时间：{reply.createdAt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewDetail
