import css from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <header className={css.searchbar}>
      <form>
        <button type="submit" className={css.button}>
          <span className={css.button__label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
