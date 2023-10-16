import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './client/pages/Error/error-page';
import Home from './client/pages/Home/home';
import Shop from './client/pages/Shop/shop';
import ProductDetails from './client/pages/ProductDetails/product-details';
import About from './client/pages/About/about';
import Contact from './client/pages/Contact/contact';
import Cart from './client/pages/Cart/cart';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'shop',
		element: <Shop />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'product-details',
		element: <ProductDetails />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'about',
		element: <About />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'contact',
		element: <Contact />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'cart',
		element: <Cart />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
