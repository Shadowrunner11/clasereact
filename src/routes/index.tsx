import { createBrowserRouter } from 'react-router-dom';
import NotFund from '../pages/404';
import Main from '../pages/main';

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main />,
    errorElement: <NotFund />,
    hasErrorBoundary: true
  }
]);
