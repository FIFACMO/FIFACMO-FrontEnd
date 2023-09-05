import { RouteObject } from "react-router-dom";

import MarketPage from "@/Pages/MarketPage/MarketPage";

export const MarketRoute: RouteObject[] = [
    {
        path: '/market2',
        element: <MarketPage/>,
    }
]