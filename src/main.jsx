import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import './sass/main.scss';

import NotFound from './pages/not_found/Not_found.jsx';
import Home from './pages/home/Home.jsx';
import Logement from './pages/logement/Logement.jsx';
import A_propos from './pages/a_propos/A_propos.jsx';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/a_propos", element: <A_propos /> },
      { path: "/logement/:id", element: <Logement /> },   
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
