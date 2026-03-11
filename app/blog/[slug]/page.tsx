import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '../../lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-secondary hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
          <time className="text-gray-600">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return (
                <h2 key={i} className="text-3xl font-bold text-primary mt-8 mb-4">
                  {line.replace('# ', '')}
                </h2>
              )
            }
            if (line.startsWith('## ')) {
              return (
                <h3 key={i} className="text-2xl font-bold text-primary mt-6 mb-3">
                  {line.replace('## ', '')}
                </h3>
              )
            }
            if (line.startsWith('- ')) {
              return (
                <li key={i} className="ml-6 text-gray-700">
                  {line.replace('- ', '')}
                </li>
              )
            }
            if (line.trim() === '') {
              return <div key={i} className="h-4" />
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {line}
              </p>
            )
          })}
        </div>
      </article>
    </div>
  )
}
