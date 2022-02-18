
import {React} from 'react'
import './FeatureMovie.css'

export default function FeatureMovie({item}) {
  const Image= {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
  }
  let desc = item.overview;
//Alguns filmes e series não possuem desc então estou colocanod um texto manualmente
  if (desc === '') {
    desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus auctor lectus, ut vulputate nisi commodo eget. Etiam at neque nec ipsum elementum venenatis. In ut vulputate tortor, vitae gravida dolor. Nunc lacinia efficitur nunc, sit amet condimentum orci eleifend at. Quisque volutpat elit nulla, in tincidunt nibh hendrerit vel. Mauris accumsan, orci nec mollis blandit, sapien neque maximus ex, ac dapibus nisl augue ac magna. Praesent id ullamcorper lacus, vitae ornare dolor.'
  }
  
  let Year = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres) {
    genres.push(item.genres[i].name);
  }


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}  
console.log(item);
const radom = getRandomInt(50,98);
  return (
   <section className="featured" style={Image}>
     <div className="featured-vertical">
       <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
              <div className="featured-points">{radom}% relevante </div>
              <div className="featured-year"> ano {Year.getFullYear()}</div>
              <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
       </div>
       <div className='featured-desc'>{desc}</div>
       <div className='featured-buttons'>
        <a href='#' className='btn-play'>Assistir</a>
        <a href='#' className='btn-list'>+ Minha Lista</a>
       </div>
       <div className='featured-genres'>Generos: {genres.join(', ')}</div>
     </div>
     </div>
   </section>
  )
}