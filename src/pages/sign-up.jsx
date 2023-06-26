import {Link} from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography, Alert,
} from "@material-tailwind/react";
import {SimpleFooter} from "@/widgets/layout";
import axios from "axios";
import {useState} from "react";
import AlertFactory from "@/Tools/AlertFactory.jsx";
import serverUrl from "@/config.js";

export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [alert, setAlert] = useState(null);

    const handleRegister = async () => {
        const nameRegex = /^[A-Za-z\s\-']+$/;

        // Minimum length requirement: 3 characters
        const minLength = 3;

        if (!nameRegex.test(name)) {
            setAlert(AlertFactory.createAlert(400, "نام نمی تواند شامل کاراکتر های غیر مجاز باشد!", "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
            return;
        }
        if (name.length < minLength) {
            setAlert(AlertFactory.createAlert(400, `نام باید حداقل ${minLength} کاراکتر باشد!`, "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setAlert(AlertFactory.createAlert(400, "ایمیل نامعتبر است!", "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
            return;
        }
        if (password.length < 8) {
            setAlert(AlertFactory.createAlert(400, "رمز عبور باید حداقل 8 کاراکتر باشد!", "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
            return;
        }
        let response;
        try {
            // Make register request to the server using axios
            response = await axios.post(serverUrl + '/users/register', {email, password, name});
            // Redirect or perform other actions after successful
            setAlert(AlertFactory.createAlert(response.status, "ثبت نام با موفقیت انجام شد!", "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
        } catch (error) {
            // Handle login error
            setAlert(AlertFactory.createAlert(error?.response?.status || null, error?.response?.data?.message || null, "fixed content-center justify-center mt-16 sm:mr-8 sm:w-1/3"));
        }
    };

    return (
        <>
            <img
                alt={"background"}
                src="/img/background-2.jpg"
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
                            ایجاد حساب
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input variant="standard" label="یه اسم انتخاب کن(انگلیسی)" size="lg"
                               onChange={(e) => setName(e.target.value)}/>
                        <Input variant="standard" type="email" label="ایمیل" size="lg"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <Input
                            variant="standard"
                            type="password"
                            label="رمز"
                            size="lg"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="-ml-2.5">
                            <Checkbox label="پایتم !" checked={isChecked} onChange={e => {
                                setIsChecked(e.target.checked)
                            }}/>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth onClick={() => {
                            isChecked ? handleRegister() : console.error("terms not accepted!")
                        }}>
                            ایجاد کن
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            قبلا حساب داشتی ؟
                            <Link to="/sign-in">
                                <Typography
                                    as="span"
                                    variant="small"
                                    color="blue"
                                    className="ml-1 font-bold"
                                >
                                    ورود
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

export default SignUp;
