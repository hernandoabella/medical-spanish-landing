import Link from 'next/link'
import Image from 'next/image'

// Definición estática de todos los posts
const posts = [
  {
    slug: "why-loving-parents-explode",
    title: "Why the Most Loving Parents Explode the Hardest",
    date: "2026-06-06",
    excerpt: "The neuroscience of parental anger, the shame spiral that makes it worse, and the one thing that actually heals it.",
    author: "M. Eliza Rowen",
    category: "Parenting & Mental Health",
    readTime: "15 min read",
    image: "/blog/parenting/loving-parents-explode.jpg",
    featured: true,
  },
  {
    slug: "its-not-about-the-juice",
    title: "It's Not About the Juice",
    date: "2026-06-07",
    excerpt: "Why the behavior in front of you is almost never the real trigger of parental anger — and what's actually happening beneath the surface.",
    author: "M. Eliza Rowen",
    category: "Clinical Psychology · Stress Physiology",
    readTime: "12 min read",
    image: "/blog/parenting/its-not-about-the-juice.jpg",
    featured: false,
  },
  {
    slug: "what-yelling-actually-does",
    title: "What Yelling Actually Does",
    date: "2026-06-08",
    excerpt: "For three seconds, it feels like relief. Then comes everything else — what the brain does, what the child hears, and why the strategy that feels like control is the clearest proof you've lost it.",
    author: "M. Eliza Rowen",
    category: "Behavioral Neuroscience",
    readTime: "13 min read",
    image: "/blog/parenting/what-yelling-actually-does.jpg",
    featured: false,
  },
  {
    slug: "after-the-explosion",
    title: "After the Explosion",
    date: "2026-06-09",
    excerpt: "The guilt arrives like clockwork. The shame spiral begins. And then — if you know how — comes the most important parenting moment of all.",
    author: "M. Eliza Rowen",
    category: "Attachment Research · Emotional Recovery",
    readTime: "14 min read",
    image: "/blog/parenting/after-the-explosion.jpg",
    featured: false,
  },
  {
    slug: "you-can-rewire-your-anger",
    title: "You Can Rewire Your Anger",
    date: "2026-06-10",
    excerpt: "Why willpower alone never works — and what the neuroscience of habit formation actually says about breaking the pattern for good.",
    author: "M. Eliza Rowen",
    category: "Neuroplasticity · Habit Formation",
    readTime: "13 min read",
    image: "/blog/parenting/rewire-your-anger.jpg",
    featured: false,
  },
]

export default function BlogPage() {
  // Ordenar posts por fecha (más reciente primero)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  const featuredPost = sortedPosts.find(post => post.featured)
  const regularPosts = sortedPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/medical-bg.jpg"
            alt="Medical background - healthcare and publishing"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay layers for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B8288]/90 to-[#0a6b70]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium">📖 Insights & Resources</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            PraxMed Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Evidence-based insights for mindful parenting and emotional wellness
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-[#0B8288] rounded-full"></span>
              <span className="text-sm font-semibold text-[#0B8288] uppercase tracking-wide">Featured Article</span>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-[#0B8288]/10 text-[#0B8288] text-xs font-semibold rounded-full">
                      {featuredPost.category.split(' · ')[0]}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0B8288] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By <span className="font-medium text-gray-700">{featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#0B8288] font-medium group-hover:gap-3 transition-all">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* All Posts Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gray-300 rounded-full"></span>
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            </div>
            <span className="text-sm text-gray-500">{regularPosts.length} articles</span>
          </div>

          {/* Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur text-[#0B8288] text-xs font-semibold rounded-full">
                          {post.category.split(' · ')[0]}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span>{new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B8288] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-500">
                          By {post.author.split(' ')[0]} {post.author.split(' ')[1]?.[0]}.
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#0B8288] text-sm font-medium group-hover:gap-2 transition-all">
                          Read
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-500 text-lg">More articles coming soon. Stay tuned!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}