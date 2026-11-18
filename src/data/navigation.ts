export interface NavSubItem {
  title: string;
  href: string;
  description: string;
  slug: string;
  badge?: string;
}

export interface NavItem {
  title: string;
  href: string;
  slug: string;
  description: string;
  children: NavSubItem[];
}

export const navigationData: NavItem[] = [
  {
    title: '机场推荐',
    href: '/airport/',
    slug: 'airport',
    description: '涵盖优质节点、高性价比与老牌专线机场实测推荐',
    children: [
      {
        title: '机场推荐',
        href: '/airport/recommend/',
        slug: 'recommend',
        description: '2026 年度编辑精选与主力梯子全面推荐',
      },
      {
        title: '机场排行',
        href: '/airport/rankings/',
        slug: 'rankings',
        description: '基于晚高峰测速、稳定性与延迟综合排行榜',
      },
      {
        title: '性价比机场',
        href: '/airport/value/',
        slug: 'value',
        description: '月均 5-15 元高流量低成本专线机场方案',
      },
      {
        title: '稳定机场',
        href: '/airport/stable/',
        slug: 'stable',
        description: 'BGP/IEPL/IPLC 物理专线与企业级内网抗封锁节点',
      },
      {
        title: '便宜机场',
        href: '/airport/cheap/',
        slug: 'cheap',
        description: '低至 5.6 元起步的平价学生与轻度用户套餐',
      },
      {
        title: '免费梯子',
        href: '/airport/free-ladder/',
        slug: 'free-ladder',
        description: '免费翻墙工具风险解析与安全过渡指南',
      },
      {
        title: '科学上网',
        href: '/airport/guide/',
        slug: 'guide',
        description: '零基础科学上网全流程原理与节点选择攻略',
      },
    ],
  },
  {
    title: 'VPN 与加速器',
    href: '/vpn/',
    slug: 'vpn',
    description: '国际知名 VPN 与专业网络加速器横向对比及评测',
    children: [
      {
        title: 'VPN 推荐',
        href: '/vpn/recommend/',
        slug: 'recommend',
        description: '全球顶级免日志商业 VPN 与隐私安全评测',
      },
      {
        title: '免费 VPN',
        href: '/vpn/free/',
        slug: 'free',
        description: '常见免费 VPN 安全漏洞、限速与隐私风险实测',
      },
      {
        title: '手机 VPN',
        href: '/vpn/mobile/',
        slug: 'mobile',
        description: 'iOS 与 Android 移动端开箱即用翻墙软件横测',
      },
      {
        title: 'VPN 软件评测',
        href: '/vpn/reviews/',
        slug: 'reviews',
        description: '协议深度加密、WireGuard 与 OpenVPN 性能横评',
      },
      {
        title: 'VPN 加速器',
        href: '/vpn/accelerator/',
        slug: 'accelerator',
        description: '面向海外游戏、跨境电商与远洋办公的加速工具',
      },
      {
        title: '加速器对比',
        href: '/vpn/comparison/',
        slug: 'comparison',
        description: '代理机场与传统 VPN 的架构、速度和成本深度对比',
      },
      {
        title: '好用的 VPN',
        href: '/vpn/best/',
        slug: 'best',
        description: '国内网络环境下真实可用且抗封锁的海外 VPN 清单',
      },
    ],
  },
  {
    title: 'Clash 客户端',
    href: '/clash/',
    slug: 'clash',
    description: '主流平台 Clash、v2rayN、sing-box 客户端全平台指南',
    children: [
      {
        title: 'Clash 推荐',
        href: '/clash/recommend/',
        slug: 'recommend',
        description: '各平台最稳定好用的开源代理客户端横向推荐',
      },
      {
        title: 'Clash Verge',
        href: '/clash/verge/',
        slug: 'verge',
        description: 'Clash Verge Rev 核心功能与现代 UI 特色详解',
      },
      {
        title: 'Clash Verge 下载',
        href: '/clash/verge-download/',
        slug: 'verge-download',
        description: 'GitHub 官方最新发布版下载及多平台安装包校验',
      },
      {
        title: 'Clash Verge 订阅',
        href: '/clash/verge-subscribe/',
        slug: 'verge-subscribe',
        description: '机场订阅链接导入、自动更新与转换失败排错',
      },
      {
        title: 'Clash Meta',
        href: '/clash/meta/',
        slug: 'meta',
        description: 'Mihomo (Clash.Meta) 核心特性、VLESS 及 Hysteria2 支持',
      },
      {
        title: 'Clash 使用教程',
        href: '/clash/tutorials/',
        slug: 'tutorials',
        description: '分流规则、TUN 虚拟网卡模式与 DNS 防污染完全教程',
      },
      {
        title: 'Clash 故障排查',
        href: '/clash/troubleshooting/',
        slug: 'troubleshooting',
        description: '解决节点超时、系统代理失效、端口占用与回环报错',
      },
    ],
  },
  {
    title: '资源与情报',
    href: '/resources/',
    slug: 'resources',
    description: '节点检测工具、跑路预警雷达、情报与新手解答库',
    children: [
      {
        title: '免费节点',
        href: '/resources/free-nodes/',
        slug: 'free-nodes',
        description: '公共免费 v2ray/clash 节点安全隐患与应急备用方案',
      },
      {
        title: '跑路预警',
        href: '/resources/runaway-warning/',
        slug: 'runaway-warning',
        description: '机场跑路前兆分析、域名异常及避坑自保指南',
      },
      {
        title: '机场 FAQ',
        href: '/resources/faq/',
        slug: 'faq',
        description: '高频问题解答：流媒体 4K、AI 工具访问、退款与付款',
      },
      {
        title: '机场风险情报',
        href: '/resources/intel/',
        slug: 'intel',
        description: 'GFW 封锁动态、晚高峰骨干网波动与专线割接追踪',
      },
      {
        title: '节点检测',
        href: '/resources/node-check/',
        slug: 'node-check',
        description: '真延迟、落地 IP 纯净度与流媒体解锁状态检测方法',
      },
      {
        title: '订阅问题',
        href: '/resources/subscription-issues/',
        slug: 'subscription-issues',
        description: '订阅更新 403/500、格式不兼容与本地配置覆盖修复',
      },
      {
        title: '新手帮助',
        href: '/resources/beginner-guide/',
        slug: 'beginner-guide',
        description: '专有名词速查表、协议选择建议与新手避坑第一课',
      },
    ],
  },
];
