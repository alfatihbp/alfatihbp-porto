import ecommerceImg from '@/assets/images/project-ecommerce.svg';
import dashboardImg from '@/assets/images/project-dashboard.svg';
import weatherImg from '@/assets/images/project-weather.svg';

export const projectsData = [
  {
    id: "project-1",
    title: "E-Commerce Tech Platform",
    description: "Platform toko online modern dengan katalog dinamis, state cart instan, checkout interaktif, dan interface responsif bergaya dark-forest.",
    image: ecommerceImg,
    tags: ["React 19", "Vite", "CSS Modules", "Context API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    rotation: "-1.5deg", // Asymmetrical rotation angle
  },
  {
    id: "project-2",
    title: "Kanban Task Velocity Board",
    description: "Aplikasi manajemen tugas harian dengan drag & drop intuitif, tracking progres sprint, filter kategori, dan auto-save lokal.",
    image: dashboardImg,
    tags: ["React", "JavaScript", "Local Storage", "CSS Grid"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    rotation: "2deg",
  },
  {
    id: "project-3",
    title: "Weather & Climate Intelligence",
    description: "Dashboard pemantau cuaca real-time dengan visualisasi kurva suhu, indeks angin/UV, dan prakiraan cuaca 7 hari ke depan.",
    image: weatherImg,
    tags: ["React", "REST API", "Data Viz", "Responsive"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    rotation: "-2deg",
  },
];
