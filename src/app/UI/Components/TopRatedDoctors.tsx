import Image from "next/image";
import { HeartOutlineIcon,HeartFillIcon, StarIcon, NextStep,PrevStep } from "./Icons";

export default function TopRatedDoctors() {
  return (
    <section className="mx-40 my-20 h-screen">
        <div className="text-center text-4xl font-semibold text-teal-800">Our Top Rated Doctors</div>
        <div className="text-center text-2xl text-black/50 font-semibold my-2">Top Rated Doctors are available at any time to care your health</div>
        <div className="flex justify-between">

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
    </section>
  )
}
