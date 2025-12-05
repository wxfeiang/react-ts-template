import { useRequest } from 'alova/client';
import { Button, Spin } from 'antd';

import { useRouter } from '@/hooks';

import { jsonPlacehoder } from '@/api/home';

import './index.scss';

function Home() {
  const router = useRouter();
  const { loading, data, send } = useRequest(() => jsonPlacehoder(), {
    immediate: false,
  });
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <Button onClick={() => router.push('/test/count')} style={{ fontSize: '15px' }}>
          跳转测试页面
        </Button>
        <Button type="primary" className="ml-2 xl:ml-10">
          Primary Button
        </Button>
        <Button onClick={() => send()}>这里是请求的数据 点击获取</Button>
      </div>

      <Spin spinning={loading} tip="加载中...">
        <div className="bg-amber-900 min-h-20">
          {data?.map((item) => (
            <div key={item.id} className="border-amber-50 my-1 text-white px-2">
              {item.body}
            </div>
          ))}
        </div>
      </Spin>
    </div>
  );
}

export default Home;
