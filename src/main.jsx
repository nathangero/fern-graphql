import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import ListData from "./pages/ListData.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/data',
        element: <ListData />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
