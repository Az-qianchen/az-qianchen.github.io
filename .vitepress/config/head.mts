import { HeadConfig } from 'vitepress';

const head: HeadConfig[] = [
    // 网站图标
    ['link', { rel: 'icon', href: '/ico/64.png' }],
    // 谷歌分析
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-X1S233BKKP' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-X1S233BKKP');
    `]
  ];
  // 使用图床
  // head.push(['meta', { name: 'referrer', content: "no-referrer" }])

export default head;
