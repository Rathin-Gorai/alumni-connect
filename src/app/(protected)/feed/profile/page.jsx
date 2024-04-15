'use client'
import ProfileCard from '@/components/cards/ProfileCard';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react';

const page = () => {

  const router = useRouter();
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [mail, setMail] = useState('');
  const [roll, setRoll] = useState('');

  return (
    <div>
    {/* Top container */}
      <div>
      <button
      onClick={()=>router.back('')}
      >
      Back
      </button>
      <br/>
      <br/>
      <text className='text-4xl font-bold'>Profile</text>
      </div>
      <ProfileCard/>
      {/* Details container */}
      <div>
      Profile name: {name}
      <br/>
      Batch: {batch}
      <br/>
      E Mail: {mail}
      <br/>
      Roll number: {roll}
      </div>
    </div>
  )
}

export default page
