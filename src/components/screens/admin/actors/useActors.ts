import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useSearchForm } from '../../search/useSearchForm'
import { useMutation, useQuery } from '@tanstack/react-query';
import { ITableItem } from '@/components/ui/admin/table/admin-table.interface';
import Toast from 'react-native-toast-message';
import { useMemo } from 'react';
import { ActorService } from '@/services/actor.service';

export const useActors = () => {
    const { debounceSearch, control } = useSearchForm()

    const { navigate } = useTypedNavigation()

    const queryData = useQuery(
        ['search actors', debounceSearch],
        () => ActorService.getAll(debounceSearch),
        {
            select: data => data.map((actor): ITableItem => ({
                _id: actor._id,
                editNavigate: () => navigate('ActorEdit', { id: actor._id }),
                items: [
                    actor.name,
                    String(actor.countMovies)
                ]
            }))
        }
    )

    const { mutateAsync: deleteAsync } = useMutation(['delete actor'], (actorId: string) => ActorService.delete(actorId),
        {
            onSuccess: async () => {
                Toast.show({
                    type: 'success',
                    text1: 'Delete actor',
                    text2: 'delete was successful'

                })

                await queryData.refetch()
            }

        })
    const { mutateAsync: createAsync } = useMutation(
        ['create actor'],
        () => ActorService.create(),
        {
            onSuccess: async (id: string) => {

                Toast.show({
                    type: 'success',
                    text1: 'actor created',
                    text2: 'create was successful'

                })

                navigate('ActorEdit', { id: id })

                await queryData.refetch()
            }

        })

    return useMemo(() => ({ ...queryData, control, deleteAsync, createAsync }), [queryData, deleteAsync, createAsync])
}