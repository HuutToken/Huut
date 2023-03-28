import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import Avatar from '../../components/Avatar/Avatar'
import '../Navbar/Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state) => state.currentUserReducer)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    },[User?.token, dispatch])

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' width="200" height="50" />
            </Link>
            <Link to='/' className='nav-item nav-btn'>Trending</Link>
            <Link to='/newpost' className='nav-item nav-btn'>New Posts</Link>
            <Link to='https://huuttoken.com' target="_blank" className='nav-item nav-btn'>Huut Token</Link>
            <form>
                <input type="text" placeholder='Search...'/>
            </form>
            { User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                <>
                <Avatar backgroundColor='#11F9D7' px="10px" py="5px" borderRadius="50%" color='black'><Link to={`/Users/${User?.result?._id}`} style={{color:"black", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar