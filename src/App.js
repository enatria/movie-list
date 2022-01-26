// import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {CardMovie, NavBar} from './components'

function App() {
  const [movies, setMovies] = useState([])
  
  const searchHotel = (query) => {
    axios.get(`https://omdbapi.com/?apiKey=a3fe6146&s=${query}&page=2`)
      .then(res => {
        setMovies(res.data.Search)
      })
  }

  console.log(movies)

  return (
    <div className="App" onScroll={(e) => console.log(e)}>
      {/* <h1>Moviee</h1> */}
      <NavBar action={searchHotel} />
      <CardMovie/>
    </div>
  );
}

export default App;
