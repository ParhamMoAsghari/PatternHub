import { Home, Profile, SignIn, SignUp, PatternsCatalog } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "خانه",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "پروفایل",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "ورود",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "ثبت نام",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "ارتباط با ما",
    path: "/contact_us",
    target: "_blank",
    element: <PatternsCatalog />,
  },
  {
    icon: DocumentTextIcon,
    name: "پترن ها",
    path: "/patterns_catalog/:patternType",
    element: <PatternsCatalog />,
    showInNav: false,
  },
];

export default routes;
