"use client"
import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import {IoMdClose} from "react-icons/io";

const Navbar = ({setSearch}) => {
    const [showSearch,setShowSearch]=useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        setSearch(event.target.elements.search.value);
        setShowSearch(false);
    }
  return (
    <div className="bg-slate-200">
        <div className="  sm:mt-4 h-20 flex flex-col justify-center">
            <div className=" ml-4 flex justify-around  sm:grid grid-cols-2 ">
                <div className="flex ">
                    <img src="https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png" alt="logo" className="h-10 w-10"/>
                    <p className=" flex flex-col justify-center text-[18px] sm:text-[24px] ml-3 font-mono">Search Hacker News</p>
                </div>
                
                <div className="flex justify-around">
                    <p className="hidden sm:flex flex-col justify-center font-medium text-[18px]">Data Bleaches</p>
                    <p className="hidden sm:flex flex-col justify-center font-medium text-[18px]">Cyber Attack</p>
                    <p className="hidden sm:flex flex-col justify-center font-medium text-[18px]">Vulnerabilities</p>
                    <div onClick={()=>setShowSearch(!showSearch)}>
                        {showSearch?<IoMdClose className="text-[40px]"/>:<AiOutlineSearch  className="text-[40px]"/>}
                    </div>
                </div>
            </div>
        </div>
        {showSearch && <form className="mr-4 ml-4 pb-4" onSubmit={handleSubmit}>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input name="search" type="search" id="default-search" className="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 " placeholder="Search...." required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </form>}
    </div>

  )
}

export default Navbar