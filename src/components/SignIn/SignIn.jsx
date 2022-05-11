import React, { useContext, useEffect } from 'react'
import { Context } from '../..'
import firebase from 'firebase'
import classCss from './SignIn.module.css'

const SignIn = () => {

  const {auth} = useContext(Context)

  const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const {user} = await auth.signInWithPopup(provider)
      console.log(user, 'asdasd');
  }

  return (
    <div className={classCss.SignBlock}>
        <button 
          to={'#'} 
          className={classCss.SignIn}
          onClick={login}
        >
            Войти с Google
        </button>
    </div>
  )
}

export default SignIn