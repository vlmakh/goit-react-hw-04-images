import { Component } from 'react';  
import { Searchbar } from './Searchbar/Searchbar';

class App extends Component {
  state = {
      
  }
  
  render() {return (
    // <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal></Modal>
    <Searchbar />
  );}
  
};

export { App };