import React from 'react'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'

const Register: React.FC = (props) => {
  return (
    <>
      <div className={styles.register}>
        <div className={styles.card}>
          <div className={styles.left}>
            <h1>Lama Social.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa
              exercitationem dignissimos, error nam, consequatur.
            </p>
            <span>Do you have an account?</span>
            <Link to='/login'>
              <button>Login</button>
            </Link>
          </div>
          <div className={styles.right}>
            <h1>Register</h1>
            <form>
              <input type='text' placeholder='Username' />
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <input type='text' placeholder='Name' />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
