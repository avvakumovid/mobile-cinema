import { useTypedRoute } from '@/hooks/useTypedRoute';
import { UseFormSetValue, SubmitHandler } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { MovieService } from '../../../../services/movie.service';
import Toast from 'react-native-toast-message'
import { getKeys } from '@/utils/getKeys';
import { IMovieEditInput } from '@/shared/types/movie.interface';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
    const { params } = useTypedRoute<'MovieEdit'>()

    const movieId = params.id

    const queryClient = useQueryClient()

    const { isLoading } = useQuery(['get movie', movieId], () => MovieService.getById(movieId), {
        onSuccess(data) {
            getKeys(data).forEach(key => setValue(key, data[key]))
        },
        enabled: !!movieId
    })

    const { mutateAsync } = useMutation(['update movie'], (data: IMovieEditInput) => MovieService.update(movieId, data), {
        async onSuccess() {
            Toast.show({
                type: 'success',
                text1: 'Update movie',
                text2: 'update was successful'
            })

            await queryClient.invalidateQueries(['search movies'])
        }
    })

    const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
        await mutateAsync(data)
    }

    return { onSubmit, isLoading }
}