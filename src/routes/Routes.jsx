import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Errorpage from "../component/Errorpage";
import Home from "../component/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Projects.json')
            },
            // {
            //     path: '/allNeedVolunteer',
            //     // loader: () => fetch('/EstateData.json'),{credentials :'include'}
            //     element: <AllNeedVolunteer></AllNeedVolunteer>,
            //     loader: () => fetch(`https://help-nexus-server.vercel.app/needVolunteer`)
            // },
        ]
    },
]);

export default Routes;