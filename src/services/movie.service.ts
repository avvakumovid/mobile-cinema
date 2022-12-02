import { getMovieUrl } from '@/config/api.config';
import { request } from './api/request.api'
import { IMovie, IMovieEditInput } from '../shared/types/movie.interface';
import { IAuthFormData } from '../shared/types/auth.interface';

export const MovieService = {
    async getAll(searchTerm?: string) {
        return request<IMovie[]>({
            url: getMovieUrl(''),
            method: 'GET',
            params: searchTerm ? { searchTerm } : {}
        })
    },
    async getMostPopularMovies() {
        return request<IMovie[]>({
            url: getMovieUrl('most-popular'),
            method: 'GET',
        })
    },
    async getFavorites() {
        return request<IMovie>({
            url: getMovieUrl('profile/favorites'),
            method: 'GET',
        })
    },
    async getBySlug(slug: string) {
        return request<IMovie>({
            url: getMovieUrl(`by-slug/${slug}`),
            method: 'GET',
        })
    },
    async getByActor(actorId: string) {
        return request<IMovie[]>({
            url: getMovieUrl(`by-actor/${actorId}`),
            method: 'GET',
        })
    },
    async getByGenres(genreIds: string[]) {
        return request<IMovie[]>({
            url: getMovieUrl(`by-genres`),
            method: 'POST',
            data: { genreIds }
        })
    },
    async getById(_id: string) {
        return request<IMovieEditInput>({
            url: getMovieUrl(`${_id}`),
            method: 'GET',
        })
    },

    async create() {
        return request<IMovie>({
            url: getMovieUrl(''),
            method: 'POST',
        })
    },

    async update(_id: string, data: IMovieEditInput) {
        return request<string>({
            url: getMovieUrl(`${_id}`),
            method: 'PUT',
            data
        })
    },

    async updateCountOpened(slug: string) {
        return request<string>({
            url: getMovieUrl('update-count-opened'),
            method: 'PUT',
            data: {
                slug
            }
        })
    },

    async delete(_id: string) {
        return request<string>({
            url: getMovieUrl(`${_id}`),
            method: 'DELETE',
        })
    },
}   