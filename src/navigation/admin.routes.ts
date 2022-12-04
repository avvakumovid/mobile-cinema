import ActorEdit from '@/components/screens/admin/actor/ActorEdit';
import ActorsList from '@/components/screens/admin/actors/ActorsList';
import GenreEdit from '@/components/screens/admin/genre/GenreEdit';
import GenresList from '@/components/screens/admin/genres/GenresList';
import Admin from '@/components/screens/admin/home/Admin';
import MovieEdit from '@/components/screens/admin/movie/MovieEdit';
import MoviesList from '@/components/screens/admin/movies/MoviesList';
import UserEdit from '@/components/screens/admin/user/UserEdit';
import UsersList from '@/components/screens/admin/users/UsersList';
import { IRoute } from './navigation.types';

export const adminRoutes: IRoute[] = [
    {
        name: 'Admin',
        component: Admin,
        isAdmin: true
    },
    {
        name: 'ActorEdit',
        component: ActorEdit,
        isAdmin: true
    },
    {
        name: 'ActorsList',
        component: ActorsList,
        isAdmin: true
    },
    {
        name: 'GenreEdit',
        component: GenreEdit,
        isAdmin: true
    },
    {
        name: 'GenresList',
        component: GenresList,
        isAdmin: true
    },
    {
        name: 'MovieEdit',
        component: MovieEdit,
        isAdmin: true
    },
    {
        name: 'MoviesList',
        component: MoviesList,
        isAdmin: true
    },
    {
        name: 'UserEdit',
        component: UserEdit,
        isAdmin: true
    },
    {
        name: 'UsersList',
        component: UsersList,
        isAdmin: true
    },
];
