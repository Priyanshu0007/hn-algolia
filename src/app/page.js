"use client"
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [search,setSearch]=useState("hacking");
  const [data,setData]=useState([]);
  const fetchData = async () => {
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${search}`);
    //const response = await fetch("http://hn.algolia.com/api/v1/items/13810015");
    const data = await response.json();
    setData(data.hits);
  }
  useEffect(() => {fetchData()},[search])
  console.log(data);
  return (
    <div className="container mx-auto bg-slate-100">
      <Navbar setSearch={setSearch}/>
      <div>
        
      </div>
    </div>
  )
}
