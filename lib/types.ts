// Type definitions for blog posts and content

export interface PostFrontmatter {
  title: string
  date: string
  slug: string
  category: string
  tags: string[]
  summary: string
}

export interface Post extends PostFrontmatter {
  content: string
  readingTime: number
}

export type Category = 
  | 'All'
  | 'HTB'
  | 'Vulnlab'
  | 'Web Testing'
  | 'PowerShell'
  | 'OSCP Notes'
  | 'Misc'

