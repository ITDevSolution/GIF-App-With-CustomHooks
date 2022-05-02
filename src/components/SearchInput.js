import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const SearchInput = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(inputValue.trim().length > 2){
            setCategories(cat => [inputValue, ...cat ])
            setInputValue('')
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1> {inputValue} </h1>
        <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
        />
    </form>
  )
}

SearchInput.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
