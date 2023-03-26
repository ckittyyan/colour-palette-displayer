import './App.css';
import {PhotoContainer} from "./PhotoContainer"
import { useState, useEffect, Component } from 'react';
import localforage from "localforage";
// code referenced from https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7
// https://www.linkedin.com/learning/react-js-essential-training-14836121/
// https://www.linkedin.com/learning/react-js-building-an-interface-8551484/
// https://stackoverflow.com/questions/39019094/reactjs-get-json-object-data-from-an-url

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       photos: [],
//       loading: true,
//       hasError: false
//     };
//   }

// componentDidMount() {
//   fetch("http://jsonplaceholder.typicode.com/photos?albumId=1")
//   .then(response => {
//     //console.log("response", response);
//     if (!response.ok) {
//       this.setState( {hasError: true})
//       throw new Error("There was an error grabbing images");
//     }
//     return response.json()
//     .then(allData => {
//       this.setState( { photos: allData,
//       loading: false });
//     })
//     .catch((err) => {
//       this.setState( {hasError: true})
//       throw new Error(err.message);
//     });
//   })
// }

// render() {
//   const {loading, hasError} = this.state;
//   if (hasError) {
//     return <p>Uh oh... an error has occurred! </p>
//   }
//   return (
//     <div>
//     { loading ? (
//       <div> Loading images... </div>
//     ) : (
    
//       <PhotoContainer photos={this.state.photos} />
      
    
//   )}
//   </div>
//   );
// }
// }

function App() {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        const urlToFetch = "http://jsonplaceholder.typicode.com/photos?albumId=1";
        const photoCache = await localforage.getItem(urlToFetch);
      
        if (photoCache) {
          console.log("here");
          setPhotos(photoCache);
          console.log(photoCache);
          setLoading(false);
        } else {
          // if photoCache is empty
          console.log("ghere");
          const response = await fetch(urlToFetch);
          const photos = await response.json();
          await localforage.setItem(urlToFetch, photos);
          setPhotos(photos);
          setLoading(false);

        //   fetch(urlToFetch)
        // .then((response) => response.json())
        // .then((data) => {
        //   localforage.setItem(urlToFetch, data);
        //   setPhotos(data);
        // })
        // .then(() => setLoading(false))
        // .catch(setError);
        }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }

    }
    getPhotos();
  }, []);
    

  if (loading) return <h1>Loading images...</h1>
  if (error) return <div>Uh Oh... an error occurred: {error.message}</div>
  if (!photos) return null;

  return (
    <PhotoContainer photos={photos}/>
  )

}

export default App;
