import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

const MAIN_URL =
  'https://pixabay.com/api/?key=29727763-9de4927242ac493db1fc7e125&image_type=photo&orientation=horizontal&safesearch=true';

export const perPage = 6;

class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
    showStartTitle: true,
    images: [],
    page: 1,
    query: '',
  };

  increasePageNum() {
    this.setState({ page: this.state.page + 1 });
  }

  searchQuery = async newQuery => {
    if (newQuery.trim() !== this.state.query) {
      await this.setState({
        query: newQuery.trim(),
        page: 1,
        images: [],
        showStartTitle: false,
      });

      this.fetchImages(this.state.query);
      this.increasePageNum();
    }
  };

  loadMore = () => {
    this.fetchImages(this.state.query);
    this.increasePageNum();
  };

  fetchImages = async search => {
    this.setState({ showLoader: true });

    return fetch(
      `${MAIN_URL}&q=${search}&page=${this.state.page}&per_page=${perPage}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.hits.length === 0) {
          alert('No images due to your search inquiry');
        }
        // return data;
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          showLoader: false,
        }));
      });
  };

  render() {
    const { showStartTitle, showLoader, images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />

        {showStartTitle && <h1>Input what you want to find</h1>}

        <ImageGallery images={images} />

        {showLoader && <Loader />}
        {images.length > 0 && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

export { App };
