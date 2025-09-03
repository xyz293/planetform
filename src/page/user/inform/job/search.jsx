import './index.scss'
import {useNavigate} from 'react-router-dom'
const Search = ({ setIsSearch, setKeyword, searchlist}) => {
  const navigate = useNavigate()
  return (
    <div className="search-container">
      <div>
        <button
          className="back-button"
          onClick={() => {
            setIsSearch(true);
            setKeyword('');
          }}
        >
          ← 返回
        </button>
      </div>
      <div>
        {Array.isArray(searchlist) && searchlist.length > 0 ? (
          <div className="search-results">
            {searchlist.map((item, index) => (
              <div className="search-item" key={index} onClick={()=>{
                 navigate(`/list/${item.title}`)
              }}>
                <div className="title">{item.title}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-data">暂无数据</div>
        )}
      </div>
    </div>
  );
};

export default Search;
