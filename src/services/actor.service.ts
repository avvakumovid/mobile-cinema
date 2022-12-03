import { request } from './api/request.api'
import { IActor, IActorEditInput } from '@/shared/types/movie.interface';
import { getActorUrl } from './../config/api.config';

export const ActorService = {

    async getAll(searchTerm?: string) {
        return request<IActor[]>({
            url: getActorUrl(''),
            method: 'GET',
            params: searchTerm
                ? {
                    searchTerm
                }
                : {}
        })
    },

    async getBySlug(slug: string) {
        return request<IActor>({
            url: getActorUrl(`by-slug/${slug}`),
            method: 'GET'
        })
    },

    async getById(_id: string) {
        return request<IActorEditInput>({
            url: getActorUrl(_id),
            method: 'GET'
        })
    },

    async create() {
        return request<string>({
            url: getActorUrl(''),
            method: 'POST'
        })
    },

    async update(_id: string, data: IActorEditInput) {
        return request<string>({
            url: getActorUrl(_id),
            method: 'PUT',
            data
        })
    },
    async delete(_id: string) {
        return request<string>({
            url: getActorUrl(_id),
            method: 'DELETE',
        })
    }
}