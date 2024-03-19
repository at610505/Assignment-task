import React from 'react'

export default function BookAppointment() {
  return (
    <section className='mx-20 my-10 h-screen content mb-40'>
        <div className='text-3xl text-teal-700 font-semibold text-center w-1/2 mx-auto'>Book Your Appointment</div>
        <div className='text-lg text-black/80 text-center w-1/2 mx-auto my-5 leading-6'>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</div>
        <div className='w-1/2 h-screen  bg-slate-100 mx-auto border-2 border-teal-700 rounded-lg shadow-teal-700 shadow-md'>
            <div className='text-center bg-teal-700 w-full text-white font-semibold py-2'>Book Your Appointmen</div>
            <form className=' my-10 px-10'>
                <div className='relative mx-2 my-4'>
                    <label htmlFor="patientName" className='absolute -top-6'>Patient Name <sup className='text-red-600 '>*</sup></label>
                    <input type="text" id='patientName' name='patientName' placeholder='Patient Name:' className='rounded-md p-2 shadow-sm shadow-black border-none w-full mt-2 mb-10'/>
                </div>
                <div className='relative mx-2 my-6'>
                    <label htmlFor="patientName" className='absolute -top-6'>Department</label>
                    <select id='patientName' name='patientName' className='rounded-md p-2 shadow-sm shadow-black border-none my-2'>
                        <option value="">Select Department</option>
                        <option value="Emergency Department">Emergency Department (ED)</option>
                        <option value="Pediatrics Department">Pediatrics Department</option>
                        <option value="Orthopedics Department">Orthopedics Department</option>
                        <option value="Cardiology Department">Cardiology Department</option>
                        <option value="Neurology Department">Neurology Department</option>
                        <option value="ntensive Care Unit">ntensive Care Unit (ICU)</option>
                    </select>
                </div>
                <div className='flex justify-between'>

                <div className='relative mx-2 my-6'>
                    <label htmlFor="yourEmail" className='absolute -top-6'>Your Email <sup className='text-red-600 '>*</sup></label>
                    <input type="email" id='yourEmail' name='yourEmail' placeholder='Your Email:' className='rounded-md p-2 shadow-sm shadow-black border-none  mt-2 mb-10' />
                </div>
                <div className='relative mx-2 my-6'>
                    <label htmlFor="phone" className='absolute -top-6'>Your Phone <sup className='text-red-600 '>*</sup></label>
                    <input type="number" id='phone' name='phone' placeholder='Your Phone:' className='rounded-md p-2 shadow-sm shadow-black border-none mt-2 mb-10' />
                </div>
                </div>
                <div className='relative mx-2 my-6'>
                    <label htmlFor="comments" className='absolute -top-6'>Comments <sup className='text-red-600 '>*</sup></label>
                    <textarea name="comments" id="comments" className='w-full rounded-md p-2 shadow-sm shadow-black border-none mt-2 mb-10' rows={7} placeholder='Your Message:'></textarea>
                </div>
                <div className='cursor-pointer mx-auto py-2 px-4 w-2/5 bg-teal-700 text-white rounded-lg text-center'>Book Appointment</div>
            </form>
        </div>
    </section>
  )
}
