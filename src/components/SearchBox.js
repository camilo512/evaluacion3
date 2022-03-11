import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setUbication}) => {

    const [ ubicationId, setubicationId ] = useState("")

    const searchUbication = () => {

        //hacemos la peticion con el id que pida el usuario en el input
        axios.get(`https://rickandmortyapi.com/api/location/${ubicationId}`)
            .then(res => setUbication(res.data))
    }
    return (

        <div>
            <input 
            type="text" 
            onChange={e => setubicationId(e.target.value)}
            value={ubicationId}
            />
            <button onClick={searchUbication}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;