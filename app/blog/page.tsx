import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

function getPosts(): Post[] {
  const postsDir = path.join(process.cwd(), 'content/blog')
  const files = fs.readdirSync(postsDir)
  
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const filePath = path.join(postsDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt
    }
  })
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function BlogPage() {
  const posts = getPosts()
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-600 mb-2">
                {post.title}
              </h2>
            </Link>
            <div className="text-gray-500 text-sm mb-3">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <p className="text-gray-500">No posts yet. Check back soon!</p>
      )}
    </div>
  )
}