# Iheb Mrabet - Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, showcasing expertise in robotics, AI, and automation engineering.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, optimized images, and fast loading times
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation
- **SEO Friendly**: Proper meta tags and structured content

## 🛠️ Technology Stack

- **Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **Animations**: CSS transitions + Intersection Observer
- **Deployment**: GitHub Pages / Vercel

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── images/
│       └── placeholders/
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── main.css
│   │   │   └── variables.css
│   │   └── data/
│   │       └── resume-data.js
│   ├── components/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ExperienceTimeline.vue
│   │   ├── ProjectCard.vue
│   │   ├── ProjectsSection.vue
│   │   ├── EducationSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── LanguagesSection.vue
│   │   ├── ContactSection.vue
│   │   └── LazyImage.vue
│   ├── composables/
│   │   └── useIntersectionObserver.js
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### GitHub Pages

1. Update the `base` path in `vite.config.js` to match your repository name:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Build the project:
```bash
npm run build
```

3. Deploy using gh-pages:
```bash
npm run deploy
```

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vue.js project
3. Deploy with zero configuration

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` directory to your web server

## 🎨 Customization

### Updating Content

Edit `src/assets/data/resume-data.js` to update:
- Personal information
- Professional experience
- Projects and skills
- Education and certifications
- Contact information

### Styling

- Global styles: `src/assets/styles/main.css`
- CSS variables: `src/assets/styles/variables.css`
- Component-specific styles are in each `.vue` file

### Adding Images

1. Place images in `public/images/`
2. Update image paths in `resume-data.js`
3. Use the `LazyImage` component for optimized loading

## 📱 Responsive Design

The website is designed with a mobile-first approach:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Lazy Loading**: Images and components load only when needed
- **Code Splitting**: Automatic chunking for optimal loading
- **Optimized Assets**: Minified CSS/JS in production
- **Smooth Animations**: Hardware-accelerated transitions
- **Intersection Observer**: Efficient scroll-based animations

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

### Code Structure

- **Components**: Reusable Vue components with scoped styles
- **Composables**: Shared logic using Vue 3 Composition API
- **Data**: Centralized content management
- **Styles**: CSS custom properties for theming

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Iheb Mrabet - [ihebmrabet0@gmail.com](mailto:ihebmrabet0@gmail.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

Built with ❤️ using Vue.js and modern web technologies.
