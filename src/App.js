import './App.css';
import {PhotoContainer} from "./PhotoContainer"
import { useState, useEffect, Component } from 'react';

// code referenced from https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7
// https://www.linkedin.com/learning/react-js-essential-training-14836121/
// https://www.linkedin.com/learning/react-js-building-an-interface-8551484/
// https://stackoverflow.com/questions/39019094/reactjs-get-json-object-data-from-an-url

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

componentDidMount() {
  fetch("http://jsonplaceholder.typicode.com/photos?albumId=1")
  .then(response => {
    //console.log("response", response);
    if (!response.ok) {
      throw Error("error grabbing images");
    }
    return response.json()
    .then(allData => {
      this.setState( { photos: allData });
    })
    .catch(err => {
      throw Error(err.message);
    });
  })
}

render() {
  const {photos} = this.state;
  return (
    // <div className="photo-container">
    <div>
      {/* {photos.map(photo=> (
        <div key={photo.id} className="photo-item">
          <img src={photo.url} alt={photo.title} />
          <div className="photo-title">{photo.title} </div>
          </div>
      ))} */}
      
      
      <PhotoContainer photos={this.state.photos} />
      
    </div>
  );
}
}

export default App;
