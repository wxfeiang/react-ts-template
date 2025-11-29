import { Inspector } from 'react-dev-inspector';
import { createRoot } from 'react-dom/client';

import { StyleProvider, autoPrefixTransformer } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

// 公共样式
import '@/styles/css/index.css';
import '@/styles/scss/global.scss';

import App from './app.tsx';

function setupApp() {
  createRoot(document.getElementById('root')!).render(
    <>
      <StyleProvider layer transformers={[autoPrefixTransformer]}>
        <ConfigProvider>
          <Inspector keys={['ctrl', 'alt', 'q']} />
          <App />
        </ConfigProvider>
      </StyleProvider>
    </>,
  );
}

setupApp();
