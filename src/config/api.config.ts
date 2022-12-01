export const SERVER_URL = 'http://192.168.0.126:4200'
export const API_URL = `${SERVER_URL}/api`


export const getAuthUrl = (string: string) => `/auth/${string}`
export const getUserUrl = (string: string) => `/user/${string}`
export const getMovieUrl = (string: string) => `/movie/${string}`
export const getGenreUrl = (string: string) => `/genre/${string}`
export const getActorUrl = (string: string) => `/actor/${string}`