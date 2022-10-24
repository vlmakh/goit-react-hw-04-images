import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    return (
      <>
        <Searchbar />
        <button type="button" onClick={this.toggleModal}>
          Test Modal
        </button>
        <Loader />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://pixabay.com/get/gbd4cb7c91a7737840915cecce45e331ca0a504f7b6f8179ef6a29a3f2d10a44ca58839715caa232d6b95fc3c9cff247d790c6823f308ecf524c56281f4cc62b0_1280.jpg"
              alt="test"
            />
          </Modal>
        )}
      </>
    );
  }
}

export { App };
