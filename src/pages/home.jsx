import React from "react";
import {
    Typography,
} from "@material-tailwind/react";
import {Footer} from "@/widgets/layout";
import UpperCards from "@/widgets/Parts/upperCards.jsx";
import PatternsBar from "@/widgets/Parts/patternsBar.jsx";
import IconBar from "@/widgets/Parts/iconBar.jsx";
import AboutUs from "@/widgets/Parts/aboutUs.jsx";
export function Home() {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div
                    className="absolute top-0 h-full w-full bg-[url('/img/MainBackground.avif')] bg-cover bg-center"/>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 font-black"
                            >
                                پترن هاب
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                                یادگیری آنلاین دیزاین پترن ها
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <UpperCards/>
            <PatternsBar/>
            <IconBar/>
            <AboutUs/>
            <div className="bg-blue-gray-50/50">
                <Footer/>
            </div>
        </>
    );
}

export default Home;
