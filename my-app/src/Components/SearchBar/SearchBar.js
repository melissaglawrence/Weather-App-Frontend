import React from 'react';

export default function SearchBar() {
  return (
    <>
      <div>
        <input type="text" className="search-bar" />
        <button type="button" className="button search-bar__button">
          Search
        </button>
      </div>
    </>
  );
}
