"use client";
import TeamCard from '@/components/cards/TeamCard'
import React from 'react'
import { motion } from "framer-motion"

const page = () => {
  return (
    <div>
      <div className="flex flex-wrap mx-auto mb-5 py-14">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
            <div className="flex-auto block py-8 px-9">
              <div>
                <div className="mb-9">
                  <motion.h1 className="mb-2 mt-3 text-[1.75rem] font-semibold text-dark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Our Executive Team
                  </motion.h1>
                  <motion.span className="text-[1.15rem] font-medium text-muted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    Meet our talented team, a dynamic group of experts driven by
                    passion and innovation.{" "}
                  </motion.span>
                </div>
                <motion.div className="flex flex-wrap justify-center -mb-8 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <TeamCard
                    name="Rathin Kumar Gorai"
                    image={"https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg"}
                    experties={"Full Stack Devloper"}
                  />
                  <TeamCard
                    name="Shashi Anand Sharma"
                    image='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg'
                    experties='Frontend Devloper'
                  />
                  <TeamCard
                    name="Shaghaf Fatima"
                    image='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg'
                    experties='Frontend Devloper'
                  />
                  <TeamCard
                    name="Shagufta Nigar"
                    image='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg'
                    experties='UI designer and Tester'
                  />
                  <TeamCard
                    name="Sania Rashid"
                    image='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg'
                    experties='UI designer and Tester'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
