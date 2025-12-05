import { Inspector } from 'react-dev-inspector';
import { createRoot } from 'react-dom/client';

import { StyleProvider, autoPrefixTransformer, px2remTransformer } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

// 公共样式
import '@/styles/css/index.css';
import '@/styles/scss/global.scss';

import App from './app.tsx';

const px2rem = px2remTransformer({
  rootValue: 4,
});
function setupApp() {
  createRoot(document.getElementById('root')!).render(
    <>
      <StyleProvider layer transformers={[autoPrefixTransformer, px2rem]}>
        <ConfigProvider>
          <Inspector keys={['ctrl', 'alt', 'q']} />
          <App />
        </ConfigProvider>
      </StyleProvider>
    </>,
  );
}

setupApp();
