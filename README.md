# 🎬 profile-page

A sleek, fully customizable personal portfolio website built for a **professional video editor**. Designed to showcase reels, projects, skills, and contact info — all driven by a single JSON file so content updates never require touching the code.

---

##  Overview

This project was built as a custom client commission, based on a Figma community design that was **adapted and redesigned specifically for this client's brand and identity**. The original layout was reworked to match the client's visual direction — including a blue accent palette, revised typography, and a content structure tailored to video editing work.

The result is a modern, animated single-page portfolio that is fast, responsive, and easy to maintain.

---

##  Tech Stack

| Layer | Tool |
|---|---|
| Framework | [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) + [React Bits](https://reactbits.dev/) |
| Routing | [React Router DOM](https://reactrouter.com/) |
| Icons | [Lucide React](https://lucide.dev/) |

---

##  Design

- **Reference:** [Personal Website | Portfolio — Figma Community](https://www.figma.com/community/file/1351551318943737601/personal-website-portfolio) by Mahmood Fazile
- **Customization:** The Figma file was forked and redesigned for the client — accent color, typography, section layout, and copy were all tailored to their personal brand
- **Accent color:** Blue (`#3B82F6`) replacing the original orange
- **Display font:** Syne (bold, editorial)
- **Body font:** Inter (clean, readable)

---

##  Customization

All content — text, images, videos, links, and project data — is managed through a **single JSON file** at `src/data/portfolio.json`. No component code needs to be touched to update the portfolio.

### What you can change in the JSON:

- **Personal info** — name, role, bio, profile photo
- **Social links** — Instagram, Vimeo, LinkedIn, YouTube
- **Showreel** — main video URL shown in the hero
- **Projects** — title, thumbnail, video URL, category, tags, year, featured flag
- **Skills** — list of tools and software
- **Contact** — email address

### Example structure:

```json
{
  "meta": {
    "name": "Alex Reel",
    "role": "Video Editor & Motion Designer",
    "bio": "I craft stories frame by frame.",
    "avatar": "/assets/avatar.jpg",
    "email": "alex@example.com",
    "socials": {
      "vimeo": "https://vimeo.com/...",
      "instagram": "https://instagram.com/...",
      "linkedin": "https://linkedin.com/in/..."
    }
  },
  "showreel": "https://vimeo.com/...",
  "projects": [
    {
      "id": "brand-reel-2024",
      "title": "Nike Brand Reel",
      "category": "Commercial",
      "thumbnail": "/assets/projects/nike-thumb.jpg",
      "videoUrl": "https://vimeo.com/...",
      "tags": ["color grading", "motion graphics"],
      "year": 2024,
      "featured": true
    }
  ],
  "skills": ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"]
}
```

### Private public assets

The `video-editor-portfolio/public/` folder is intentionally ignored by Git so client files, images, PDFs, logos, and other private brand assets are not exposed in the repository.

Create this folder locally and populate it with the files referenced by `video-editor-portfolio/src/assets/data.json` or `video-editor-portfolio/src/assets/data.example.json`. Vite serves files from `public/` at the site root, so these paths map directly:

```text
video-editor-portfolio/public/hero.png                    -> /hero.png
video-editor-portfolio/public/cv.pdf                      -> /cv.pdf
video-editor-portfolio/public/logo-dark.png               -> /logo-dark.png
video-editor-portfolio/public/logo-light.png              -> /logo-light.png
video-editor-portfolio/public/portfolio/project-img-4.png -> /portfolio/project-img-4.png
video-editor-portfolio/public/portfolio/project-img-5.png -> /portfolio/project-img-5.png
video-editor-portfolio/public/portfolio/project-img-6.png -> /portfolio/project-img-6.png
```

If you change any asset path in the JSON, add the matching file under `video-editor-portfolio/public/` using the same relative path. Keep real client assets local or in a private deployment secret/storage workflow.

---

##  Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/profile-page.git
cd video-editor-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be live at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy on Vercel, Netlify, or any static host.

---

## 📄 License

This project was built as a custom commission. The design is adapted from a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) licensed Figma file by [Mahmood Fazile](https://www.figma.com/@mahmooduiux). Credit to the original designer is retained.

---

##  Credits

- Original Figma design: [Mahmood Fazile](https://www.figma.com/@mahmooduiux)
- Animation components: [React Bits](https://reactbits.dev/)
- Built with ❤️ for a video editing professional
