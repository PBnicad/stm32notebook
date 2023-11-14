import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "zh-CN",
  title: "STM32学习笔记",
  description: "STM32学习笔记",
  base: "/stm32notebook/",

  themeConfig: {
    nav: [
      { text: "开始", link: "/stm32最小系统" },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: "STM32 最小系统构成", link: "/stm32最小系统" },
          { text: "存储器与寄存器", link: "/存储器与寄存器" },
          // ...
        ],
      },
    ],
  },
});
