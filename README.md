# 🔗 Link

**Link** is a beautiful, interactive, and premium "Link-in-Bio" web application (similar to Linktree) built for digital creators and developers. It serves as a unified hub to showcase social profiles, projects, and portfolios with stunning visual aesthetics.

Live demo/profile displays details for **Syahreza Satria** (Digital Creator | Web Developer | UI Designer).

---

## ✨ Features

- **Interactive 3D Fluid Background**: Powered by a custom WebGL/Three.js fluid simulation shader (`LiquidEther`) that reacts dynamically to mouse movement.
- **Glassmorphism & Sleek Dark Mode**: Designed with premium typography, micro-interactions, and a modern color palette.
- **Dynamic Text Effects**: Integrated shiny shimmering text animations (`ShinyText`) for profile headings.
- **Fully Responsive**: Optimized for all devices, from mobile screens to desktop browsers.
- **Easy Customization**: Centrally managed profile data makes updating links, socials, and bios extremely straightforward.

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js 16](https://nextjs.org/) (React 19 & TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **3D Graphics**: [Three.js](https://threejs.org/) (for the fluid background simulation)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome 6 & Ionicons)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/syahreza-satria/link.git
   cd link
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the live application.

### Building for Production

To create a production-ready build:
```bash
npm run build
npm run start
```

---

## ⚙️ Customization

To personalize the website with your own information:

1. Open the file [app/src/data.ts](file:///c:/Users/satri/Documents/Development/web-app/link/app/src/data.ts).
2. Update the `profile` object, the `social` array, and the `links` array with your details:
   ```typescript
   export const profile = {
     name: "Your Name",
     role: "Your Role / Description",
     avatar: "/path-to-your-avatar.webp",
     bio: "A short bio about yourself...",
   };
   ```
3. Place your profile picture/avatar inside the `public/` directory (e.g., as `public/avatar.webp`).
