import RequestApi from './RequestApi';
import {React , useEffect , useState} from 'react';
import Row from './components/Row'
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
      <section className="lists">
          {
            list.map((item,index) => {
              return (
                <Row key={index} title={item.title} items={item.items} />
              )
            })
          }
      </section>
    </div>
  );
}

export default App;
