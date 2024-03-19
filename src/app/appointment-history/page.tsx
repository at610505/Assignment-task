import Image from 'next/image'
import { BackArrow, DateOfBirth, PersonIcon, MobilePhoneIcon, AddressIcon, DropIcon } from '../UI/Components/Icons'

export default function page() {
  return (
    <section className='mx-20 my-10 h-screen'>
        <div className='flex'>
            <div className='mr-2 '><BackArrow/></div>
            <div className='ml-2 text-2xl text-teal-800 font-semibold'>Appointment</div>
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
                <div className='flex justify-end my-4'>
                    <div className='bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg'>Update Setting</div>
                </div>
                <div className='flex justify-between ring-4 ring-teal-700 rounded-lg my-4'>
                    <div className='mx-4'>
                        <div className='text-lg font-semibold'>Covid Test</div>
                        <div className='text-black/60'>Dr. Zeena</div>
                    </div>
                    <div className='mx-4 my-auto'>30 March</div>
                </div>
                <div className='flex justify-between ring-4 ring-teal-700 rounded-lg my-4'>
                    <div className='mx-4'>
                        <div className='text-lg font-semibold'>Dentist</div>
                        <div className='text-black/60'>Dr. Calvin Carlo</div>
                    </div>
                    <div className='mx-4 my-auto'>31 May</div>
                </div>

                <div className='text-teal-700 text-center text-xl'>Appointment History</div>
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
