import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'

import './sass/bases/_reset.scss'
import './sass/main.scss'

import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import Logement from './pages/Logement.jsx'
import About from './pages/About.jsx'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		),
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/about', element: <About /> },
			{ path: '/logement/:id', element: <Logement /> },
			{ path: '/404', element: <NotFound /> },
			{ path: '*', element: <Navigate to="/404" replace /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
