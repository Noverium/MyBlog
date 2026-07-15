import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/MyBlog/',
  title: "Zhengyi Yang 的学术空间",
  description: "电气工程+的交叉融合探索",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 1.顶部导航栏（NavBar）
    nav: [
      { text: '主页', link: '/' },
      { text: '电气+AI', link: "/ee-ai/" }
    ],

    // 2.侧边栏（SideBar）
    sidebar: { 
      // 当用户处于 /ee-ai/ 路径下时，侧边栏显示如下内容
      '/ee-ai/': [
        {
          text: '核心项目',
          items: [
            { text: '项目一览&架构设计', link: '/ee-ai/' },
            { text: 'PINN快速潮流计算', link: '/ee-ai/project-pinn' }
          ]
        },
        {
          text: '每日修炼心得',
          items: [
            { text: 'Day1:开始记录', link: '/ee-ai/daily-notes/day1' },
          ]
        }
      ]
    }, 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Noverium/MyBlog' }
    ]
  }
})