import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Movie from "./pages/Movie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path:'/movies',
          element:<Movie/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
