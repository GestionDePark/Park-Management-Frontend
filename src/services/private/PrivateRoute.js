import { Navigate } from "react-router-dom"
import { StorageProvider } from "../storage/storage"
const PrivateRoute = ({children}) => {
     const isAuthenticated = StorageProvider.getItem('authToken') !== null

     return (
        isAuthenticated ? (
            children
        ) : (
            <Navigate to= '/login' replace />
        )
    )

}

export default PrivateRoute