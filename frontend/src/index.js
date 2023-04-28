import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/bootstrap.min.css'
import { RouterProvider} from 'react-router-dom';
import '../src/assets/css/App.css';
import router from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<RouterProvider router={router} />);








