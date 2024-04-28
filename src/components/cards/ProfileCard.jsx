'use client'
import { getUserIdByToken, getUserData } from '@/lib/actions/user.action';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
    imageUrl: ''
    
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
      setUserData({
        ...userData,
        name: res.name,
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

  return (
    <div className="rounded-lg shadow-md ">
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