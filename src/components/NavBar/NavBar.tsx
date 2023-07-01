import React from 'react'
import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const NavBar: React.FC = (props) => {
  // const currentUser = false;
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {/* <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon /> */}
        <div className={styles.search}>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search...' />
        </div>
      </div>
      <div className={styles.right}>
        {/* <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon /> */}
        <div className={styles.user}>
          <img src="https://avatars.githubusercontent.com/u/105114297?v=4" alt='' />
          <span>cvminhquan</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
