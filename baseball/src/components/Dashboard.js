import React from 'react';

const Dashboard = (props) => {
    const {addStrike, addBalls} = props
    return ( 
    <div>
        <button onClick={addStrike}>strike</button>
        <button onClick={addBalls}>ball</button>
        <button>hit</button>
    </div> );
}
 
export default Dashboard;