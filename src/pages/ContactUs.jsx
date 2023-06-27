import React from 'react';
import ImagePlaceHolder from "@/Tools/ImagePlaceHolder.jsx";
import axios from "axios";
import serverUrl from "@/config.js";

export function ContactUs() {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
const [message, setMessage] = React.useState("");
    async function sendEmail() {
        await axios.post(serverUrl + "/mail/contactUs", {email: email, subject: name, message: message})
    }
    return (<>
            <section className="relative block h-[50vh]">
                <div
                    className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/DesignPatterns.jpg')] bg-cover bg-center"/>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
            </section>
            <section
                className="relative -mt-64 content-center max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            با ما در ارتباط باشید!
                        </h2>
                        <div className="text-gray-700 mt-8"
                             style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "12px"}}>
                            <p className="text-2xl">می تونید به ما ایمیل هم بزنید :</p>
                            <a className="text-indigo-600 hover:text-indigo-700 underline"
                               href="mailto:parhammohammadasghari@gmail.com">
                                <icon className="fas fa-envelope-square text-5xl"></icon>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <ImagePlaceHolder placeholderSrc="">
                            <img src="/img/ContactUs.jpg" alt="ContactUs"/>
                        </ImagePlaceHolder>
                    </div>
                </div>
                <div className="">
                    <div>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="نام"
                            onChange={(event) => {
                                setName(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mt-8">
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="آدرس ایمیل"
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mt-8">
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            defaultValue={""}
                            placeholder={"پیام"}
                            onChange={(event) => {
                                setMessage(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mt-8">
                        <button
                            onClick={sendEmail}
                            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            ارسال
                        </button>
                    </div>
                </div>
            </section>
        </>

    );
}

export default ContactUs;