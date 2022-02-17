import RequestApi from './RequestApi';
import {React , useEffect} from 'react';

import './App.css';


function App() {
   
  async function getAllMovies(){
    let list = await RequestApi.getHomeList()
    console.log(list);
  }

  useEffect(()=>{
    getAllMovies();

  },[])


  return (
    <div >
 eee
    </div>
  );
}

export default App;
