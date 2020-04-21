import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card'

const List = () => {

const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    const res = await fetch('../../assets/data.json')
    const resJSON = await res.json()
    setData(resJSON);
}
   fetchData(); 
}, [])


return (
    <div>
        {data.map(movie => {            
            return <Card movie={movie} key={movie.id}/>
        })}
    </div>
)

}
export default List;