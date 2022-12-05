export interface IUser {
    _id: string
    email: string
    password: string
    createdAt: string
    isAdmin: boolean
}

export interface IUserEdit extends Omit<IUser, '_id' | 'createdAt'> { }