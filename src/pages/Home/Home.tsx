import React from 'react'
import styles from './Home.module.scss'
import Stories from '~/components/Stories/Stories'
import Post from '~/components/Post/Post'
import Posts from '~/components/Posts/Posts'

const Home: React.FC = (props) => {
  return (
    <div className={styles.home}>
      <Stories />
      <Posts/>
    </div>
  )
}

export default Home
