import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { Post, PostFrontmatter } from './types'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

/**
 * Get all posts sorted by date (newest first)
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const readingTimeResult = readingTime(content)

      return {
        ...(data as PostFrontmatter),
        content,
        readingTime: Math.ceil(readingTimeResult.minutes),
      } as Post
    })
    .filter((post) => post.slug) // Filter out posts without required frontmatter

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const readingTimeResult = readingTime(content)

    return {
      ...(data as PostFrontmatter),
      content,
      readingTime: Math.ceil(readingTimeResult.minutes),
    } as Post
  } catch (error) {
    return null
  }
}

/**
 * Get all posts by category
 */
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts()
  if (category === 'All') {
    return allPosts
  }
  return allPosts.filter((post) => post.category === category)
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories).sort()
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap((post) => post.tags))
  return Array.from(tags).sort()
}

