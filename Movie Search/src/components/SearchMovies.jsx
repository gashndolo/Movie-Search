import React from "react"

export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault()
        
        const query = "Jurassic Park"

        const url = `https://api.themoviedb.org/3/search/movie?api_key=f0614a0d00be71fe03e3926c63cbd51d&query=${query}&language=en-US&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()

            console.log(data)
            
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <form className="form" onSubmit={searchMovies}>
            <input className="input" type="text" name="query" placeholder="e.g Jurassic Park"/>
            <button type="submit" className="button">Search</button>
        </form>
    )
}