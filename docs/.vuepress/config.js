import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/iArchive/',
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            { text: '首页', link: '/' },
            { text: '项目介绍', link: '/intro/' },
            {
                text: '技术文档',
                children: [
                    { text: '前端', link: '/tech/frontend/' },
                    { text: '后端', link: '/tech/backend/' },
                    { text: 'API', link: '/tech/api/' },
                ],
            },
            { text: '关于我们', link: '/about/' }
            { text: 'GitHub', link: 'https://github.com/WindLikeo/iArchive' },        
    }),
    lang: 'zh-CN',
    title: 'iArchive',
    description: '山东大学暑期实训项目——档案管理系统',
})