import React from 'react'

const MovieList=(props)=>{
    return (
        <>
       { props.movies.map((movie)=>{
              return <li key={movie}>{movie}</li>;
        })}
        </>
    )
}
export default MovieList;