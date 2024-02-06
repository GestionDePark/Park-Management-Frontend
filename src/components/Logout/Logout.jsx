import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button'; 
import { StorageProvider } from '../../services/storage/storage';
export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // delete token
        StorageProvider.deleteItem('authToken');
        
        // Navigate to login page
        navigate("/login");
    };
  return (
        <Button onClick={handleLogout}>Logout</Button>
    
  )
}
