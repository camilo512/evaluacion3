import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MortyInfo = ({mortyUrl}) => {

    const [ card, setCard ] = useState({})

    useEffect (() => {
        axios.get(mortyUrl)
            .then(res => setCard(res.data))
    }, [mortyUrl])

    return (
        
        <div >
            <img src={card.image} alt="" />
            <p>{card.name}</p>
            <p>origin:{card.origin?.name}</p>
            <p>Episodes where appear:{card.episode?.length}</p>
            
            
            {/* {mortyUrl} */}
        </div>
    );
};

export default MortyInfo;