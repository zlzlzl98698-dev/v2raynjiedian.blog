export interface ClientItem {
  name: string;
  platform: ('Windows' | 'macOS' | 'Android' | 'iOS' | 'Linux' | 'OpenWrt')[];
  core: string;
  features: string;
  downloadSource: string;
  recommended: boolean;
  notes?: string;
}

export const clientsData: ClientItem[] = [
  // Windows
  {
    name: 'Clash Verge Rev',
    platform: ['Windows', 'macOS', 'Linux'],
    core: 'Mihomo (Clash.Meta)',
    features: '现代界面、订阅管理、TUN 虚拟网卡模式、分流规则定制',
    downloadSource: 'GitHub 官方 Release',
    recommended: true,
    notes: '目前 Windows 与 macOS 平台最推荐的开源代理客户端。',
  },
  {
    name: 'v2rayN',
    platform: ['Windows', 'Linux'],
    core: 'Xray / sing-box',
    features: '老牌经典、支持 VLESS/VMess/Trojan/Hysteria2 等全协议',
    downloadSource: 'GitHub 官方 Release',
    recommended: true,
    notes: '轻量高效，适合需要多协议混合与高级路由规则的用户。',
  },
  {
    name: 'FlClash',
    platform: ['Windows', 'macOS', 'Android', 'Linux'],
    core: 'Mihomo',
    features: '基于 Flutter 开发，全平台一致体验，简洁直观',
    downloadSource: 'GitHub 官方 Release',
    recommended: true,
  },
  {
    name: 'Clash Nyanpasu',
    platform: ['Windows', 'macOS', 'Linux'],
    core: 'Clash / Mihomo',
    features: '萌系外观定制、多内核快速切换与高级扩展脚本',
    downloadSource: 'GitHub 官方 Release',
    recommended: false,
  },
  {
    name: 'Hiddify',
    platform: ['Windows', 'macOS', 'Android', 'iOS', 'Linux'],
    core: 'sing-box',
    features: '全平台、全协议支持、深度自适应分流、界面直观',
    downloadSource: 'GitHub / App Store',
    recommended: true,
    notes: '跨平台零门槛入门首选工具。',
  },
  {
    name: 'Karing',
    platform: ['Windows', 'macOS', 'Android', 'iOS', 'Linux'],
    core: 'sing-box',
    features: '面向新手的规则管理、兼容多种订阅格式、多设备同步',
    downloadSource: 'GitHub / App Store',
    recommended: true,
  },
  // Android
  {
    name: 'v2rayNG',
    platform: ['Android'],
    core: 'Xray',
    features: '安卓端装机必备、支持节点链接扫码导入与分应用代理',
    downloadSource: 'GitHub 官方 Release',
    recommended: true,
  },
  {
    name: 'Clash Meta for Android (CMFA)',
    platform: ['Android'],
    core: 'Mihomo',
    features: '规则分流、支持新协议与策略组选择',
    downloadSource: 'GitHub 官方 Release',
    recommended: true,
  },
  // iOS
  {
    name: 'Shadowrocket (小火箭)',
    platform: ['iOS'],
    core: '自研高性能内核',
    features: '规则代理、请求调试、按需连接、性价比极高（海外美区 $2.99）',
    downloadSource: '海外 App Store',
    recommended: true,
    notes: 'iOS 用户首选，生态完善且几乎所有机场均直接支持。',
  },
  {
    name: 'Stash',
    platform: ['iOS', 'macOS'],
    core: 'Clash 规则引擎',
    features: 'iOS 上的 Clash 最佳体验，支持覆写与策略组',
    downloadSource: '海外 App Store',
    recommended: true,
  },
  {
    name: 'Quantumult X (圈 X)',
    platform: ['iOS'],
    core: '自研高性能分流',
    features: '极客向规则分流、JavaScript 脚本与高度自由的 UI',
    downloadSource: '海外 App Store',
    recommended: false,
  },
  {
    name: 'Surge 5',
    platform: ['iOS', 'macOS'],
    core: 'Surge 自研引擎',
    features: '顶尖网络调试工具、极致性能与稳定性，价格昂贵',
    downloadSource: '官网 / App Store',
    recommended: false,
  },
  // OpenWrt
  {
    name: 'OpenClash',
    platform: ['OpenWrt'],
    core: 'Mihomo',
    features: '路由器全家透明代理、分流规则、DNS 防污染',
    downloadSource: 'GitHub 官方项目',
    recommended: true,
    notes: '软路由与家庭网关部署最广泛的开源插件。',
  },
  {
    name: 'PassWall 2',
    platform: ['OpenWrt'],
    core: 'Xray / sing-box',
    features: '支持多节点负载均衡、分流回落与高级 ACL 策略',
    downloadSource: 'GitHub 官方项目',
    recommended: true,
  },
];
