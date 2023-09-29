import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import jwt_decode from "jwt-decode";

import Header from './Header'
import Footer from './Footerpage'
import About from './About'
import Chatbot from './Chatbot' 
import Services from './Services'

const User = () => {
  const [data, setData] = useState('');
  const location = useLocation();
  const [file, setFile] = useState('Sample.pdf');
  const [filename, setFilename] = useState('');
  const [files, setFiles] = useState([]);
  const [fileId, setFileId] = useState(-1);
  const [content, setContent] = useState('');

  useEffect(() => {
    setData(jwt_decode(location.state.data.data));
  },[location]);

  useEffect(() => {
    handleOpen()
  }, [data])

  useEffect(() => {
    extractText(file)
  }, [file]);

  const handleFile = (e) => {
    var reader = new FileReader();
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

  async function extractText(url){
    let texts = [];
    let pdf = await pdfjsLib.getDocument({url:url}).promise;
    let pages = pdf.numPages;
    for(let i=1; i<=pages; i++){
      let page = await pdf.getPage(i)
      let txt = await page.getTextContent()
      let text = txt.items.map((s) => s.str).join()
      texts.push(text)
    }
    setContent(texts) 
  }

  // if (file=='' || file=='Sample.pdf'){
  //   setContent('')
  // }else{
  //   setContent(extractText(file))
  // }

  return (
    <>
    <Header change='hidden' logout=''/>
    <div className='flex justify-around'>
      <div className='h-screen ml-4 w-4/6' >
        <div className='flex'>
          <form className='flex'>
          <input className='m-0 w-60 p-2 mr-2 ' type='file' onChange={handleFile}></input>
          <Button color='purple' size='sm' gradientDuoTone="purpleToBlue" outline className='mr-2'
          onClick={handleUpload}>Upload PDF</Button>
          </form>
          <Dropdown size='sm' label='YOUR PDFS'>
          {files?.map((pdf, i) => {
            return(
              <Dropdown.Item onClick={() => handleOpenFile(i)} key={i}>{i}</Dropdown.Item>
            )
          })}
          </Dropdown>
          <Button size = 'sm' className='ml-2' onClick={handleDelete}>DELETE PDF</Button>
        </div>
          <iframe  src={`${file}#view=fitH`}
          type="application/pdf" className='w-full h-4/5 border-solid border-violet-900 border-4 rounded' ></iframe>
      </div>

      <div className='w-2/6' style={{height:"480px"}}>
        <h1 className='text-center'>ASKSCRIBE BOT</h1>
        <Chatbot Pdf_Content = {content}/>
      </div>

    </div>
      <About />
      <Services />
      <Footer />
    </>
  )

}

export default User
