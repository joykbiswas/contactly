"use client"
import Link from 'next/link';
// import EditContactForm from './EditContactForm/EditContactForm';

interface EditModalProps {
    id: string;
}


export const EditModal : React.FC<EditModalProps> = ({ id }) => {
    console.log("edit id",id);
    // const [openModal, setOpenModal] = useState(false);
    return (
      <>
        <button>
          <Link href={`/editContact/${id}`} className="p-6 rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Edit</Link>
        </button>
      </>
    )
  }