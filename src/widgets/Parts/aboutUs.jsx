import React from 'react';
import {featuresData} from "@/data/index.js";
import {FeatureCard} from "@/widgets/cards/index.js";
import {UsersIcon} from "@heroicons/react/24/solid/index.js";
import {Button, Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";

export function aboutUs() {
    return (
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">

                <div className="mt-32 flex flex-wrap items-center">
                    <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                            <UsersIcon className="h-6 w-6 text-blue-gray-900" />
                        </div>
                        <Typography
                            variant="h3"
                            className="mb-3 font-bold"
                            color="blue-gray"
                        >
                            کار کردن با شما باعث افتخار ماست
                        </Typography>
                        <Typography className="mb-8 font-normal text-blue-gray-500">
                            در حد چند خط شعر
                            <br />
                            <br />
                            دو سه خط دیگه شعر و موحتوا
                        </Typography>
                        <Button variant="outlined">بیشتر در مورد ما بدونید</Button>
                    </div>
                    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                        <Card className="shadow-lg shadow-gray-500/10">
                            <CardHeader className="relative h-56">
                                <img
                                    alt="Card Image"
                                    src="/img/teamwork.jpeg"
                                    className="h-full w-full"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-3 font-bold"
                                >
                                    کار هایی که تیم ما کرده
                                </Typography>
                                <Typography className="font-normal text-blue-gray-500">
                                    یکم شعر از خودمون به علاوه عکس بالاش
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