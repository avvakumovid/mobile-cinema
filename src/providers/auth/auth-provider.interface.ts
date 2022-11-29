import { IUser } from '@/shared/types/user.interface'
import { Dispatch, SetStateAction } from 'react'

export type TypedUserState = IUser | null

export interface IContext {
    user: TypedUserState
    setUser: Dispatch<SetStateAction<TypedUserState>>
}