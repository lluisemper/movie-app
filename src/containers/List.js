import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card'

const List = () => {

const [data, setData] = useState([]);


const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_KEY}`

useEffect(() => {
    const fetchData = async () => {
    const res = await fetch(`${API}&s=batman`)
    const resJSON = await res.json()
    console.log('ssssssssss',resJSON);
    
    // setData(resJSON);
}
   fetchData(); 
}, [])


return (
    <div className="row">
        {data.map(movie => {            
            return <Card movie={movie} key={movie.id}/>
        })}
    </div>
)

}
export default List;