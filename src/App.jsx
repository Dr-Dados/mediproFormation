import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import User from "./pages/User";
import Courses from "./courses/Courses";
import Summary from "./courses/Summary";
import { courses, quizes } from "/data/FData";
import Quizes from "./courses/Quizes";
import QuizDetail from "./courses/QuizDetail";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <div>Sign in</div>,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <p>Dashboard</p>,
      },
      {
        path: "courses",
        element: <Courses courses={courses} />,
      },
      {
        path: "courses/:id",
        element: <Summary courses={courses} />,
      },
      {
        path: "quiz",
        element: <Quizes quizes={quizes} />,
      },
      {
        path: "quiz/:id",
        element: <QuizDetail quizes={quizes} />,
      },
      {
        path: "profile",
        element: <User />,
      },
      {
        path: "settings",
        element: <p>Settings</p>,
      },
    ],
  },
  { path: "login", element: <Login /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
