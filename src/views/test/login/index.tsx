import { useRouter } from '@/hooks';

function Login() {
  const router = useRouter();
  return (
    <div className="bg-amber-50 h-lvh flex flex-col justify-center items-center text-white">
      <div className="text-lg">Login登录页面</div>
      <button type="button" onClick={() => router.push('/')}>
        回到首页
      </button>
    </div>
  );
}

export default Login;
