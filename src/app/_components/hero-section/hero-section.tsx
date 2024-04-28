import Link from 'next/link'
import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">جلسه اول</h1>
      <ul>
        <li>gulp and icon pack system</li>
        <li>
          <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts">
            font in next js
          </Link>
        </li>
        <li>fetch senario</li>
        <li>git and github commit & branches system</li>
      </ul>
    </div>
  )
}
