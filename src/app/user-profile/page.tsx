"use client"
import React,{useState} from 'react';
import Image from "next/image"
import { BackArrow, NextIcon,FirstaidIcon,HistoryIcon,CalendorIcon, DateOfBirth, PersonIcon, MobilePhoneIcon, AddressIcon, DropIcon } from "../UI/Components/Icons"

 const UserProfile:React.FunctionComponent = ()=> {
    const [openModal, setOpenModal] = useState<Boolean>(false);

    function handleOpenModal(){
        setOpenModal(true);
    }

    function handleUpdate(){
        setOpenModal(false);
    }

  return (
    <section className="mx-20 my-10 h-screen">
        {
            openModal 
            &&
            <div className=' w-1/3 fixed z-10 mx-[27rem] bg-slate-200 rounded-lg'>
                <div className='text-center p-2 text-white bg-teal-700 rounded-lg'>Update Setting</div>
                <div className='text-lg font-bold my-4 mx-2'>Personal Information</div>
                <form className='my-6'>
                    <div className='grid grid-cols-2 gap-4'>

                    <div className='mx-2 my-4 relative'>
                        <label htmlFor="firstName" className='absolute -top-6'>First Name</label>
                        <input type="text" id="firstName" name="firstName" className="rounded-md p-2 shadow-sm shadow-black border-none" placeholder='First Name:'/>
                    </div>
                    <div className='mx-2 my-4 relative'>
                        <label htmlFor="lastName" className='absolute -top-6'>Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="rounded-md p-2 shadow-sm shadow-black border-none" placeholder='Last Name:'/>
                    </div>
                    <div className='mx-2 my-4 relative'>
                        <label htmlFor="yourEmail" className='absolute -top-6'>Your Email</label>
                        <input type="text" id="yourEmail" name="yourEmail" className="rounded-md p-2 shadow-sm shadow-black border-none" placeholder='Email:'/>
                    </div>
                    <div className='mx-2 my-4 relative'>
                        <label htmlFor="phone" className='absolute -top-6'>Phone</label>
                        <input type="text" id="phone" name="phone" className="rounded-md p-2 shadow-sm shadow-black border-none" placeholder='Phone:'/>
                    </div>
                </div>
                <div className='mx-2 my-4 relative w-full'>
                    <label htmlFor="bio" className='absolute -top-6'>Your Bio Here</label>
                    <textarea id="bio" name="bio" className="w-full rounded-md p-2 shadow-sm shadow-black border-none" placeholder='Bio:'/>
                </div>
                
                <div className='w-1/2 mx-auto text-center bg-teal-700 rounded-lg px-4 py-2 cursor-pointer  text-white font-semibold ' onClick={handleUpdate}>Update</div>
            </form>
        </div>
        }
        <div className='flex'>
            <div className='mr-2 '><BackArrow/></div>
            <div className='ml-2 text-2xl text-teal-800 font-semibold'>User Profile</div>
        </div>
        <div className="flex justify-between">
            <div className="basis-1/5 bg-teal-700 shadow-lg shadow-black w-1/5 rounded-3xl my-10 py-5">
                <Image src={"/happyman3.jpg"} width={200} height={200} className="rounded-full w-24 mx-auto" alt="Avatar"/>
                <div className="my-5">
                    <div className="font-semibold text-center text-white">ALAN</div>
                    <div className="text-center text-white ">35 Years Old</div>
                </div>
            </div>
            <div className="basis-[75%] my-10 ">
                <div className="flex justify-between w-full px-5 py-2 rounded-md text-white bg-teal-700 my-5 font-semibold">
                     <span className="flex"><CalendorIcon/><span className="mx-2">Appointments</span></span>
                    <span className="flex"><span className="mx-4 font-bold">|</span><NextIcon/></span>
                </div>
                <div className="flex justify-between w-full px-5 py-2 rounded-md text-white bg-teal-700 my-5 font-semibold">
                        <span className="flex"><FirstaidIcon/><span className="mx-2">Saved History</span></span>
                    <span className="flex"><span className="mx-4 font-bold">|</span><NextIcon/></span>
                </div>
                <div className="flex justify-between w-full px-5 py-2 rounded-md text-white bg-teal-700 my-5 font-semibold">
                        <span className="flex"><HistoryIcon/><span className="mx-2">Patients Health History</span></span>
                    <span className="flex"><span className="mx-4 font-bold">|</span><NextIcon/></span>
                </div>
                <div className="px-4 py-2 bg-teal-600 w-1/6 text-white rounded-xl mx-auto cursor-pointer" onClick={handleOpenModal}>Update Setting</div>
            </div>

        </div>
            <div className="flex w-96">
                <span className="mx-3"><PersonIcon/></span>
                <span className="mx-3 font-semibold">Gender</span>
                <span className="mx-2 text-black/50">Male</span>
            </div>
            <div className="flex w-96">
                <span className="mx-3"><DateOfBirth/></span>
                <span className="mx-3 font-semibold">DOB</span>
                <span className="mx-3 text-black/50">24/02/1989</span>
            </div>
            <div className="flex w-96">
                <span className="mx-3"><MobilePhoneIcon/></span>
                <span className="mx-3 font-semibold">Phone No</span>
                <span className="mx-2 text-black/50">0098289281</span>
            </div>
            <div className="flex w-96">
                <span className="mx-3"><AddressIcon/></span>
                <span className="mx-3 font-semibold">Address</span>
                <span className="mx-2 text-black/50">Sydney, Australia</span>
            </div>
            <div className="flex w-96">
                <span className="mx-3"><DropIcon/></span>
                <span className="mx-3 font-semibold">Blood Group</span>
                <span className="mx-2 text-black/50">B<sup>+ve</sup></span>
            </div>
    </section>
  )
}

export default UserProfile;