import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      {/* main content */}
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home page</p>
      </div>
      <Footer />
    </div>
  )
}
