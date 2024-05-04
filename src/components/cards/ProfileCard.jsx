'use client'
import { getUserIdByToken, getUserData } from '@/lib/actions/user.action';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = () => {

  const [userData, setUserData] = useState({
    id: null,
    name: '',
    alumni: false,
    branch: '',
    email: '',
    gender: '',
    jobTitle: '',
    bio: '',
    imageUrl: '',
    phone: '',
    linkedin: '',
    github: '',
    instagram: '',

  });
  const getId = async () => {
    try {
      const res = await getUserIdByToken();
      setUserData({
        ...userData,
        id: res.id,

      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getId();
  }, [])

  const getUserDataById = async () => {
    try {
      const res = await getUserData(userData.id);
      // console.log(userData.id);
      setUserData({
        ...userData,
        name: res?.name || 'name',
        jobTitle: res.curentJob === undefined ? 'Software Engineer' : res.jobTitle,
        bio: res.bio === undefined ? 'John is a software engineer with over 10 years of experience in developing web and mobile applications.' : res.bio,
        imageUrl: res.imageUrl === undefined ? 'https://picsum.photos/200' : res.imageUrl,
        alumni: res.alumni,
        branch: res.branch,
        email: res.email,
        gender: res.gender
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserDataById();
  }, [userData.id])

  //popup modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-md ">

      {/* Button to open the modal */}
      <button className="top-2 left-4 text-gray-400 hover:text-gray-600" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>

      {/* popup modal component conditional render */}
      {
        isModalOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-black mb-4">Edit your profile details</h2>
              <form>
                <input type="text" placeholder="Phone" value={userData.phone} onChange={e => setUserData({ ...userData, phone: e.target.value })} className="block w-full p-2 border border-gray-500 focus:border-blue-500 rounded mb-3" />
                <input type="text" placeholder="LinkedIn Link" value={userData.linkedin} onChange={e => setUserData({ ...userData, linkedin: e.target.value })} className="block w-full p-2 border border-gray-500 focus:border-blue-500 rounded mb-3" />
                <input type="text" placeholder="GitHub Link" value={userData.github} onChange={e => setUserData({ ...userData, github: e.target.value })} className="block w-full p-2 border border-gray-500 focus:border-blue-500 rounded mb-3" />
                <input type="text" placeholder="Instagram Link" value={userData.instagram} onChange={e => setUserData({ ...userData, instagram: e.target.value })} className="block w-full p-2 border border-gray-500 focus:border-blue-500 rounded mb-3" />
                <textarea placeholder="Bio" value={userData.bio} onChange={e => setUserData({ ...userData, bio: e.target.value })} className="block w-full p-2 border border-gray-500 focus:border-blue-500 rounded mb-3"></textarea>
                <input type="text" placeholder="Current Job" value={userData.jobTitle} onChange={e => setUserData({ ...userData, jobTitle: e.target.value })} className="block w-full p-2 border border-gray-500 focus:border-blue-500 rounded mb-3" />
                <button type='button' className="bg-blue-500 text-white p-2 rounded">Save changes</button>
                <br/>
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-blue-500 text-white p-2 rounded">Close</button>
              </form>
            </div>
          </div>
        )
      }

      {/* Render the image from state */}
      <img className="w-32 h-32 rounded-full mx-auto" src={userData.imageUrl} alt="Profile picture" />
      <h2 className="text-center text-2xl font-semibold mt-3">{userData.name}</h2>
      <p className="text-center text-gray-600 mt-1">{userData.jobTitle}</p>
      <div className="flex justify-center mt-5">
        <Link href="#" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</Link>
        <Link href="#" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</Link>
        <Link href="#" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</Link>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        {/* Render the bio from state */}
        <p className="text-gray-600 mt-2">{userData.bio}</p>
      </div>
    </div>

  );
};

export default ProfileCard;