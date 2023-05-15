import React from "react";
import Header from "../components/Header";
import Link from 'next/link';
import "../Styles/main.css";
import "../Styles/shapes.css";
import Dropbar from "../components/Dropbar";



function app (){
    return(
        <main>
          <nav> <Header /> </nav>
          <nav className="bg-blue-300 border-200 bg-opacity-50  px-4 lg:px-6 py-2.5 shadow-2xl ">
            < a href = "/#"> HOME</a>
            < a href = "/#"> ANNOUNCEMENTS</a>
            < a href = "/#"> VIEW PROFILE</a>
            < a href = "/#"> EDIT PROFILE</a>
            </nav>
            <div className = "mt-4 flex">
                    <button className = "ml-4 font-sans bg-blue-600  text-white text-center flex items-center px-8 py-2 rounded font-bold mb-2 "><Link href = "/">BACK</Link></button>
                    </div>
                    <label className="block text-black text-6xl py-6 font-bold ml-10 mb-2">
                Archives</label>
                <div className="">
                <div className="">
            <div className="mb-3">
  <div className="absolute right-0 mr-28 -m-12 flex w-96 flex-wrap">
    <input
      type="search"
      className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" />

    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </div>
</div>
</div>

<div className="">
  <Dropbar />
  
</div>
                </div>

                <div className="line">
            </div>
            <div className="rectangle ">
            <div className="anntitle">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

          <div className="rectangle2 ">
            <div className="anntitle2">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

          <div className="rectangle3 ">
            <div className="anntitle">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

          <div className="rectangle4 ">
            <div className="anntitle2">
                <a href="#">Announcement Title</a>
            </div>
           <div className="date">
            <h1>Date</h1>
           </div>
          </div>

        
          
    
    
            
          
          </main>
    )
}
export default app;