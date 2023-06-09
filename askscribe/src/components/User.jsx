import React from 'react'
// import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footerpage'
import About from './About'
import Services from './Services'
import { Button } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'

const User = () => {
  let name = 'Sample.pdf'
  return (
    <>
      <Header change='hidden' logout=''/>
      <div className='h-screen ml-4' >
        <div className='flex'>
        <Button color='purple' size='sm' gradientDuoTone="purpleToBlue" outline className='mb-2 mr-4'>Upload PDF</Button>
        <Dropdown size='sm' label="OPEN PDF" gradientDuoTone="purpleToBlue">
          <Dropdown.Item>Dashboard</Dropdown.Item>
        </Dropdown>
        <a><p className='font-semibold m-2 ml-4 text-violet-900'>{name}</p></a>
        </div>
        <iframe src={`${name}?zoom=75`} className='w-7/12 h-4/5 border-solid border-violet-900 border-4 rounded' ></iframe>
        <></>
      </div>
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default User