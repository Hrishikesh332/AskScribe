import React from 'react'
// import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footerpage'
import About from './About'
import Services from './Services'
import { Button } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import jwt_decode from "jwt-decode";


const User = () => {
  const [data, setData] = useState('');
  const location = useLocation();
  const [file, setFile] = useState('Sample.pdf');
  const [filename, setFilename] = useState('');

  useEffect(() => {
    setData(jwt_decode(location.state.data.data));
  },[location]);

  // const fname = data.fname;
  // let name = 'Sample.pdf'

  let filetype = ['application/pdf'];

  const handleFile = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          setFilename(reader.result);
        }
        reader.onerror = error => {
          console.log("errer : ",error);
        }
  }

  const handleUpload = (e) => {
    if(filename!=''){
      setFile(filename);

      fetch("http://localhost:5000/upload-pdf",{
        method:"POST",
        crossDomain:true,
        headers: {
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          base64:filename,
        })
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
      })
    }
  }
  
  return (
    <>
      <Header change='hidden' logout=''/>
      <div className='h-screen ml-4' >
        <div className='flex'>
        <form className='flex'>
          <input type='file' onChange={handleFile}></input>
          <Button color='purple' size='sm' gradientDuoTone="purpleToBlue" outline className='mb-2 mr-4'
          onClick={handleUpload}>Upload PDF</Button>
        </form>
        <Dropdown size='sm' label="OPEN PDF" gradientDuoTone="purpleToBlue">
          <Dropdown.Item>Dashboard</Dropdown.Item>
        </Dropdown>
        <a><p className='font-semibold m-2 ml-4 text-violet-900'>{name}</p></a>
        </div>
        <iframe  src={`${file}#view=fitH`} width={100} height={100}
         type="application/pdf" className='w-7/12 h-4/5 border-solid border-violet-900 border-4 rounded' ></iframe>
        <></>
        
        {/* src={`${file}?zoom=75`}  */}
      </div>
      {/* <p>Welcome {fname}</p> */}
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default User
