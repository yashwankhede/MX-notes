'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Post, Category } from '@/lib/types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface BlogListProps {
  posts: Post[]
  categories: string[]
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    let filtered: Post[] = posts

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.summary.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [posts, selectedCategory, searchQuery])

  const allCategories: Category[] = ['All', ...categories] as Category[]

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search by title, tags, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-bg-card border border-matrix-green/20 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-matrix-green focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-matrix-green text-bg-dark'
                  : 'bg-bg-card border border-matrix-green/20 text-text-primary hover:bg-matrix-green/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-bg-card border border-matrix-green/20 rounded-lg p-6 card-hover"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="tag">{post.category}</span>
                    <time className="text-sm text-text-secondary">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    <span className="text-sm text-text-secondary">
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-text-primary hover:text-matrix-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-secondary mb-4">{post.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-matrix-green/10 text-matrix-green border border-matrix-green/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">
              {searchQuery || selectedCategory !== 'All'
                ? 'No posts found matching your criteria.'
                : 'No posts yet. Check back soon!'}
            </p>
          </div>
        )}
      </div>
    </>
  )
}

