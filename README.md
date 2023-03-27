# Colour Palette Display

[Demo](https://ckittyyan.github.io/colourPaletteDisplayer/)

# Overview

Colour Palette Display is a simple web application that accomplishes the following:
- fetches JSON data from http://jsonplaceholder.typicode.com/photos
- a horizontal scrollable list of photos from fetched data with
    - title of each photo is written diagonally across the photo
    - each photo is displayed with rounded corners, a border and a subtle drop shadow
- fetched data is stored onto a cache 
    - cached with localForage
- a "Shuffle" Button that reorders the list of photos recursively
- a changing title colour (when the page refreshes)

# Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Run locally with
> `npm start`

to run the app in the development mode - opens [http://localhost:3000](http://localhost:3000) in browser.

