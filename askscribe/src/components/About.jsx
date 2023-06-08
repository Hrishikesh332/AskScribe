'use client';
import React from 'react'
import { Card } from 'flowbite-react';

const About = () => {
  return (
    <div className='h-screen w-full flex  justify-center color-card relative'>
    <img src='/about1.gif' className='absolute h-40  w-60 about1' ></img>
    <img src='/about2.gif' className='absolute h-40 about2' ></img>
    <Card href="#" className='height-card w-2/5 my-auto' >
    <div className='flex mt-4' >
      <img src='/logo.ico' style={{ width: 20, height: 20 }} className='mr-2 mt-1'></img>
      <h5 className=" text-xl  font-bold tracking-tight text-gray-900 dark:text-white">about</h5>
    </div>

  <p className="font-normal  text-gray-950 dark:text-gray-400">
    <ol className='list-decimal leading-8 font-normal ml-6'>
      <li>Are you tired of wasting time scrolling through lengthy PDF documents, searching for specific information?</li>
      <li>AskScribe is here to revolutionize the way you interact with PDF files ⚡️.</li>
      <li>With AskScribe, you can simply upload your PDF and engage in a conversation.</li>
      <li>Ask questions, seek clarification, and let AskScribe intelligently analyze and extract the most relevant information for you.</li>
      <li>Whether you're conducting research, studying, or simply trying to find that one elusive detail, AskScribe is your go to companion 🗂💬.</li>
      <li>Get started now and let AskScribe be your trusted assistant in unraveling the secrets hidden within your PDFs 📑🔓🔍</li>
    </ol>
  </p>
</Card>

    </div>
  )
}

export default About