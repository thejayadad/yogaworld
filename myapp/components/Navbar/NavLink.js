'use client'
import Link from "next/link";
const NavLink = ({ href, children }) => (
    <Link href={href}>
      <span className='text-3xl text-purple-500  hover:bg-pink-300 transition duration-300 px-2 py-6 rounded-b-xl'>
        {children}
      </span>
    </Link>
  );
  
  export default NavLink;