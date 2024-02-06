import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Form from './components/pages/Login/Form'
import PrivateRoute from './services/private/PrivateRoute';
import Dashboard from './components/pages/Dashboard/Dashboard';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
},{
  path: '/login',
  element: <Form />
},{
  path:'/dashboard',
  element: <PrivateRoute component={<Dashboard />} />
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} / >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
