import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ThankYou from './thankyou';
import Home from './home';
import OrderPage1 from './order1';
import Header from './components/header';
import Privacy from './privacy';

const router=createBrowserRouter([
  { path:'/', element: <Home/>},
  { path:'/thankyou', element: <ThankYou/> },
  {path:'/order1',element:<OrderPage1/>},
  {path:'/privacy',element:<Privacy/>}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
