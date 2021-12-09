
import MovieCard from "./MovieCard";





const MovieList = ({ movies }) => {
    const everyMovies = movies.map((movie) => {
        return <MovieCard movies={movie} />
    })

    return (
        <>
            <div className="row_poster">
                {everyMovies}
            </div>
        </>
    )
}


export default MovieList;