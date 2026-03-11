# Getting Started with Dhinesh's Blogger

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Create Your First Blog Post
Create a new markdown file in the `posts/` directory:

```bash
# Example: posts/my-first-post.md
---
title: My First Blog Post
date: 2024-03-11
excerpt: This is my first blog post about web development.
---

# My First Blog Post

Write your content here using Markdown syntax.

## Benefits of blogging

- Share knowledge with others
- Document your learning journey
- Build your personal brand
```

That's it! Your post will automatically appear on the blog.

## Project Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Change Site Title & Description
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Blog Title',
  description: 'Your blog description',
}
```

### Customize Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#1f2937',    // Dark gray
  secondary: '#6366f1',  // Indigo
}
```

### Update Author Info
- Edit `app/about/page.tsx` for the About page
- Edit `app/components/Footer.tsx` for footer links
- Edit `app/components/Header.tsx` for header navigation

### Add Social Links
Update the social media links in:
- `app/about/page.tsx`
- `app/components/Footer.tsx`
- `app/contact/page.tsx`

## Blog Post Format

Each markdown file should include YAML frontmatter:

```markdown
---
title: Post Title (required)
date: YYYY-MM-DD (required)
excerpt: Brief description (optional)
---

# Your content here...
```

## Deployment

### Deploy to Vercel
The easiest way to deploy a Next.js app:

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy

### Deploy to Other Platforms
- **Netlify**: Supports Next.js static exports
- **GitHub Pages**: With `next export`
- **Self-hosted**: Use `npm run build` and `npm start`

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── components/        # React components
│   ├── lib/               # Utilities (post loading)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── posts/                 # Markdown blog posts
├── public/                # Static files
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Next Steps

1. **Customize the design** - Edit Tailwind CSS classes
2. **Add more posts** - Create markdown files in `posts/`
3. **Update your info** - Edit About, Contact, and Footer
4. **Deploy** - Push to GitHub and deploy to Vercel

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Happy blogging! 📝
