import React from 'react'
import './SearchBox.css'

function SearchBox() {
  return (
    <div className='searchbox-container'>
        <input type="text" placeholder='enter your idea...' className='searchbox'/>
    </div>
  )
}

export default SearchBox