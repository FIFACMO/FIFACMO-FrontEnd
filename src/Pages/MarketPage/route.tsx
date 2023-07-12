import { RouteObject } from "react-router-dom";

import MarketPage from "./MarketPage";

export const MarketRoute: RouteObject[] = [
    {
        path: '/market',
        element: <MarketPage/>,
    }
]