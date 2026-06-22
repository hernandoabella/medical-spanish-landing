import Link from 'next/link'
import Image from 'next/image'

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  series: string;
  seriesLabel: string;
  seriesColor: string;
}

const posts: Post[] = [
  {
    slug: "why-loving-parents-explode",
    title: "Why the Most Loving Parents Explode the Hardest",
    date: "2026-06-06",
    excerpt: "The neuroscience of parental anger, the shame spiral that makes it worse, and the one thing that actually heals it.",
    author: "M. Eliza Rowen",
    category: "Parenting & Mental Health",
    readTime: "15 min read",
    image: "/blog/parenting/loving-parents-explode.jpg",
    featured: false,
    series: "parenting",
    seriesLabel: "Parenting & Anger Management",
    seriesColor: "bg-[#0B8288]",
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
    series: "parenting",
    seriesLabel: "Parenting & Anger Management",
    seriesColor: "bg-[#0B8288]",
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
    series: "parenting",
    seriesLabel: "Parenting & Anger Management",
    seriesColor: "bg-[#0B8288]",
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
    series: "parenting",
    seriesLabel: "Parenting & Anger Management",
    seriesColor: "bg-[#0B8288]",
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
    series: "parenting",
    seriesLabel: "Parenting & Anger Management",
    seriesColor: "bg-[#0B8288]",
  },
  {
    slug: "what-is-generational-trauma",
    title: "What Is Generational Trauma?",
    date: "2026-06-11",
    excerpt: "Understanding the hidden patterns passed through families — and how the science of intergenerational trauma helps explain why we repeat what we swore we never would.",
    author: "M. Eliza Rowen",
    category: "Generational Trauma · Neuroscience",
    readTime: "15 min read",
    image: "/blog/breaking-generational-trauma/what-is-generational-trauma.jpg",
    featured: true,
    series: "generational-trauma",
    seriesLabel: "Breaking Generational Trauma",
    seriesColor: "bg-[#9B7A4D]",
  },
  {
    slug: "why-you-lose-it",
    title: "Why You Lose It",
    date: "2026-06-12",
    excerpt: "The neuroscience behind parenting triggers — and why your nervous system, not your parenting skills, is driving those explosive reactions.",
    author: "M. Eliza Rowen",
    category: "Neuroscience · Polyvagal Theory",
    readTime: "14 min read",
    image: "/blog/breaking-generational-trauma/why-you-lose-it.jpg",
    featured: false,
    series: "generational-trauma",
    seriesLabel: "Breaking Generational Trauma",
    seriesColor: "bg-[#9B7A4D]",
  },
  {
    slug: "your-brain-can-change",
    title: "Your Brain Can Change",
    date: "2026-06-13",
    excerpt: "The science of neuroplasticity for parents — how old patterns get wired, why new ones can be built, and why becoming a parent makes your brain more changeable than ever.",
    author: "M. Eliza Rowen",
    category: "Neuroplasticity · Neuroscience",
    readTime: "13 min read",
    image: "/blog/breaking-generational-trauma/neuroplasticy-for-parents.jpg",
    featured: false,
    series: "generational-trauma",
    seriesLabel: "Breaking Generational Trauma",
    seriesColor: "bg-[#9B7A4D]",
  },
  {
    slug: "attachment-styles-are-inherited",
    title: "Attachment Styles Are Inherited",
    date: "2026-06-14",
    excerpt: "How your childhood relationships shape your parenting — and how the concept of earned security offers a path to healing attachment wounds.",
    author: "M. Eliza Rowen",
    category: "Attachment Theory · Developmental Psychology",
    readTime: "13 min read",
    image: "/blog/breaking-generational-trauma/attachment-styles-are-inherited.jpg",
    featured: false,
    series: "generational-trauma",
    seriesLabel: "Breaking Generational Trauma",
    seriesColor: "bg-[#9B7A4D]",
  },
  {
    slug: "what-repair-really-means",
    title: "What Repair Really Means",
    date: "2026-06-15",
    excerpt: "The parenting skill that matters more than perfection — why ruptures happen in every family and how genuine repair builds secure attachment.",
    author: "M. Eliza Rowen",
    category: "Repair · Attachment",
    readTime: "11 min read",
    image: "/blog/breaking-generational-trauma/what-repair-really-means.jpg",
    featured: false,
    series: "generational-trauma",
    seriesLabel: "Breaking Generational Trauma",
    seriesColor: "bg-[#9B7A4D]",
  },
  {
    slug: "discipline-without-punishment",
    title: "Discipline Without Punishment",
    date: "2026-06-16",
    excerpt: "What research says about raising responsible children — and why the original meaning of discipline offers a more effective path than punishment.",
    author: "M. Eliza Rowen",
    category: "Discipline · Child Development",
    readTime: "12 min read",
    image: "/blog/breaking-generational-trauma/discipline-with-punishment.jpg",
    featured: false,
    series: "generational-trauma",
    seriesLabel: "Breaking Generational Trauma",
    seriesColor: "bg-[#9B7A4D]",
  },
  {
    slug: "why-every-healthcare-professional-should-learn-medical-spanish",
    title: "Why Every Healthcare Professional Should Learn Medical Spanish",
    date: "2026-06-17",
    excerpt: "The growing importance of bilingual communication in modern medicine — and why Medical Spanish has become one of the highest-return professional skills available today.",
    author: "PraxMed Publishing",
    category: "Medical Spanish · Healthcare Communication",
    readTime: "12 min read",
    image: "/blog/medical-spanish/why-every-healthcare.jpg",
    featured: false,
    series: "medical-spanish",
    seriesLabel: "Medical Spanish",
    seriesColor: "bg-[#C47A6B]",
  },
  {
    slug: "50-essential-medical-spanish-phrases",
    title: "50 Essential Medical Spanish Phrases Every Nurse and Doctor Should Know",
    date: "2026-06-18",
    excerpt: "Core vocabulary for immediate clinical use with Spanish-speaking patients — phrases that improve communication, trust, and efficiency.",
    author: "PraxMed Publishing",
    category: "Medical Spanish · Clinical Communication",
    readTime: "14 min read",
    image: "/blog/medical-spanish/50-essential-medical-spanish-phrases.jpg",
    featured: false,
    series: "medical-spanish",
    seriesLabel: "Medical Spanish",
    seriesColor: "bg-[#C47A6B]",
  },
  {
    slug: "how-to-take-patient-history-in-spanish",
    title: "How to Take a Patient History in Spanish",
    date: "2026-06-19",
    excerpt: "A step-by-step guide for healthcare professionals — a structured Medical Spanish interview process that improves communication and diagnostic accuracy.",
    author: "PraxMed Publishing",
    category: "Medical Spanish · Clinical Interview",
    readTime: "12 min read",
    image: "/blog/medical-spanish/how-to-take-patient-history.jpg",
    featured: false,
    series: "medical-spanish",
    seriesLabel: "Medical Spanish",
    seriesColor: "bg-[#C47A6B]",
  },
  {
    slug: "medical-spanish-for-emergency-room-staff",
    title: "Medical Spanish for Emergency Room Staff",
    date: "2026-06-20",
    excerpt: "Critical phrases that save time — rapid assessment questions for chest pain, breathing difficulties, trauma, and altered mental status.",
    author: "PraxMed Publishing",
    category: "Medical Spanish · Emergency Medicine",
    readTime: "11 min read",
    image: "/blog/medical-spanish/emergency-room-staff.jpg",
    featured: false,
    series: "medical-spanish",
    seriesLabel: "Medical Spanish",
    seriesColor: "bg-[#C47A6B]",
  },
  {
    slug: "the-most-common-medical-spanish-mistakes",
    title: "The Most Common Medical Spanish Mistakes Healthcare Professionals Make",
    date: "2026-06-21",
    excerpt: "And how to avoid them — eight common errors that create confusion, and how to correct them for clearer clinical communication.",
    author: "PraxMed Publishing",
    category: "Medical Spanish · Language Learning",
    readTime: "10 min read",
    image: "/blog/medical-spanish/the-most-common-medical-spanish-mistakes.jpg",
    featured: false,
    series: "medical-spanish",
    seriesLabel: "Medical Spanish",
    seriesColor: "bg-[#C47A6B]",
  },
  {
    slug: "how-medical-spanish-improves-patient-safety",
    title: "How Medical Spanish Improves Patient Safety and Health Outcomes",
    date: "2026-06-22",
    excerpt: "The critical role of language in quality healthcare delivery — reducing medication errors, improving diagnostics, and building trust.",
    author: "PraxMed Publishing",
    category: "Medical Spanish · Patient Safety",
    readTime: "11 min read",
    image: "/blog/medical-spanish/patient-safety-and-health-outcomes.jpg",
    featured: false,
    series: "medical-spanish",
    seriesLabel: "Medical Spanish",
    seriesColor: "bg-[#C47A6B]",
  },
]

const seriesConfig: Record<string, { label: string; color: string; description: string }> = {
  "parenting": {
    label: "Parenting & Anger Management",
    color: "bg-[#0B8288]",
    description: "Evidence-based insights for mindful parenting and emotional wellness",
  },
  "generational-trauma": {
    label: "Breaking Generational Trauma",
    color: "bg-[#9B7A4D]",
    description: "Understanding inherited patterns and creating a new family legacy",
  },
  "medical-spanish": {
    label: "Medical Spanish",
    color: "bg-[#C47A6B]",
    description: "Essential language skills for healthcare professionals",
  },
};

const seriesOrder = ["parenting", "generational-trauma", "medical-spanish"];

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
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
  );
}

export default function BlogPage() {
  const featuredPost = posts.find(post => post.featured)

  const grouped = seriesOrder.reduce((acc, key) => {
    const seriesPosts = posts.filter(p => p.series === key && !p.featured)
    if (seriesPosts.length > 0) acc[key] = seriesPosts
    return acc
  }, {} as Record<string, Post[]>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/medical-bg.jpg"
            alt="Medical background - healthcare and publishing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B8288]/90 to-[#0a6b70]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
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

        {/* Sections */}
        {seriesOrder.map((key) => {
          const seriesPosts = grouped[key]
          if (!seriesPosts?.length) return null
          const config = seriesConfig[key]

          return (
            <div key={key} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-1.5 h-8 ${config.color} rounded-full`}></div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{config.label}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">{config.description}</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 my-6"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seriesPosts.map(post => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}