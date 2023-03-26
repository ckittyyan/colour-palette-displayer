import './App.css';
import {PhotoContainer} from "./PhotoContainer"
import { Component } from 'react';

// code referenced from https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7
// https://www.linkedin.com/learning/react-js-essential-training-14836121/
// https://www.linkedin.com/learning/react-js-building-an-interface-8551484/
// https://stackoverflow.com/questions/39019094/reactjs-get-json-object-data-from-an-url

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      hasError: false
    };
  }

componentDidMount() {
  fetch("http://jsonplaceholder.typicode.com/photos?albumId=1")
  .then(response => {
    //console.log("response", response);
    if (!response.ok) {
      this.setState( {hasError: true})
      throw new Error("There was an error grabbing images");
    }
    return response.json()
    .then(allData => {
      this.setState( { photos: allData,
      loading: false });
    })
    .catch((err) => {
      this.setState( {hasError: true})
      throw new Error(err.message);
    });
  })
}

render() {
  const {loading, hasError} = this.state;
  if (hasError) {
    return <p>Uh oh... an error has occurred! </p>
  }
  return (
    <div>
    { loading ? (
      <div> Loading images... </div>
    ) : (
    
      <PhotoContainer photos={this.state.photos} />
      
    
  )}
  </div>
  );
}
}

export default App;
