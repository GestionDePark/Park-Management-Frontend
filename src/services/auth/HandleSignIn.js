import fetcher from '../api/Axios'
const login_URL = '/login'
const handleSignIn = async (email,password) => {
    fetcher.post(login_URL,{
        email:email,
        password:password
    }).then((response) =>{
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
        console.log(error.response);
    })
}

export default handleSignIn