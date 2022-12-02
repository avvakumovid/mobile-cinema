import { request } from './api/request.api'
import { IGenre, IGenreEditInput } from '@/shared/types/movie.interface';
import { getGenreUrl } from '@/config/api.config';

export const GenreService = {
    async getAll(searchTerm?: string) {
        return request<IGenre[]>({
            url: getGenreUrl(''),
            method: 'GET',
            params: searchTerm
                ? {
                    searchTerm
                }
                : {}
        })
    },

    async getBySlug(slug: string) {
        return request<IGenre>({
            url: getGenreUrl(`by-slug/${slug}`),
            method: 'GET'
        })
    },

    async getById(_id: string) {
        return request<IGenreEditInput>({
            url: getGenreUrl(_id),
            method: 'GET'
        })
    },

    async create() {
        return request<string>({
            url: getGenreUrl(''),
            method: 'POST'
        })
    },

    async update(_id: string, data: IGenreEditInput) {
        return request<string>({
            url: getGenreUrl(_id),
            method: 'PUT',
            data
        })
    }
}