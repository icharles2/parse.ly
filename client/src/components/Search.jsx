import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { query, onSearchClick, onChange } = this.props;
  return (
    <div className="search-bar">
      <input className="form-control" type="text" value={query} onChange={onChange} />
      <button type="button" className="btn search" onClick={onSearchClick}>
        {/* OnClick/onSearch function needed */}
      </button>
      <button type="button" className="btn happy">
        {/* Happy Emoji button */}
      </button>
      <button type="button" className="btn sad">
        {/* Sad or Crying Emoji button */}
      </button>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
