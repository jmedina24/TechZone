import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Cart from '../pages/Cart';
import EmptyCart from '../pages/EmptyCart';
import Login from '../pages/Login';
import Help from '../pages/Help';
import SignUp from "../pages/SignUp";
import Favourites from "../pages/Favourites";
import BestSellers from "../pages/BestSellers";
import Offers from "../pages/Offers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/cart',
        element: <Cart />,
        errorElement: <Error404 />
    },
    {
        path: '/emptycart',
        element: <EmptyCart />,
        errorElement: <Error404 />
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <Error404 />
    },
    {
        path: '/help',
        element: <Help />,
        errorElement: <Error404 />
    },
    {
        path: '/signup',
        element: <SignUp />,
        errorElement: <Error404 />
    },
    {
        path: '/favourites',
        element: <Favourites />,
        errorElement: <Error404 />
    },
    {
        path: '/bestsellers',
        element: <BestSellers />,
        errorElement: <Error404 />
    },
    {
        path: '/offers',
        element: <Offers />,
        errorElement: <Error404 />
    },
    
    
    
]);