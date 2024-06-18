<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://image.tuclink.com/image/2024.06/logo.jpg.1718701971',
    name: '仟尘',
    title: '制作人',
    links: [
      { icon: {
        svg: '<svg viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><rect fill="none" x="1.3333" y="6" width="21.333" height="15.333" rx="4" ry="4"/><path d="m8 12.4v1.2"/><path d="m16 12.4v1.2"/><path d="m5.8853 2.6667L8.552 5.3334"/><path d="m18.115 2.6667-2.6667 2.6667"/></svg>',
          },
        link: "https://b23.tv/Dy49jbs" },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="none" d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline fill="none" points="22,6 12,13 2,6"/></svg>',
          },
        link: "mailto:feedback@tuclink.com" }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/38809414?v=4',
    name: 'ikamusume7',
    title: '开发者',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    // ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />