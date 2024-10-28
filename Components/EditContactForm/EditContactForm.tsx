"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { TbFidgetSpinner } from 'react-icons/tb';

interface EditContactFormProps {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    profilePicture: string;
}

const EditContactForm: React.FC<EditContactFormProps> = ({ id, name, email, phone, address, profilePicture }) => {
    const [newName, setNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)
    const [newPhone, setNewPhone] = useState(phone);
    const [newAddress, setNewAddress] = useState(address);
    const [newProfilePicture, setNewProfilePicture] = useState(profilePicture);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newName, newEmail, newAddress, newPhone, newProfilePicture })
            });
            if (!res.ok) {
                throw new Error("Failed to update topic");
            }
            Swal.fire({
                icon: "success",
                title: "Contact Data Successfully Update",
                showConfirmButton: false,
                timer: 1500
            });

            router.push('/')
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="max-w-lg mx-auto p-4 mt-8 mb-12 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>

                    <div className="relative mx-auto w-full">
                        <input
                            className="peer w-full border border-blue-500 rounded-md  bg-transparent px-4 py-3  focus:outline-none"
                            type="text"
                            name="name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder=""

                        />
                        <label className="absolute -top-2 left-2 rounded-md bg-blue-600 px-2 text-base text-white duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-blue-600 peer-focus:text-sm peer-focus:text-white">
                            Name
                        </label>
                    </div>
                    <br />
                    {/* email input field */}
                    <div className="relative mx-auto w-full">
                        <input
                            className="peer w-full border border-blue-500 rounded-md  bg-transparent px-4 py-3  focus:outline-none"
                            type="email"
                            name="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            placeholder=""

                        />
                        <label className="absolute -top-2 left-2 rounded-md bg-blue-600 px-2 text-base text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-blue-600 peer-focus:text-sm peer-focus:text-white">
                            email
                        </label>
                    </div>
                    <br />
                    {/* Phone input field */}
                    <div className="relative mx-auto w-full">
                        <input
                            className="peer w-full border border-blue-500 rounded-md  bg-transparent px-4 py-3  focus:outline-none"
                            type="text"
                            name="phone"

                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                            placeholder=""

                        />
                        <label className="absolute -top-2 left-2 rounded-md bg-blue-600 px-2 text-base text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-blue-600 peer-focus:text-sm peer-focus:text-white">
                            P Number
                        </label>
                    </div>
                    <br />
                    {/* Address input here */}
                    <div className="relative mx-auto w-full">
                        <input
                            className="peer w-full border border-blue-500 rounded-md  bg-transparent px-4 py-3  focus:outline-none"
                            type="text"
                            name="address"
                            value={newAddress}
                            onChange={(e) => setNewAddress(e.target.value)}
                            placeholder=""

                        />
                        <label className="absolute -top-2 left-2 rounded-md bg-blue-600 px-2 text-base text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-blue-600 peer-focus:text-sm peer-focus:text-white">
                            Address
                        </label>
                    </div>
                    <br />
                    <div className="relative mx-auto w-full">
                        <input
                            className="peer w-full border border-blue-500 rounded-md  bg-transparent px-4 py-3  focus:outline-none"
                            type="url"
                            name="profilePicture"
                            value={newProfilePicture}
                            onChange={(e) => setNewProfilePicture(e.target.value)}
                            placeholder=""

                        />
                        <label className="absolute -top-2 left-2 rounded-md bg-blue-600 px-2 text-base text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-blue-600 peer-focus:text-sm peer-focus:text-white">
                            Profile URL
                        </label>
                    </div>
                    <br />


                    {/* Submit Button */}

                    <div className=' text-center'>
                        <button
                            type="submit"
                            className="relative border-none bg-blue-800 text-white text-lg font-bold py-4 px-5 rounded transition-all duration-500 hover:bg-blue-700">
                            <span className="inline-block pr-2 transition-transform duration-500">
                                {loading ? <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>
                                    : 'Update Contacts'}
                            </span>
                            <span className="absolute opacity-0 right-[-20px] transition-opacity duration-500">
                                &#x00bb;
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditContactForm;