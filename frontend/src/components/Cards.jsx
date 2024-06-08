import React from "react"

function Cards({item}) {
  return (
    <>
      <div className='mt-5 my-3 p-2 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white'>
        <div className='card w-92 bg-base-100 shadow-xl'>
          <figure className='rounded-3xl'>
            <img src={item.image} alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-2xl'>
              {item.title}
              <div className='badge badge-secondary'>{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className='card-actions justify-between'>
              <div className='badge badge-outline hover:bg-pink-500 hover:text-white duration-0 cursor-pointer px-2 py-1 rounded-lg border-[0.5px]'>
                {item.name}
              </div>
              <div className='badge badge-outline hover:bg-pink-500 hover:text-white duration-0 cursor-pointer px-2 py-1 rounded-lg border-[0.5px]'>
                {item.year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
