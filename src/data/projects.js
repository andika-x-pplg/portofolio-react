import netubeImage from "../assets/gambar/netube.png";
import WarungNusantaraImage from "../assets/gambar/WarungNusantara.png";
import portofolioImage from "../assets/gambar/portofolio.png";
import gamevaultImage from "../assets/gambar/gamevault.png";
import notepadImage from "../assets/gambar/notepad.png";
import marketImage from "../assets/gambar/MarketSimulator.png";

export const projectsData = [
  {
    id: 1,
    title: "Netube Application",
    description: "Movie application developed with Flutter featuring authentication, Firebase integration, a responsive interface, and rich movie browsing features.",
    image: netubeImage,
    githubUrl: "https://github.com/andika-x-pplg/netube",
    tags: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 2,
    title: "Warung Nusantara Web",
    description: "Modern food ordering website built with React featuring a shopping cart, dark mode, responsive design, local storage persistence, category filtering, and a clean UI.",
    image: WarungNusantaraImage,
    githubUrl: "https://github.com/andika-x-pplg/warung-nusantara",
    tags: ["React", "JavaScript", "CSS", "Local Storage"],
  },
  {
    id: 3,
    title: "Portofolio",
    description: "An elegant, dynamic, and simple modern portfolio.",
    image: portofolioImage,
    githubUrl: "https://github.com/andika-x-pplg/portofolio-react",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Game Vault",
    description: "GameVault is a game discovery and distribution platform inspired by modern game storefront experiences.",
    image: gamevaultImage,
    githubUrl: "https://github.com/andika-x-pplg/gamevault-web",
    tags: ["React", "Tailwind CSS", "PHP", "Laravel", "MySql"],
  },
  {
    id: 5,
    title: "Catatan PWA",
    description: "A simple PWA (Progressive Web App) note-taking application designed to make it easy to record tasks, homework, or personal notes—with the option to lock specific notes for privacy.",
    image: notepadImage,
    githubUrl: "https://github.com/andika-x-pplg/catatan",
    tags: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: 6,
    title: "Market Simulator",
    description: "Build and manage your own store in a 3D simulation game. Customize your shop, manage products and prices, serve customers, and compete with other stores to grow your business. Development Notice: This game is currently no longer under active development. No further updates or new features are planned at this time.",
    image: marketImage,
    githubUrl: "https://github.com/andika-x-pplg/shop-simulator",
    tags: ["C++"],
  },
];

