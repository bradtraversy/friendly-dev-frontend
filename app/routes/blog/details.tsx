import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { Post, StrapiResponse, StrapiPost } from '~/types';
import { Link } from 'react-router';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const res = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/posts?filters[slug][$eq]=${slug}&populate=image`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const json: StrapiResponse<StrapiPost> = await res.json();

  if (!json.data.length) throw new Response('Not Found', { status: 404 });

  const item = json.data[0];

  const post = {
    id: item.id,
    slug: item.slug,
    excerpt: item.excerpt,
    title: item.title,
    date: item.date,
    body: item.body,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : '/images/no-image.png',
  };

  return { post };
}

type BlogPostDetailsPageProps = {
  loaderData: {
    post: Post;
  };
};

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { post } = loaderData;

  return (
    <div className='max-w-3xl mx-auto px-6 py-12 bg-gray-900'>
      <h1 className='text-3xl font-bold text-blue-400 mb-2'>{post.title}</h1>
      <p className='text sm text-gray-400 mb-6'>
        {new Date(post.date).toDateString()}
      </p>

      <img
        src={post.image}
        alt={post.title}
        className='w-full h-64 object-cover mb-4 '
      />

      <div className='prose prose-invert max-w-none mb-12'>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>

      <Link
        to='/blog'
        className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'
      >
        ← Back To Posts
      </Link>
    </div>
  );
};

export default BlogPostDetailsPage;
