import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import LandingPage from './Pages/LandingPage/LandingPage';
import Error from './Pages/Error/Error'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';
import MyNotes from './Pages/MyNotes/MyNotes';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/register",
        element: <Register />,
        },
        {
        path: "/login",
        element: <Login />,
      },{
        path: "/mynotes",
        element: <MyNotes />,
      },
     
      
    ],
  },
 ]);

export default router;