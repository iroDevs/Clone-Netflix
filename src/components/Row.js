import './Row.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import React from 'react'

export default function Row({title,items}) {
  const QtnFilms = items.results.length > 0
  const configUrl = 'https://image.tmdb.org/t/p/w300'
  return (
  <div className='Row'>
    <h2>{title}</h2>
    <div className='movieRow-left'>
    
    <NavigateBeforeIcon style={{fontSize: 50}} />
    </div>

    <div className='movieRow-right'>
    <NavigateNextIcon style={{fontSize: 50}} />
    </div>
    <div className="row-listarea">
      <div className="movieRow-list">
    {QtnFilms ? 
        items.results.map((item,index)=> {
          return(
           <div key={index} className="movieRow-item">
               <img src={`${configUrl}${item.poster_path}`} alt={item.original_title}></img>
           </div>
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