'use client'
import { getAllPosts } from "@/lib/actions/post.action";
import { getUserById } from "@/lib/actions/user.action";
import { useEffect, useState } from "react"

const PostsCard = ({ post,user}) => {
    const id = user;
    const [newUser,setUser] = useState()
    // console.log(id);
    const fetchUser = async (id) => {
        try {
            const response =await getUserById(id);
            setUser(response.data)
            console.log(response.data);
        } catch (error) {
            console.log("Error in PostsCard, fetchUser",error);
        }
        
    };
    useEffect(() => {
        
        fetchUser(id);
    }, [])
    
    return (
        <div>
            <div className="posts">
                    <div key={post?._id} className="post">
                        <div className="flex">
                            <div className="image m-4">
                                <img className="w-[45px] max-w-[45px] min-w-[45px] rounded-full" src={'/logo-bg.png'} alt="" />
                            </div>
                            <div className="content my-3">
                                <span className="font-bold hover:underline cursor-pointer text-white">{newUser?.name}</span> <span className="text-gray-500">{post?.username} · {post?.createdAt} </span>
                                <div>{post?.caption}</div>
                                <div className="postimg m-4 ml-0">
                                    <img className="rounded-xl" src={post?.image} alt="" />
                                </div>
                                <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                                    <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">Favorite</span> 10k
                                    </div>
                                    <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">chat_bubble</span> 1k
                                    </div>
                                    <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">share</span>
                                    </div>

                                    <div className="icon flex items-center justify-center hover:text-white hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">bookmark</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

        </div>
    )
}

export default PostsCard
