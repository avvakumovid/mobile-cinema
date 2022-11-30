import { IRoute } from './navigation.types';
import { adminRoutes } from './admin.routes';
import Auth from '@/components/screens/auth/Auth';
import Home from '@/components/screens/home/Home';
import Trending from '@/components/screens/trending/Trending';
import Search from '@/components/screens/search/Search';
import Favorites from '@/components/screens/favorites/Favorites';
import Profile from '@/components/screens/profile/Profile';

export const userRoutes: IRoute[] = [
    {
        name: 'Home',
        component: Home,
    },
    {
        name: "Auth",
        component: Auth
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
    }


]

export const routes: IRoute[] = [
    ...userRoutes,
    ...adminRoutes

]