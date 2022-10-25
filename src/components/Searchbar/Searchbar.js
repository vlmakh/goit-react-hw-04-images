import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onSearchInput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  startSearch = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return alert('Empty query. Please input something for search');
    }

    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form>
          <button
            type="submit"
            className={css.button}
            onClick={this.startSearch}
          >
            <span className={css.button__label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            value={this.state.searchQuery}
            onChange={this.onSearchInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
