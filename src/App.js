import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main';
import ErrorPage from './component/ErrorPage';
import About from './component/About';
import Subjects from './component/Subjects';
import Subject from './component/Subject';

import SubjectBox from './component/SubjectBox';
import Statistics from './component/Statistics';
import Home from './component/Home';







function App() {
  const router =createBrowserRouter([
    {
      path:'/',element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
       children:[
         {
           path: '/',
           element: <Home></Home>,
         }
        ,
         {
           path: '/Home',
           element: <Home></Home>
           ,
         },
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
    {
      path:'/subjectBox/:id',
      loader: async ({params}) => {
        console.log(params);
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
      },
      element:<SubjectBox></SubjectBox>
    },
    {
      path: '/statistics',
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      element: <Statistics></Statistics>
    },
   

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
