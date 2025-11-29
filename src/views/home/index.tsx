import { Button } from 'antd';

import { useRouter } from '@/hooks';

import './index.scss';

function Home() {
  const router = useRouter();
  return (
    <div className="">
      <button type="button" onClick={() => router.push('/test/count')} style={{ fontSize: '15px' }}>
        跳转测试页面
      </button>
      <Button type="primary" className="ml-2 xl:ml-10">
        Primary Button
      </Button>
      <div className="bg-rose-400  p-10">dfvnlk</div>
    </div>
  );
}

export default Home;
