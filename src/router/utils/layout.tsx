import { Outlet } from 'react-router';

export default function layout() {
  return (
    <div>
      <nav>这里是layoud的顶部</nav>
      <Outlet />
      <footer>这里是layoud的底部</footer>
    </div>
  );
}
