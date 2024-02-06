import fetcher from '../api/Axios';

const login_URL = '/login';

const handleSignIn = async (email, password) => {
    try {
        const response = await fetcher.post(login_URL, {
            email: email,
            password: password
        });
        console.log(response.data);
        return response.data; 
    } catch (error) {
        console.error('Error:', error);
        if (error.response) {
            console.error('Response:', error.response);
        }
        throw error; 
    }
}

export default handleSignIn;