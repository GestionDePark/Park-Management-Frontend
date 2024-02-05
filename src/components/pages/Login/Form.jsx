import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import handleSignIn from '../../services/auth/HandleSignIn'
import { useState } from 'react'
import { redirect } from 'react-router-dom'

export default function Form() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [isAuthenticated, setIsAuthenticated] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // call  handleSignIn for connection
      const response = await handleSignIn(email, password);
      const token = response.data.token
      
      localStorage.setItem('authToken',token)
      // update the state of the authentication
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error connection:', error);
  };

  // if the user is authenticated, redirect to the dashboard page
    if (isAuthenticated) {
    return redirect('/dashboard');
    }
} 
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input id="email" name="email" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input id="password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <div>
            <Button >Sign in</Button>
          </div>
        </form>

      </div>
    </div>
  )
}

