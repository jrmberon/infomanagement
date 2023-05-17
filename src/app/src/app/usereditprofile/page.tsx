"use client";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

<link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css" />

export default function EditProfile(){

    const [CurrentTimeDate, setCurrentTimeDate] = useState(new Date());
    const [Mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => { setCurrentTimeDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const CurrentDate = CurrentTimeDate.toLocaleDateString();
    const CurrentTime = CurrentTimeDate.toLocaleTimeString();


    return(
        <main>
            <nav><Header /></nav>
            <div className = "flex mt-3 mb-2">
                <button className = "mt-2.5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-2 py-2 rounded mb-2 ml-4"><Link href = "/userviewprof">Back</Link></button>
                {Mounted && (<p className = "absolute right-0 mr-2">Time: {CurrentTime}, {CurrentDate}</p>)}
            </div>
            <figure className = "md:flex w-auto mt-5 ml-20">
                <img className = "h-auto max-w-full rounded-full" src = "/images/temp id.jpg" alt = "temp"
                width = {150} height = {150}></img>
                <div className = "mt-18 ml-40 text-base pl-10 gap-1 content-start">
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded mb-2">Upload Photo</button>
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white text-center flex items-center px-4 py-2 rounded">Delete Photo</button>
                </div>
            </figure>
            <div className = "font-sans ml-10 mt-4 mb-5 tracking-wide">
                <p className = "font-semibold text-xl">OVERVIEW: </p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Name:  ________________________</p>
                    <p>Resident ID #:              _____________________________________ </p>
                    <p>Age:          _____________________________________ </p>
                    <p>Old Address:  _____________________________________ </p>
                    <p>New Address:  _____________________________________</p>
                </div>
                <p className = "font-semibold text-xl">CONTACT INFORMATION: </p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Email Address:   _______________________________ </p>
                    <p>Contact Number:  _______________________________</p>
                </div>
                <p className = "font-semibold text-xl">OTHER INFORMATION: </p>
                <div className = "font-sans text-lg tracking-wider ml-5 mt-3">
                    <p>Birthdate: ___________________________</p>
                    <p>Gender:    ___________________________</p>
                    <p>Occupation:    _______________________ </p>
                  
      <div>

    <p> Gender: </p> 












      </div>
    
                </div>
                <div className = "flex bottom-0 right-0 ml-96">
                    <button className = "mt-5 bg-blue-500 hover:bg-blue-700 border-none text-white flex items-center px-5 py-3 rounded margin-left: 24prem;">Save</button>
                </div>
            </div>
            
        </main>
    );
}