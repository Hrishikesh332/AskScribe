'use client';
import React from 'react'
import { useState } from 'react';
import { Card, Button, Checkbox, Label, TextInput} from 'flowbite-react';

import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [lemail, setEmail] = useState('');
  const [lpassword, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    console.log('hii')
    e.preventDefault();
    const [femail, fpassword] = [lemail, lpassword];
    fetch("http://localhost:5000/login-user",{
      method:"POST",
      crossDomain:true,
      headers:{
        "content-type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        femail,
        fpassword
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.status=='ok'){
        navigate('/loggedin', { state: {data} });
      }
      else if(data.status=='error'){
        alert("Wrong Password");
      }
      else{
        alert('Wrong User Credentials');
      }
    });
  };

return (
  <>
    <div className={`mt-10`}>
    <Card className='w-80 m-auto relative' onSubmit={handleLogin}>
        <a href='/'><Button color='light' className='h-20 w-12 absolute close-login'><img src='/close.png' alt='close' style={{height:10, width:10}}></img></Button></a>
        <p className='m-auto mt-5 font-semibold'>LOGIN</p>
        <form className="flex flex-col gap-4">

        <div>
        <div className="mb-2 block">
        <Label htmlFor="lemail" value="Your email"/>
        </div>
        <TextInput id="lemail" placeholder="name@gmail.com" required type="email" value={lemail} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
        <div className="mb-2 block">
        <Label
          htmlFor="lpassword"
          value="Your password"
        />
        </div>
        <TextInput id="lpassword" required type="password" value={lpassword} onChange={(e) => setPassword(e.target.value)} />
        </div>
       
        <div className="flex items-center gap-2">
        <Checkbox id="lremember" />
        <Label htmlFor="lremember">Remember me</Label>
        </div>

        <Button type="submit">Submit</Button>

        <a href='/signup'><Button color='light' className='border-0 w-fit m-auto'>Sign Up</Button></a>
        </form>
    </Card>

    </div>
  </>
)
}

export default Login