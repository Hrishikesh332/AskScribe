'use client';
import React, { useState } from 'react'
import { Card, Button, Checkbox, Label, TextInput} from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [username, setUsername] = useState('hi');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const [fusername, femail, fpassword] = [username, email, password];

    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "content-type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fusername,
        femail,
        fpassword
      }),
    })
    .then((res)=>(res.json()))
    .then((data)=>{
      if(data.status=='ok'){
        console.log(data.data);
        navigate('/loggedin', {state:{data}});
      }
      else{
        alert("User Exists Already");
      }
    });
    
  };

  return (
    <div className='w-screen h-screen  mt-8 mb-2'>
    <Card className='w-80 m-auto relative' onSubmit={handleSignup}>
        <a href='/'><Button color='light' className='h-20 w-12 absolute close-login'><img src='/close.png' alt='close' style={{height:10, width:10}}></img></Button></a>
        <p className='m-auto mt-5 font-semibold'>SIGN UP</p>
        <form className="flex flex-col gap-4">

        <div>
        <div className="mb-2 block">
        <Label htmlFor="username" value="Your name" />                                     
        </div>
        <TextInput id="username" placeholder="Full name" required type="text" value={username} onChange= {e => setUsername(e.target.value)}/>
        </div>

        <div>
        <div className="mb-2 block">
        <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" placeholder="name@gmail.com" required type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div>
        <div className="mb-2 block">
        <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" required type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
       
        <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
        </div>

        <Button type="submit">Submit</Button>

        <a href='/login'><Button color='light' className='border-0 w-fit m-auto'>Login</Button></a>

        </form>
    </Card>

    </div>
  )
}

export default Signup