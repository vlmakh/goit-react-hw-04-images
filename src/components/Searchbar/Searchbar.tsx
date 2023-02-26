import { SetStateAction, useState } from 'react';
import css from './Searchbar.module.css';
import { OnSumbitType } from 'components/types';

export default function Searchbar({ onSubmit }: OnSumbitType) {
  const [query, setQuery] = useState('');

  const onSearchInput = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (query.trim() === '') {
      return alert('Empty query. Please input something to search');
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
