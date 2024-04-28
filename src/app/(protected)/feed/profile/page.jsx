
import { PostsCard } from '@/components';
import ProfileCard from '@/components/cards/ProfileCard';
import Newpost from '@/components/forms/Newpost';

function page() {
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
