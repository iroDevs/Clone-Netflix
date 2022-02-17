import Key from './Api';

const {API_KEY , API_URL} = Key


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
      items:[]
    },
    {
      slug:'trending',
      title:'Recomendados para Você',
      items:[]
    },
    {
      slug:'toprated',
      title:'Em Alta',
      items:[]
    },
     {
      slug:'action',
      title:'Ação',
      items:[]
    },
    {
      slug:'comedy',
      title:'Comédia',
      items:[]
    },
         {
      slug:'horror',
      title:'Terror',
      items:[]
    },
    {
      slug:'romance',
      title:'romance',
      items:[]
    },
    {
      slug:'documentary',
      title:'documentarios',
      items:[]
    },
  ]
}



export default {
  getHomeList,
}