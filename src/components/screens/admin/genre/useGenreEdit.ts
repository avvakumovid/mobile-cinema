import { useTypedRoute } from '@/hooks/useTypedRoute';
import { UseFormSetValue, SubmitHandler } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { GenreService } from '../../../../services/genre.service';
import Toast from 'react-native-toast-message'
import { getKeys } from '@/utils/getKeys';
import { IGenreEditInput } from '@/shared/types/movie.interface';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
    const { params } = useTypedRoute<'GenreEdit'>()

    const genreId = params.id

    const queryClient = useQueryClient()

    const { isLoading } = useQuery(['get genre', genreId], () => GenreService.getById(genreId), {
        onSuccess(data) {
            getKeys(data).forEach(key => setValue(key, data[key]))
        },
        enabled: !!genreId
    })

    const { mutateAsync } = useMutation(['update genre'], (data: IGenreEditInput) => GenreService.update(genreId, data), {
        async onSuccess() {
            Toast.show({
                type: 'success',
                text1: 'Update genre',
                text2: 'update was successful'
            })

            await queryClient.invalidateQueries(['search genres'])
        }
    })

    const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
        await mutateAsync(data)
    }

    return { onSubmit, isLoading }
}