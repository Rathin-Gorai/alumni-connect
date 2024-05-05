
'use client'
import { PostsCard } from '@/components';
import ProfileCard from '@/components/cards/ProfileCard';
import Newpost from '@/components/forms/Newpost';
import { getPostByUserId } from '@/lib/actions/post.action';
import { getUserByToken } from '@/lib/actions/user.action';
import { useEffect, useState } from 'react';

function page() {
    // const [user,setuser] = useState()
    // const getUserId = async() =>{
    //     try {
    //         const response =await getUserByToken()
    //         setuser(response.data)
    //         // console.log(response.data);
    //     } catch (error) {
    //         console.log(error,"error in getUserId in post");
    //     }
    // }
    

    // const getPost = async(id) => {
    //     try {
    //         const response = getPostByUserId(id)
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error,);
    //     }
    // }
    // useEffect(() => {
    //     getPost(user?._id);
    //     // console.log(user?._id);
    // }, [user?._id])
    
    // useEffect(() => {
    //     getUserId()
        
    //   }, [])
    
    return (
        <div className=' w-full'>
            <ProfileCard/>
            <div className='mt-5'>
            </div>
            <Newpost/>

            <PostsCard/>
        </div>
    )
 
}

export default page;
