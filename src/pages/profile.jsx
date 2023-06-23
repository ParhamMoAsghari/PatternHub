import {Avatar, Typography, Button} from "@material-tailwind/react";
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import {Footer} from "@/widgets/layout";
import {Link} from "react-router-dom";
import ImagePlaceHolder from "@/Tools/ImagePlaceHolder.jsx";

export function Profile() {
    return (
        <>
            <section className="relative block h-[50vh]">
                <div
                    className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center"/>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div
                        className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                                    <div className="relative">

                                        <div className="-mt-20 w-60 h-50">
                                            <ImagePlaceHolder placeholderSrc="">
                                                <Avatar
                                                    src="/img/react-js-wallpaper.png"
                                                    alt="Profile picture"
                                                    variant="rounded"
                                                    className="h-full w-full shadow-xl"
                                                />
                                            </ImagePlaceHolder>
                                        </div>

                                    </div>
                                </div>
                                <div
                                    className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                                    <Link to="/your-link-here">
                                        <Button className="bg-blue-400">وصل شوید</Button>
                                    </Link>
                                </div>
                                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                                        <div className="mr-4 p-3 text-center">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                22
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                دوستان
                                            </Typography>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                10
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                عکس ها
                                            </Typography>
                                        </div>
                                        <div className="p-3 text-center lg:mr-4">
                                            <Typography
                                                variant="lead"
                                                color="blue-gray"
                                                className="font-bold uppercase"
                                            >
                                                89
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-blue-gray-500"
                                            >
                                                نظرات
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-20 text-center">
                                <Typography variant="h2" color="blue-gray" className="mb-2">
                                    ری اکت شهر هستیم
                                </Typography>

                            </div>


                            <div className="flex justify-center">

                                <div className="flex flex-col items-center mx-20 mb-6">
                                    <div className="flex flex-col items-center">
                                        <a href="https://github.com/ramtin-mhd" target="_blank"
                                           rel="noopener noreferrer">
                                            <ImagePlaceHolder placeholderSrc="">
                                                <img src="https://avatars.githubusercontent.com/u/135214372?v=4"
                                                     alt="Rami" className=" rounded-full w-40 hm-40"/>
                                            </ImagePlaceHolder>
                                        </a>
                                        <p>Ramtin's GitHub</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center mx-20 mb-6">
                                    <div className="flex flex-col items-center">
                                        <a href="https://github.com/ParhamMoAsghari" target="_blank"
                                           rel="noopener noreferrer">
                                            <ImagePlaceHolder placeholderSrc="">
                                                <img src="https://avatars.githubusercontent.com/u/96473677?v=4"
                                                     alt="Pari" className="rounded-full w-40 h-40"/>
                                            </ImagePlaceHolder>
                                        </a>
                                        <p>Pari GitHub</p>
                                    </div>
                                </div>

                            </div>


                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="mt-2 flex flex-wrap justify-center">
                                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                                        <Typography className="mb-8 font-normal text-blue-gray-500">
                                            فکر کنید اینا توضیحاته
                                        </Typography>
                                        <Button variant="text">بیشتر</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-blue-gray-50/50">
                <Footer/>
            </div>
        </>
    );
}

export default Profile;
