import RequestApi from './RequestApi';
import {React , useEffect , useState} from 'react';

import './App.css';


function App() {
   
  const [list , setList] = useState([])

  async function getAllMovies(){
    let Movielist = await RequestApi.getHomeList()
    setList(Movielist);
    return 0;
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
