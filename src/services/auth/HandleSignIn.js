import fetcher from '../api/Axios';
import { StorageProvider } from '../storage/storage'

const login_URL = '/login';
const handleSignIn = async (email, password,navigate) => {
    try {
        const response = await fetcher.post(login_URL, {
            email: email,
            password: password
        });
        StorageProvider.setItem('authToken',response.data.token)
        navigate('/dashboard')
    } catch (error) {
        console.error('Error:', error);
        if (error.response) {
            console.error('Response:', error.response);
        }
        throw error; 
    }
}

export default handleSignIn;