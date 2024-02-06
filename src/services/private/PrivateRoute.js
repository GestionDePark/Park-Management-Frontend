import { Navigate } from "react-router-dom"
import { StorageProvider } from "../storage/storage"
const PrivateRoute = ({component: Component, ...props}) => {
     const isAuthenticated = StorageProvider.getItem('authToken') !== null

     return (
        isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Navigate
                to={{
                    pathname: '/login',
                    state: {from: props.location},
                }}
                replace
            />
        )
    )

}

export default PrivateRoute