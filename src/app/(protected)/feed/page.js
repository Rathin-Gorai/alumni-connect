
'use client'
import { PostsCard, RigntSideBar, Topbar } from "@/components"
import Newpost from "@/components/forms/Newpost"
import { getAllPosts } from "@/lib/actions/post.action"
import { useEffect, useState } from "react"

const page = () => {
  const [allPost, setAllPost] = useState([]);
  const getAllpost = async () => {
    try {
      const response = await getAllPosts()
      // console.log(response.data);
      setAllPost(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllpost()
  }, [])
  return (
    <>
      <div className="second w-full border-[1px] border-x-gray-600 border-y-black ">
        <Topbar />
        <Newpost />

        {allPost.map((post) => (
          <PostsCard  post={post} user={post.user}/>
        ))}
      </div>


    </>
  )
}

export default page
