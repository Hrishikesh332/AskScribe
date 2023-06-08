import { Button } from 'flowbite-react'
import React from 'react'

const Information = () => {
  return (
    <>
    <div className='ml-10 mt-12 w-7/12 leading-10'>
      <p className='font-mono font-bold text-5xl'>Your AI Research Assistant</p>
      <p className='text-1xl my-5'>AskScribe - Navigate PDF in a new way</p>
      <ul className='text-1xl list-disc ml-4'>
        <li>AskScribe is here to revolutionize the way you interact with PDF files.</li>
        <li>Do hours worth of reading and understanding in minutes</li>
        <li>Ask follow-up questions and get instant answers</li>
        <li>A new way to search and find relevant papers without specifying keywords</li>
      </ul>
      <div className='flex'>
        <input className="m-2 mr-0 mt-5 placeholder:italic placeholder:text-slate-500 block bg-white w-4/5 border border-slate-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for pdf..." type="text" name="search"/>
        <button className='rounded-none bg-black h-9 w-8 ml-1 mt-5'>
            <img src='/search.jpg'></img>
        </button>
      </div>
      <Button color='purple' className='m-2 mt-6'>Upload PDF</Button>
    </div>
    </>
  )
}
export default Information
