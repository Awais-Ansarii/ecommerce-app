import "./Search.scss";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import productImg from "../../assets/products/earbuds-prod-2.webp";
const Search = ({setShowSearch}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  if (!query.length) {
    // data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for Rings"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see Rings you are looking for.
        </div>

        <div className="search-results">
          <div className="search-result-item" onClick={() => {}}>
            <div className="image-container">
              <img src={productImg} alt="product-img" />
            </div>
            <div className="prod-details">
              <span className="name">product name</span>
              <span className="desc">product description</span>
            </div>
          </div>
              </div>
              
              
      </div>
    </div>
  );
};

export default Search;
