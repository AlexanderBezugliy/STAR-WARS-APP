import FavoritesPage from "../components/pages/FavoritesPage/FavoritesPage";
import HomePage from "../components/pages/HomePage/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import PeoplePage from "../components/pages/PeoplePage/PeoplePage";
import SearchPage from "../components/pages/SearchPage/SearchPage";
import SinglePersonPage from "../components/pages/SinglePersonPage/SinglePersonPage";

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },
    {
        path: '/people/:id',
        exact: true,
        component: SinglePersonPage
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritesPage
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage
    },


    {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]

export default routesConfig;