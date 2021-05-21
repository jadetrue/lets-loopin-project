import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Testing to see if the App will load without problems

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});