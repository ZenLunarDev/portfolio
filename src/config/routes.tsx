import Home from '../app/routes/Home';
import Projects from '../app/routes/Projects';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
] as const;
