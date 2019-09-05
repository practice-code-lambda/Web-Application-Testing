import React from 'react';
// import ReactDOM from 'react-dom';
// not needed because testing library has render method
// import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';


import Display from './Display'


describe('<Display/>', ()=>{
    it('should render strikes',()=>{
        const stateObj = {
            strikes: 1,
            balls:0,
            hits:1
        }
        const comp = render(<Display state={stateObj} />)

     
        comp.getByText(/strikes:1/)
    })
    it('should render balls',()=>{
        const stateObj = {
            strikes: 1,
            balls:1,
            hits:1
        }
        const comp = render(<Display state={stateObj} />)
        comp.getByText(/balls:1/)
    })
})