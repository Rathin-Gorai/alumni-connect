'use client'
import { getUserByToken } from "@/lib/actions/user.action";
import { useState } from "react"

const PostsCard = ({ post }) => {
    const postData = [
        {
            id: 1,
            name: "John Doe",
            username: "@johndoe",
            avatar: "/logo.png",
            time: "1h ago",
            postText: "This is a dummy post.",
            image: "https://picsum.photos/800"
        },
        {
            id: 2,
            name: "Jane Smith",
            username: "@janesmith",
            avatar: "/logo.png",
            time: "2h ago",
            postText: "Another dummy post.",
            image: "https://picsum.photos/400"
        }, {
            id: 3,
            name: "Jane Smith",
            username: "@janesmith",
            avatar: "/logo.png",
            time: "2h ago",
            postText: "Another dummy post.",
            image: "https://picsum.photos/500"
        }, {
            id: 4,
            name: "Jane Smith",
            username: "@janesmith",
            avatar: "/logo.png",
            time: "2h ago",
            postText: "Another dummy post.",
            image: "https://picsum.photos/450"
        }, {
            id: 2,
            name: "Jane Smith",
            username: "@janesmith",
            avatar: "/logo.png",
            time: "2h ago",
            postText: "Another dummy post.",
            image: "https://picsum.photos/550"
        }, {
            id: 2,
            name: "Jane Smith",
            username: "@janesmith",
            avatar: "/logo.png",
            time: "2h ago",
            postText: "Another dummy post.",
            image: "https://picsum.photos/700"
        },
        // Add more dummy post data objects as needed
    ];

    // const fetchUser = async () => {
    //     const response =await getUserByToken();
    //     console.log(response);
    //     return data;
    // };
    // fetchUser();
    return (
        <div>
            <div className="posts">
                {postData.map((post) => (
                    <div key={post.id} className="post">
                        <div className="flex">
                            <div className="image m-4">
                                <img className="w-[45px] max-w-[45px] min-w-[45px] rounded-full" src={post.avatar} alt="" />
                            </div>
                            <div className="content my-3">
                                <span className="font-bold hover:underline cursor-pointer text-white">{post.name}</span> <span className="text-gray-500">{post.username} · {post.time} </span>
                                <div>{post.postText}</div>
                                <div className="postimg m-4 ml-0">
                                    <img className="rounded-xl" src={post.image} alt="" />
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
                ))}
            </div>

        </div>
    )
}

export default PostsCard
