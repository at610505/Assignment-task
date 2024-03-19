export default function BookAppointmentSteps() {
  return (
    <section className="mx-10 h-[80vh]">
        <div className="bg-gradient-to-b h-[50vh] from-teal-700 to-teal-100 relative px-10 rounded-3xl">
            <div className="text-center p-2 bg-sky-950 w-[50%] text-white rounded-xl border-2 border-white absolute right-80 -top-8">
                <span className="text-4xl font-semibold">Easy Steps to Book Your Oppointment</span>
            </div>
            <div className="flex justify-center py-20 absolute top-1/4">
                    <div className="flex flex-col items-center mx-10 relative">
                        <div className="flex items-center justify-center w-16 h-16  rounded-full text-white text-3xl font-bold absolute bg-slate-500 top-2 left-10">1</div>
                        <div className="text-black/65 font-semibold flex items-center justify-center w-96 h-96 bg-white rounded-full text-3xl  shadow-black/70 shadow-xl">
                            <p className="p-12">Select the location and search near by doctor</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mx-10 relative ">
                        <div className="flex items-center justify-center w-16 h-16  rounded-full text-white text-3xl font-bold absolute bg-teal-700 top-2 left-10">2</div>
                        <div className="text-black/65 font-semibold flex items-center justify-center w-96 h-96 bg-white rounded-full text-3xl  shadow-black/70 shadow-xl">
                            <p className="p-12">Schedule and Book your date and time for appointment</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mx-10 relative ">
                        <div className="flex items-center justify-center w-16 h-16  rounded-full text-white text-3xl font-bold absolute bg-sky-950 top-2 left-10">3</div>
                        <div className="text-black/65 font-semibold flex items-center justify-center w-96 h-96 bg-white rounded-full text-3xl  shadow-black/70 shadow-xl">
                            <p className="p-12">Easy way to make payment in multiple getway</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}
