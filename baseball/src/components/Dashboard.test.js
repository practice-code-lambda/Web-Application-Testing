import React from 'react';
// import ReactDOM from 'react-dom';
// not needed because testing library has render method
// import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard'
import Display from './Display'
import App from '../App'


//to test if a click will incremen
describe('<Dashboard/>', ()=>{

    const { getByText } = render(<App/>)

    it('should render strikes',()=>{

        const button = getByText('strike')

        fireEvent.click(button)
     
        getByText(/strikes:1/i);

        
    })

    it('should render balls', ()=>{

        const { getByText } = render(<App/>)

        const button = getByText('ball')

        fireEvent.click(button)

        getByText(/balls:1/)
    })

})
//fake data to help test component
const fakeState = {
    strikes:0,
    balls:0
}
//to test if something exists
test('has strike button', () => {
    const { getByText } = render(<Display state={fakeState} />);
    //find button
    getByText(/strikes/i);
  });   
