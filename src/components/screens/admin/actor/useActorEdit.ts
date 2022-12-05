import { useTypedRoute } from '@/hooks/useTypedRoute';
import { UseFormSetValue, SubmitHandler } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ActorService } from '../../../../services/actor.service';
import Toast from 'react-native-toast-message'
import { IActorEditInput } from '@/shared/types/movie.interface';
import { getKeys } from '@/utils/getKeys';

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
    const { params } = useTypedRoute<'ActorEdit'>()

    const actorId = params.id

    const { invalidateQueries } = useQueryClient()

    const { isLoading } = useQuery(['get actor', actorId], () => ActorService.getById(actorId), {
        onSuccess(data) {
            getKeys(data).forEach(key => setValue(key, data[key]))
        },
        enabled: !!actorId
    })

    const { mutateAsync } = useMutation(['update actor'], (data: IActorEditInput) => ActorService.update(actorId, data), {
        async onSuccess() {
            Toast.show({
                type: 'success',
                text1: 'Update actor',
                text2: 'update was successful'
            })

            await invalidateQueries(['search actors'])
        }
    })

    const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
        await mutateAsync(data)
    }

    return { onSubmit, isLoading }
}