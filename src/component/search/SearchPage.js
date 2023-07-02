import React, { useEffect, useState } from "react";

const SearchPage = props => {
  const [searchValue, setSearch] = useState("");
  useEffect(
    () => {
      props.onSearch(searchValue);
    },
    [searchValue, props]
  );
  return (
    <div>
      <form className="d-flex m-3 ">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchPage;
