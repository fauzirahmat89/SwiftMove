import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Userprofile from '../components/Userprofile'
import Userpass from '../components/Userpass'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Userprofile />
      <Userpass />
      <Footer />
    </div>
  )
}

export default Profile