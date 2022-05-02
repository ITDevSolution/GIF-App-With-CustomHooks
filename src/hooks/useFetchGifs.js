
import { useEffect, useState } from 'react'
import {api} from '../helpers/apiGet'

export const useFetchGifs = (category) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true, 
    });


    useEffect(() => {
        
        api(category)
            .then((img)=>{
                
                // console.log(img)
                setState({
                    data: img,
                    loading: false
                })
            })

    }, [category]);


    return state

}
