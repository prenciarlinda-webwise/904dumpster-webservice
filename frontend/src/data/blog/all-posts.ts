import { BlogPost } from './types'
import { EXISTING_POSTS } from './posts-existing'
import { POSTS_1_TO_5 } from './posts-1-5'
import { MONTH1_POSTS_BATCH2 } from './posts-month1-batch2'
import { POSTS_11_TO_15 } from './posts-11-15'

export const BLOG_POSTS: BlogPost[] = [
  ...EXISTING_POSTS,
  ...POSTS_1_TO_5,
  ...MONTH1_POSTS_BATCH2,
  ...POSTS_11_TO_15,
]
