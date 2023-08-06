'use client';
import React from 'react'
import { Navbar } from 'flowbite-react';
import { Button } from 'flowbite-react';

const Header = ({change, logout}) => {

  return (
  <>
    <Navbar fluid rounded className='sticky top-0'>

    <Navbar.Brand href="/">
      <img className="mr-3 h-6 sm:h-9" src="/logo.ico" alt="AskScribe" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AskScribe</span>
    </Navbar.Brand>

    <div className={`flex md:order-2 ${change}`}>
      <a href='/login'><Button>Login</Button></a>
      <Navbar.Toggle />
    </div>

    <div className={`flex md:order-2 ${logout}`}>
      <a href='/login'><Button gradientMonochrome="failure">Log Out</Button></a>
      <Navbar.Toggle />
    </div>

    <Navbar.Collapse className={change}>
    <Navbar.Link active href="/" className={change}>
      <p>Home</p>
    </Navbar.Link>
    <Navbar.Link href="#about" className={change}>
      About
    </Navbar.Link>
    <Navbar.Link href="#services" className={change}>
      Services
    </Navbar.Link>
    <Navbar.Link href="#contact" className={change}>
      Contact
    </Navbar.Link>
    </Navbar.Collapse>

    </Navbar>
  </>
  )
}

export default Header