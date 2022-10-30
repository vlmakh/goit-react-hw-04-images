import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Searchbar.module.css';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onSearchInput = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return alert('Empty query. Please input something for search');
    }

    onSubmit(query);
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchForm__button}>
          <span className={css.searchForm__buttonlabel}></span>
        </button>

        <input
          className={css.searchForm__input}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={onSearchInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
