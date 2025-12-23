import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站元数据
  title: "Earendel", 
  description: "Personal Knowledge Base", // 建议使用英文或通用描述，避免暴露个人身份

  themeConfig: {
    // 左上角网站标识
    siteTitle: 'Earendel',

    // 顶部导航栏配置
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Areas', link: '/areas/FZTH/outline.md', activeMatch: '/areas/' },
      { text: 'Projects', link: '/projects/todo', activeMatch: '/projects/' },
      { text: 'Resources', link: '/resources/tools', activeMatch: '/resources/' },
    ],

    // 侧边栏配置
    sidebar: {
      '/areas/': [
        {
          text: 'Areas',
          items: [
            { text: 'Python Notes', link: '/areas/python-notes' },
            { text: 'JavaScript Core', link: '/areas/js-core' },
            { text: 'Network Protocols', link: '/areas/network' }
          ]
        }
      ],

      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Annual Plan', link: '/projects/todo' },
            { text: 'Website Construction', link: '/projects/build-website' }
          ]
        }
      ],
      
      '/resources/': [
        {
          text: 'Resources',
          items: [
            { text: 'Tools', link: '/resources/tools' }
          ]
        }
      ]
    },

    // 在 sidebar 下方添加 footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Earendel'
    },


    // 社交链接（如不需要可直接删除此字段）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-github-id' } // 请自行决定是否保留
    ]
    
  }
})