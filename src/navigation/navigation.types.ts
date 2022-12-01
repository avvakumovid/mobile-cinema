import { ComponentType } from 'react'

export type TypeRootStackParamList = {
    Auth: undefined,
    Home: undefined,
    Trending: undefined
    Search: undefined
    Favorites: undefined
    Profile: undefined
    Screen404: undefined
    Movie: {
        slug: string
    },
    Genre: {
        slug: string
    }
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
    Admin: undefined
}


export interface IRoute {
    name: keyof TypeRootStackParamList
    component: ComponentType
    isAdmin?: boolean
}