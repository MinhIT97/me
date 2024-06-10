/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import CoppyRight from "./copyright";
import FindMe from "./FIndMe";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import FlagVietNam from "../src/svg/FlagVietNam";
import useTrans from "../src/hooks/useTrans";
import Toggle from "./Toggle";
import AudioPlayer from "./AudioPlayer";

const solutions = [
    {
        name: "Analytics",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: ChartBarIcon,
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: CursorClickIcon,
    },
    {
        name: "Security",
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: ShieldCheckIcon,
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools that you're already using.",
        href: "#",
        icon: ViewGridIcon,
    },
    {
        name: "Automations",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "#",
        icon: RefreshIcon,
    },
];
const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: ShieldCheckIcon,
    },
];
const recentPosts = [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site",
        href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const router = useRouter();
    const trans = useTrans();

    return (
        <div className="fixed z-10 bg-white w-full top-0 p-3 md:p-0  dark:bg-darkCustom-100 dark:text-white shadow-sm">
            <Popover className="relative ">
                {({ open }) => (
                    <>
                        <div className="max-w-screen-2xl  mx-auto ">
                            <div className="flex justify-between items-center py-3 md:py-6 md:justify-start md:space-x-10 ">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <span className="uppercase font-sans font-semibold text-xl">
                                        Minh Nguyen
                                    </span>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400  focus:outline-none">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon
                                            className="h-6 w-6 focus:outline-none "
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                                <Popover.Group as="nav" className="hidden md:flex space-x-10 ">
                                    <Link href="/">
                                        <a className="text-base font-medium text-dark-1100 hover:text-gray-900 dark:text-white">
                                            <b>{trans.home.home}</b>
                                        </a>
                                    </Link> 
                                    <Link href="/projects">
                                        <a className="text-base font-medium text-dark-1100 hover:text-gray-900 dark:text-white">
                                            <b> {trans.home.projects}</b>
                                        </a>
                                    </Link>

                                    <a
                                        href="#skills"
                                        className="text-base font-medium text-dark-1100 hover:text-gray-900 dark:text-white"
                                    >
                                        <b> {trans.home.skills}</b>
                                    </a>
                                    <a
                                        href="#experiences"
                                        className="text-base font-medium text-dark-1100 hover:text-gray-900 dark:text-white"
                                    >
                                        <b>{trans.home.experiences}</b>
                                    </a>
                                    <a
                                        href="#services"
                                        className="text-base font-medium text-dark-1100 hover:text-gray-900 dark:text-white"
                                    >
                                        <b> {trans.home.services}</b>
                                    </a>
                                    <a
                                        href="#contact"
                                        className="text-base font-medium text-dark-1100 hover:text-gray-900 dark:text-white"
                                    >
                                        <b>{trans.home.contact}</b>
                                    </a>
                                    <div className="flex space-x-2 languageToggleDesktop">
                                        {router.locales.map((locale) => (
                                            <div key={locale}>
                                                <Link href={router.asPath} locale={locale}>
                                                    <a className="flex gap-2">
                                                        {" "}
                                                        {locale == "vi" ? (
                                                            <img width={25} src="./vietnam.png" alt="" />
                                                        ) : (
                                                            <img
                                                                width={23}
                                                                src="./united-kingdom.png"
                                                                alt=""
                                                            />
                                                        )}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    <Toggle />
                                    <AudioPlayer />
                                </Popover.Group>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="duration-200  ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                static
                                className="absolute w-2/3 right-0 top-0  p-2 h-screen transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                    <div className="h-full">
                                        <div className="grid  grid-rows-4 gap-x-4g gap-y-8">
                                            <div
                                                className="flex justify-end pr-7 pt-4"
                                                aria-hidden="false"
                                            >
                                                <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                                                    <svg
                                                        aria-hidden="false"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </Popover.Button>
                                            </div>
                                            <a
                                                href="#"
                                                className="text-base m-auto font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                Home
                                            </a>

                                            <a
                                                href="#"
                                                className="text-base m-auto font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                Project
                                            </a>
                                            <a
                                                href="#"
                                                className="text-base m-auto font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                Services
                                            </a>
                                            <a
                                                href="#"
                                                className="text-base m-auto font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                Contacts
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}
