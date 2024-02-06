import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import handleSignIn from '../../../services/auth/HandleSignIn'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [isValid,setIsValid] = useState({
  email:false,
  password:false,
  message:''
})
const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const validateEmail = !email.match(EMAIL_REGEX) || email === ''
    const validatePassword = password === '' && password.length <= 8
    setIsValid({
      email: validateEmail,
      password: validatePassword
    })
    if(validateEmail || validatePassword){
      setIsValid((prev) => ({
        ...prev,
        message:'Connection information not valid'
      })
      )
     return;
    }

    try {
      // call  handleSignIn for connection
      await handleSignIn(email, password,navigate); 
    } catch (error) {
      console.error('Error connection:', error);
  };    
} 
  return (
    <div className="w-full h-full flex justify-center items-center">
  <div className='max-w-sm bg-white border rounded-lg shadow-lg p-6'>
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input id="email" name="email" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          {isValid.email && <div className="text-red-500">Invalid email format</div>}
          <Input id="password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {isValid.password && <div className="text-red-500">The password must between 8 until 24 characters</div>}
          {isValid.message && <div className="text-red-500">{isValid.message}</div>}
          <div>
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

