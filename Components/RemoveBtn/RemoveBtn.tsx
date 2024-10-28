"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface RemoveBtnProps {
    id: string; // Define the id prop as a string
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
    const router = useRouter();

    const handleRemove = async () => {
        const result = await Swal.fire({
            title: "Are you sure you want to delete this contact?",
            text: "This action cannot be undone. Please confirm your choice !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            // Proceed with the deletion
            const res = await fetch(`http://localhost:3000/api/contacts?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) { // Check if the response is successful
                Swal.fire({
                    title: "Contact  Deleted!",
                    text: "The contact has been successfully removed.",
                    icon: "success",
                });
                router.refresh(); // Refresh the router to update the UI
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue deleting. Please try again.",
                    icon: "error",
                });
            }
        }
    };

    return (
        <button
            onClick={handleRemove}
            className="p-6 rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500 hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
            Delete
        </button>
    );
};

export default RemoveBtn;
