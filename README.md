# Abdullahi Salah — Portfolio

A stunning, production-grade portfolio built with **React + Vite**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # Global styles & CSS variables
    └── components/
        ├── Navbar.jsx         # Fixed navigation with mobile menu
        ├── Navbar.module.css
        ├── Hero.jsx           # Animated hero with particle canvas + typewriter
        ├── Hero.module.css
        ├── Skills.jsx         # Animated skill bars with intersection observer
        ├── Skills.module.css
        ├── Experience.jsx     # Timeline layout with education sidebar
        ├── Experience.module.css
        ├── Projects.jsx       # Project cards with hover effects
        ├── Projects.module.css
        ├── Contact.jsx        # Contact section with copy-to-clipboard
        └── Contact.module.css
```

## 🎨 Design System

- **Colors**: Dark theme with `#00e5ff` (cyan), `#7b61ff` (violet), `#ff6b6b` (coral)
- **Fonts**: Syne (display/headings) + DM Sans (body) + DM Mono (code/labels)
- **Layout**: CSS Grid, CSS Modules, CSS Custom Properties

## 🔧 Customization

1. **Personal info**: Update `Hero.jsx`, `Contact.jsx` with your links
2. **Projects**: Edit the `projects` array in `Projects.jsx`
3. **Experience**: Edit the `experiences` array in `Experience.jsx`
4. **Skills**: Edit the `skillGroups` array in `Skills.jsx`
5. **Colors**: Update CSS variables in `index.css`

## 📦 Tech Stack

- React 18
- Vite 5
- CSS Modules
- Google Fonts (Syne, DM Sans, DM Mono)
- No external UI libraries (pure CSS)
