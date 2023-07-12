import { RouteObject } from "react-router-dom";

import MainPage from "./MainPage";

export const MainRoute: RouteObject[] = [
    {
        path: '/market',
        element: <MainPage/>,
    }
]