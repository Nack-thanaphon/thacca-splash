# 🌊 THACCA Splash - Creative Content Festival

[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-06B6D4)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-Multi--language-green)](https://www.i18next.com/)

## 📋 Overview

THACCA Splash is a modern, multilingual website for Thailand's premier creative content festival. Built with Next.js 14 and featuring stunning visuals, interactive components, and seamless internationalization support for Thai and English languages.

### 🎯 Key Features

- **🌍 Multi-language Support** - Thai and English with next-i18next
- **🎨 Modern Design** - Beautiful UI with Tailwind CSS and custom components
- **📱 Responsive Layout** - Mobile-first design that works on all devices
- **🖼️ Interactive Sliders** - Swiper.js integration for dynamic content display
- **⚡ Performance Optimized** - Next.js 14 with App Router for blazing-fast performance
- **🎭 Event Management** - Showcase multiple events and programs
- **📅 Schedule Integration** - Interactive schedule and registration features
- **🎵 Media Rich** - Support for images, videos, and interactive content

## 🏗️ Project Structure

```
📁 thacca-splash/
├── 📁 public/                 # Static assets
│   ├── 📁 font/              # Custom fonts (Inter, Kanit, Noto Sans Thai)
│   ├── 📁 image/             # Images organized by category
│   │   ├── 📁 event/         # Event images
│   │   ├── 📁 header/        # Header banners
│   │   ├── 📁 hero/          # Hero section images
│   │   ├── 📁 icon/          # SVG icons
│   │   ├── 📁 logo/          # Brand logos
│   │   └── 📁 vector/        # Vector graphics
│   └── 📁 locales/           # Translation files
│       ├── 📁 en/            # English translations
│       └── 📁 th/            # Thai translations
├── 📁 src/
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📁 [lang]/        # Dynamic language routing
│   │   └── 📁 context/       # React contexts
│   ├── 📁 components/        # Reusable components
│   │   ├── 📁 icon/          # Icon components
│   │   ├── 📁 section/       # Page sections
│   │   └── 📁 sliders/       # Slider components
│   ├── 📁 config/            # Configuration files
│   ├── 📁 lib/               # Utilities and constants
│   └── 📁 types/             # TypeScript definitions
└── 📄 Configuration files
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **pnpm** (recommended) or npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/thacca-splash.git
   cd thacca-splash
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🌍 Internationalization

The project supports Thai and English languages:

- **Default Language**: Thai (`th`)
- **Supported Languages**: Thai (`th`), English (`en`)
- **URL Structure**: `/{lang}/` (e.g., `/en/`, `/th/`)
- **Translation Files**: Located in `public/locales/`

### Adding Translations

1. Add new keys to `public/locales/en/common.json` and `public/locales/th/common.json`
2. Use the `useTranslation` hook in components:
   ```typescript
   import { useTranslation } from 'react-i18next';
   
   function MyComponent() {
     const { t } = useTranslation('common');
     return <h1>{t('welcome')}</h1>;
   }
   ```

## 🎨 Components

### Core Components

- **Button** - Reusable button with variants, sizes, and icon support
- **Header** - Navigation with language switcher
- **Footer** - Site footer with links and social media
- **LanguageSwitcher** - Toggle between Thai and English

### Section Components

- **HeroSection** - Main banner with hero slider
- **EventSection** - Event showcase with auto-sliding carousel
- **PlanSection** - Program plans in grid layout
- **ScheduleSection** - Event schedule display
- **RegisterSection** - Registration call-to-action

### Slider Components

- **HeroSlider** - Main hero carousel
- **EventSlider** - Auto-sliding event cards (1 on mobile, 3 on desktop)
- **PhotoSlider** - Image gallery slider
- **PlanSlider** - Program plan grid display

## 🎯 Key Features in Detail

### Hero Section
- **Dynamic Content** - Rotating hero banners
- **Multi-language** - Localized content
- **Responsive** - Optimized for all screen sizes

### Event Management
- **Auto-sliding Carousel** - 3-second intervals with infinite loop
- **Responsive Display** - 1 card on mobile, 3 on desktop
- **Interactive Cards** - Click-to-read-more functionality
- **Color-coded** - Each event has unique branding

### Plan Display
- **Grid Layout** - 2 cards top row, 3 cards bottom row
- **Custom Cards** - `PlanCard` component with schedule/register buttons
- **Color Themes** - Each plan has distinctive color scheme

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 14+ |
| **TypeScript** | Type safety and better DX | 5.0+ |
| **Tailwind CSS** | Utility-first CSS framework | 3.0+ |
| **next-i18next** | Internationalization | Latest |
| **Swiper.js** | Touch slider components | Latest |
| **Lucide React** | Modern icon library | Latest |
| **React** | UI library | 18+ |

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints**:
  - `sm`: 640px+ (mobile landscape)
  - `md`: 768px+ (tablet)
  - `lg`: 1024px+ (desktop)
  - `xl`: 1280px+ (large desktop)

## 🎨 Design System

### Colors
- **Primary**: Blue tones for main branding
- **Event Colors**: Unique colors per event (#3F8ACE, #EB352B, #C7292C)
- **Plan Colors**: Distinctive themes (#E5E23B, #9BD3DD, #C8292C, #01796F, #E89ABE)

### Typography
- **Inter** - Modern, readable font for Latin text
- **Kanit** - Thai-optimized font for Thai content
- **Noto Sans Thai** - Fallback Thai font

### Icons
- **Lucide React** - Consistent icon system
- **Custom SVGs** - Brand-specific icons in `/public/image/icon/`

## 🔧 Development Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build           # Build for production
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm type-check      # TypeScript compilation check

# Testing
pnpm test            # Run tests
pnpm test:watch      # Run tests in watch mode
```

## 📦 Build & Deployment

### Building for Production

```bash
pnpm build
```

### Deployment Options

- **Vercel** (Recommended) - Zero-config deployment
- **Netlify** - Static site hosting
- **Docker** - Container deployment
- **Traditional hosting** - Export static files

### Environment Variables

Create `.env.local` for local development:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Add other environment variables as needed
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Follow our coding standards**
   - Use TypeScript for all new files
   - Follow Tailwind CSS conventions
   - Add translations for new text content
   - Test on multiple screen sizes
4. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
5. **Push and create a Pull Request**

### Code Style Guidelines

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Files**: kebab-case for utilities (e.g., `site.config.ts`)
- **CSS**: Use Tailwind utilities, avoid custom CSS
- **Images**: Organize by category in `/public/image/`
- **Translations**: Add to both `en` and `th` locale files

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   rm -rf .next
   pnpm install
   pnpm build
   ```

2. **Translation Issues**
   - Verify translation keys exist in both languages
   - Check for syntax errors in JSON files
   - Restart development server after changes

3. **Image Loading Issues**
   - Ensure images exist in `/public/image/`
   - Check file paths and extensions
   - Verify Next.js Image component usage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **THACCA** - Thailand Creative & Content Agency
- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper.js** - Touch slider library
- **Vercel** - Hosting and deployment platform

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-org/thacca-splash/issues)
- **Documentation**: Check this README and code comments
- **Contact**: [Your contact information]

---

Made with ❤️ for Thailand's Creative Community
