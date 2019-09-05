import React from 'react';
import ReactDOM from 'react-dom';
// not needed because testing library has render method
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render stat tracker text', ()=>{
  const app = render(<App />)
  app.getByText(/Stat tracker/i)
})

describe('strike button test',()=>{
  it('should add a strike', ()=>{
    const app = render(<App />)
    app
  })
})