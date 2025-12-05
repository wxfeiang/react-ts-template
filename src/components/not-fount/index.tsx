import { useEffect } from 'react';

import { Button, Result } from 'antd';

import { useRouter } from '@/hooks';

function NotFount() {
  const router = useRouter();
  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push('/');
    }, 5000);
    return () => clearTimeout(timerId);
  }, [router]);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => router.push('/')}>
          Back Home(自动回到首页)
        </Button>
      }
    />
  );
}

export default NotFount;
