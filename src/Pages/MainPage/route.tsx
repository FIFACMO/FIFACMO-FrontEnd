import { RouteObject } from "react-router-dom";

import MainPage from "@/Pages/MainPage/MainPage";

export const MainRoute: RouteObject[] = [
    {
        path: '/market',
        element: <MainPage/>,
    }
]