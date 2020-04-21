import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card'

const List = () => {

const [data, setData] = useState([]);
const [search, setSearch] = useState('');
const [error, setError] = useState('');


const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_KEY}`

useEffect(() => {
    const fetchData = async () => {
    const res = await fetch(`${API}&s=batman`)
    const resJSON = await res.json()
    setData(resJSON.Search);
}
   fetchData(); 
}, [])

const handleSubmit = async(e) => {
    e.preventDefault();
    if(!search) {
        return setError('Please write a valid text');
    }
    const res = await fetch(`${API}&s=${search}`)
    const data = await res.json();
    if (!data.Search) {
       return setError('There are not result')
    } 
    setData(data.Search);
    setError('');
    setSearch('');

}

return (
    <div>
        <div className="row">
            <div className="col-md-4 offset-md-4 p-4">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" className="form-control" placeholder="Search" 
                    onChange={(e) => setSearch(e.target.value)} value={search} autoFocus>
                    </input>
                </form>
                <p className="text-white">{error ? error:''}</p>
            </div>
        </div>
        <div className="row">
            {data.map(movie => {            
                return <Card movie={movie} key={movie.imdbID}/>
            })}
        </div>
    </div>
)

}
export default List;