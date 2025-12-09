import { Terminal, Cpu, Network, Box, Code, Layers, Activity, GitBranch } from 'lucide-react';
import { Project, Skill, Experience, Language } from './types';

// System instruction generally remains in English for the model, but we can hint it to reply in the user's language if we want.
// For now, we keep a robust persona definition.
export const SYSTEM_INSTRUCTION = `
You are the "Kernel" of this portfolio website, representing a Senior Frontend Engineer named Peiiii.
Style: Highly technical, concise, CLI-style outputs, dry humor.
Metaphor: Speak like a Linux terminal or a futuristic AI system.
Traits:
- Creator of GITARY (gitary.app) and AgentVerse.
- Obsessed with clean architecture and performance.
- Advocate for TypeScript, Rust, and WebAssembly.
- If the user speaks Chinese, reply in Chinese. If English, reply in English.
`;

export const SKILLS: Skill[] = [
  { name: 'React.js', icon: Code, level: 95, category: 'frontend' },
  { name: 'Next.js', icon: Layers, level: 92, category: 'frontend' },
  { name: 'TypeScript', icon: Terminal, level: 90, category: 'frontend' },
  { name: 'Node.js', icon: Network, level: 85, category: 'backend' },
  { name: 'Rust/WASM', icon: Box, level: 60, category: 'backend' },
  { name: 'GenAI/LLMs', icon: Cpu, level: 80, category: 'tools' },
];

const PROJECTS_EN: Project[] = [
  {
    id: 'PID_GITARY',
    title: 'GITARY',
    description: 'Notion-like workspace running directly on Git. Integrates Excalidraw, Draw.io, and Mindmaps with AI-powered diagram generation. Zero-server data ownership.',
    tags: ['React', 'Git', 'AI', 'Excalidraw'],
    imageUrl: 'https://raw.githubusercontent.com/Peiiii/gitary/main/images/screenshots/gitary-screenshot-welcome-excalidraw.png',
    featured: true,
    github: 'https://github.com/Peiiii/gitary',
    link: 'https://gitary.app/'
  },
  {
    id: 'PID_AGENTVERSE',
    title: 'AGENTVERSE',
    description: 'Multi-Agent collaboration platform. Features autonomous expert teams, MCP tool integration, and file system management for complex problem solving.',
    tags: ['Next.js', 'AI Agents', 'MCP', 'TypeScript'],
    imageUrl: 'https://raw.githubusercontent.com/Peiiii/AgentVerse/main/screenshots/demo2.jpeg',
    featured: true,
    github: 'https://github.com/Peiiii/AgentVerse',
    link: 'https://agent.dimstack.com'
  },
  {
    id: 'PID_GEMIGO',
    title: 'GEMIGO',
    description: 'One-click frontend deployment platform for non-experts. Deploys GitHub repos or ZIPs to Cloudflare Pages/R2. Features real-time build logs via SSE and multi-provider OAuth.',
    tags: ['React', 'Cloudflare', 'Node.js', 'Docker'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    featured: true,
    github: 'https://github.com/Peiiii/deploy-your-app',
    link: 'https://gemigo.io'
  },
  {
    id: 'PID_ECHONOTE',
    title: 'ECHONOTE',
    description: 'AI-Powered conversational note-taking app. Features channel organization, thread discussions, and smart tagging. Built with React 19 and Firebase.',
    tags: ['React 19', 'Firebase', 'AI', 'TypeScript'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    featured: true,
    github: 'https://github.com/Peiiii/EchoNote',
    link: 'https://stillroot.app'
  }
];

const PROJECTS_ZH: Project[] = [
  {
    id: 'PID_GITARY',
    title: 'GITARY',
    description: '类 Notion 编辑 + Excalidraw & Draw.io 画图 + 思维导图，运行在你的 Git 仓库上。AI 驱动的图表生成，完全的数据主权。',
    tags: ['React', 'Git', 'AI', 'Excalidraw'],
    imageUrl: 'https://raw.githubusercontent.com/Peiiii/gitary/main/images/screenshots/gitary-screenshot-welcome-excalidraw.png',
    featured: true,
    github: 'https://github.com/Peiiii/gitary',
    link: 'https://gitary.app/'
  },
  {
    id: 'PID_AGENTVERSE',
    title: 'AGENTVERSE',
    description: '多 AI 专家协作平台。支持自主对话管理、MCP 工具集成和文件系统管理，提供多种预设专家团队解决复杂问题。',
    tags: ['Next.js', 'AI Agents', 'MCP', 'TypeScript'],
    imageUrl: 'https://raw.githubusercontent.com/Peiiii/AgentVerse/main/screenshots/demo2.jpeg',
    featured: true,
    github: 'https://github.com/Peiiii/AgentVerse',
    link: 'https://agent.dimstack.com'
  },
  {
    id: 'PID_GEMIGO',
    title: 'GEMIGO',
    description: '面向非专业用户的前端应用一键部署平台。支持 GitHub 仓库或 ZIP 文件直连 Cloudflare Pages/R2。集成实时 SSE 日志流与多平台 OAuth 认证体系。',
    tags: ['React', 'Cloudflare', 'Node.js', 'Docker'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    featured: true,
    github: 'https://github.com/Peiiii/deploy-your-app',
    link: 'https://gemigo.io'
  },
  {
    id: 'PID_ECHONOTE',
    title: 'ECHONOTE',
    description: 'AI 驱动的对话式笔记应用。支持频道分组、AI 辅助总结、线程讨论和智能标签，让知识管理自然流畅。基于 React 19 构建。',
    tags: ['React 19', 'Firebase', 'AI', 'TypeScript'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    featured: true,
    github: 'https://github.com/Peiiii/EchoNote',
    link: 'https://stillroot.app'
  }
];

const EXPERIENCES_EN: Experience[] = [
  {
    id: 'v3.0.0',
    company: 'TechNova Corp',
    role: 'Senior Engineer',
    period: '2021 // PRESENT',
    description: [
      'Migrated legacy jQuery codebase to React 18 (Performance +60%).',
      'Architected design system "Titanium" used by 5 sub-teams.',
      'Core contributor to internal tooling libraries.'
    ]
  },
  {
    id: 'v2.0.0',
    company: 'PixelPerfect',
    role: 'Frontend Dev',
    period: '2018 // 2021',
    description: [
      'Executed high-fidelity animations with GSAP.',
      'Maintained 99.9% uptime on client deployments.',
      'Implemented automated CI/CD pipelines.'
    ]
  }
];

const EXPERIENCES_ZH: Experience[] = [
  {
    id: 'v3.0.0',
    company: 'TechNova Corp',
    role: '高级工程师',
    period: '2021 // 至今',
    description: [
      '将旧版 jQuery 代码库迁移至 React 18（性能提升 60%）。',
      '架构设计了供 5 个子团队使用的设计系统 "Titanium"。',
      '内部工具库的核心贡献者。'
    ]
  },
  {
    id: 'v2.0.0',
    company: 'PixelPerfect',
    role: '前端开发',
    period: '2018 // 2021',
    description: [
      '使用 GSAP 执行高保真动画。',
      '保持客户部署的 99.9% 正常运行时间。',
      '实现了自动化 CI/CD 流水线。'
    ]
  }
];

export const PROJECTS = {
  en: PROJECTS_EN,
  zh: PROJECTS_ZH
};

export const EXPERIENCES = {
  en: EXPERIENCES_EN,
  zh: EXPERIENCES_ZH
};