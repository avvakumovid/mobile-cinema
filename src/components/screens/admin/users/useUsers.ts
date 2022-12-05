import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useSearchForm } from '../../search/useSearchForm'
import { useMutation, useQuery } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { ITableItem } from '@/components/ui/admin/table/admin-table.interface';
import Toast from 'react-native-toast-message';
import { useMemo } from 'react';

export const useUsers = () => {
    const { debounceSearch, control } = useSearchForm()

    const { navigate } = useTypedNavigation()

    const queryData = useQuery(
        ['search users', debounceSearch],
        () => UserService.getAll(debounceSearch),
        {
            select: data => data.map((user): ITableItem => ({
                _id: user._id,
                editNavigate: () => navigate('UserEdit', { id: user._id }),
                items: [
                    user.email,
                    new Date(user.createdAt).toLocaleDateString()
                ]
            }))
        }
    )

    const { mutateAsync: deleteAsync } = useMutation(['delete user'], (userId: string) => UserService.deleteUser(userId),
        {
            onSuccess: async () => {
                Toast.show({
                    type: 'success',
                    text1: 'Delete user',
                    text2: 'delete was successful'

                })

                await queryData.refetch()
            }

        })

    return useMemo(() => ({ ...queryData, control, deleteAsync }), [queryData, deleteAsync])
}