import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useSearchForm } from '../../search/useSearchForm'
import { useMutation, useQuery } from '@tanstack/react-query';
import { ITableItem } from '@/components/ui/admin/table/admin-table.interface';
import Toast from 'react-native-toast-message';
import { useMemo } from 'react';
import { GenreService } from '@/services/genre.service';

export const useGenres = () => {
    const { debounceSearch, control } = useSearchForm()

    const { navigate } = useTypedNavigation()

    const queryData = useQuery(
        ['search genres', debounceSearch],
        () => GenreService.getAll(debounceSearch),
        {
            select: data => data.map((genre): ITableItem => ({
                _id: genre._id,
                editNavigate: () => navigate('GenreEdit', { id: genre._id }),
                items: [
                    genre.name,
                    genre.slug
                ]
            }))
        }
    )

    const { mutateAsync: deleteAsync } = useMutation(['delete genre'], (genreId: string) => GenreService.delete(genreId),
        {
            onSuccess: async () => {
                Toast.show({
                    type: 'success',
                    text1: 'Delete genre',
                    text2: 'delete was successful'

                })

                await queryData.refetch()
            }

        })
    const { mutateAsync: createAsync } = useMutation(
        ['create genre'],
        () => GenreService.create(),
        {
            onSuccess: async (id: string) => {

                Toast.show({
                    type: 'success',
                    text1: 'Genre created',
                    text2: 'create was successful'

                })

                navigate('GenreEdit', { id: id })

                await queryData.refetch()
            }

        })

    return useMemo(() => ({ ...queryData, control, deleteAsync, createAsync }), [queryData, deleteAsync, createAsync])
}