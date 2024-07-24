import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ImprintPage from './pages/ImprintPage';
import DataPDPage from './pages/DataPDPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/imprint',
    element: <ImprintPage />,
  },
  {
    path: '/dpd',
    element: <DataPDPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
