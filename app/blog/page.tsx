import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">All Posts</h1>
          <p className="text-gray-600">Explore all Dhinesh articles and stories</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-primary hover:text-secondary mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-secondary hover:underline font-semibold"
                  >
                    Read →
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
