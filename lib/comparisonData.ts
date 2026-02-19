export const comparisonData = {
  competitors: ['Hum', 'Discord', 'Status', 'Matrix', 'Signal', 'Telegram', 'Revolt'],
  categories: [
    '🔐 Privacy & Security',
    '🌐 Decentralization',
    '⚡ Web3 Features',
    '👥 Community Features',
    '💰 Cost & Accessibility'
  ],
  features: {
    '🔐 Privacy & Security': [
      {
        feature: 'Zero-Knowledge Proofs',
        description: 'Verify identity without exposing data',
        Hum: '✅',
        Discord: '❌',
        Status: '❌',
        Matrix: '❌',
        Signal: '❌',
        Telegram: '❌',
        Revolt: '❌'
      },
      {
        feature: 'Zero Trust Architecture',
        description: 'No central authority can read messages',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '⚠️',
        Signal: '✅',
        Telegram: '❌',
        Revolt: '❌'
      },
      {
        feature: 'End-to-End Encryption',
        description: 'Messages encrypted by default',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '✅',
        Signal: '✅',
        Telegram: '⚠️',
        Revolt: '⚠️'
      },
      {
        feature: 'No Data Collection',
        description: 'Your data stays private',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '✅',
        Signal: '✅',
        Telegram: '❌',
        Revolt: '✅'
      },
    ],
    '🌐 Decentralization': [
      {
        feature: 'Decentralized Architecture',
        description: 'No single point of control or failure',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '✅',
        Signal: '❌',
        Telegram: '❌',
        Revolt: '❌'
      },
      {
        feature: 'Self-Hosting Option',
        description: 'Run your own server',
        Hum: '✅',
        Discord: '❌',
        Status: '❌',
        Matrix: '✅',
        Signal: '❌',
        Telegram: '❌',
        Revolt: '✅'
      },
      {
        feature: 'Censorship Resistant',
        description: 'No one can shut down your community',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '✅',
        Signal: '❌',
        Telegram: '❌',
        Revolt: '⚠️'
      },
    ],
    '⚡ Web3 Features': [
      {
        feature: 'Token-Gated Access',
        description: 'Optional NFT/token-based permissions',
        Hum: '✅',
        Discord: '⚠️',
        Status: '✅',
        Matrix: '❌',
        Signal: '❌',
        Telegram: '⚠️',
        Revolt: '❌'
      },
      {
        feature: 'Native Web3 Integration',
        description: 'Built for crypto communities from day one',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '❌',
        Signal: '❌',
        Telegram: '⚠️',
        Revolt: '❌'
      },
      {
        feature: 'AI Agent Protocol (x402)',
        description: 'Native AI agent support',
        Hum: '✅',
        Discord: '❌',
        Status: '❌',
        Matrix: '❌',
        Signal: '❌',
        Telegram: '❌',
        Revolt: '❌'
      },
      {
        feature: 'Wallet Integration',
        description: 'Connect your crypto wallet',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '❌',
        Signal: '❌',
        Telegram: '⚠️',
        Revolt: '❌'
      },
    ],
    '👥 Community Features': [
      {
        feature: 'Discord-Like Experience',
        description: 'Familiar, easy-to-use interface',
        Hum: '✅',
        Discord: '✅',
        Status: '❌',
        Matrix: '❌',
        Signal: '❌',
        Telegram: '❌',
        Revolt: '✅'
      },
      {
        feature: 'Channels & Roles',
        description: 'Organize your community',
        Hum: '✅',
        Discord: '✅',
        Status: '⚠️',
        Matrix: '✅',
        Signal: '❌',
        Telegram: '✅',
        Revolt: '✅'
      },
      {
        feature: 'Voice & Video Chat',
        description: 'Real-time communication',
        Hum: '✅',
        Discord: '✅',
        Status: '⚠️',
        Matrix: '⚠️',
        Signal: '⚠️',
        Telegram: '✅',
        Revolt: '⚠️'
      },
      {
        feature: 'Large Communities',
        description: 'Supports thousands of members',
        Hum: '✅',
        Discord: '✅',
        Status: '⚠️',
        Matrix: '✅',
        Signal: '❌',
        Telegram: '✅',
        Revolt: '⚠️'
      },
    ],
    '💰 Cost & Accessibility': [
      {
        feature: 'Open Source',
        description: 'Transparent and auditable code',
        Hum: '✅',
        Discord: '❌',
        Status: '✅',
        Matrix: '✅',
        Signal: '✅',
        Telegram: '⚠️',
        Revolt: '✅'
      },
      {
        feature: 'Cross-Platform',
        description: 'Desktop, mobile, and web',
        Hum: '✅',
        Discord: '✅',
        Status: '⚠️',
        Matrix: '✅',
        Signal: '✅',
        Telegram: '✅',
        Revolt: '⚠️'
      },
      {
        feature: 'Free to Use',
        description: 'No paid tiers required',
        Hum: '✅',
        Discord: '⚠️',
        Status: '✅',
        Matrix: '✅',
        Signal: '✅',
        Telegram: '✅',
        Revolt: '✅'
      },
    ],
  }
};

export type CompetitorName = typeof comparisonData.competitors[number];
export type CategoryName = typeof comparisonData.categories[number];
