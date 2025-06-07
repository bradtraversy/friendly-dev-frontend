import { Link } from 'react-router';

type HeroProps = {
  name?: string;
  text?: string;
};

const Hero: React.FC<HeroProps> = ({
  name = '[NAME]',
  text = 'I build friendly web experiences and help others become confident, modern developers.',
}) => {
  return (
    <header className='text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300'>
      <h2 className='text-4xl font-bold mb-4'>Hey, I'm {name} 👋</h2>
      <p className='text-lg text-gray-300 max-w-2xl mx-auto mb-6'>{text}</p>
      <div className='flex justify-center gap-4'>
        <Link
          to='/projects'
          className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
        >
          View Projects
        </Link>
        <Link
          to='/contact'
          className='border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition'
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
