import React, { useEffect, useState } from 'react'
import '../App';


function MovieForm(props) {
  const [error, setError] = useState(false);
    const [inputValue,setInputValue]=useState({
        movieName:"",
        rating:"",
        duration:""
    })

    const checkDetails = (e) => {
        e.preventDefault();
        if (inputValue.movieName === "" ||inputValue.rating === "" || inputValue.duration === "") {
          return;
        }
        const t = inputValue.duration.slice(-1);
        if (t === "m" || t === "h") {
          const tValue = Number(inputValue.duration.slice(0, inputValue.duration.length - 1));
          setError(false);
          if (t === "m") {
            const tInMinutes = tValue / 60;
            const tInHours = (Math.round(tInMinutes * 10) / 10).toFixed(1);
            props.onAddMovie(inputValue.movieName, Number(inputValue.rating), tInHours);
          } else {
            props.onAddMovie(inputValue.movieName, Number(inputValue.rating), tValue);
          }
        } else {
            setInputValue({
                movieName:"",
                rating:"",
                duration:""
            });
          setError(true);
        }
      };
    
      useEffect(() => {
        if (inputValue.movieName !== "" || inputValue.rating !== "" || inputValue.duration !== "") setError(false);
      }, [inputValue.movieName, inputValue.rating,inputValue.duration]);


    const onHandleInput=(e)=>{
        e.preventDefault();
        setInputValue({
            ...inputValue, 
            [e.target.name]: e.target.value
          });
          console.log(inputValue)

    }
  return (
    <>
    <h3>MovieForm</h3>
    <div>
        <div>
            <form onSubmit={checkDetails}>
            <div  className='space-x '><input value={inputValue.movieName} onChange={onHandleInput} name="movieName" type="text" placeholder="Enter Movie Name"/></div>
            <div className='space-x'><input name="rating" type="number" value={inputValue.rating} onChange={onHandleInput} placeholder="Enter Rating"/></div>
            <div className='space-x'><input name="duration" type="text" value={inputValue.duration} onChange={onHandleInput} placeholder="Enter Duration"/></div>
            {error && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
            <div className='space-x'><button type='submit' className='btn'>Add Movie</button></div>
            </form>
        </div>
    </div>
    </>
  )
}

export default MovieForm