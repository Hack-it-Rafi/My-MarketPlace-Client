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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/addJobs",
        element: <AddJobs></AddJobs>
      },
      {
        path: "/myPostedJobs",
        element: <MyPostedJobs></MyPostedJobs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
