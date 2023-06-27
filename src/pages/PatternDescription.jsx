import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import AlertFactory from "@/Tools/AlertFactory.jsx";
import ReactMarkdown from "react-markdown";
import './markdown.css'
import serverUrl from "@/config.js";

function PatternDescription() {

    const {patternType, patternName} = useParams();

    const [content, setContent] = useState('');
    const [alert, setAlert] = useState(null);


    useEffect(() => {
        let isMounted = true; // Flag to track if the component is still mounted

        const fetchData = async () => {
            let response;
            try {
                response = await axios.get(serverUrl + `/patterns/${patternType}`, {
                    params: {
                        pattern: patternName
                    }
                });

                if (isMounted) {
                    let {data} = response;
                    setContent(data);
                }
            } catch (error) {
                setAlert(AlertFactory.createAlert(response?.status || null, error, "justify-center"));
                console.error(error);
            }
        };

        fetchData();

        return () => {
            // Cleanup function
            isMounted = false; // Set the flag to false when the component is unmounting
        };
    }, [patternName]);


    return (<>
        <section className="relative block h-[50vh]">
            <div
                className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/DesignPatterns.jpg')] bg-cover bg-center"/>
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
        </section>
        <section
            className="relative -mt-64 content-center max-w-screen-2xl px-8 gap-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg min-h-[100vh]">
            <div className="inset-0 flex items-center justify-center">
                <div className="mt-2 mx-auto sm:w-1/3">
                    {alert}
                </div>
            </div>
            <div className="flex flex-col w-full justify-center content-center">
                <ReactMarkdown className="markdown-body" style="user-select: text;" children={content}/>
            </div>
        </section>
    </>);
}

export default PatternDescription;