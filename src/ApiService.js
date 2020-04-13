const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&`;
console.log(process.env.REACT_APP_KEY);

export default {
    getMovies: (search) => {
        return fetch(`${URL}${'dragon'}`)
        .then(res => res.status <= 400 ? res : Promise.reject(res))
        .then(res => res.status === 200 ? res.json() : res)
        .catch((err) => {
        console.log(`${err.message} while fetching /${URL}`)
    });
    }
}