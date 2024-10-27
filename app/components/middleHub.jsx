import Comment from '../Icons/comment'
import Avatar from '../imgs/car.png'
import Post from '../imgs/post1.jpg'
import User from '../imgs/user.jpg'
import Heart from '../Icons/heart'
import Send from '../Icons/send'
import Save from '../Icons/save'
import Image from 'next/image'
import React from 'react'


function middleHub() {
  const stories = [
    { id: 1, username: "user1", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 2, username: "user2", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, username: "user3", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 4, username: "user4", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 5, username: "user5", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 6, username: "user6", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 7, username: "user7", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 8, username: "user8", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 9, username: "user9", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 10, username: "user10", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  const posts = [
    { id: 1, username: "user1", avatar: "/placeholder.svg?height=32&width=32", image: "/placeholder.svg?height=400&width=400", likes: 1234, caption: "Beautiful day! #sunshine" },
    { id: 2, username: "user2", avatar: "/placeholder.svg?height=32&width=32", image: "/placeholder.svg?height=400&width=400", likes: 5678, caption: "Amazing view from here!" },
  ]

  return (
    <div className=' max-w-lg mx-auto space-y-6 p-4'>
      {/* Histories */}
      <div className='bg-[#000] rounded-lg shadow text-white'>
        {/* <div className="p-4">
          <h2 className='text-lg font-semibold'>Historias</h2>
        </div> */}
        <div className="p-4 overflow-x-auto">
          <div className='flex space-x-4'>
            {stories.map((stories => (
              <div key={stories.id} className='flex flex-col items-center space-y-1'>
                <div className='w-16 h-16 rounded-full border-gradient p-0.5'>
                  <Image src={User} alt='user-img' width={300} height={300} className='w-full h-full rounded-full object-cover'></Image>
                </div>
                <span className='text-xs'>{stories.username}</span>
              </div>
            )))}
          </div>
        </div>
      </div>

      {posts.map((post) => (
        <div key={post} className='bg-[#000] text-white border-b-[1px] border-gray-400 border-opacity-25'>
          <div className='flex items-center space-x-4 p-4'>
            <Image src={Avatar} alt='post' width={300} height={300} className='w-10 h-10 rounded-full'></Image>
            <span className='font-semibold'>{post.username}</span>
          </div>
          <div>
            <Image src={Post} alt='post' width={300} height={500} className='w-full h-auto border-[1px] rounded border-gray-400'></Image>
          </div>
          <div className="p-4 space-y-2">
            <div className='flex justify-between'>
              <div className='flex space-x-4'>
                <button className='focus:outline-none' aria-label='Me gusta'>
                  <Heart></Heart>
                </button>
                <button className='focus:outline-none' aria-label='Comentar'>
                  <Comment></Comment>
                </button>
                <button className='focus:outline-none' aria-label='Compartir'>
                  <Send></Send>
                </button>
              </div>
              <button className="focus:outline-none">
                <Save></Save>
              </button>
            </div>
            <p className="font-semibold">{post.likes} Me gusta</p>
            <p className="">
              <span className="font-semibold"></span> {post.caption}
            </p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default middleHub