import Image from 'next/image';
import React from 'react';
import defaultImg from '@/public/profile-img.jpg'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";

const ContactsList = () => {
    return (
        <div className="max-w-[300px] space-y-4 rounded-2xl bg-white  shadow-md dark:bg-[#18181B] md:max-w-[300px] border ml-12 mb-12">
            {/* profile image & bg  */}
            <div className="h-32 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 ">
                <div className="flex justify-center">
                    <Image
                        width={100} height={100}
                        src={defaultImg}
                        alt="profile img"
                        className="w-24 h-24 rounded-full border-4 border-pink-500 mt-16" //todo:  border-white
                    />
                </div>
            </div>

            {/* Contact Info */}
            <div className="pt-7  px-6 border-2 border-yellow-400">
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4 border">Joy</h3>

                <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                    <MdOutlineEmail />
                        <h2 className="w-4 h-4 mr-2" />
                        <span className="text-sm"> email@gmail</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                    <FiPhone />
                        <h3 className="w-4 h-4 mr-2" />
                        <span className="text-sm">0174444</span>
                    </div>

                    <div className="flex items-start text-gray-600">
                    <RiMapPinLine />
                        <h2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">address</span>
                    </div>
                </div>
            </div>

            <div className="flex  justify-around gap-4 pb-4 ">
                <button className="p-6 rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Edit</button>
                <button className="p-6 rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Delete</button>
            </div>
        </div>
    );
};

export default ContactsList;