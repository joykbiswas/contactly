import Image from 'next/image';
import React from 'react';
// import defaultImg from '@/public/profile-img.jpg'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import RemoveBtn from '../RemoveBtn/RemoveBtn';
import { EditModal } from '../EditModal';

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    profilePicture: string;
}


const getTopics = async (): Promise<{ topics: Contact[] }> => {
    try {
        const res = await fetch('http://localhost:3000/api/contacts/', {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics", error);
        return { topics: [] };
    }
}

const ContactsList = async () => {

    const { topics } = await getTopics();
    console.log(topics)

    return (
        <div className="container mx-auto px-4">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-12 '>
                {topics.map((t) => (
                    <div key={t._id} className="relative space-y-4 rounded-2xl bg-white  shadow-md ">
                        {/* profile image & bg  */}
                        <div className="absolute top-5 flex items-center">
                            <svg width={30} className="p-1 cursor-pointer fill-transparent stroke-black stroke-2 hover:fill-red-500 hover:stroke-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
                        </div>

                        <div className="h-32 rounded-t-2xl bg-gradient-to-r from-blue-500 to-purple-500 ">
                            <div className="flex justify-center">
                                <Image
                                    width={100} height={100}
                                    src={t.profilePicture}
                                    unoptimized
                                    alt="profile img"
                                    className="w-24 h-24 rounded-full border-4 border-white mt-16" //todo:  border-white
                                />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-7  px-6">
                            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">{t.name}</h3>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <MdOutlineEmail />
                                    <span className="text-base">{t.email}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-700">
                                    <FiPhone />
                                    <span className="text-base">{t.phone}</span>
                                </div>

                                <div className="flex items-start gap-2  text-gray-700">
                                    <RiMapPinLine className='text-xl' />
                                    <span className="text-base">{t.address}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex  justify-around gap-4 pb-4 ">
                            <EditModal id={t._id} />
                            <RemoveBtn id={t._id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactsList;