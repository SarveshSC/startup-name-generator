import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import SearchBox from './SearchBox/SearchBox'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBox />
      </div>
    )
  }
}

export default App
