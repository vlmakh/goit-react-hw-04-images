import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import { fetchImages } from 'services/api';

class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
    showStartTitle: true,
    images: [],
    page: 1,
    query: '',
    totalFound: 0,
  };

  searchQuery = async newQuery => {  
    // if (newQuery.trim() === '') {return alert('Empty search');}

    if (newQuery.trim() !== this.state.query) {
      this.setState({ showLoader: true, page: 1 });

      const data = await fetchImages(newQuery.trim(), 1);

      if (!data.hits.length) {
        alert('No images found due to your search inquiry');
        this.setState({
          showLoader: false,
        });
      } else {
        this.setState({
          query: newQuery.trim(),
          showStartTitle: false,
          images: [...data.hits],
          totalFound: data.totalHits,
          showLoader: false,
          page: this.state.page + 1,
        });
      }
    }
  };

  // componentDidUpdate(_, prevState) {
  //   if (prevState.page !== this.state.page || prevState.query !== this.state.query) {



  //   }
  // }

  loadMore = async () => {
    this.setState({ showLoader: true });

    const data = await fetchImages(this.state.query, this.state.page);

    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
      showLoader: false,
      page: this.state.page + 1,
    }));
  };

  render() {
    const { showStartTitle, showLoader, images, totalFound } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />

        {showStartTitle && <h1>Input what you want to find</h1>}

        <ImageGallery images={images} />

        {showLoader && <Loader />}
        {images.length > 0 && images.length < totalFound && (
          <Button loadMore={this.loadMore} />
        )}
      </>
    );
  }
}

export { App };
