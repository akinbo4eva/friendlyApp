import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const RandomAvater = () => {
    
    const [movie, setMovie] = useState(1);
    const [title, setTitle] = useState([])
    

    useEffect(() => {
        const getData = () => {
            const url = fetch(`https://www.themealdb.com/api/json/v1/${movie}/random.php`)
                .then(response => response.json())
                .then(data => {
                    setTitle(data)
                })

        }
        getData()
    }, [movie]);
    
    return (
        <div>
          <h1>{title.idealMeal}</h1>
        </div>
    )
}

export default RandomAvater