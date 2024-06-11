import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import ProtectedRoute from './components/Protected';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProtectedRoute element={<HomePage />} /> },
      {
        path: 'login',
        element: <AuthenticationPage />,
        action: authAction,
      },
      { path: 'logout', action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
