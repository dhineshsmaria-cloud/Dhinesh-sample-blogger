import Link from 'next/link'
import { getAllPosts } from './lib/posts'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl text-gray-200">
            Exploring technology, web development, and software engineering best practices.
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold text-primary hover:text-secondary mb-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-secondary hover:underline font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
