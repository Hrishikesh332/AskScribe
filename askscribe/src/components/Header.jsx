'use client';
import React from 'react'
import { Navbar } from 'flowbite-react';
import { Button } from 'flowbite-react';

const Header = () => {

  return (
  <>
    <Navbar fluid rounded>

    <Navbar.Brand href="/http://127.0.0.1:5173/">
      <img className="mr-3 h-6 sm:h-9" src="/logo.ico" alt="AskScribe" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AskScribe</span>
    </Navbar.Brand>

    <div className="flex md:order-2">
      <Button><a href='/login'>Login</a></Button>
      <Navbar.Toggle />
    </div>

    <Navbar.Collapse>
    <Navbar.Link active href="#">
      <p>Home</p>
    </Navbar.Link>
    <Navbar.Link href="#">
      About
    </Navbar.Link>
    <Navbar.Link href="#">
      Services
    </Navbar.Link>
    <Navbar.Link href="#">
      Contact
    </Navbar.Link>
    </Navbar.Collapse>

    </Navbar>
  </>
  )
}

export default Header