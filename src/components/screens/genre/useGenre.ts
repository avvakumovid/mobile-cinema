import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import { useTypedRoute } from './../../../hooks/useTypedRoute';
import { GenreService } from './../../../services/genre.service';

export const useGenre = () => {

    const { params } = useTypedRoute<'Genre'>()


    const { isLoading: isGenreLoading, data: genre } =
        useQuery(['get genre by slug', params.slug], () => GenreService.getBySlug(params.slug))

    const genreId = genre?._id || ''
    const { isLoading: isMoviesLoading, data: movies } =
        useQuery(['get movies by genre', params.slug], () => MovieService.getByGenres([genreId]),
            {
                enabled: !!genreId
            })


    return {
        genre,
        movies,
        isLoading: isGenreLoading || isMoviesLoading
    }
}