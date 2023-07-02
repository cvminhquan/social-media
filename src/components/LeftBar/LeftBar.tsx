import React, { useContext } from 'react'
import styles from './LeftBar.module.scss'
import Friends from '../../assets/img/1.png'
import Groups from '../../assets/img/2.png'
import Market from '../../assets/img/3.png'
import Watch from '../../assets/img/4.png'
import Memories from '../../assets/img/5.png'
import Events from '../../assets/img/6.png'
import Gaming from '../../assets/img/7.png'
import Gallery from '../../assets/img/8.png'
import Videos from '../../assets/img/9.png'
import Messages from '../../assets/img/10.png'
import Tutorials from '../../assets/img/11.png'
import Courses from '../../assets/img/12.png'
import Fund from '../../assets/img/13.png'
import { AuthContext } from '~/context/authContext'

const LeftBar: React.FC = (props) => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className={styles.leftBar}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.user}>
            <img src={currentUser?.profilePic} alt='' />
            <span>{currentUser?.name}</span>
          </div>
          <div className={styles.item}>
            <img src={Friends} alt='' />
            <span>Friends</span>
          </div>
          <div className={styles.item}>
            <img src={Groups} alt='' />
            <span>Groups</span>
          </div>
          <div className={styles.item}>
            <img src={Market} alt='' />
            <span>Marketplace</span>
          </div>
          <div className={styles.item}>
            <img src={Watch} alt='' />
            <span>Watch</span>
          </div>
          <div className={styles.item}>
            <img src={Memories} alt='' />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className={styles.menu}>
          <span>Your shortcuts</span>
          <div className={styles.item}>
            <img src={Events} alt='' />
            <span>Events</span>
          </div>
          <div className={styles.item}>
            <img src={Gaming} alt='' />
            <span>Gaming</span>
          </div>
          <div className={styles.item}>
            <img src={Gallery} alt='' />
            <span>Gallery</span>
          </div>
          <div className={styles.item}>
            <img src={Videos} alt='' />
            <span>Videos</span>
          </div>
          <div className={styles.item}>
            <img src={Messages} alt='' />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className={styles.menu}>
          <span>Others</span>
          <div className={styles.item}>
            <img src={Fund} alt='' />
            <span>Fundraiser</span>
          </div>
          <div className={styles.item}>
            <img src={Tutorials} alt='' />
            <span>Tutorials</span>
          </div>
          <div className={styles.item}>
            <img src={Courses} alt='' />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
