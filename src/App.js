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


      <SearchBox setUbication={setUbication} />

        <h1>{ubication.name}</h1>
        <p><b>Type: </b>{ubication.type}</p>
        <p><b>Dimension: </b>{ubication.dimension}</p>
        <p><b>Population: </b>{ubication.residents?.length}</p>
  
      <MortyList mortys={ubication.residents} />

    </div>
  );
}

export default App;
