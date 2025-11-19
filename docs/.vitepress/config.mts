import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "王之宝库",
  description: "Aspirin的个人知识库",
  
  // 这里是主题配置
  themeConfig: {
    // 1. 顶部导航栏 (右上角)
    nav: [
      { text: '首页', link: '/' },
      { text: '🏰 核心领地', link: '/areas/python-notes' }, // 暂时指向具体文件，后续改
      { text: '⚔️ 当前战役', link: '/projects/todo' },
      { text: '🧰 武器库', link: '/resources/tools' },
    ],

    // 2. 侧边栏 (左侧目录，支持多模块)
    sidebar: {
      // 当用户在 "areas" 目录下时，显示这个侧边栏
      '/areas/': [
        {
          text: '编程语言',
          items: [
            { text: 'Python 笔记', link: '/areas/python-notes' },
            { text: 'JavaScript 核心', link: '/areas/js-core' }
          ]
        },
        {
          text: '计算机基础',
          items: [
            { text: '网络协议', link: '/areas/network' }
          ]
        }
      ],

      // 当用户在 "projects" 目录下时，显示这个侧边栏
      '/projects/': [
        {
          text: '2025 年度计划',
          items: [
            { text: '待办清单', link: '/projects/todo' },
            { text: '个人网站搭建', link: '/projects/build-website' }
          ]
        }
      ],
      
      // 资源库
      '/resources/': [
        {
          text: '常用工具',
          items: [
            { text: '效率软件推荐', link: '/resources/tools' }
          ]
        }
      ]
    },

    // 社交链接 (右上角图标)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aspirin2048' }
    ]
  }
})