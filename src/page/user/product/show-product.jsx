import {getProductList} from '../../../api/product'
import {useState,useEffect} from 'react'
import {Button,Input,Modal} from 'antd'
import Search from './search'
import './show.scss'
const ShowProduct = () => {
    
      const [product,setProduct] = useState([])
      const [page,setpage] =useState(0)
      const [keyword,setKeyword]=useState('')
      const [open,setOpen]=useState(false)
        const showproduct = async () => {
          const res = await getProductList()
          console.log(res)
          setProduct(res.data.data)
        }
        useEffect(()=>{
          showproduct()
        },[])
    return (
  <div className='container'>
    {/* 搜索栏 */}
    <div className="search-bar">
      <Input placeholder='请输入商品名称' value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
      <Button type="primary" onClick={()=>{
        setOpen(true)
      }}>搜索</Button>
    </div>
    <Modal
    title='搜索结果'
    open={open}
    onCancel={()=>{
      setOpen(false)
      setKeyword('')
    }}
    footer={null}
    >
      <Search keyword={keyword} />
    </Modal>

    {/* 商品网格 */}
    <div className="product-grid">
      {product.slice(page * 8, (page + 1) * 8).map((item) => (
        <div key={item._id} className="product-card">
          <img src={item.image} alt={item.name} className="imgshow" />
          <h2>{item.name}</h2>
          <p>{item.category}</p>
          <p className="price">￥{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>

    {/* 分页 */}
    <div className="pagination">
      <Button
        onClick={() => page > 0 && setpage(page - 1)}
        disabled={page === 0}
      >
        上一页
      </Button>
      <Button
        onClick={() =>
          page < Math.ceil(product.length / 8) - 1 && setpage(page + 1)
        }
        disabled={page >= Math.ceil(product.length / 8) - 1}
      >
        下一页
      </Button>
    </div>
  </div>
)
}
export default ShowProduct