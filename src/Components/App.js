import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SearchBox from './SearchBox/SearchBox'

function App() {
  const [text, setText] = useState('');
    return (
      <div>
        <Header text={text}/>
        <SearchBox setText={setText}/>
      </div>
    )
}

export default App
