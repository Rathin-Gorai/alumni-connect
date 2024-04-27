'use client'
import { useState } from "react"

const PostsCard = () => {
    const postData = [
        {
            id: 1,
            name: "John Doe",
            username: "@johndoe",
            avatar: "https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png",
            time: "1h ago",
            postText: "This is a dummy post.",
            image: "https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900"
        },
        {
            id: 2,
            name: "Jane Smith",
            username: "@janesmith",
            avatar: "https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png",
            time: "2h ago",
            postText: "Another dummy post.",
            image: "https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900"
        },
        // Add more dummy post data objects as needed
    ];
    
    return (
        <div>
            <div className="posts">
                {postData.map((post) => (
                    <div key={post.id} className="post">
                        <div className="flex">
                            <div className="image m-4">
                                <img className="w-16" src={post.avatar} alt="" />
                            </div>
                            <div className="content my-3">
                                <span className="font-bold hover:underline cursor-pointer text-white">{post.name}</span> <span className="text-gray-500">{post.username} · {post.time} </span>
                                <div>{post.postText}</div>
                                <div className="postimg m-4 ml-0">
                                    <img className="rounded-xl" src={post.image} alt="" />
                                </div>
                                <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                                    <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">chat_bubble</span> 1k
                                    </div>
                                    <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">repeat</span> 1k
                                    </div>
                                    <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">Favorite</span> 1k
                                    </div>
                                    <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                        <span className="material-symbols-outlined">bar_chart</span> 1k
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
