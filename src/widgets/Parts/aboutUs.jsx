import React from 'react';
import {underHeaderExp} from "@/data/index.js";
import {FeatureCard} from "@/widgets/cards/index.js";
import {UsersIcon} from "@heroicons/react/24/solid/index.js";
import {Button, Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";
import {Link, useNavigate} from "react-router-dom";

export function aboutUs() {
    const navigate = useNavigate();
    return (
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">

                <div className="mt-32 flex flex-wrap items-center">
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                        <div
                            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                            <UsersIcon className="h-6 w-6 text-blue-gray-900"/>
                        </div>
                        <Typography
                            variant="h3"
                            className="mb-3 font-bold"
                            color="blue-gray"
                        >
                            همراهی شما باعث افتخار ماست
                        </Typography>
                        <Typography className="mb-8 font-normal text-blue-gray-500">
                            نطرات و انتفادات خود را برای ما ارسال کنید
                            <br/>
                            <br/>
                            از طریق گیت هاب، ایمیل و یا فرم ارتباط با ما
                        </Typography>
                        <Link to="/contact_us" className="w-fit block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            <p>ارتباط با ما</p>
                        </Link>

                    </div>
                    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                        <Card className="shadow-lg shadow-gray-500/10">
                            <CardHeader className="relative h-56">
                                <img
                                    alt="Card Image"
                                    src="/img/raziUniversity.jpg"
                                    className="h-full w-full"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-3 font-bold"
                                >
                                    دانشگاه رازی کرمانشاه
                                </Typography>
                                <Typography className="font-normal text-blue-gray-500">
                                    گروه مهندسی کامپیوتر و فناوری اطلاعات
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default aboutUs;