import React from 'react'

const Comments = ({author,date,text}) => {
  const description = { __html: text };
  return (
    <div className='bg-slate-100 p-4'>
      <div className="flex justify-between">
        <p className='font-semibold text-gray-700 text-[18px]'>{author}</p>
        <p className='font-semibold text-gray-700 text-[18px]'>{date}</p>
      </div>
      <div>
        <div className='w-fit overflow-x-auto' dangerouslySetInnerHTML={description} />
      </div>
    </div>
  )
}

export default Comments