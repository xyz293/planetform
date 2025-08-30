import { searchProduct } from '../../../api/product';
import { useState, useEffect } from 'react';
import './show.scss';

const Search = ({ keyword }) => {
  const [searchlist, setSearchlist] = useState([]);

  const show = async (keyword) => {
    const res = await searchProduct(keyword);
    setSearchlist(res.data.data);
  };

  useEffect(() => {
    if (keyword) {
      show(keyword);
    } else {
      setSearchlist([]);
    }
  }, [keyword]);

  return (
    <div className="search">
      {searchlist.map((item) => (
        <div className="product" key={item._id}>
          <span>{item.category}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Search;
