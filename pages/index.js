import Link from 'next/link';

import Head from '../shared/head';

export default () => (
  <div>
    <Head />
    <div>
      <Link href="/search">Search</Link>
      <Link href="/favorites">Favorites</Link>
      Main
    </div>
  </div>
);
