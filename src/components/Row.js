import React from 'react'
import './Row.css'
export default function Row({title,items}) {
  const QtnFilms = items.results.length > 0
  const configUrl = 'https://image.tmdb.org/t/p/w300'
  return (
  <div>
    <h2>{title}</h2>
    <div className="row--listarea">
      <div className="movieRow-list">
    {QtnFilms ? 
        items.results.map((item,index)=> {
          return(
            <img src={`${configUrl}${item.poster_path}`} alt={item.original_title}></img>
          )
        })
        :
        undefined
      }

      </div>
   
    </div>
  </div>
  )
}