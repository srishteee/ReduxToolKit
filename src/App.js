import "./index.css"
import Header from"./components/Header"
import CountComponent from "./components/CountComponent"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>, 
  },
  {
    path: "/count",
    element: <CountComponent/>, 
  },
]);

function App() {
  return (
    <>
    
  <RouterProvider router={router} />  
    </>
  );
}

export default App;
