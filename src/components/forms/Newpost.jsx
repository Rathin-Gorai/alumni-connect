'use client'
import { createPost } from "@/lib/actions/post.action";
import { getUserIdByToken } from "@/lib/actions/user.action";
import Link from "next/link";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const Newpost = () => {
    const [user, setUserId] = useState('')
    useEffect(() => {
        const getId = async () => {
            try {
                const res = await getUserIdByToken();
                setUserId(res.id)
            } catch (error) {
                console.log(error);
            }
        }
        getId();
    }, [])

    const [formData, setFormData] = useState({
        userId: '',
        post: {
            caption: "",
        }
    })

    const handleSubmit = async () => {
        try {
            console.log(formData, user);
            const res = await createPost({
                userId: user,
                post: {
                    caption: formData.post.caption,
                }
            });
            console.log(res);
            if (res.status === 200) {
                setFormData({
                    userId: '',
                    post: {
                        caption: "",
                    }
                });
                toast.success("Post created successfully");
                window.location.href = '/feed'
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="h-[1px] w-full bg-gray-700"></div>
            <div className="whatishapp flex gap-4 my-3">
                <div className="img m-2 w-16">

                    <img className=' rounded-full' src="/logo.png" alt="" />
                </div>
                <div className="w-full">
                    <input className="w-full h-7 my-2 text-xl bg-black outline-none text-white" type="text"
                        placeholder="What is happening?!" value={formData.post.caption} name={'caption'} onChange={(e) => {
                            setFormData({ ...formData, post: { ...formData.post, caption: e.target.value } })
                        }} />
                    <div className="text-blue-400 flex items-center gap-1 w-full my-4">
                        <span className="material-symbols-outlined ">
                            globe_asia
                        </span>
                        <span className="font-bold">Everyone can reply</span>
                    </div>
                    <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>
                    <div className="flex justify-between">

                        <div className="blueicons flex gap-2 text-blue-400 items-center">
                            <Link href={'/feed/newpost'}>
                                <span className="material-symbols-outlined cursor-pointer">
                                    image
                                </span>
                                <span className="material-symbols-outlined cursor-pointer">
                                    gif
                                </span>
                                <span className="material-symbols-outlined cursor-pointer">
                                    ballot
                                </span>
                                <span className="material-symbols-outlined cursor-pointer">
                                    sentiment_satisfied
                                </span>
                                <span className="material-symbols-outlined cursor-pointer">
                                    calendar_month
                                </span>
                                <span className="material-symbols-outlined cursor-pointer">
                                    pin_drop
                                </span>
                            </Link>
                        </div>
                        <div className="postbtn">
                            <button
                                className="bg-[#1d9bf0] px-6 mx-5 text-sm rounded-full py-2 text-white font-bold" onClick={handleSubmit}>Post</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Newpost
