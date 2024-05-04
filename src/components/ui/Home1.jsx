import Link from "next/link";
import React from "react";

const Home1 = () => {
  return (
    <div>
      <section className="flex items-center pt-8 justify-center bg-white px-1">
        <div className="mx-auto max-w-[80rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-indigo-600/95">
              Introducing the Alumni Connect platform
            </p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
              Connect to your college communnity
            </h1>
            <p className="mt-3 mx-auto max-w-[100rem] text-lg leading-relaxed text-slate-400">
              This social media app facilitates seamless communication among
              students from different branches and academic years, breaking down
              barriers and fostering a sense of community within the college.You
              can leverage the platform to share their expertise and skills with
              peers, creating a collaborative learning environment that promotes
              knowledge exchange and skill development. By connecting students
              across various disciplines, the app provides networking
              opportunities that can lead to valuable professional connections
              and collaborations both within and outside the college. Through
              interactions on the app, students can gain exposure to diverse
              perspectives, broaden their horizons, and develop essential skills
              for their future careers. The social media app fosters a sense of
              belonging and community within the college, strengthening ties
              among students and promoting a supportive environment for personal
              and academic growth.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="#"
              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Sign up
            </Link>
            <Link
              href="#"
              className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              {" "}
              Login{" "}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home1;
