import React from 'react'
import VisualizeUpload from '../components/VisualizeUpload'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
        <Navbar/>
      <VisualizeUpload/>
      <footer className="bg-[#050c12] text-white/50 py-4 text-center text-sm">
        Designed & Created by Goose, Fish, and Batman :3
      </footer>
    </div>
  )
}

export default page
