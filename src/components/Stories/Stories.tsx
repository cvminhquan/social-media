import React, { useContext } from 'react'
import styles from './Stories.module.scss'
import { AuthContext } from '~/context/authContext'

const Stories: React.FC = (props) => {
  const { currentUser } = useContext(AuthContext)
  //mock data
  const stories = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 2,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 3,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 4,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    }
  ]
  return (
    <div className={styles.stories}>
      {currentUser && (
      <div className={styles.story}>
        <img src={currentUser.profilePic} alt='' />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      )}
      {stories.map((story) => (
        <div className={styles.story} key={story.id}>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
