import Image from 'next/image'
import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <div className="hero">
      <div lang="en" className="hero-title">
        <h1>Front Art | Cooming Soon ...</h1>
        <Image
          className="hero-animation"
          src="/images/astronaut.png"
          alt="astronaut"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
