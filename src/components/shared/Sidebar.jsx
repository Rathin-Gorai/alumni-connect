"use client";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Sidebar = () => {
    return (
        <div>
            <div className="first w-16 md:w-[70%] ">

                <div className="sidebar flex md:items-end  flex-col sticky top-0">
                    <div className="logo  my-4 self-start mx-2 md:mx-16">

                        <Image src={"/logo-bg.png"} alt={"logo"} width={100} height={100} />
                    </div>
                    <ul className="flex flex-col text-2xl space-y-3 md:px-11 font-bold w-full  ">
                        <Link href={"/feed"}>
                            <li
                                className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                                <span className="text-3xl material-symbols-outlined"> home </span> <span
                                    className="hidden md:block">Home</span>
                            </li>
                        </Link>

                        <Link href={'/feed/explore'}> <li
                            className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                            <span className="text-3xl material-symbols-outlined"> search </span><span
                                className="hidden md:block">Explore</span>
                        </li>
                        </Link>
                        <Link href={'/feed/notification'}>
                            <li
                                className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                                <span className="text-3xl material-symbols-outlined"> notifications </span><span
                                    className="hidden md:block">Notifications</span>
                            </li>
                        </Link>

                        <Link href={'/feed/saved'}>
                            <li
                                className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                                <span className="text-3xl material-symbols-outlined"> bookmarks </span><span
                                    className="hidden md:block">Saved</span>
                            </li>
                        </Link>
                        <Link href={'/feed/profile'}>
                            <li
                                className="flex md:justify-start items-center gap-3 justify-center  mr-4 md:w-fit  hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full">
                                <span className="text-3xl material-symbols-outlined"> person </span><span
                                    className="hidden md:block">Profile</span>
                            </li>
                        </Link>
                        <Link href={'/feed/post'}>
                            <li>
                                <div className="button w-full text-center my-4">
                                    <Link href={'/feed/newpost'}>
                                        <motion.button
                                            className="hidden md:block bg-[#1d9bf0] px-6 py-4 text-xl rounded-full text-white"
                                            whileHover={{ scale: 1.07 }}
                                            transition={{ duration: 0.05, ease: "easeIn" }}
                                        >New Post
                                        </motion.button>
                                        <button className="md:hidden bg-[#1d9bf0]  px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white">
                                            <span className="material-symbols-outlined">
                                                edit
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        </Link>
                    </ul>

                    {/* <div className="userprofile w-full mt-10  justify-end mx-10 hidden md:flex">
                        <div
                            className="item p-3 items-center gap-5 justify-end mx-5 flex   hover:bg-gray-800 cursor-pointer rounded-full w-fit">

                            <div className="p1"><img className="w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png"
                                alt="vercel"/></div>
                            <div className="p2 ">
                                <div>Haris Ali Khan</div>
                                <div className="text-gray-500">@CodeWithHarry</div>
                            </div>

                            <div className="p3 text-2xl">
                                ...
                            </div>


                        </div>
                    </div> */}

                </div>


            </div>
        </div>
    )
}

export default Sidebar
