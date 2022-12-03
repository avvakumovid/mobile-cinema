import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import { useTypedRoute } from './../../../hooks/useTypedRoute';
import { GenreService } from './../../../services/genre.service';

export const useActor = () => {

    const { params } = useTypedRoute<'Actor'>()


    const { isLoading: isGenreLoading, data: actor } =
        useQuery(['get actor by slug', params.slug], () => ActorService.getBySlug(params.slug))

    const actorId = actor?._id || ''
    const { isLoading: isMoviesLoading, data: movies } =
        useQuery(['get movies by actor', params.slug], () => MovieService.getByActor(actorId),
            {
                enabled: !!actorId
            })

    return {
        actor,
        movies,
        isLoading: isGenreLoading || isMoviesLoading
    }
}