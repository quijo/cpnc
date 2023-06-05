
import './App.css';
import Home from './component/root/Main'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:< Home />
  }
])



function App() {
  return (
   <>
     
      <RouterProvider router={router} />
   </>
  );
}

export default App;
