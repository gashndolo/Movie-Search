import React from "react"

export default function SearchMovies() {

    const [query, setQuery] = React.useState("")
    const [movies, setMovies] = React.useState([])

    const handleInput = (event) => {
        setQuery(event.target.value)
    }

    const searchMovies = async (e) => {
        e.preventDefault()
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=f0614a0d00be71fe03e3926c63cbd51d&query=${query}&language=en-US&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()

            setMovies(data.results)
            console.log(movies)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <input 
                    className="input" 
                    type="text" name="query" 
                    placeholder="e.g Jurassic Park"
                    value={query}
                    onChange={handleInput}/>
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie => (
                    <div className="card" key={movie.id}>
                        <img 
                            className="card--image" 
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={`${movie.title} poster`}/>
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}