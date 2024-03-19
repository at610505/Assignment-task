import Image from "next/image"


export default function Specialists() {
  return (
    <section className="mx-10 my-40 h-screen">
        <div className="text-4xl font-bold text-teal-700 text-center">Variouse specialist are here you to take care of your Health</div>
        <div className="text-2xl font-bold text-black/60 text-center">Doctors are available at any time to care your health</div>
        <div className="my-16 grid grid-cols-3 gap-10">

                    <div  className="w-[30rem] bg-slate-400/50 h-[40vh] rounded-2xl ">
                        <div className="flex relative">
                            <div className="p-4 basis-1/3 w-44">
                                <div className="mb-4 text-3xl font-medium">ENT Specialist</div>
                                <div className="my-4 text-sm">treating disorders and other issues related to the ear, nose, throat, and related head and neck</div>
                                <div className="mt-4 rounded-3xl px-4 py-1 bg-white w-[7rem] font-normal text-sm">Read More</div>
                            </div>
                            <Image src="/doctor1.png" alt="hero" width={300} height={300} className="basis-1/2 absolute -right-20 top-1"/>
                        </div>
                    </div>
                    <div  className="w-[30rem] bg-teal-700/40 h-[40vh] rounded-2xl ">
                        <div className="flex relative">
                            <div className="p-4 basis-1/3 w-44">
                                <div className="mb-4 text-3xl font-medium">Specialist Endocrinologis</div>
                                <div className="my-4 text-sm">Patients with diabetes and thyroid issues are treated</div>
                                <div className="mt-4 rounded-3xl px-4 py-1 bg-white w-[7rem] font-normal text-sm">Read More</div>
                            </div>
                            <Image src="/doctor7.png" alt="hero" width={300} height={300} className="basis-1/2 absolute -right-12 top-1"/>
                        </div>
                    </div>
                    <div  className="w-[30rem] bg-orange-300/50 h-[40vh] rounded-2xl ">
                        <div className="flex relative">
                            <div className="p-4 basis-1/3 w-44">
                                <div className="mb-4 text-3xl font-medium">Specialist Oncologists</div>
                                <div className="my-4 text-sm">examine, diagnose, and treat cancer</div>
                                <div className="mt-4 rounded-3xl px-4 py-1 bg-white w-[7rem] font-normal text-sm">Read More</div>
                            </div>
                            <Image src="/doctor8.png" alt="hero" width={300} height={300} className="basis-1/2 absolute -right-8 top-1"/>
                        </div>
                    </div>
                    <div  className="w-[30rem] bg-teal-700/50 h-[40vh] rounded-2xl ">
                        <div className="flex relative">
                            <div className="p-4 basis-1/3 w-44">
                                <div className="mb-4 text-3xl font-medium">Specialist Pulmonologist</div>
                                <div className="my-4 text-sm">treating diseases of the respiratory system in both men and women</div>
                                <div className="mt-4 rounded-3xl px-4 py-1 bg-white w-[7rem] font-normal text-sm">Read More</div>
                            </div>
                            <Image src="/doctor4.png" alt="hero" width={300} height={300} className="basis-1/2 absolute -right-16 top-1"/>
                        </div>
                    </div>
                    <div  className="w-[30rem] bg-orange-300/50 h-[40vh] rounded-2xl ">
                        <div className="flex relative">
                            <div className="p-4 basis-1/3">
                                <div className="mb-4 text-3xl font-medium">Specialist Veterinarian</div>
                                <div className="my-4 text-sm">treats diseases, problems, and injuries in humans</div>
                                <div className="mt-4 rounded-3xl px-4 py-1 bg-white w-[7rem] font-normal text-sm">Read More</div>
                            </div>
                            <Image src="/doctor3.png" alt="hero" width={300} height={300} className="basis-1/2 absolute -right-12"/>
                        </div>
                    </div>
                    <div  className="w-[30rem] bg-slate-400/50 h-[40vh] rounded-2xl ">
                        <div className="flex relative">
                            <div className="p-4 basis-1/3">
                                <div className="mb-4 text-3xl font-medium">Specialist Radiologist</div>
                                <div className="my-4 text-sm">treat diseases in both humans</div>
                                <div className="mt-4 rounded-3xl px-4 py-1 bg-white w-[7rem] font-normal text-sm">Read More</div>
                            </div>
                            <Image src="/doctor6.png" alt="hero" width={300} height={300} className="basis-1/2 absolute -bottom-24 -right-12"/>
                        </div>
                    </div>

        </div>
    </section>
  )
}
