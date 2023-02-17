import React from 'react'
import '../App.css';

function MovieList(props) {
  const list = props.movieList
  return (
    <>
      <ul>
        {
          list.map((data,index) => {
            return (
              <li className='Parent-List'>
                <div><h3>{data.name}</h3></div>
                <div><h3>{data.rating}</h3></div>
                <div><h3>{data.duration}</h3></div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default MovieList