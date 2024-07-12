import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleAuthProvider } from '../firebaseConfige'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();


    const handleSubmit = async () => {
        try{
            const res = await signInWithPopup(auth , googleAuthProvider)
            localStorage.setItem("token",res.user.accessToken)
            navigate('/add')
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

  return (
    <div align="center">
      <h1>Google Authentication</h1>
      <button onClick={ () => handleSubmit()} className='btn btn-success'>Google</button>
    </div>
  )
}

export default Login
