import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Results from './Results/Results'
import SearchBox from './SearchBox/SearchBox'

const name = require('@rstacruz/startup-name-generator')

function App() {
  const [text, setText] = useState('');
  const [nameInput, setnameInput] = useState([]);
  
  const inputChangeHandler = (e) => {
    setText(e.target.value);
    setnameInput(e.target.value ? name(e.target.value) : []);
    // console.log(e.target.value);
  };
  console.log(text);

    return (
      <div>
        <Header text={text}/>
        <SearchBox inputChangeHandler={inputChangeHandler}/>
        <Results nameInputs={nameInput}/>
      </div>
    )
}

export default App
