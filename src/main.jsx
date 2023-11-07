import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import JobDetails from './Components/JobDetails';
import AddJobs from './Components/AddJobs';
import MyPostedJobs from './Components/MyPostedJobs';
import Login from './Components/Authentication/Login';
import AuthProvider from './Components/Authentication/AuthProvider';
import Registration from './Components/Authentication/Registration';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import MyBids from './Components/MyBids';
import UpdateJob from './Components/UpdateJob';
import BidRequests from './Components/BidRequests';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobDetails/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/addJobs",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path: "/myPostedJobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/myBids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: "/updateJob/:id",
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>
      },
      {
        path: "/bidRequests",
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
