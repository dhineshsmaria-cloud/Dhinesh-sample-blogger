# Dhinesh's Personal Blog

A modern, full-stack personal blogging website built with Next.js, React, and TypeScript.

## Features

✨ **Modern Stack**
- Built with Next.js 15 and React 18
- TypeScript for type safety
- Tailwind CSS for beautiful styling
- Responsive design

📝 **Blog Features**
- Markdown-based blog posts
- Static generation for optimal performance
- SEO-optimized pages
- Category browsing

🎨 **UI/UX**
- Clean, professional design
- Smooth animations and transitions
- Mobile-responsive layout
- Dark mode ready (extensible)

📖 **Pages**
- Home page with featured posts
- Blog listing page
- Individual blog post pages
- About page
- Contact page with form submission

## Project Structure

```
├── app/
│   ├── components/        # Reusable React components
│   ├── lib/              # Utility functions and helpers
│   ├── blog/
│   │   ├── page.tsx      # Blog listing
│   │   └── [slug]/       # Individual post page
│   ├── about/            # About page
│   ├── contact/          # Contact form
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── posts/                # Markdown blog posts
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Dhinesh-sample-blogger
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Creating Blog Posts

Blog posts are written in Markdown and stored in the `posts/` directory.

### Post Format

Create a new `.md` file in the `posts/` directory with the following format:

```markdown
---
title: Your Post Title
date: 2024-03-11
excerpt: A brief description of your post
---

# Your Post Title

Your content here...
```

### Post Metadata

- `title`: Post title (required)
- `date`: Publication date in ISO format (required)
- `excerpt`: Short summary for the listing page (optional)

## Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Configuration

### Tailwind CSS

Customize colors and styles in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#1f2937',    // Change primary color
      secondary: '#6366f1',  // Change secondary color
    },
  },
}
```

### Site Metadata

Update site metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Blog Title',
  description: 'Your blog description',
  // ... more options
}
```

## Technologies Used

- **Next.js 15** - React framework with SSG and SSR
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **gray-matter** - YAML front matter parser for Markdown
- **PostCSS & Autoprefixer** - CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Static site generation for fast load times
- 🎯 Optimized images and assets
- 📱 Mobile-first responsive design
- 🔍 SEO optimized

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Comment system
- [ ] Tags and categories
- [ ] Reading time estimates
- [ ] Social sharing buttons
- [ ] Newsletter subscription
- [ ] Analytics integration

## Contributing

Feel free to fork this project and customize it for your own blog!

## License

MIT License - feel free to use this as a template for your own blog.

## Author

**Dhinesh** - [GitHub](https://github.com) | [Twitter](https://twitter.com)

---

Made with ❤️ using Next.js and Tailwind CSS
