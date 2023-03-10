import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useSearchForm } from '../../search/useSearchForm'
import { useMutation, useQuery } from '@tanstack/react-query';
import { ITableItem } from '@/components/ui/admin/table/admin-table.interface';
import Toast from 'react-native-toast-message';
import { useMemo } from 'react';
import { MovieService } from '@/services/movie.service';

export const useMovies = () => {
    const { debounceSearch, control } = useSearchForm()

    const { navigate } = useTypedNavigation()

    const queryData = useQuery(
        ['search movies', debounceSearch],
        () => MovieService.getAll(debounceSearch),
        {
            select: data => data.map((movie): ITableItem => ({
                _id: movie._id,
                editNavigate: () => navigate('MovieEdit', { id: movie._id }),
                items: [
                    movie.title,
                    `${movie?.genres[0]?.name}${movie.genres.length > 1 ? '...' : ''}`,
                    String(movie.rating)
                ]
            }))
        }
    )

    const { mutateAsync: deleteAsync } = useMutation(['delete movie'], (movieId: string) => MovieService.delete(movieId),
        {
            onSuccess: async () => {
                Toast.show({
                    type: 'success',
                    text1: 'Delete movie',
                    text2: 'delete was successful'

                })

                await queryData.refetch()
            }

        })
    const { mutateAsync: createAsync } = useMutation(
        ['create movie'],
        () => MovieService.create(),
        {
            onSuccess: async (id: string) => {

                Toast.show({
                    type: 'success',
                    text1: 'Movie created',
                    text2: 'create was successful'

                })

                navigate('MovieEdit', { id: id })

                await queryData.refetch()
            }

        })

    return useMemo(() => ({ ...queryData, control, deleteAsync, createAsync }), [queryData, deleteAsync, createAsync])
}