import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home.jsx';
import Satistics from './components/Satistics/Satistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import Details from './components/Details/Details.jsx';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/statistics',
        element: <Satistics></Satistics>,
      },
      {
        path:'/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path:'/blog',
        element: <Blog></Blog>,
      },
      {
        path:'/viewDetails',
        element: <Details></Details>,
      },


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
