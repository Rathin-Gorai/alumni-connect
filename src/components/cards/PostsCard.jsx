
const PostsCard = () => {
  return (
    <div>
      <div className="posts">

                <div className="post">
                    <div className="flex">
                        <div className="image m-4">
                            <img className="w-16"
                                src="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png"
                                alt=""/>
                        </div>
                        <div className="content my-3">
                            <span className="font-bold hover:underline cursor-pointer text-white">CodeWithHarry</span> <span
                                className="text-gray-500">@CodeWithHarry · 6h </span>
                            <div>Living legend</div>
                            <div className="postimg m-4 ml-0">
                                <img className="rounded-xl"
                                    src="https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900" alt=""/>
                            </div>
                            <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        chat_bubble
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        repeat
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        Favorite
                                    </span> 1k
                                </div>
                                <div
                                    className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        bar_chart
                                    </span> 1k
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
