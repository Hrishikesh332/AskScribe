'use client';
import React from 'react'
import { useState } from 'react';
import { Card, Button, Checkbox, Label, TextInput} from 'flowbite-react';

// import { useEffect } from 'react';

// import { connect } from './mongo';

async function login(username, password){
  const client = await connect();
    const db = client.db('askscribe');
    const usersCollection = db.collection('users');
    // Find the user based on the username
    const user = await usersCollection.findOne({ username });

    if (!user) {
      console.log('User not found');
      // Handle user not found scenario
      return;
    }

    // Check the password against the stored password hash
    if (user.password !== password) {
      console.log('Invalid password');
      // Handle invalid password scenario
      return;
    }

    // Login successful
    console.log('Logged in as', user.username);
    // Perform any additional actions after successful login

    client.close(); // Remember to close the connection when you're done
}



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

return (
  <>
    <div className={`mt-10`}>
    <Card className='w-80 m-auto relative'>
        <a href='/'><Button color='light' className='h-20 w-12 absolute close-login'><img src='/close.png' alt='close' style={{height:10, width:10}}></img></Button></a>
        <p className='m-auto mt-5 font-semibold'>LOGIN</p>
        <form className="flex flex-col gap-4">

        <div>
        <div className="mb-2 block">
        <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" placeholder="name@gmail.com" required type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
        <div className="mb-2 block">
        <Label
          htmlFor="password"
          value="Your password"
        />
        </div>
        <TextInput id="password" required type="password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
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