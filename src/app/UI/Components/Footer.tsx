import { InstagramIcon,FacebookIcon,YoutubeIcon,PhoneIcon,MailIcon } from "./Icons";

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white static -bottom-0 h-1/2 w-screen">
        <div className="w-[70%] mx-auto">
            <div className="flex border-b-2 py-8">
                <div className="font-bold text-4xl">Doctor+</div>
                <div className="mx-10 w-80 text-sm text-white/90">Thank you for visiting my website, and I look forward to being a part of your wellness journey. Let&apos;s thrive together!</div>
                <div className="mx-10 ">
                    <div className="flex my-5"><span className="mr-3"><PhoneIcon/></span><span>+91-1234567890</span></div>
                    <div className="flex my-5"><span className="mr-3"><MailIcon/></span><span>contact@gmail.com</span></div>
                    <div className="flex">
                        <div className="mr-1"><InstagramIcon/></div>
                        <div className="mx-1"><FacebookIcon/></div>
                        <div className="ml-1"><YoutubeIcon/></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <p className="text-sm text-white/80 py-4">
                    © {year} SS Technologies. All rights reserved.
                </p>
                <ul className="flex py-4">
                    <li className="mx-3">Privacy Policy</li>
                    <li className="mx-3">Terms of Service</li>
                    <li className="mx-3">Legal Info</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
