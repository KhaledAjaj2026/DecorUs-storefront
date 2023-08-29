import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Home from './routes/Home/home';
import Products from './routes/Products/products';
import ProductDetails from './routes/ProductDetails/product-details';
import About from './routes/About/about';
import Contact from './routes/Contact/contact';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'products',
		element: <Products />,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
