# 🚀 Tap On It - Smart Review Management System

[![Next.js](https://img.shields.io/badge/Next.js-13+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-06B6D4)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green)](https://supabase.com/)

## 📋 Overview

Tap On It is a comprehensive review management system that helps businesses collect, manage, and display Google Reviews efficiently. Built with modern technologies for performance and scalability.

### 🎯 Key Features

- **📱 Smart Review Collection** - NFC integration for easy review requests
- **🔄 Automated Review Sync** - Real-time Google Places API integration
- **📊 Analytics Dashboard** - Comprehensive business insights
- **🎨 Customizable Profiles** - Beautiful business presentation pages
- **🌍 Multi-language Support** - Thai and English support
- **📱 Mobile-First Design** - Responsive across all devices

## 🏗️ Architecture

This project follows **Clean Architecture** principles with clear separation of concerns:

```
📁 src/
├── 📁 app/                    # Next.js 13+ App Router
├── 📁 components/             # Reusable UI Components
├── 📁 lib/                    # Core utilities & configs
├── 📁 hooks/                  # Custom React hooks
├── 📁 services/               # Business logic services
├── 📁 stores/                 # State management (Zustand)
├── 📁 types/                  # TypeScript definitions
└── 📁 providers/              # React context providers
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Supabase account
- Google Places API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/tap-on-it.git
   cd tap-on-it
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   
   # Google APIs
   GOOGLE_API_KEY=your_google_places_api_key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
   
   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   # Run migrations
   node scripts/migrate-to-new-structure.js
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📖 Documentation

### 🗂️ Project Structure

- **[Project Structure Guide](PROJECT_STRUCTURE.md)** - Detailed architecture overview
- **[Database Schema](database/README.md)** - Database design and migrations
- **[API Documentation](docs/api.md)** - API endpoints and usage

### 🛠️ Development

- **Components** - Located in `src/components/`
  - `ui/` - Base UI components (shadcn/ui)
  - `features/` - Feature-specific components
  - `layout/` - Layout components
  - `forms/` - Form components

- **Services** - Business logic in `src/services/`
  - `client.service.ts` - Client/business management
  - `review.service.ts` - Review operations
  - `auth.service.ts` - Authentication

- **State Management** - Zustand stores in `src/stores/`
  - Lightweight, TypeScript-first
  - No boilerplate required

## 🎨 UI/UX

Built with modern design principles:

- **Design System**: shadcn/ui components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React icons
- **Fonts**: Noto Sans Thai for multi-language support
- **Theme**: Light/Dark mode support

## 🔧 Key Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework | 13+ |
| **TypeScript** | Type safety | 5.0+ |
| **Tailwind CSS** | Styling | 3.0+ |
| **Supabase** | Backend & Database | Latest |
| **Zustand** | State management | 4.0+ |
| **React Hook Form** | Form handling | 7.0+ |
| **Zod** | Schema validation | 3.0+ |
| **Framer Motion** | Animations | 10.0+ |

## 📱 Features in Detail

### Review Management
- **Auto-sync** with Google Places API
- **Real-time updates** every 6 hours
- **Bulk operations** for multiple businesses
- **Review analytics** and insights

### Business Profiles
- **Custom domains** and slugs
- **Multi-language** content
- **SEO optimized** pages
- **Social media** integration

### Admin Dashboard
- **Analytics overview**
- **Client management**
- **Review monitoring**
- **System logs**

## 🔒 Security

- **Environment validation** with Zod
- **SQL injection protection** with parameterized queries
- **XSS prevention** with proper sanitization
- **CSRF protection** with Next.js built-ins
- **Rate limiting** on API endpoints

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

## 📦 Building & Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Build and export static files
pnpm export
```

### Deployment Options

- **Vercel** (Recommended) - One-click deployment
- **Netlify** - Static site hosting
- **Docker** - Container deployment
- **Self-hosted** - Traditional server setup

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow our coding standards**
   - Use TypeScript
   - Follow ESLint rules
   - Write tests for new features
   - Update documentation
5. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style

We use:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for pre-commit hooks
- **Conventional Commits** for commit messages

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm type-check` | Run TypeScript compiler |
| `pnpm test` | Run tests |

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && pnpm install`

2. **Database Connection**
   - Check Supabase credentials
   - Verify network connectivity
   - Check environment variables

3. **Google API Issues**
   - Verify API keys
   - Check API quotas
   - Ensure proper permissions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Vercel** for hosting and deployment
- **Supabase** for backend services
- **shadcn** for the beautiful UI components
- **Tailwind CSS** team for the utility-first approach

## 📞 Support

- **Documentation**: [docs.taponit.com](https://docs.taponit.com)
- **Email**: support@taponit.com
- **GitHub Issues**: [Create an issue](https://github.com/your-org/tap-on-it/issues)

---

Made with ❤️ by the Tap On It Team# thacca-splash
