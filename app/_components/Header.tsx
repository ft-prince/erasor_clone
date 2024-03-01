import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`p-2 bg-black fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolling ? 'blur-header' : ''}`}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Image src='/logo-1.png' alt='logo' width={100} height={100} />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-white transition hover:text-gray-100" href="/">About</a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-100" href="#">Careers</a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-100" href="#">History</a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-100" href="#">Services</a>
            </li>
            <li>
              <a className="text-white transition hover:text-gray-100" href="#">Projects</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <div className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition">
              <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
            </div>
            <div className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:text-slate-800 sm:block">
              <RegisterLink>Register</RegisterLink>  
            </div>
          </div>

          <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
