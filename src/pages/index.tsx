import { env } from '../env.mjs';

export default async function Home() {
  const thing = env.SERVER_ONLY;

  console.log(thing, 'server only');

  return <div></div>;
}
