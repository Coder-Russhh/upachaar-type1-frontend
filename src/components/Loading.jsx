import React from 'react'

const Loading = () => {
  return (
    <div className="bg-white text-color h-screen flex justify-center items-center">
    <h1 className="text-4xl md:text-8xl relative">
      <span className="animate-loading">U</span>
      <span className="animate-loading" style={{animationDelay: '0.1s'}}>P</span>
      <span className="animate-loading" style={{animationDelay: '0.3s'}}>A</span>
      <span className="animate-loading" style={{animationDelay: '0.5s'}}>C</span>
      <span className="animate-loading" style={{animationDelay: '0.7s'}}>H</span>
      <span className="animate-loading" style={{animationDelay: '0.9s'}}>A</span>
      <span className="animate-loading" style={{animationDelay: '1.1s'}}>A</span>
      <span className="animate-loading" style={{animationDelay: '1.3s'}}>R</span>
      <span className="animate-loading" style={{animationDelay: '0.9s'}}>.</span>
      <span className="animate-loading" style={{animationDelay: '1.1s'}}>.</span>
      <span className="animate-loading" style={{animationDelay: '1.3s'}}>.</span>
    </h1>
  </div>
  )
}

export default Loading