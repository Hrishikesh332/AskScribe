'use client';
import React from 'react'
import { Navbar } from 'flowbite-react';
import { Button } from 'flowbite-react';

const Header = ({change, logout}) => {

  return (
  <>
    <Navbar fluid rounded>

    <Navbar.Brand href="/">
      <img className="mr-3 h-6 sm:h-9" src="/logo.ico" alt="AskScribe" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AskScribe</span>
    </Navbar.Brand>

    <div className={`flex md:order-2 ${change}`}>
      <a href='/login'><Button>Login</Button></a>
      <Navbar.Toggle />
    </div>

    <div className={`flex md:order-2 ${logout}`}>
      <a href='/login'><Button>Log Out</Button></a>
      <Navbar.Toggle />
    </div>

    <Navbar.Collapse>
    <Navbar.Link active href="/">
      <p>Home</p>
    </Navbar.Link>
    <Navbar.Link href="#about">
      About
    </Navbar.Link>
    <Navbar.Link href="#services">
      Services
    </Navbar.Link>
    <Navbar.Link href="#contact">
      Contact
    </Navbar.Link>
    </Navbar.Collapse>

    </Navbar>
  </>
  )
}

export default Header