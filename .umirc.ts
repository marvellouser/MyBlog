import { defineConfig } from 'umi';
import routes from './routes';
const path = require('path');
const px2viewport = require('postcss-px-to-viewport');
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  extraPostCSSPlugins: [
    px2viewport({ viewportWidth: 1960 })
  ],
  alias: {
    'Public': path.resolve(__dirname, '/src/page/component/public')
  },
  routes,
  title: 'Sam -- 个人博客 记录学习, 生活和知识分享网站',
  links: [{ rel: 'icon', href: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1996439442,3650548222&fm=26&gp=0.jpg' }]
});
