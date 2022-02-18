import RequestApi from './RequestApi';
import {React , useEffect , useState} from 'react';
import Row from './components/Row'
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import './App.css';


function App() {
   
  const [list , setList] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader , setBlackHeader] = useState(false)
 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

  async function getDestaque(Movies){
    let originais = Movies.filter((item) =>item.slug === 'originals');
    let listOriginais = originais[0].items.results
    const min = 1;
    const max = listOriginais.length - 1;
   const radom = getRandomInt(min,max)
    const chosen = listOriginais[radom]
    const destaque = await RequestApi.getInfoById(chosen.id,'tv');
   setFeatureData(destaque);
   
  }

  async function getAllMovies(){
    let Movielist = await RequestApi.getHomeList()
    setList(Movielist);
//vamos pegar um pra colocar em destaque feature Data
  await getDestaque(Movielist)
    return 0;
  }

  useEffect( ()=>{
    getAllMovies();

  },[]);

function scrollEvent() {
  if (window.scrollY > 10) {
    setBlackHeader(true);
  }else {
    setBlackHeader(false);
  }
}
   useEffect( ()=>{
  window.addEventListener('scroll',scrollEvent)

  return () => {
    window.removeEventListener('scroll',scrollEvent);
  }
  },[]);


  return (
    <div >

    <Header black={blackHeader} />
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
