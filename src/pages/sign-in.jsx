import {Link} from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import {SimpleFooter} from "@/widgets/layout";
import axios from "axios";
import {useState} from "react";
import Cookies from 'js-cookie';
import AlertFactory from "@/Tools/AlertFactory.jsx";
import serverUrl from "@/config.js";

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(null);

    const handleLogin = async () => {
        let response;
        try {
            // Make login request to the server using axios
            response = await axios.post(serverUrl + '/users/login', {email, password});

            // Store the token in a cookie
            Cookies.set('token', response.data.token, {secure: true, sameSite: 'strict'});
            setAlert(AlertFactory.createAlert(response?.status, "ورود با موفقیت انجام شد!", "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));

            // Redirect or perform other actions after successful login
        } catch (error) {
            setAlert(AlertFactory.createAlert(error?.response?.status || null, error?.response?.data?.message || null, "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
            // Handle login error
        }
    };

    return (
        <>
            <img
                src="/img/background-2.jpg"
                alt={"background"}
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            {alert}
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50"/>
            <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            ورود
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input variant="standard" type="email" label="Email" size="lg" onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                        <Input
                            variant="standard"
                            type="password"
                            label="Password"
                            size="lg"
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me"/>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={() => handleLogin()} fullWidth>
                            ورود
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            هنوز اکانتی نداری ؟
                            <Link to="/sign-up">
                                <Typography
                                    as="span"
                                    variant="small"
                                    color="blue"
                                    className="ml-1 font-bold"
                                >
                                    حساب ایجاد کنید
                                </Typography>
                            </Link>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
            <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
                <SimpleFooter/>
            </div>
        </>
    );
}

export default SignIn;
