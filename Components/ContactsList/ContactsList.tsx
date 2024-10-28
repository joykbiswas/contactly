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
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-10'>
                {topics.map((t) => (
                    <div key={t._id} className=" space-y-4 rounded-2xl bg-white  shadow-md dark:bg-[#18181B] border ml-12 mb-12">
                        {/* profile image & bg  */}
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
                                    <RiMapPinLine className='text-xl'/>
                                    <span className="text-base">{t.address}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex  justify-around gap-4 pb-4 ">
                            <EditModal id={t._id}/>
                            <RemoveBtn id={t._id}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ContactsList;