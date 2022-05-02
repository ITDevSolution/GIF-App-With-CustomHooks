import React, { useState } from 'react'
import { GifGrid } from './components/GifGrid';
import { SearchInput } from './components/SearchInput';

export const GifApp = () => {

    const initialState = ['Dragon ball']

    const [categories, setCategories] = useState(initialState);

  return (
    <>
        <h2>GifApp</h2>
        <SearchInput setCategories={setCategories} />
        <hr />

        <ol>
        {
            categories.map((category)=>(
              
               <GifGrid 
               key={category}
               category={category} />
            ))
        }
        </ol>
        
    </>
  )
}
