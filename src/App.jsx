import { React, useState } from 'react';
import { RouterProvider, createBrowserRouter }
  from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Courses from './pages/Courses';
import Signup from './pages/SignupLogin/Signup';
import Login from './pages/SignupLogin/Login';
import MostSolvedQues from './pages/PracticeModules/MostSolvedQues';
import PracticeQuestion from './pages/PracticeModules/PracticeQuestion';
import QuizQuestion from './pages/PracticeModules/QuizQuestion';
import Roadmpap from './pages/AdjustPages/Roadmap';
import Blog from './pages/AdjustPages/Blog';
import Discussion from './pages/AdjustPages/Discussion';
import BlogSubmit from './pages/AdjustPages/BlogSubmit';
import ProblemSolving from './pages/AdjustPages/Blogs/ProblemSolving';
import Cpp from './pages/AdjustPages/Blogs/Cpp';
import Java from './pages/AdjustPages/Blogs/Java';


// Router Path Declaration ---------------
const MainRouter = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/courses', Component: Courses },
  { path: '/login', Component: Login },
  { path: '/signup', Component: Signup },
  { path: '/mostsolvedques', Component: MostSolvedQues },
  { path: '/practicequestion', Component: PracticeQuestion },
  { path: '/quizquestion', Component: QuizQuestion },
  { path: '/roadmap', Component: Roadmpap },
  { path: '/blog', Component: Blog },
  { path: '/discussion', Component: Discussion },
  { path: '/blog/blogsubmit', Component: BlogSubmit },
  { path: '/blog/problemsolving', Component: ProblemSolving },
  { path: '/blog/cpp', Component: Cpp },
  { path: '/blog/java', Component: Java },
]);

// Main App() Method ---------------------
const App = () => {

  const newTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(newTime);
  const [cnt, setCnt] = useState(0);

  const IncNum = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    // alert(`cnt : ${cnt}`);
  };

  return (
    <>
      <RouterProvider router={MainRouter} />
    </>
  );
};

export default App
