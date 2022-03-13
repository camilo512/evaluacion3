import React from 'react';
import MortyInfo from './MortyInfo';

const MortyList = ({mortys}) => {
    return (
        <div className='container'>
            <div className='cards'>
            {
                mortys?.map(residents =>(
                    <MortyInfo mortyUrl={residents} key={residents} />
                   /*  <div key={residents}  >
                        {residents}
                    </div> */
                ))
            }
            </div>
        
        </div>
    );
};

export default MortyList;