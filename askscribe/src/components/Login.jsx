'use client';
import React from 'react'
import { useState } from 'react';
import { Card, Button, Checkbox, Label, TextInput} from 'flowbite-react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
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
        <Label htmlFor="email" value="Your email"/>
        </div>
        <TextInput id="email" placeholder="name@gmail.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
        <div className="mb-2 block">
        <Label
          htmlFor="password"
          value="Your password"
        />
        </div>
        <TextInput id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
       
        <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
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