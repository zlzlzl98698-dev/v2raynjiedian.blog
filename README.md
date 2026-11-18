<div align="center">

# 🌐 v2rayn节点 (v2raynjiedian.blog)

**现代化专著级网络工具评测媒体 • 科学上网与开源客户端全景知识库**

[![Astro](https://img.shields.io/badge/Astro-5.4.1-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Pagefind](https://img.shields.io/badge/Pagefind-1.6.0-FF5722?style=flat-square&logo=search&logoColor=white)](https://pagefind.app)
[![Output](https://img.shields.io/badge/SSG-100%25%20Static-success?style=flat-square&logo=html5&logoColor=white)](https://v2raynjiedian.blog)
[![SEO & GEO](https://img.shields.io/badge/SEO%2FAEO-Optimized-blue?style=flat-square&logo=google&logoColor=white)](https://v2raynjiedian.blog)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[在线体验 (Production)](https://v2raynjiedian.blog/) • [技术长文库](https://v2raynjiedian.blog/articles/) • [品牌数据库](https://v2raynjiedian.blog/brands/) • [测试方法论](https://v2raynjiedian.blog/methodology/)

</div>

---

## 📖 项目简介

**v2rayn节点 (`v2raynjiedian.blog`)** 是一套专为中文出海从业者、跨境电商、科研开发者量身定制的高性能技术媒体与网络评测实验室工程。

本项目基于 **Astro 5 + Tailwind CSS** 纯静态预渲染（SSG）架构构建，融合专著级深度原创内容矩阵、离线客户端全文检索（Pagefind）、31 家独立机场品牌多维数据库与最高标准的 Enterprise Technical SEO / GEO 规范。

---

## ✨ 核心特性与量化指标

- 🚀 **104 个全量静态编译路由**：零客户端 CSR 渲染依赖，无 JavaScript 环境下爬虫亦可抓取 100% DOM 结构。
- 📚 **122,180+ 纯汉字深度专著**：涵盖四大核心门户主页（`/airport/`、`/vpn/`、`/clash/`、`/resources/`）及 28 个垂直二级子专题。
- 📝 **32 篇现役高搜索量长尾技术专著**：包括 Apple TV 4K 旁路网关配置、Netflix 2026 全区解锁、Stripe 信用卡防风控破解、晚高峰骨干网 QoS 限速实测等。
- 🏷️ **31 家主流机场品牌性能观测台**：收录详细套餐档位、测试环境节点延时、流媒体与 AI 解锁矩阵、网络拓扑图谱及专属折扣码。
- 🔍 **Pagefind 离线静态中文全文检索**：构建期完成 38,000+ 词汇索引切分，支持无后端服务器的毫秒级即时前端高亮搜索。
- 🛡️ **严格的 E-E-A-T 信任治理体系**：具备独立的关于实验室（`/about/`）、隐私政策（`/privacy/`）、服务条款（`/terms/`）与数据核实方法论（`/methodology/`）。
- 🎯 **最高级别 SEO / GEO 基础设施**：
  - **Canonical 矩阵**：100% 自引用规范绝对 HTTPS 路径；
  - **多引擎抓取兼容**：针对 Googlebot、bingbot、Baiduspider、yisouspider（神马/夸克）优化放行；
  - **双重 Sitemap 机制**：同时支持 `sitemap.xml` 与 `sitemap-index.xml`；
  - **结构化数据**：包含 `WebSite`、`Organization`、`Article`、`FAQPage`、`BreadcrumbList`，杜绝隐藏作弊。

---

## 🏗️ 技术栈与架构

| 模块 | 技术选型 | 说明 |
|---|---|---|
| **核心框架** | Astro 5.4.1 | 全静态输出模式 (`output: 'static'`, `trailingSlash: 'always'`) |
| **样式系统** | Tailwind CSS 3.4.17 | 现代卡片流排版 + Dark Network Observatory 观测站暗黑风格 |
| **内容集合** | Astro Content Layer API | `src/content.config.ts` 结合 Zod 进行严格 Schema 校验 |
| **全文检索** | Pagefind v1.6.0 (Extended) | 编译阶段静态提取 HTML `<body>` 文本并生成 WebAssembly 中文索引 |
| **Sitemap** | `@astrojs/sitemap` | 自动剔除 draft、404、search 页面，仅收录 102 个核心规范 URL |
| **Web 服务器** | Apache 2.4+ / Nginx | 配套生产级 `.htaccess`（强制 HTTPS、www 跳转、长效缓存、安全响应头） |

---

## 📁 目录结构概览

```text
v2raynjiedian.blog/
├── public/                       # 静态资源目录
│   ├── favicon.ico / favicon.png # 多规格高精网站图标
│   ├── robots.txt                # 预配置四大引擎放行规则与站点地图声明
│   └── images/                   # 品牌 Logo、默认封面图
├── src/
│   ├── components/               # 可复用 Astro 组件
│   │   ├── cards/                # 文章卡片、品牌卡片、价格卡片、专题卡片
│   │   ├── charts/               # 性能测速报告、网络拓扑、解锁矩阵
│   │   ├── navigation/           # 响应式双端 Header、面包屑导航
│   │   ├── review/               # FAQ 手风琴、目录 TOC、商业声明、品牌 CTA
│   │   └── seo/                  # SEOHead 核心组件 (Meta, Canonical, Schema)
│   ├── content/                  # Astro Content Collections (32 篇原创长文)
│   │   └── articles/*.md         # 严格符合 Zod Schema 校验的 Markdown 专著
│   ├── data/                     # 结构化静态数据集
│   │   ├── brands.ts             # 31 家品牌详尽参数与测试数据
│   │   ├── navigation.ts         # 全站导航与子分类结构
│   │   ├── site.ts               # 全局站点元数据与站长平台验证码插槽
│   │   └── links.ts              # 商业推广出站链接安全集中管理
│   ├── layouts/                  # 布局模板
│   │   ├── BaseLayout.astro      # 全局基础骨架
│   │   ├── ArticleLayout.astro   # 长文专用排版布局
│   │   ├── BrandLayout.astro     # 品牌详情页专用布局
│   │   └── TopicLayout.astro     # 专题矩阵聚合布局
│   └── pages/                    # 路由目录 (104 个静态页面)
│       ├── index.astro           # 门户首页
│       ├── airport/              # 机场推荐专栏门户 + 7 个垂直子专题
│       ├── clash/                # Clash 客户端专栏门户 + 7 个垂直子专题
│       ├── vpn/                  # VPN 与加速器专栏门户 + 7 个垂直子专题
│       ├── resources/            # 网络情报与避坑专栏门户 + 7 个垂直子专题
│       ├── articles/             # 32 篇长文动态路由 ([slug].astro) + 聚合门户 (index.astro)
│       ├── brands/               # 31 家品牌单页动态路由 ([slug].astro) + 品牌大厅 (index.astro)
│       ├── about.astro           # 评测实验室介绍
│       ├── privacy.astro         # 隐私保护政策
│       ├── terms.astro           # 服务条款与免责声明
│       ├── methodology.astro     # 网络评测标准与方法论体系
│       ├── search.astro          # Pagefind 静态全文检索中心
│       └── 404.astro             # 404 错误兜底页
├── .htaccess                     # Apache 生产级重写与安全策略配置
├── astro.config.mjs              # Astro 核心配置文件
├── package.json                  # 项目依赖与构建指令
├── tailwind.config.mjs           # Tailwind 主题与扩展配置
└── README.md                     # 项目技术文档
```

---

## 🚀 本地开发与构建流程

### 1. 克隆代码仓库
```bash
git clone https://github.com/zlzlzl98698-dev/v2raynjiedian.blog.git
cd v2raynjiedian.blog
```

### 2. 安装环境依赖
```bash
npm install
```

### 3. 启动本地热重载开发服务器
```bash
npm run dev
# 默认预览地址: http://localhost:4321
```

### 4. 生产环境全量编译构建
```bash
npm run build
```
> 执行链条说明：
> 1. `astro build`：全静态生成 HTML、CSS、JS 及 Sitemap 至 `dist/` 目录；
> 2. `pagefind --site dist`：为 `dist/` 下的 HTML 页面建立静态全文搜索索引；
> 3. 自动同步生产配置：复制 `.htaccess` 与物理镜像 `sitemap.xml` 至 `dist/`。

### 5. 本地预览生产构建产物
```bash
npm run preview
# 默认端口: http://localhost:4328
```

---

## 🌐 生产部署指引

### 方式 A：Apache 2.4+ 静态主机部署（推荐）
1. 确保 Apache 主机已启用 `mod_rewrite`、`mod_headers` 与 `mod_expires` 模块；
2. 本地执行 `npm run build` 生成构建产物；
3. 将项目根目录下的 `.htaccess` 以及 `dist/` 目录中的全部文件上传至网站根目录（如 `/var/www/html/` 或 `public_html/`）。

### 方式 B：Cloudflare Pages / Vercel / Netlify 部署
- **Framework Preset**: `Astro`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: `>= 18.17.1`

---

## 🛡️ 搜索引擎站长平台接入指南

在 `src/data/site.ts` 中预留了各大主流搜索引擎的站点所有权验证槽位，获得验证代码后直接填入对应字段，执行 `npm run build` 即可在所有页面静态 `<head>` 中原样输出：

```typescript
// src/data/site.ts
verification: {
  google: 'YOUR_GOOGLE_VERIFICATION_CODE', // google-site-verification
  bing: 'YOUR_BING_VERIFICATION_CODE',     // msvalidate.01
  baidu: 'YOUR_BAIDU_VERIFICATION_CODE',   // baidu-site-verification
  shenma: 'YOUR_SHENMA_VERIFICATION_CODE', // shenma-site-verification
}
```

---

## ⚖️ 免责声明 (Disclaimer)

本项目所有技术教程、测速数据与分流规则，仅供网络通信协议学术研究、跨境合规外贸办公以及海外软件开发者合法使用。严禁利用本项目内容从事任何违反所在国家与地区法律法规的活动。

---

<div align="center">
Made with ❤️ by <strong>v2rayn节点评测实验室</strong> • Copyright © 2026
</div>
