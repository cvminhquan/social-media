import React, { useContext } from 'react'
import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineSearch, AiOutlineMail } from 'react-icons/ai'
import { BsGrid, BsPerson, BsSun } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import { FiMoon } from 'react-icons/fi'
import classNames from 'classnames'
import { DarkModeContext } from '~/context/darkModeContext'
import { AuthContext } from '~/context/authContext'

const NavBar: React.FC = (props) => {
  // const currentUser = false;
  const {toggle, darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)
  return (
    <div className={classNames(styles.navbar)}>
      <div className={styles.left}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>lamasocial</span>
        </Link>
        <AiOutlineHome />
          {darkMode ? <BsSun  onClick={toggle}/> : <FiMoon onClick={toggle}/>}
        <BsGrid />
      </div>
      <div className={styles.search}>
          <AiOutlineSearch />
          <input type='text' placeholder='Search...' />
        </div>
      <div className={styles.right}>
        <BsPerson />
        <AiOutlineMail />
        <MdNotificationsNone />
        <div className={styles.user}>
          <img src={currentUser?.profilePic} alt='' />
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
