import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev | Welcome' },
    { name: 'description', content: 'Custom website development' },
  ];
}

export default function Home() {
  console.log('Hello From Home...');

  return <section>My App</section>;
}
