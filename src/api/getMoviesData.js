import React from 'react'
const apikey = "7f1f8922"
async function getMoviesData() {
    try {
        const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=avenger&page=1`)
        const data = await res.json();
        // console.log(data);
     return data;
    } catch (error) {
        console.log(error)
    }

}

export  {getMoviesData}