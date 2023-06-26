import {useEffect, useState} from "react";
import serverUrl from "@/config.js";
import axiosInterceptor from "@/Tools/axiosInterceptor.js";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";
import AlertFactory from "@/Tools/AlertFactory.jsx";

export function Profile() {

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState("");
    const [alert, setAlert] = useState(null);

    const SignOut = () => {
        Cookies.remove('token');
        const navigate = useNavigate();
        navigate('/home');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInterceptor.get(serverUrl + '/users/profile');
                setUserName(response.data?.user?.name);
                setEmail(response.data?.user?.email);
                setRole(response.data?.user?.role);
            } catch (error) {
                setAlert(AlertFactory.createAlert(error?.response?.status || null, error?.response?.data?.message || null, "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {alert}
            <section className="relative block h-[50vh]">
                <div
                    className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/DesignPatterns.jpg')] bg-cover bg-center"/>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4 content-center">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center bg-gray-200 -mt-64 rounded-3xl">
                        <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
                            <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 mx-2">
                                            <img className="h-12 w-12 rounded-full mx-4" src="img/avatar.png" alt="Avatar"/>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">{userName}</h2>
                                            <p className="text-sm text-gray-500">{email}</p>
                                            <p className="text-sm text-gray-500">{role}</p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="border-t">
                                            <div className="py-4">
                                                <h3 className="text-lg font-semibold text-gray-800">آزمون ها</h3>
                                                <ul className="mt-4">
                                                    <li className="py-2">
                                                        <a href="#" className="text-blue-500 hover:text-blue-700">Quiz
                                                            1</a>
                                                    </li>
                                                    <li className="py-2">
                                                        <a href="#" className="text-blue-500 hover:text-blue-700">Quiz
                                                            2</a>
                                                    </li>
                                                    <li className="py-2">
                                                        <a href="#" className="text-blue-500 hover:text-blue-700">Quiz
                                                            3</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="border-t">
                                            <div className="py-4">
                                                <h3 className="text-lg font-semibold text-gray-800">تکالیف</h3>
                                                <ul className="mt-4">
                                                    <li className="py-2">
                                                        <a href="#" className="text-blue-500 hover:text-blue-700">Homework
                                                            1</a>
                                                    </li>
                                                    <li className="py-2">
                                                        <a href="#" className="text-blue-500 hover:text-blue-700">Homework
                                                            2</a>
                                                    </li>
                                                    <li className="py-2">
                                                        <a href="#" className="text-blue-500 hover:text-blue-700">Homework
                                                            3</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={SignOut}>
                                            خروج
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
