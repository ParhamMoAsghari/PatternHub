import { Routes, Route, Navigate } from "react-router-dom";
import { UpperLeftHeader } from "@/widgets/layout";
import routes from "@/routes";
import axios from "axios";
import {useEffect} from "react";
import Cookies from 'js-cookie';

function App() {
    /*useEffect(() => {
        // Create an Axios interceptor to add the token to headers
        const interceptor = axios.interceptors.request.use(
            (config) => {
                const token = Cookies.get('token');
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            },
            (error) => {
                // Handle request error
                return Promise.reject(error);
            }
        );

        // Clean up the interceptor on component unmount
        return () => {
            axios.interceptors.request.eject(interceptor);
        };
    }, []);*/
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <UpperLeftHeader routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
