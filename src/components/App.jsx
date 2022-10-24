import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {};

  render() {
    // <ImageGalleryItem>, <Loader>, <Button> и <Modal></Modal>
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}

export { App };
