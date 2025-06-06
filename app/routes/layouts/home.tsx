import { Outlet } from 'react-router';
import Hero from '~/components/Hero';

const HomeLayout = () => {
  return (
    <>
      <Hero name='Brad' />
      <section className='max-w-6xl mx-auto px-6 my-8'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
