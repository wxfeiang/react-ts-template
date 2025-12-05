import { useRequest } from 'alova/client';
import { Button } from 'antd';

import { useRouter } from '@/hooks';

import { jsonPlacehoder } from '@/api/home';

import './index.scss';

function Home() {
  const router = useRouter();
  const { loading, data, send } = useRequest(() => jsonPlacehoder(), {
    immediate: true,
  });
  return (
    <div className="">
      <button type="button" onClick={() => router.push('/test/count')} style={{ fontSize: '15px' }}>
        跳转测试页面
      </button>
      <Button type="primary" className="ml-2 xl:ml-10">
        Primary Button
      </Button>
      <div className="bg-rose-400  p-10">dfvnlk</div>
      {loading && <div>加载中...</div>}
      <div onClick={() => send()}>这里是请求的数据 点击获取</div>
      <div>
        {data?.map((item) => (
          <div key={item.id} className="border-amber-50 my-1">
            {item.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
