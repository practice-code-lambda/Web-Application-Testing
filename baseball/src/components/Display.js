import React from 'react';

const Display = (props) => {

    const {state} = props

    return ( 
        <div>
            <h1>strikes:{state.strikes}</h1>
            <h1>balls:{state.balls}</h1>
            <h1>hits: {state.hits}</h1>
        </div>

     );
}
 
export default Display;