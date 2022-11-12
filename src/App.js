
import './App.css';

import Home from './components/Home/Home';
import Parent from './components/Parent/Parent';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Gallary from './components/Gallary/Gallary';
import Recipes from './components/Recipes/Recipes';
import Web from './components/Web/Web';
import Labtop from './components/Labtop/Labtop';

function App() {
  let routes = createBrowserRouter([
    
    {path: "/",element: <Layout />,errorElement: <NotFound />,children:[
    {index:true,element: <Home/> },
    {path: "parent",element: <Parent/> },
    {path: "gallary",element: <Gallary/>,children:[

      {index:true,element: <Web/> },
      {path: "labtop",element: <Labtop/> },
    ]},
    {path: "recipes",element: <Recipes/>},
  ]
  }

]);
  return (
    <>
    <RouterProvider router={routes} >
       <Layout/>
       </RouterProvider>
    </>

  );
}

export default App;
