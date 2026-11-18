export interface SiteVerification {
  google?: string;
  bing?: string;
  baidu?: string;
  shenma?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  locale: string;
  brandName: string;
  keywords: string[];
  affiliateDisclosure: string;
  verification?: SiteVerification;
}

export const siteConfig: SiteConfig = {
  name: 'v2rayn节点',
  title: 'v2rayn节点 | 2026 中文机场推荐与网络代理客户端评测实验室',
  description: '专业的中文网络代理与 VPN 评测媒体。提供 30+ 机场品牌深度横向对比、晚高峰实测数据、AI与流媒体解锁矩阵、Clash Verge 与 v2rayN 客户端配置全指南。',
  url: 'https://v2raynjiedian.blog',
  author: 'v2rayn节点编辑部',
  locale: 'zh-CN',
  brandName: 'v2rayn节点',
  keywords: [
    '机场推荐',
    '2026机场推荐',
    '机场排行',
    '性价比机场',
    '稳定机场',
    '便宜机场',
    '免费梯子',
    '科学上网',
    'VPN推荐',
    'Clash Verge',
    'v2rayN',
    '光速云',
  ],
  affiliateDisclosure: '本站部分页面包含商业推广与联盟注册链接。通过链接注册可能会为本站带来少量佣金支持服务器维护，这绝不会增加您的实际支付金额。所有评测结论均基于实测数据与公开参数独立撰写。',
  // 站长平台验证码预留槽位（若获得验证码直接在此填入，构建后自动输出于 HTML 源码中）
  verification: {
    google: '',
    bing: '',
    baidu: '',
    shenma: '',
  },
};
