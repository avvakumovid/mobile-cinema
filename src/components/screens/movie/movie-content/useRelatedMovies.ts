import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'

export const useRelatedMovies = (genresIds: string[],
    currentMovieId: string) => {


    const { isLoading, data: movie } =
        useQuery(
            ['get related movies by genres', genresIds], 
            () => MovieService.getByGenres(genresIds),
            {
                select: data => data.filter(m => m._id !== currentMovieId).slice(0, 5)
            }
        )

    return {
        movie,
        isLoading
    }
}