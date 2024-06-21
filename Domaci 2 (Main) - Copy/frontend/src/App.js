/////////////// App.js
import './App.css';
import ReactSwitch from 'react-switch'; //npm install react-switch

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import ProtectedRoute from './components/Protected';

import ChangePasswordPage from './pages/changePassword';
import { createContext, useState } from 'react';

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
      {
        path: 'change-password',
        element: <ProtectedRoute element={<ChangePasswordPage />} />,
      },
    ],
  },
]);

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
        <RouterProvider router={router} />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toogleTheme} checked={theme === 'dark'} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
