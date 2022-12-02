import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

export const useFavorites = () => {
    const { user } = useAuth()

    const { isLoading, data: favoriteMovies } = useQuery(
        ['favorite movies'],
        () => UserService.getFavorites(),
        {
            enabled: !!user
        }
    )

    return {
        isLoading,
        favoriteMovies
    }
}