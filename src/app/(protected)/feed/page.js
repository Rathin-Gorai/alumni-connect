
import { PostsCard, RigntSideBar, Topbar } from "@/components"
import Newpost from "@/components/forms/Newpost"
import { getAllPosts } from "@/lib/actions/post.action"
const getAllpost = async () => {
  try {
    // const response = await getAllPosts()
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getAllpost();
const page = () => {
  return (
    <>
      <div className="second w-full border-[1px] border-x-gray-600 border-y-black ">
        <Topbar />
        <Newpost />
        <PostsCard />
      </div>


    </>
  )
}

export default page
