import type { Route } from './+types/index';
import type { PostMeta } from '~/types';
import { Link } from 'react-router';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  console.log(posts);

  return (
    <>
      <h2 className='text-3xl text-white font-bold mb-8'>📝 Blog</h2>
    </>
  );
};

export default BlogPage;
