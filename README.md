# 🔗 Link - Premium Link-in-Bio Hub

**Link** is a beautiful, interactive, and premium "Link-in-Bio" web application (similar to Linktree) built for digital creators and developers. It solves the limitation of social media platforms that restrict users to a single profile link by providing a futuristic, responsive, and highly animated hub to showcase all of your portfolios, projects, and social media channels in one place.

---

## 🛡️ Badges

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Key Features

- **Ambient Background Rays (SideRays)**: A premium background layout with dynamic ray animations that add depth and a modern aesthetic.
- **Glowing Text Effects (ShinyText)**: Sleek, shimmering text animations to highlight your job role and grab visitors' attention.
- **Lightbox Avatar Preview**: Tap or click the profile picture to view a larger version in a smooth, spring-animated modal backdrop.
- **Quick Share Button**: Seamless integration with the browser's native Web Share API, enabling users to share your link hub in a single click.
- **SEO & Metadata Optimization**: Loaded with rich OpenGraph tags, Twitter Cards, search engine directives, and structured JSON-LD schemas (`ProfilePage` & `Person`) for maximum search visibility.
- **Vercel Analytics**: Built-in support using `@vercel/analytics` to monitor visitor engagement and link click-through rates.
- **Responsive Glassmorphism UI**: Beautiful frosted-glass UI elements that fit perfectly on all mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

### Frontend
- **Core Framework**: [Next.js v16](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (configured via `@tailwindcss/postcss`) & [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Animation & Motion**: [Motion](https://motion.dev/) (Framer Motion)
- **Graphics/WebGL**: [Three.js](https://threejs.org/) & [OGL](https://github.com/oopsa/ogl) (includes `LiquidEther.tsx` component for experimental fluid-simulation backgrounds)
- **Icon Libraries**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome 6 & Ionicons) & [Lucide React](https://lucide.dev/)

### Tools & Infrastructure
- **Web Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Linting**: [ESLint](https://eslint.org/)
- **Runtime Environment**: [Node.js](https://nodejs.org/)

---

## 📸 Screenshot / Demo

*User Interface Diagram Placeholder:*

```
┌─────────────────────────────────────────┐
│ [🔗 Share]                              │
│                                         │
│          (✨ Glowing Profile Avatar ✨) │
│               Syahreza Satria           │
│           - DIGITAL CREATOR -           │
│                                         │
│  [ Mie Ayam Production               ]  │
│  [ Discord Server                    ]  │
│  [ 🌐 Developer Portfolio (Highlighted)]  │
│  [ 📷 Photography (Highlighted)      ]  │
│  [ Rakit CV                          ]  │
│                                         │
│  (𝕏) (🔗) (💼) (✉️) (🐙)                 │
│                                         │
│           Made with 🤍 by Satria        │
└─────────────────────────────────────────┘
```

*(To add actual screenshots, save your images under the `/public` folder and update this section)*

---

## 📋 Prerequisites

Before starting, ensure your development environment meets the following requirements:
- **Node.js**: Version `18.x` or higher (LTS recommended)
- **NPM / Bun / Yarn**: Default package manager bundled with Node.js

---

## ⚙️ Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/syahreza-satria/link.git
   cd link
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Your Profile**:
   Open [app/src/data.ts](file:///c:/Users/satri/Documents/Development/web-app/link/app/src/data.ts) and customize the profile information, social accounts, and links:
   ```typescript
   export const profile = {
     name: "Your Name",
     role: "Your Role / Profession",
     avatar: "/avatar.webp", // Save your profile picture to the public/ directory
     bio: "A short bio about yourself...",
   };
   ```

---

## 🚀 Running the Project

Use the following npm scripts to run, build, and check the application:

### Run Development Server
Starts the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Build for Production
Compiles and optimizes the application for production deployment:
```bash
npm run build
```

### Start Production Server
Runs the compiled application locally:
```bash
npm run start
```

### Code Linting
Analyzes the codebase for syntax or styling issues:
```bash
npm run lint
```

---

## 📁 Folder Structure

Below is an overview of the project's folder layout:

```
link/
├── app/                      # Next.js App Router (Pages & Layouts)
│   ├── components/           # Page-specific UI components
│   │   ├── Footer.tsx        # Footer with copyright and author link
│   │   ├── LinkCard.tsx      # Interactive card component with hover & highlight states
│   │   ├── LinksList.tsx     # Dynamic link list wrapper using motion stagger effects
│   │   ├── ProfileCard.tsx   # Header card containing avatar, bio, and social bar
│   │   ├── ShareButton.tsx   # Share button connected to the Web Share API
│   │   └── Social.tsx        # Circular social icon buttons
│   ├── src/                  # Static source data and typings
│   │   ├── data.ts           # Central config file for your profile info and links
│   │   └── global.d.ts       # Global TypeScript declarations
│   ├── globals.css           # Global Tailwind CSS v4 styles
│   ├── layout.tsx            # Main layout (Fonts, SEO tags, JSON-LD Schema, Vercel Analytics)
│   └── page.tsx              # Main entry page containing layout and background rays
├── components/               # Global components and high-end visual effects
│   ├── LiquidEther.tsx       # Experimental interactive WebGL fluid background
│   ├── ShinyText.tsx         # Shimmering text overlay effect
│   └── SideRays.tsx          # Glowing light rays background visual
├── public/                   # Static assets (images, favicon, manifest)
├── package.json              # Package manifest and build scripts
└── tsconfig.json             # TypeScript compiler settings
```

---

## 🔒 Environment Variables

This application is fully client-side and does not require complex environment variables or database connections for general usage.

However, if you deploy to Vercel and want to use built-in analytics:
- **`VERCEL_ANALYTICS_ID`**: Automatically injected by Vercel when enabling Analytics in your Vercel Project Dashboard.

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it for both personal and commercial purposes.

---

## 👤 Contact / Author

- **Name**: Syahreza Satria Alfath
- **Website**: [syahreza-satria.xyz](https://syahreza-satria.xyz)
- **LinkedIn**: [Syahreza Satria Alfath](https://www.linkedin.com/in/syahreza-satria-alfath)
- **GitHub**: [@syahreza-satria](https://github.com/syahreza-satria)
- **Email**: satriaeza221@gmail.com
