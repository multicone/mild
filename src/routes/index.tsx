import { AssetDetails, CollectionProfile, Create, Explore, Home, UserProfle } from "pages";
import { Default } from "layouts";

export const routes = [
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />,
                children: [{ path: ':chain', element: <Explore /> }]
            },
            {
                path: 'user/:id/:type',
                element: <UserProfle />,
                children: [{ path: ':tag', element: <UserProfle /> }]
            },
            {
                path: 'collection/:id/:type',
                element: <CollectionProfile />,
                children: [{ path: ':tag', element: <CollectionProfile /> }]
            },
            {
                path: 'create',
                element: <Create />
            },
            {
                path: 'assets/:chain/:address',
                element: <AssetDetails />,
            },
        ]
    },

    {
        path: '*',
        element: <div className="flex items-center h-screen w-screen justify-center text-4xl text-center text-gray-600 font-bold">Not found | 404</div>,
    }
];
