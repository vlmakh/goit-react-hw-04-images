import { Component } from 'react';
import Searchbar from 'components/Searchbar';
// import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';

const MAIN_URL =
  'https://pixabay.com/api/?key=29727763-9de4927242ac493db1fc7e125&image_type=photo&orientation=horizontal&safesearch=true';

export const perPage = 6;

class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
    showLoadMoreBtn: false,
    images: [],
    page: 1,
    query: "",
  };

  increasePageNum() {
    this.setState({ page: this.state.page + 1 });
  }

  resetPageNum() {
    this.setState({ page: 1 });
  }

  searchQuery = (newQuery) => {
    console.log(newQuery);
    if (newQuery !== this.state.query) {
    this.setState({ query: newQuery })
    this.resetPageNum();
      this.fetchImages(newQuery);
    }
  }

  fetchImages = async search => {
    
    return fetch(
      `${MAIN_URL}&q=${search}&page=${this.state.page}&per_page=${perPage}`
    )
      .then(response => response.json())
      .then(data => {
        this.increasePageNum();        
        // return data;
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      });
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />

        {this.state.images.length === 0 && <h1>Input what you want to find</h1>}

        <ImageGallery images={this.state.images} />

        {/* {this.state.showLoader && <Loader />} */}
        {this.state.images.length > 0 && <Button />}

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://pixabay.com/get/gbc39585f774c7ccc0266fdac3fc120a9461771b9e341619e91b05356e1677feb0943cce86d588a9d7f4d8cf22c3740cbf924d844a572803d2da69601bfb028d4_1280.jpg"
              alt="test"
            />
          </Modal>
        )}

        <button type="button" onClick={this.toggleModal}>
          Test Modal
        </button>
      </>
    );
  }
}

export { App };
