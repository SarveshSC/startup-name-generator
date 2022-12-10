import React from 'react'
import ResultCard from '../ResultCard/ResultCard'
import './Results.css'

const Results = ({nameInputs}) => {
  const resultList = nameInputs.map(nameInput => {
    return <ResultCard nameInput={nameInput} key={nameInput} />
  })

  return (
    <div className='result-card'>{resultList}</div>
  )
}

export default Results