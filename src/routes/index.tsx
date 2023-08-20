import { DashboardLayout, DefaultLayout } from "layouts";
import { Home } from "pages";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <div className="flex items-center h-screen w-screen justify-center text-4xl text-center text-gray-600 font-bold">Not found | 404</div>,
    },
];
