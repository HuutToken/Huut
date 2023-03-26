import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Posts from './Pages/Posts/Posts'
import CreatePost from './Pages/CreatePost/CreatePost'
import DisplayPost from './Pages/Posts/DisplayPost'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import NewPost from './Pages/CreatePost/NewPost'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Auth' element={<Auth />}/>
        <Route path='/CreatePost' element={<CreatePost />}/>
        <Route path='/Posts' element={<Posts />}/>
        <Route path='/Posts/:id' element={<DisplayPost />}/>
        <Route path='/Tags' element={<Tags />}/>
        <Route path='/Users' element={<Users />}/>
        <Route path='/Users/:id' element={<UserProfile />}/>
        <Route path='/newpost' element={<NewPost/>}/>
    </Routes>
  )
}

export default AllRoutes