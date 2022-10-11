import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main';
import ErrorPage from './component/ErrorPage';
import About from './component/About';
import Subjects from './component/Subjects';
import Subject from './component/Subject';







function App() {
  const router =createBrowserRouter([
    {
      path:'/',element:<Main></Main>,errorElement:<ErrorPage></ErrorPage>, children:[
      
      { path: '/about', element: <About></About> },
      {
        path: 'subjects', 
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
       element:<Subjects></Subjects>},
      

    ]
    },
    {
      path:'/subjectBox/:id',
      loader: async ({params}) => {
        console.log(params);
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
      },
      element:<Subject></Subject>
    },

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
