import {Home, Profile, SignIn, SignUp, PatternsCatalog, ContactUs, GitHub} from "@/pages";
import {
    HomeIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
    DocumentTextIcon,
    PhoneIcon,
    HandRaisedIcon
} from "@heroicons/react/24/solid";
import PatternDescription from "@/pages/PatternDescription.jsx";

export const routes = [
    {
        icon: HomeIcon,
        name: "خانه",
        path: "/home",
        element: <Home/>,
    },

    {
        icon: UserCircleIcon,
        name: "پروفایل",
        path: "/profile",
        element: <Profile/>,
    },
    {
        icon: ArrowRightOnRectangleIcon,
        name: "ورود",
        path: "/sign-in",
        element: <SignIn/>,
    },
    {
        icon: UserPlusIcon,
        name: "ثبت نام",
        path: "/sign-up",
        element: <SignUp/>,
    },
    {
        icon: PhoneIcon,
        name: "ارتباط با ما",
        path: "/contact_us",
        element: <ContactUs/>,
    },
    {
        icon: DocumentTextIcon,
        name: "پترن ها",
        path: "/patterns_catalog/:patternType",
        element: <PatternsCatalog/>,
        showInNav: false,
    },
    {
        icon: DocumentTextIcon,
        name: "پترن ها",
        path: "/patterns_catalog",
        element: <PatternsCatalog/>,
        showInNav: false,
    },
    {
        icon: DocumentTextIcon,
        name: "توضیحات پترن",
        path: "/pattern/:patternType/:patternName",
        element: <PatternDescription/>,
        showInNav: false,
    },
    {
        icon: HandRaisedIcon,
        name: "Git Hub",
        path: "/GitHub",
        element: <GitHub/>,
    },
];

export default routes;
