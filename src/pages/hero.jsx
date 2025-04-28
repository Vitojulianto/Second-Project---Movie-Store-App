import React from 'react'
import Button from '../components/Button/Button'
import Navbar from '../Fragments/Navbar'
import { useNavigate } from 'react-router-dom'
const Hero = () => {

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/register')
    }
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://wallpaperboat.com/wp-content/uploads/2020/10/28/58402/chibi-anime-girl-05.jpg)",
  }}
>
   <Navbar />
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Anime Movies at Your Fingertips</h1>
      <p className="mb-5">
      Explore the best anime films, from action-packed adventures to heartwarming tales. Find your next favorite movie today!
      </p>
      <Button className="btn btn-primary" onClick={handleClick}>Get Started</Button>
    </div>
  </div>
</div>
  )
}

export default Hero
