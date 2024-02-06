import React from 'react'
import './App.css';
import Logout from '../../Logout/Logout';

export default function Dashboard() {
  return (
    <div className="App">
      <header className='App-header space-y-6'>
          <h1 className='text-center text-2xl font-bold text-white'> Welcome to the Dashboard</h1>
          <div>
            <Logout />
          </div>
      </header>
    </div>
  )
}
