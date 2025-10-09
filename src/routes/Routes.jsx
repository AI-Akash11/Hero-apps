import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";
import Spinner from "../components/Spinner/Spinner";
import PageNotFound from "../components/ErrorPage/PageNotFound"
import AppNotFound from "../components/ErrorPage/AppNotFound";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayout,
        errorElement: <PageNotFound/>,
        hydrateFallbackElement: <Spinner/>,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                Component: Apps
            },
            {
                path: "/installation",
                Component: Installation
            },
            {
                path: "/apps/:id",
                Component: AppDetails,
                errorElement: <AppNotFound></AppNotFound>
            }
        ]
    }
])