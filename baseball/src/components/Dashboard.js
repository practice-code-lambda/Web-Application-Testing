import React from 'react';

const Dashboard = (props) => {
    const {addStrike, addBalls, addHit} = props
    return ( 
    <div>
        <button onClick={addStrike}>strike</button>
        <button onClick={addBalls}>ball</button>
        <button onClick={addHit}>hit</button>
    </div> );
}
 
export default Dashboard;