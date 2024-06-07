import './App.css';
//import Button from './components/Button';
//import Contador from './components/Contador';
//import UseEffect from './pages/UseEffect';
import List from "./pages/List";
import Profile from './pages/Profile';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />
  },
  {
    path: "/profile",
    element: <Profile />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
