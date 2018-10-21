import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card'
import * as serviceWorker from './serviceWorker';


function hexValue() {
  let values = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let randomNumber = Math.floor(Math.random() * 16)
  return values[randomNumber]
}

function hexGenerator() {
  let array = []
  while(array.length < 6) {
    array.push(hexValue())
  }
  array.unshift('#')
  return array.join('')
}

function renderCards() {
  let array = []
  for (let i = 0; i < 40; i ++) {
    array.push(<Card key={i} color={hexGenerator()}/>)
  }
  return array;
}

// ? How can I get the component to re render when loaded


ReactDOM.render(<>{renderCards()}</>, document.getElementById('root'));


serviceWorker.unregister();
