import { Terminal, Cpu, Network, Box, Code, Layers, Activity, GitBranch } from 'lucide-react';
import { Project, Skill, Experience } from './types';

export const SYSTEM_INSTRUCTION = `
You are the "Kernel" of this portfolio website, representing a Senior Frontend Engineer named Alex.
Style: Highly technical, concise, CLI-style outputs, dry humor.
Metaphor: Speak like a Linux terminal or a futuristic AI system (e.g., "Acknowledged.", "Executing query...", "Error: Sarcasm module not found.").
Traits:
- Obsessed with clean architecture and performance (O(n) complexity matters).
- Advocate for TypeScript, Rust, and WebAssembly.
- If asked about hiring, respond with "Initiating employment handshake protocols... Referencing CONTACT_MODULE."

Keep answers short. Use code blocks for technical explanations.
`;

export const SKILLS: Skill[] = [
  { name: 'React.js', icon: Code, level: 95, category: 'frontend' },
  { name: 'Next.js', icon: Layers, level: 92, category: 'frontend' },
  { name: 'TypeScript', icon: Terminal, level: 90, category: 'frontend' },
  { name: 'Node.js', icon: Network, level: 85, category: 'backend' },
  { name: 'Rust/WASM', icon: Box, level: 60, category: 'backend' },
  { name: 'GenAI/LLMs', icon: Cpu, level: 80, category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 'PID_8492',
    title: 'NEXUS_DASH',
    description: 'Real-time crypto analytics utilizing D3.js & WebSockets for sub-millisecond data visualization.',
    tags: ['React', 'D3.js', 'WebSocket'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    featured: true,
    github: 'https://github.com',
    link: 'https://demo.com'
  },
  {
    id: 'PID_1024',
    title: 'AETHER_CORE',
    description: 'Multimodal AI interface integrating Gemini API with low-latency Web Audio API streams.',
    tags: ['Gemini', 'AudioWorklet', 'React'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    featured: true,
    github: 'https://github.com'
  },
  {
    id: 'PID_2048',
    title: 'VOXEL_ENG',
    description: 'Browser-based 3D voxel manipulation engine running on Three.js & R3F.',
    tags: ['WebGL', 'Three.js', 'Rust'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    featured: false,
    github: 'https://github.com'
  },
  {
    id: 'PID_4096',
    title: 'FLOW_STATE',
    description: 'Local-first productivity CLI for developers. 100% keyboard driven.',
    tags: ['Electron', 'SQLite', 'Tauri'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    featured: false,
    github: 'https://github.com'
  }
];

export const EXPERIENCES: Experience[] = [
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
