import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MortyList from './components/MortyList';
import SearchBox from './components/SearchBox';

function App() {

  const [ ubication, setUbication ] = useState({})

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setUbication(res.data))
  }, [])

  console.log(ubication)
  return (




    <div className="App">
    
    <div className='header'>
      <SearchBox setUbication={setUbication} />
    </div>

      <div className='container'>
        <div className='location'>
        <h1>{ubication.name}</h1>
        <ul className='location__list'>
          <li cl><span className='lotation_list-subtitle'> </span>Type:{ubication.type}</li>
          <li cl><span className='lotation_list-subtitle'> </span>Dimension{ubication.dimension}</li>
          <li cl><span className='lotation_list-subtitle'> </span>Population:{ubication.residents?.length}</li>
        </ul>
        </div>
      </div>

  
      <MortyList mortys={ubication.residents} />

    </div>
  );
}

export default App;
