import type { Route } from './+types/index';

export async function loader({ request }: Route.LoaderArgs): Promise<any> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();

  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;
  console.log(projects);

  return (
    <>
      <h2 className='text-3xl text-white font-bold mb-8'>🚀 Projects</h2>
    </>
  );
};

export default ProjectsPage;
