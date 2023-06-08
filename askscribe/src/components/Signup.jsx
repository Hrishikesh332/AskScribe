'use client';
import React from 'react'
import { Card, Button, Checkbox, Label, TextInput} from 'flowbite-react';

const SignUp = () => {
  return (
    <div className='w-screen h-screen  mt-8 mb-2'>
    <Card className='w-80 m-auto relative'>
        <a href='/'><Button color='light' className='h-20 w-12 absolute close-login'><img src='/close.png' alt='close' style={{height:10, width:10}}></img></Button></a>
        <p className='m-auto mt-5 font-semibold'>SIGN UP</p>
        <form className="flex flex-col gap-4">

        <div>
        <div className="mb-2 block">
        <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput id="name" placeholder="Full name" required type="text" />
        </div>

        <div>
        <div className="mb-2 block">
        <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" placeholder="name@gmail.com" required type="email" />
        </div>

        <div>
        <div className="mb-2 block">
        <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" required type="password" />
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

export default SignUp