import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/iArchive/',
    bundler: viteBundler(),
    theme: defaultTheme(),
    lang: 'zh-CN',
    title: 'iArchive',
    description: '山东大学暑期实训项目——档案管理系统',
})