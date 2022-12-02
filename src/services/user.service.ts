import { getUserUrl } from '@/config/api.config';
import { request } from './api/request.api'
import { IUser } from '../shared/types/user.interface';
import { IAuthFormData } from '../shared/types/auth.interface';
import { IMovie } from '@/shared/types/movie.interface';

export const UserService = {
    async getAll(searchTerm?: string) {
        return request<IUser[]>({
            url: getUserUrl(''),
            method: 'GET',
            params: searchTerm ? { searchTerm } : {}
        })
    },
    async getProfile() {
        return request<IUser>({
            url: getUserUrl('profile'),
            method: 'GET',
        })
    },
    async getFavorites() {
        return request<IMovie[]>({
            url: getUserUrl('profile/favorites'),
            method: 'GET',
        })
    },
    async toggleFavorites(movieId: string) {
        return request<IMovie>({
            url: getUserUrl('profile/favorites'),
            method: 'PUT',
            data: { movieId }
        })
    },

    async getById(_id: string) {
        return request<IUser>({
            url: getUserUrl(`${_id}`),
            method: 'GET',
        })
    },

    async updateProfile(data: IAuthFormData) {
        return request<IUser>({
            url: getUserUrl(`profile`),
            method: 'PUT',
            data
        })
    },

    async update(_id: string, data: IAuthFormData) {
        return request<string>({
            url: getUserUrl(`${_id}`),
            method: 'PUT',
            data
        })
    },

    async deleteUser(_id: string) {
        return request<string>({
            url: getUserUrl(`${_id}`),
            method: 'DELETE',
        })
    },
}   