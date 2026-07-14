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
import { AI_VISIBILITY_POSTS } from './posts-ai-visibility'
import { POSTS_56_TO_75 } from './posts-56-75'
import { POSTS_76_TO_87 } from './posts-76-87'
import { BUCKET_B_AEO_POSTS } from './posts-bucket-b-aeo'
import { BATCH3_LOCATION_POSTS } from './posts-batch3-locations'
import { BATCH3_TOPIC_POSTS } from './posts-batch3-topics'

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
  ...AI_VISIBILITY_POSTS,
  ...POSTS_56_TO_75,
  ...POSTS_76_TO_87,
  ...BUCKET_B_AEO_POSTS,
  ...BATCH3_LOCATION_POSTS,
  ...BATCH3_TOPIC_POSTS,
]
