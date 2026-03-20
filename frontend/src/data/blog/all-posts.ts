import { BlogPost } from './types'
import { EXISTING_POSTS } from './posts-existing'
import { POSTS_1_TO_5 } from './posts-1-5'
import { MONTH1_POSTS_BATCH2 } from './posts-month1-batch2'
import { POSTS_11_TO_15 } from './posts-11-15'
import { POSTS_16_TO_25 } from './posts-16-25'
import { POSTS_26_TO_35 } from './posts-26-35'
import { POSTS_36_TO_45 } from './posts-36-45'
import { POSTS_46_TO_55 } from './posts-46-55'
import { EDUCATIONAL_POSTS } from './posts-educational'

export const BLOG_POSTS: BlogPost[] = [
  ...EXISTING_POSTS,
  ...POSTS_1_TO_5,
  ...MONTH1_POSTS_BATCH2,
  ...POSTS_11_TO_15,
  ...POSTS_16_TO_25,
  ...POSTS_26_TO_35,
  ...POSTS_36_TO_45,
  ...POSTS_46_TO_55,
  ...EDUCATIONAL_POSTS,
]
