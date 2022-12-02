import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'

export const useTrending = () => {
    const { isLoading, data: movies } = useQuery(['get trending movies'], () => MovieService.getMostPopularMovies())

    return {
        movies, isLoading
    }
}