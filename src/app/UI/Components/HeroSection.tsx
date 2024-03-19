import Image from "next/image"
export default function HeroSection() {
  return (
    <section id="HeroSection" className="my-24 mx-10">
      <div className="flex px-10">

        <div className="basis-3/5">
            <div className="text-5xl font-bold text-teal-700 tracking-widest">Find your near by doctor & book your appointment & get treatment fast</div>
            <div className="h-96 w-5/6 shadow-black/40 shadow-lg rounded-lg p-10 my-5">
                <div className="text-teal-600 font-bold text-3xl mx-10">Let&apos;s Find Your Perfect Doctor</div>
                <form className="p-10">
                  <label htmlFor="appointment" className="text-xl text-black/60 block my-4">Appointment Type</label>
                  <select name="appointment" id="appointment" className="w-60 bg-white shadow-sm shadow-current p-2 rounded-lg">
                    <option value="All Type">All Type</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                  <label htmlFor="patientName" className="text-xl text-black/60 block my-4">Patient Name</label>
                  <select name="patientName" id="patientName" className="w-60 bg-white shadow-sm shadow-current p-2 rounded-lg">
                    <option value="">Enter Patient Name</option>
                    <option value="Suresh">Suresh</option>
                    <option value="Mukesh">Mukesh</option>
                  </select>
                </form>
            </div>
        </div>
        <div id="Hero" className="basis-1/2">
          <div className="bg-hero bg-contain h-full bg-center bg-no-repeat relative" >
            <Image src="/doctor2.png" alt="hero" width={1200} height={1200} className="scale-150 -bottom-1"/>
            <div className="flex justify-center items-center w-[35%] h-[37%] rounded-full bg-white absolute bottom-0 right-0 shadow-lg shadow-black">
              <Image src={"/women2.jpg"} alt="Patient" width={400} height={400} className="absolute rounded-full -left-5 w-10"/>
              <Image src={"/women3.jpg"} alt="Patient" width={400} height={400} className="absolute rounded-full -right-5 w-10"/>
              <Image src={"/woment4.jpg"} alt="Patient" width={400} height={400} className="absolute rounded-full -top-5 w-10"/>
              <Image src={"/women2.jpg"} alt="Patient" width={400} height={400} className="absolute rounded-full -bottom-5 w-10"/>
                <div>
                  <div className="block font-bold">3.5k+ Plus</div>
                  <div className="text-sm text-black/60">Happy Patients</div>
                </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}
