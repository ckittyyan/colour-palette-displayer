import './App.css';
import { useState, useEffect, Component } from 'react';

// code referenced from https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

componentDidMount() {
  fetch("http://jsonplaceholder.typicode.com/photos")
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
  return (
    <section className="app">
      <p>Is this working</p>
    </section>
  );
}
}

export default App;
