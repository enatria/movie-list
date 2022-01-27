// import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {CardMovie, Loading, NavBar, Pagination} from './components'

function App() {
  const [movies, setMovies] = useState([])
  const [totalPage, setTotalPage] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [currentQuery, setcurrentQuery] = useState()
  const [error, setError] = useState(false)
  
  const searchMovies = (query, page = 1) => {
    setMovies([])
    setError(false)
    setCurrentPage(1)
    setTotalPage()
    axios.get(`https://omdbapi.com/?apiKey=a3fe6146&s=${query}&page=${page}&type=movie`)
      .then(res => {
        if (res.data.Response === "True") {
          setMovies(res.data.Search)
          setTotalPage(
            Math.ceil(Number(res.data.totalResults) / 10)
          )
          setCurrentPage(page)
          setcurrentQuery(query)
        } else {
          setError('movie data not found!')
          setMovies(['error'])
        }
      })
      .catch (err => setError(err))
  }

  console.log(movies)

  return (
    <div className="App" onScroll={(e) => console.log(e)}>
      <div className="container">
        <NavBar action={searchMovies} />
        <div className="row">
        {
          error === false ?
            movies?.map(movie => (
              <div key={movie.imdbID} className="col-6 col-md-3">
                <CardMovie movie={movie}/>
              </div>
            )) :
            <div className='d-flex justify-content-center' style={{width: '100%'}}>
              <p>{error}</p>
            </div>
        }
        </div>
        {movies.length > 0 && totalPage > 1 ?
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          action={searchMovies}
          query={currentQuery} /> : 
        error !== false || movies.length < 1 ? <Loading /> : null}
      </div>
    </div>
  );
}

export default App;
