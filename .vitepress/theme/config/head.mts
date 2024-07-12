import { HeadConfig } from 'vitepress';

const head: HeadConfig[] = [
    // 必应
    ['meta', { name: 'msvalidate.01', content: '662F3B692D411C9C438E1C1AEC50A1BE' }],
    // 百度
    ['meta', { name: 'baidu-site-verification', content: 'codeva-iq9dT9bqP9' }],
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
