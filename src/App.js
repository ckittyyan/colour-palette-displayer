import './App.css';
import {PhotoContainer} from "./components/PhotoContainer"
import { useState, useEffect } from 'react';
import localforage from "localforage";
import { Shuffler } from './components/Shuffler';
// code referenced from https://medium.com/@yahtzeemoomtaz/fetch-from-an-api-and-display-some-pictures-react-4de2a027eda7
// https://www.linkedin.com/learning/react-js-essential-training-14836121/
// https://www.linkedin.com/learning/react-js-building-an-interface-8551484/
// https://stackoverflow.com/questions/39019094/reactjs-get-json-object-data-from-an-url

function App() {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [colour, setColour] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        // code referenced from https://stackoverflow.com/a/1152054
        const randomColour = "#" + Math.floor(Math.random() * 16777216).toString(16).substring(-6);
        setColour(randomColour);
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
    <div className="app-container">
      <h1 className="title-header" style={{color: colour}}>Colour Palette Display</h1>
    <PhotoContainer photos={photos}></PhotoContainer>
    <Shuffler photos={photos} setPhotos={setPhotos}></Shuffler>
    </div>
  )

}

export default App;
