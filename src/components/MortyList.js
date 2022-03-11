import React from 'react';
import MortyInfo from './MortyInfo';

const MortyList = ({mortys}) => {
    return (
        <div>
            {
                mortys?.map(residents =>(
                    <MortyInfo mortyUrl={residents} key={residents} />
                   /*  <div key={residents}  >
                        {residents}
                    </div> */
                ))
            }
        </div>
    );
};

export default MortyList;