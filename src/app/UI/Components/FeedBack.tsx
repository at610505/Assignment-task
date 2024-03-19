import React from 'react'
import { StarIcon } from './Icons'
import Image from 'next/image'

export default function FeedBack() {
  return (
    <section className='mx-20 my-20 h-screen'>
            <div className='flex justify-between py-20'>
                <div>
                    <div className='text-3xl text-teal-800/80 font-semibold'>Customer Feedback</div>
                    <div className='w-2/3 my-2'>Our users share stories of satisfaction, trust, and exceptional experiences. Explore now!</div>
                </div>
                <div className='flex justify-between py-8'>
                    <div className='mx-4 px-4 py-2 border-[2px] rounded-md border-black'>Previous</div>
                    <div className='mx-4 px-4 py-2 border-[2px] rounded-md border-black'>Next</div>
                </div>
            </div>  
            <div className='flex divide-x-4'>
                <div className='basis-1/3  my-10 px-5'>
                    <Image className='rounded-full w-52 mx-auto' src={"/happyman1.jpg"} width={200} height={200} alt='Man' />
                    <div className='text-2xl font-semibold my-3 text-teal-900/70'>Natalie Summers</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ea enim recusandae fugit a tenetur non in, sequi officiis pariatur itaque iste commodi eaque laudantium eos vitae molestias perspiciatis impedit quas? Quas, unde rerum. Ratione, praesentium dolorum! Repellat, assumenda laudantium.</div>
                    <div className='flex justify-end'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
                </div>
                <div className='basis-1/3  my-10 px-5'>
                    <Image className='rounded-full w-52 mx-auto' src={"/happyman2.jpg"} width={200} height={200} alt='Man' />
                    <div className='text-2xl font-semibold my-3 text-teal-900/70'>Natalie Summers</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ea enim recusandae fugit a tenetur non in, sequi officiis pariatur itaque iste commodi eaque laudantium eos vitae molestias perspiciatis impedit quas? Quas, unde rerum. Ratione, praesentium dolorum! Repellat, assumenda laudantium.</div>
                    <div className='flex justify-end'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
                </div>
                <div className='basis-1/3 my-10 px-5'>
                    <Image className='rounded-full w-52 mx-auto' src={"/women3.jpg"} width={200} height={200} alt='Man' />
                    <div className='text-2xl font-semibold my-3 text-teal-900/70'>Natalie Summers</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ea enim recusandae fugit a tenetur non in, sequi officiis pariatur itaque iste commodi eaque laudantium eos vitae molestias perspiciatis impedit quas? Quas, unde rerum. Ratione, praesentium dolorum! Repellat, assumenda laudantium.</div>
                    <div className='flex justify-end'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
                </div>
            </div>
    </section>
  )
}
