import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Roadmaps from "./pages/Roadmaps";
import SkillTracker from "./pages/SkillTracker";
import Quiz from "./pages/Quiz";
import Leaderboard from "./pages/Leaderboard";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "roadmaps", element: <Roadmaps /> },
      { path: "skill-tracker", element: <SkillTracker /> },
      { path: "quiz", element: <Quiz /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "certificates", element: <Certificates /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
