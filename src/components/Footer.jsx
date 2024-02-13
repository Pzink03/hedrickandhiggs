import {HiOutlineMail} from 'react-icons/hi'
import { FaLinkedin, FaFacebook, FaPhone, FaHome } from 'react-icons/fa';

export function Footer(){
    return (
        <>
        <div className="w-full bg-gray-500 h-1"></div>
        <div className="flex justify-center w-full h-full pt-4 bg-black">
            <ul className="flex justify-center">
                <li className='w-10 h-10 px-2 mx-2 rounded-full flex items-center justify-center bg-gray-300 hover:bg-gray-600 hover:scale-105 transition duration-300 cursor-pointer'>
                <FaFacebook size={30} color='blue' />
                </li>
                <li className='w-10 h-10 px-2 mx-2 rounded-full flex items-center justify-center bg-gray-300 hover:bg-gray-600 hover:scale-105 transition duration-300 cursor-pointer'>
                <FaLinkedin size={30} color='blue'/>
                </li>
            </ul>
        </div>
        <div className="flex justify-center w-full h-full pt-4 bg-black">
            <ul className="flex justify-center">
                <li className='w-10 h-10 px-2 mx-2 rounded-full flex items-center justify-center bg-gray-300 hover:bg-gray-600 hover:scale-105 transition duration-300 cursor-pointer'>
                <FaPhone size={30} color='green' />
                </li>
                <p className='text-white flex justify-center items-center'>phone number</p>
                <li className='w-10 h-10 px-2 mx-2 rounded-full flex items-center justify-center'>
                    <div className='flex'>

                        <HiOutlineMail className="" size={30} color='gray'/>
                        <p className='text-white flex justify-center items-center px-2'>email</p>
                    </div>
                </li>
                <li className='w-10 h-10 px-2 mx-2 rounded-full flex items-center justify-center bg-gray-300 hover:bg-gray-600 hover:scale-105 transition duration-300 cursor-pointer'>
                <FaHome size={30} color='gray'/>
                </li>
            </ul>
        </div>
        </>
    )
}
