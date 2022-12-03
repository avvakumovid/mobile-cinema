import { useTypedRoute } from '@/hooks/useTypedRoute'
import { useQuery } from '@tanstack/react-query'
import { MovieService } from './../../../services/movie.service';

export const useMovie = () => {

    const { params } = useTypedRoute<'Movie'>()

    const { isLoading, data: movie } =
        useQuery(['get movie by slug', params.slug], () => MovieService.getBySlug(params.slug))

    return {
        movie,
        isLoading
    }
}