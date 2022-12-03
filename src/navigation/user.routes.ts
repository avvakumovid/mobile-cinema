import { IRoute } from './navigation.types';
import { adminRoutes } from './admin.routes';
import Auth from '@/components/screens/auth/Auth';
import Home from '@/components/screens/home/Home';
import Trending from '@/components/screens/trending/Trending';
import Search from '@/components/screens/search/Search';
import Favorites from '@/components/screens/favorites/Favorites';
import Profile from '@/components/screens/profile/Profile';
import Genre from './../components/screens/genre/Genre';
import Actor from '@/components/screens/actor/Actor';
import Movie from '@/components/screens/movie/Movie';

export const userRoutes: IRoute[] = [
    {
        name: 'Home',
        component: Home,
    },
    {
        name: 'Trending',
        component: Trending
    },
    {
        name: 'Search',
        component: Search
    },
    {
        name: 'Favorites',
        component: Favorites
    },
    {
        name: 'Profile',
        component: Profile
    },
    {
        name: 'Genre',
        component: Genre
    },
    {
        name: 'Actor',
        component: Actor
    },
    {
        name: 'Movie',
        component: Movie
    }


]

export const routes: IRoute[] = [
    ...userRoutes,
    ...adminRoutes

]