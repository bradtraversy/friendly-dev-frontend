import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home/index.tsx'),
  route('about', './routes/about/index.tsx'),
  route('contact', './routes/contact/index.tsx'),
  route('projects', './routes/projects/index.tsx'),
  route('blog', './routes/blog/index.tsx'),
] satisfies RouteConfig;
