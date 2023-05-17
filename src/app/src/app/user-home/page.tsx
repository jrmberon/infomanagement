"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Button from "../components/LogoutButton";
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import "../Styles/main.css";
import "../Styles/userhome.css";
import ImageSlider from "../components/ImageSlider";"../components/ImageSlider"


function app(){
  return (
    <main>
      <nav> <Header /> </nav>
          <nav className="bg-blue-300 border-200 bg-opacity-50  px-4 lg:px-6 py-2.5 shadow-2xl ">
            < a href = "/#"> HOME</a>
            < a href = "/#"> ANNOUNCEMENTS</a>
            < a href = "/#"> VIEW PROFILE</a>
            < a href = "/#"> EDIT PROFILE</a>
            </nav>
            <button className = "button "><Link href = "/">LOGOUT</Link></button>
        <body></body>
            <label className="block text-black text-5xl py-6 font-bold ml-8 mt-16">
                Announcements</label>
              
              <div className="bluerect"></div>

              <div className="">
                <ImageSlider />
                </div>
                <div className="text-black text-4xl font-bold ml-72 mt-36  ">
                  Barangay 391 Zone 40 III, Manila

                </div>
                <div className="text-black text-lg font-bold ml-80  ">
                  Located at 1064 Bilibid Viejo St., Corner R. Hidalgo, Quiapo, Manila<br></br>
                  82877790

                </div>

                <div className="text-black text-4xl font-bold ml-96 mt-36">
                  Introduction
                  </div>
                  <div className="text-black text-lg font-bold ml-96 ">
                  (text)

                </div>

                <div className="text-black text-4xl font-bold ml-72 mt-36">
                  About Barangay 391, Manila
                </div>

                <div className="text-black text-lg font-bold ml-80">
                  (text)

                </div>
                <div className="brgy ">
                <img className = "h-auto max-w-full rounded-full" src = "/images/tempB.png" alt = "brgy" 
                width = {600} height = {600}>
                </img>
                </div>

                <div className="text">
                  Barangay Official List
                  </div>


                <div className="off">
                </div>

                <div className="user1">
                  <img className="" src="/images/user.png" width = {120} height = {120}></img>
                </div>

                <div className="user2">
                <img className="" src="/images/user.png" width = {120} height = {120}></img>
                </div>

                <div className="name">
                CECILIO T. MATEO
                </div>

                <div className="name2">
                KRISTINE JOY C. DALA
                </div>

                <div className="pb">
                 Punong Barangay
                </div>

                <div className="sk">
                 SK Chairperson
                </div>

                <div className="kagawad">
                Barangay Kagawad
                </div>

                <div className="skkagawad">
                SK Kagawad
                </div>

                <div className="pbnames">
                ENRIQUE A. GALIMA<br></br>
                RONALDO T. BACUS <br></br>
                VENUS C. AQUINO <br></br>
                RAYMOND M. GALVAN <br></br>
                WESS D. PACUBAS <br></br>
                ARNEL B. MACABULOS <br></br>
                ALBERT SAN JUAN<br></br></div>

                <div className="sknames">
                JENNIFER R. CALISIN <br></br>
                MARGARITO F. MACARANAS<br></br>
                CONRADO O. CATBAGAN JR. <br></br>
                </div>



                

                
        
    </main>
  );
}


export default app;