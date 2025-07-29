import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AddBook from './Components/AddBook.jsx';
import Error from './Components/Error.jsx';
import Home from './Components/Home.jsx';
import BrowseBooks from './Components/BrowseBooks.jsx';
import BookDetail from './Components/BookDetail.jsx';

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [ 
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "BrowseBooks/:category",
        element: <BrowseBooks/>
      },
      {
        path: "Book/:id",
        element: <BookDetail/>
          
      },
      {
        path: "AddBook",
        element: <AddBook/>
      }
    ],
    errorElement: <Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoute}/>
  </StrictMode>,
)
