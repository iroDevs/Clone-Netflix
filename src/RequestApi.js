/* eslint-disable import/no-anonymous-default-export */
import Key from './Api';

const {API_KEY , API_URL} = Key

const config = 'language=pt-BR&api_key='
const movieRequest = '/movie/';
const tvRequest = '/tv/';

const URL = {
  originais:`/discover/tv?with_network=213&${config}${API_KEY}`,
  trending:`/trending/all/week?${config}${API_KEY}`,
  toprated: `/movie/top_rated?${config}${API_KEY}`,
  action: `/discover/movie?with_genres=28&${config}${API_KEY}`,
  comedy: `/discover/movie?with_genres=35&${config}${API_KEY}`,
  romance: `/discover/movie?with_genres=10749&${config}${API_KEY}`,
  horror: `/discover/movie?with_genres=27&${config}${API_KEY}`,
  documentary: `/discover/movie?with_genres=99&${config}${API_KEY}`,

}


async function getAPI(endpoint){
  const req = await fetch(`${API_URL}${endpoint}`);
  const response = await req.json();
  return response;
} 

async function getHomeList() {
  return [
    {
      slug:'originals',
      title:'Originais do Netflix',
      items: await getAPI(`${URL.originais}`)
    },
    {
      slug:'trending',
      title:'Recomendados para Você',
      items:await getAPI(`${URL.trending}`)
    },
    {
      slug:'toprated',
      title:'Em Alta',
      items:await getAPI(`${URL.toprated}`)
    },
     {
      slug:'action',
      title:'Ação',
      items:await getAPI(`${URL.action}`)
    },
    {
      slug:'comedy',
      title:'Comédia',
      items:await getAPI(`${URL.comedy}`)
    },
         {
      slug:'horror',
      title:'Terror',
      items:await getAPI(`${URL.horror}`)
    },
    {
      slug:'romance',
      title:'romance',
      items:await getAPI(`${URL.romance}`)
    },
    {
      slug:'documentary',
      title:'documentarios',
      items:await getAPI(`${URL.documentary}`)
    },
  ]
}
//as informações dos filmes estão incompletas nessa função vamos atras das infos que faltam
async function getInfoById(movieId,type) {
  let retorno = {};
  
  if(movieId){
    if (type === 'movie') {
      retorno = await getAPI(`${movieRequest}${movieId}?${config}${API_KEY}`)
      return retorno;
    } else {
      retorno = await getAPI(`${tvRequest}${movieId}?${config}${API_KEY}`)
      return retorno;
    }


  }
}

export default {
  getHomeList,
  getInfoById,
}