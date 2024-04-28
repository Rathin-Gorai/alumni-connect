'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
  const router = useParams();
  const id = router.id;
  return (
    <div className=' w-full'>
     {id}
    </div>
  )
}

export default page
