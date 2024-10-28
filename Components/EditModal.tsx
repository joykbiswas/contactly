"use client"
import Link from 'next/link';
import { useState } from 'react';

interface EditModalProps {
    id: string; // Define the id prop as a string
}


export const EditModal : React.FC<EditModalProps> = ({ id }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
      <div className="mx-auto flex w-72 items-center justify-center">
        <button onClick={() => setOpenModal(true)} className="rounded-md bg-gray-700 py-2 px-5 text-white">
          Login Modal
        </button>
        <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
          <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
            <Link href={`/editContact/${id}`} className="p-6 rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Edit</Link>
          </div>
        </div>
      </div>
    )
  }