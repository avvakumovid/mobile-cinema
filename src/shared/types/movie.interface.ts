export interface IParameters {
    year: number
    duration: number
    country: string
}

export interface IGenreEditInput extends Omit<IGenre, '_id'> {
}

export interface IActorEditInput extends Omit<IActor, '_id'> {
}

export interface IGenre {
    _id: string
    name: string
    slug: string
    description: string
}

export interface IActor {
    _id: string
    photo: string
    name: string
    countMovies: number
    slug: string
}

export interface IMovie {
    _id: string
    poster: string
    title: string
    parameters: IParameters
    genres: IGenre[]
    actors: IActor[]
    countOpened: number
    videoUrl: string
    rating: number
    slug: string

}

export interface IMovieEditInput extends Omit<IMovie, '_id'> { }