import Link from 'next/link'
import React from 'react'

function navbar() {
  return (
    <>
    <nav className="top-nav">
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default navbar