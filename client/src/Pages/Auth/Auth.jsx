import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'


const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup)
    setName('')
    setEmail('')
    setPassword('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email && !password){
      alert('Enter email and password')
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue")
      }
      dispatch(signup({ name, email, password }, navigate))
    } else {
      dispatch(login({ email, password }, navigate))
    }
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        <img src={icon} alt='huut' width="100" height="120" className='login-logo'/>
        <form onSubmit={handleSubmit}>
          {isSignup && (
                <label htmlFor='name'>
                  <h4>Display Name</h4>
                  <input type="text" id='name' name='name' value={name} onChange={(e) => {setName(e.target.value);}}/>
                </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value);}}/>
          </label>
          <label htmlFor="password">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <h4>Password</h4>
              { !isSignup && <p style={{ color: "#00fff6", fontSize:'13px'}}>Forgot password?</p>}
            </div>
            <input type="password" name='password' id='password' value={password} onChange={(e) => {setPassword(e.target.value);}}/>
            { isSignup && <p style={{ color: "#666767", fontSize: "13px"}}>Password must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor='check'>
                <input type="checkbox" class="mid" id='check'/>
                <p style={{ fontSize: "13px"}}>Opt-in to receive occasional,<br />website updates, trending projects,<br />latest announcements.</p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{ isSignup ? 'Sign Up': 'Log in'}</button>
          {
            isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                By clicking "Sign up", you agree to our 
                 <span style={{ color: "#00A9FF"}}> Terms of<br /> service</span>,
                 <span style={{ color: "#00A9FF"}}> Privacy policy</span> and
                 <span style={{ color: "#00A9FF"}}> Cookie policy</span>
              </p>
            )
          }
        </form>
        <p style={{ color: "#ffffff"}}>
          {isSignup ? 'Already have an account?' : "Don't have an account"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? 'Log in' : 'Sign up'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth