import Image from "next/image"
import { HeartFillIcon,HeartOutlineIcon, StarIcon,PrevStep, NextStep } from "../UI/Components/Icons"
export default function OurDoctors() {
  return (
    <section className="mx-20 my-20 h-screen content mb-80">
        <div className="my-10">
            <div className="my-5 text-center font-semibold text-teal-600 text-3xl">Our Doctors</div>
            <div className="my-5 w-5/6 mx-auto leading-10 text-center text-black/30 font-bold text-3xl">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</div>
        </div>
        <div className="flex justify-between w-1/3">
            <div className="px-4 rounded-2xl text-white py-1 border-2 bg-teal-700">All</div>
            <div className="px-2 rounded-2xl py-1 border-2 ">Neurologist</div>
            <div className="px-2 rounded-2xl py-1 border-2 ">Cardiologist</div>
            <div className="px-2 rounded-2xl py-1 border-2 ">Dermatologist</div>
        </div>
        <div className="content flex justify-between">

            <div className="block w-20 my-auto cursor-pointer"><PrevStep/></div>
            <div className="grid grid-cols-2 gap-6 my-16">
                <div className="flex justify-between bg-teal-600/20 rounded-3xl p-2">
                    <Image src={"/doctor13.png"} alt="Doctor" height={150} width={200} className="basis-1/4 mx-4 relative -bottom-2 -left-7"/>
                    <div className="py-7">
                        <div className="flex justify-between font-bold text-2xl my-4">
                            <div>Dr. Pawan</div>
                            <div className="mr-6"><HeartOutlineIcon/></div>
                        </div>
                        <p className="text-black/50 py-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus obcaecati ex ratione assumenda suscipit!</p>
                        <div className="flex justify-between">
                            <div className="bg-teal-500 px-5 py-1 rounded-lg font-bold text-white">Book</div>
                            <div className="mr-6 flex font-semibold"><StarIcon/>&nbsp;&nbsp;5.0</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-teal-600/20 rounded-3xl p-2">
                    <Image src={"/doctor14.png"} alt="Doctor" height={150} width={200} className="basis-1/4 mx-4 relative -bottom-2 -left-7"/>
                    <div className="py-7">
                        <div className="flex justify-between font-bold text-2xl my-4">
                            <div>Dr. Pawan</div>
                            <div className="mr-6"><HeartFillIcon/></div>
                        </div>
                        <p className="text-black/50 py-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus obcaecati ex ratione assumenda suscipit!</p>
                        <div className="flex justify-between">
                            <div className="bg-teal-500 px-5 py-1 rounded-lg font-bold text-white">Book</div>
                            <div className="mr-6 flex font-semibold"><StarIcon/>&nbsp;&nbsp;5.0</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-teal-600/20 rounded-3xl p-2">
                    <Image src={"/doctor15.png"} alt="Doctor" height={150} width={200} className="basis-1/4 mx-4 relative -bottom-2 -left-7"/>
                    <div className="py-7">
                        <div className="flex justify-between font-bold text-2xl my-4">
                            <div>Dr. Pawan</div>
                            <div className="mr-6"><HeartOutlineIcon/></div>
                        </div>
                        <p className="text-black/50 py-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus obcaecati ex ratione assumenda suscipit!</p>
                        <div className="flex justify-between">
                            <div className="bg-teal-500 px-5 py-1 rounded-lg font-bold text-white">Book</div>
                            <div className="mr-6 flex font-semibold"><StarIcon/>&nbsp;&nbsp;5.0</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-teal-600/20 rounded-3xl p-2">
                    <Image src={"/doctor15.png"} alt="Doctor" height={150} width={200} className="basis-1/4 mx-4 relative -bottom-2 -left-7"/>
                    <div className="py-7">
                        <div className="flex justify-between font-bold text-2xl my-4">
                            <div>Dr. Pawan</div>
                            <div className="mr-6"><HeartOutlineIcon/></div>
                        </div>
                        <p className="text-black/50 py-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus obcaecati ex ratione assumenda suscipit!</p>
                        <div className="flex justify-between">
                            <div className="bg-teal-500 px-5 py-1 rounded-lg font-bold text-white">Book</div>
                            <div className="mr-6 flex font-semibold">
                               <StarIcon/>&nbsp;&nbsp;5.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block w-20 my-auto cursor-pointer"><NextStep/></div>
        </div>
        <div className="border-2 px-5 py-2 w-[10%] mx-auto">See More</div>
    </section>
  )
}
