import './Row.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import {React , useState} from 'react'

export default function Row({title,items}) {
  const QtnFilms = items.results.length > 0
  const  quantidade = items.results.length
  const configUrl = 'https://image.tmdb.org/t/p/w300'
  const [scrollX , setScrollX] = useState(-400)
  const movieArrow = {
    marginLeft: scrollX,
    width: quantidade * 150

  };
  
 function handleLeftArrow(){
  let x = scrollX + Math.round(window.innerWidth / 2);

  if (x > 0) {
    x = 0;
  }
  setScrollX(x)
 }

  function handleRigthArrow(){
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = quantidade * 150
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x)
 }

  return (
  <div className='Row' >
    <h2>{title}</h2>
    <div className='movieRow-left' onClick={handleLeftArrow}>
    
    <NavigateBeforeIcon style={{fontSize: 50}} />
    </div>

    <div className='movieRow-right' onClick={handleRigthArrow} >
    <NavigateNextIcon style={{fontSize: 50}} />
    </div>
    <div className="row-listarea">
      <div className="movieRow-list" style={movieArrow} >
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