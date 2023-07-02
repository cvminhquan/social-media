import React from 'react'
import styles from './Profile.module.scss'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { MdEmail, MdOutlineLanguage, MdPlace } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'
import Posts from '~/components/Posts/Posts'
const Profile: React.FC = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.images}>
        <img
          src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          className={styles.cover}
        />
        <img
          src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
          alt=''
          className={styles.profilePic}
        />
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.uInfo}>
          <div className={styles.left}>
            <a href='http://facebook.com'>
              <FaFacebook fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <FaInstagram fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <FaTwitter fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <FaLinkedin fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <FaPinterest fontSize='large' />
            </a>
          </div>
          <div className={styles.center}>
            <span>Jane Doe</span>
            <div className={styles.info}>
              <div className={styles.item}>
                <MdPlace />
                <span>USA</span>
              </div>
              <div className={styles.item}>
                <MdOutlineLanguage />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className={styles.right}>
            <MdEmail />
            <FiMoreVertical />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile
