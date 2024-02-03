import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
export default function Form() {
  const handleSignIn = (e) =>{
    alert("the button has been clicked")
    e.preventDefault()
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input id="email" name="email" type="email" placeholder="Email address" />
          <Input id="password" name="password" type="password" placeholder="Password" />

          <div>
            <Button onClick={handleSignIn}>Sign in</Button>
          </div>
        </form>

      </div>
    </div>
  )
}
