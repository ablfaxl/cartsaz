import React from 'react'
import Image from 'next/image'
import hero from '../../../../public/images/astronaut.png'
export const HeroSection: React.FC = () => {
  return (
    <div className="hero">
      <div lang="en" className="hero-title">
        <h1>Front Art | Cooming Soon ...</h1>
        <Image
          className="hero-animation"
          src={hero}
          alt="astronaut"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
