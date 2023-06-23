import React from 'react';
import {PageTitle} from "@/widgets/layout/index.js";
import {aboveAboutUs} from "@/data/index.js";
import {Card, Typography} from "@material-tailwind/react";

export function iconBar() {
    return (
        <section className="relative bg-blue-gray-50/50 py-8 px-4">
            <div className="container mx-auto">
                <PageTitle heading="پترن هاب">
                    مهندسی نرم افزار به زبان ساده
                </PageTitle>
                <div
                    className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                    {aboveAboutUs.map(({title, icon, description}) => (
                        <Card
                            key={title}
                            color="transparent"
                            shadow={false}
                            className="text-center text-blue-gray-900"
                        >
                            <div
                                className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                                {React.createElement(icon, {
                                    className: "w-5 h-5",
                                })}
                            </div>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {title}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-500">
                                {description}
                            </Typography>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default iconBar;