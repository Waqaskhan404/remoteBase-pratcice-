import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Search from './components/Search';

function App() {
  const [movieList,setMovieList]=useState([])
  const [searchText,setSearchText]=useState("")
  

  const handleAddMovie = (movieName, rating, duration) => {
    setMovieList((movieList) => [    ...movieList,    {      name: movieName,rating,duration    },  ]);
  };
  
  let filteredMovies = movieList;

  if (searchText.length >= 2) {
    filteredMovies = movieList.filter((movie) =>
      movie.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
  }

  const sortedArray = filteredMovies.sort((a, b) => b.duration - a.duration);
  useEffect(() => {
    console.log(movieList);
    console.log(searchText)
  }, [movieList,searchText]);

  return (
    <div className="App">
      <h1>Practice On Data Passing</h1>
      <div className='Parent-Container'>
        <div className='movieForm'><MovieForm  onAddMovie={handleAddMovie}/></div>
        <div>
          <div><Search searchText={searchText} setSearchText={setSearchText}/></div>
          <div><MovieList movieList={sortedArray}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
