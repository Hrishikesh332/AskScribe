import React from 'react'
import Header from './Header'
import Footer from './Footerpage'
import About from './About'
import Services from './Services'
import ChatBot from './Chatbot';
import { Button } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import ReactHtmlParser from 'react-html-parser';
import jwt_decode from "jwt-decode";

const User = () => {
  const [data, setData] = useState('');
  const location = useLocation();
  const [file, setFile] = useState('Sample.pdf');
  const [filename, setFilename] = useState('');
  const [files, setFiles] = useState([]);
  const [fileId, setFileId] = useState(-1);

  useEffect(() => {
    setData(jwt_decode(location.state.data.data));
  },[location]);

  useEffect(() => {
    handleOpen()
  }, [data])

  const handleFile = (e) => {
    var reader = new FileReader();
    console.log(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFilename(reader.result);
    }
    reader.onerror = error => {
      console.log("error : ",error);
    }
  }

  const handleOpenFile = (id) => {
    setFile(files[id]);
    setFileId(id);
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
          femail:data.femail,
        })
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
      })
    }
  }

  async function handleOpen(){
    await fetch(`http://localhost:5000/getpdf/${data.femail}`, {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      }
    })
      .then(response => response.json())
      .then(data => {
        setFiles(data.data)
      })
      .catch(err => console.error(err));
  }

  async function handleDelete(){
    if (fileId==-1){
      alert("No pdf exists.")
    }
    files.splice(fileId, 1)
    await fetch(`http://localhost:5000/deletepdf` ,{
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        pdf: files,
        femail:data.femail,
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.status=='FILE DELETED SUCCESSFULLY'){
        alert('FILE DELETED SUCCESSFULLY')
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      <Header change='hidden' logout=''/>
      <div className='flex justify-around'>
      <div className='h-screen ml-4 w-4/6' >
        <div className='flex'>
          <form className='flex'>
          <input type='file' onChange={handleFile}></input>
          <Button color='purple' size='sm' gradientDuoTone="purpleToBlue" outline className='mb-2 mr-4'
          onClick={handleUpload}>Upload PDF</Button>
          </form>
          <Dropdown size='sm' label='OPEN PDF'>
          {files?.map((pdf, i) => {
            return(
              <Dropdown.Item onClick={() => handleOpenFile(i)} key={i}>{i}</Dropdown.Item>
            )
          })}
          </Dropdown>
          <Button size = 'sm' className='ml-4' onClick={handleDelete}>DELETE PDF</Button>
        </div>
          <iframe  src={`${file}#view=fitH`}
          type="application/pdf" className='w-full h-4/5 border-solid border-violet-900 border-4 rounded' ></iframe>
      </div>
      <div>
      <ChatBot />
      </div>
      </div>
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default User
