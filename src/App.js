// import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {CardMovie, NavBar, Pagination} from './components'

function App() {
  const [movies, setMovies] = useState([])
  const [totalPage, setTotalPage] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [currentQuery, setcurrentQuery] = useState()
  
  const searchMovies = (query, page = 1) => {
    axios.get(`https://omdbapi.com/?apiKey=a3fe6146&s=${query}&page=${page}`)
      .then(res => {
        setMovies(res.data.Search)
        setTotalPage(
          Math.ceil(Number(res.data.totalResults) / 10)
        )
        setCurrentPage(page)
        setcurrentQuery(query)
      })
  }

  console.log(movies)

  return (
    <div className="App" onScroll={(e) => console.log(e)}>
      {/* <h1>Moviee</h1> */}
      <NavBar action={searchMovies} />
      <CardMovie/>
      {movies.length > 0 && totalPage > 1 ?
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        action={searchMovies}
        query={currentQuery} /> : null}
    </div>
  );
}

export default App;
