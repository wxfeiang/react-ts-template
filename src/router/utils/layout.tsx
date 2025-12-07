import { Outlet } from 'react-router';

import Footer from '@/components/Footer';

export default function layout() {
  return (
    <div>
      <nav>这里是layoud的顶部</nav>
      <Outlet />
      <Footer />
    </div>
  );
}
