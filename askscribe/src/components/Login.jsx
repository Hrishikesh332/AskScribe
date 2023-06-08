'use client';
import React from 'react'
import { useState } from 'react';
import { Card, Button, Checkbox, Label, TextInput} from 'flowbite-react';

const Login = () => {
  const [page, setPage] = useState(true);

  const signup = (e) => {
    // e.preventDefault();
    setPage(!page);
  }
  let togglesignup = page? 'visible'  : 'invisible';

return (
  <>
    <div className={`mt-10 ${togglesignup}`}>
    <Card className='w-80 m-auto relative'>
        <Button color='light' className='h-20 w-12 absolute close-login'><img src='/close.png' alt='close' style={{height:10, width:10}}></img></Button>
        <p className='m-auto mt-5 font-semibold'>LOGIN</p>
        <form className="flex flex-col gap-4">
        <div>
        <div className="mb-2 block">
        <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" placeholder="name@gmail.com" required type="email" />
        </div>

        <div>
        <div className="mb-2 block">
        <Label
          htmlFor="password1"
          value="Your password"
        />
        </div>
     
        <TextInput id="password1" required type="password" />
        </div>
       
        <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
        </div>

        <Button type="submit">Submit</Button>

        <Button type="submit" color='light' className='border-0 w-fit m-auto' onClick={signup}>SignUp</Button>
        </form>
    </Card>

    </div>
  </>
)
}

export default Login