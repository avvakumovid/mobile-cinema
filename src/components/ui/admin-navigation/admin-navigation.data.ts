import { INavItem } from './admin-navigation.interface';

export const navItems: INavItem[] = [
    {
        icon: 'insert-chart-outlined',
        routeName: 'Admin',
        title: 'Statistics'
    },
    {
        icon: 'group',
        routeName: 'UsersList',
        title: 'User'
    },
    {
        icon: 'movie-filter',
        routeName: 'MoviesList',
        title: 'Movies'
    },
    {
        icon: 'recent-actors',
        routeName: 'ActorsList',
        title: 'Actors'
    },
    {
        icon: 'category',
        routeName: 'GenresList',
        title: 'Genres'
    },
]