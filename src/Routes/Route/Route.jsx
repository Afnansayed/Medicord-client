import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/LogIn";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import OrganizerHome from "../../Pages/OrganizerDashboard/OrganizerHome/OrganizerHome";
import AddCamp from "../../Pages/OrganizerDashboard/AddCamp/AddCamp";
import Details from "../../components/Details/Details";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import AvailableCamps from "../../Pages/AvailableCamps/AvailableCamps";
import UpdateUserData from "../../Sheared/UpdateUserData/UpdateUserData";

const axiosSecure = UseAxiosSecure();
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },{
                path: '/avail',
                element: <AvailableCamps/>
            },{
                path: '/signUp',
                element: <SignUp/>
            },{
                path: '/logIn',
                element: <LogIn/>
            },{
                path: '/detail/:id',
                element: <Details/>,
                loader: ({params}) => axiosSecure.get(`/allCamps/${params.id}`)
            }
        ]
    },{
        path: '/dashboard',
        element: <Dashboard/>,
        children:[
            {
                path:'organizerHome',
                element:<OrganizerHome/>
            },{
                path: 'addCamp',
                element: <AddCamp/>
            },{
                path:'updateProfile',
                element: <UpdateUserData></UpdateUserData>,
            }
        ]
    }
])