import { SearchIcon } from "./Icons"
import Link from "next/link"

export default function Header() {
  return (
    <header className="h-1/4">
      <nav className='flex bg-teal-700 py-7 px-10  text-white'>
        <h1 className='text-3xl font-bold basis-2/5'><Link href={"/"}>Doctor+</Link></h1>
        <ul className='flex  justify-around text-xl font-medium basis-3/5'>
          <li className='relative'><input type="text" name="search" id="search" placeholder='Search Doctor' className='p-2 px-8 text-sm rounded-lg'/> <label className='absolute left-1 top-2' htmlFor="search"><SearchIcon/></label></li>
          <Link href={"/"}><li className='cursor-pointer hover:border-b-2 hover:border-white'>Home</li></Link>
          <Link href={"/our-doctors"}><li className='cursor-pointer hover:border-b-2 hover:border-white'>Service</li></Link>
          <Link href={"/appointment-history"}><li className='cursor-pointer hover:border-b-2 hover:border-white'>About</li></Link>
          <Link href={"/book-appointment"}><li className='cursor-pointer hover:border-b-2 hover:border-white'>Register</li></Link>
          <Link href={"/user-profile"}><li className='cursor-pointer'><button className="bg-white  py-1 px-5 text-black hover:bg-slate-100 hover:text-black/70 rounded-md">Login</button></li></Link>
        </ul>
      </nav>
    </header>
  )
}
