import { http } from '@/utils/http/alova';

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export function jsonPlacehoder() {
  return http.Get<Data[]>('/dev-api/posts');
}
