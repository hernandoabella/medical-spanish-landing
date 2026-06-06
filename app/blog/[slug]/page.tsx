import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

function getPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    return {
      title: data.title,
      date: data.date,
      content
    }
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content/blog')
  const files = fs.readdirSync(postsDir)
  
  return files.map(filename => ({
    slug: filename.replace('.md', '')
  }))
}

export default async function BlogPost({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPost(slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to blog
      </Link>
      
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-8">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}