import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Quiz from './components/Quiz/Quiz';
import ErrorRoute from './components/ErrorRoute/ErrorRoute';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: async() =>{
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path:'quiz/:quizId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path:'/statistics',
          loader: async() =>{
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        
      ]
    },
    {
      path:'/quiz',
      loader: async() =>{
        return fetch('https://openapi.programming-hero.com/api/quiz/1')
      },
      element: <Quiz></Quiz>
    },
    {
      path:'/erors',
      element: <ErrorRoute></ErrorRoute>
    },
    {
      path:'*',
      element: <div><h1 className='text-3xl bold text-center'>404 Page Not Found!</h1></div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
