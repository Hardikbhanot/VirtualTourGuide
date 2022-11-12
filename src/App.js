import React from "react";
import MapC from "./components/Map/map";
import "./App.css";
import Navbar from "./components/layoutComponents/navbar/navbar";
import Footer from "./components/layoutComponents/footer/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <ErrorPage />,
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  // return (
  //   <>
  //   <Home/>
  //   </>
  // )
}

export default App;
