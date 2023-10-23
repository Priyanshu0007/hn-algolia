import { useRouter } from 'next/navigation';
import React from 'react'

const Card = ({id,title,created_at,source,author}) => {
    const router=useRouter();
    const date=new Date(created_at);
  return (
    <div className='flex flex-col gap-2 pb-3 pt-3 pl-3 pr-3 mb-2 bg-slate-100 select-none hover:scale-110 transition-transform'>
        <h2 className='font-bold text-[22px]'>{title}</h2>
        <div className='flex justify-between'>
            <p className='font-semibold text-gray-700'>By {author}</p>
            <p className='font-semibold text-gray-700'>Published on {date.toLocaleDateString()}</p>
        </div>
        <div className='flex justify-between'>
        <button onClick={()=>window.location.assign(source)} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">Source</button>
        <button onClick={()=>router.push(`post/${id}`)} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">Read</button>
        </div>
    </div>
  )
}

export default Card