import { createBrowserRouter, Outlet } from "react-router";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about/:name/:id",
        element: <About />,
      },
      {
        path: "contact",
        element: <Outlet />,
        children: [
          {
            path:"",
            element:<Contact />
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      
    ],
  },
]);

export default App;
