/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import styles from './Post.module.scss'
import { FiMoreVertical } from 'react-icons/fi'
import { MdFavorite, MdFavoriteBorder, MdOutlineTextsms } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Comments from '../Comment/Comment'

interface PostProps {
  post: {
    id: number
    name: string
    userId: number
    profilePic?: string
    desc: string
    img?: string
  }
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)

  // TEMPORARY
  const liked = true

  // Check if post is undefined or doesn't have profilePic property
  if (!post || !post.profilePic) {
    // Render placeholder or handle the case where post is not defined
    return null
  }

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img src={post.profilePic} alt='' />
            <div className={styles.details}>
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className={styles.name}>{post.name}</span>
              </Link>
              <span className={styles.date}>1 min ago</span>
            </div>
          </div>
          <FiMoreVertical />
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
          <img src={post.img} alt='' />
        </div>
        <div className={styles.info}>
          <div className={styles.item}>
            {liked ? <MdFavorite /> : <MdFavoriteBorder />}
            12 Likes
          </div>
          <div className={styles.item} onClick={() => setCommentOpen(!commentOpen)}>
            <MdOutlineTextsms />
            12 Comments
          </div>
          <div className={styles.item}>
            <AiOutlineShareAlt />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post
