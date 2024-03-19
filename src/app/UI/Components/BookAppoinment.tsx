import Image from "next/image"
export default function BookAppoinment() {
  return (
    <section className="mx-10 my-20 h-[50vh]">
        <div className="flex">
            <div className="basis-1/3 p-20 mx-10 h-[26rem] bg-gradient-to-bl relative from-teal-700 to-white rounded-l-specialCurve rounded-tr-specialCurve">
                <Image src="/doctor5.png" alt="hero" width={1200} height={1200} className="scale-150 absolute top-4 -right-20"/>
            </div>
            <div className="basis-1/2 mx-10">
                <div className="text-4xl text-teal-800 font-bold">Experienced doctor analyse the patient giving them aproper treatment</div>
                <div className="text-3xl text-black/60 font-bold my-6">Doctor availability</div>
                <div className="text-3xl text-black/60 font-bold my-6">Treatment & Consulting</div>
                <div className="text-3xl text-black/60 font-bold my-6">Top Specialist doctor</div>
                <div className="text-3xl text-black/60 font-bold my-6">Apply coupon for treatment</div>
                <div className="p-4 bg-teal-700 rounded-xl font-bold text-white w-1/4">Book Appointment</div>
            </div>
        </div>

    </section>
  )
}
