import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main';

import About from './component/About';
import Subjects from './component/Subjects';





function App() {
  const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      
      { path: '/about', element: <About></About> },
      {
        path: 'subjects', 
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
       element:<Subjects></Subjects>},
      

    ]
    },
   

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
