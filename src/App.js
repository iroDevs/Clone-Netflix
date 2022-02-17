import RequestApi from './RequestApi';
import {React , useEffect , useState} from 'react';
import Row from './components/Row'
import FeatureMovie from './components/FeatureMovie';
import './App.css';


function App() {
   
  const [list , setList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  async function getAllMovies(){
    let Movielist = await RequestApi.getHomeList()
    setList(Movielist);

    //vamos pegar um pra colocar em destaque feature Data
    return 0;
  }

  useEffect(()=>{
    getAllMovies();

  },[])


  return (
    <div >

      {
        featureData ? 
        <FeatureMovie item={featureData} />
        :
        undefined
      }

      
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
