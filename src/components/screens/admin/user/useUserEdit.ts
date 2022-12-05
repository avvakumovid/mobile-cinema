import { useTypedRoute } from '@/hooks/useTypedRoute';
import { IUserEdit } from '@/shared/types/user.interface';
import { UseFormSetValue, SubmitHandler } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from './../../../../services/user.service';
import Toast from 'react-native-toast-message'

export const useUserEdit = (setValue: UseFormSetValue<IUserEdit>) => {
    const { params } = useTypedRoute<'UserEdit'>()

    const userId = params.id

    const queryClient = useQueryClient()

    const { isLoading } = useQuery(['get user', userId], () => UserService.getById(userId), {
        onSuccess(data) {
            setValue('email', data.email)
            setValue('isAdmin', data.isAdmin)
        },
        enabled: !!userId
    })

    const { mutateAsync } = useMutation(['update user'], (data: IUserEdit) => UserService.update(userId, data), {
        async onSuccess() {
            Toast.show({
                type: 'success',
                text1: 'Update user',
                text2: 'update was successful'
            })

            await queryClient.invalidateQueries(['search users'])
        }
    })

    const onSubmit: SubmitHandler<IUserEdit> = async (data) => {
        await mutateAsync(data)
    }

    return { onSubmit, isLoading }
}