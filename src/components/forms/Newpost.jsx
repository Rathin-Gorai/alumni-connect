'use client'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { createPost } from "@/lib/actions/post.action";
import { useState } from "react"

const Newpost = () => {
    const token = Cookies.get('token');
    const decodedToken = jwt.decode(token);
    const userId = decodedToken;
    console.log(decodedToken);
    
    const [formData, setFormData] = useState({
        userId: userId,
        image: "",
        caption: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e);
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async () => {
        try {
            const res = await createPost(formData);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="h-[1px] w-full bg-gray-700"></div>
            <div className="whatishapp flex gap-4 my-3">
                <div className="img m-2 w-16">

                    <img src="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png" alt="" />
                </div>
                <div className="w-full">
                    <input className="w-full h-7 my-2 text-xl bg-black outline-none text-white" type="text"
                        placeholder="What is happening?!" value={formData.caption} name={formData.caption} onChange={(e)=>handleChange()} />
                    <div className="text-blue-400 flex items-center gap-1 w-full my-4">
                        <span className="material-symbols-outlined ">
                            globe_asia
                        </span>
                        <span className="font-bold">Everyone can reply</span>
                    </div>
                    <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>
                    <div className="flex justify-between">

                        <div className="blueicons flex gap-2 text-blue-400 items-center">
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
