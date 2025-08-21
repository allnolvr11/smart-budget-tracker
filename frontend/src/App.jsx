import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const Dashboard = React.lazy(()=> import('./pages/Dashboard'));


function App() {

  const router = createBrowserRouter ([
    {
      path: "/",
      element: (
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      )
    },
    {
      path: "/dashboard",
      element: (
        <Suspense fallback={null}>
          <Dashboard />
        </Suspense>
      )
    }
  ]);

  return <RouterProvider router={router}/> ;
}

export default App
