import EditContactForm from '@/Components/EditContactForm/EditContactForm';
import React from 'react';

const getTopicsById = async(id: string) =>{
    try{
        const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
            cache: "no-store"
        });
        if(!res.ok){
            throw new Error("Failed to fetch Contacts")
        }
        // const data = await res.json();
        // return data; 
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
interface EditContactProps {
    params: {
        id: string;
    };
}
const EditContact = async ({ params }: EditContactProps) => {
    const { id } =await params;
    const {topic}=  await getTopicsById(id)
    console.log("ediId topic",topic);
    // if (!topic) {
    //     return <div>Error loading topic.</div>;
    // }

    const {name, email, phone, address, profilePicture} = topic;
    console.log("id", id);
    console.log('params', params)
    return (
        <>
            <EditContactForm  id={id} name={name} email={email} phone={phone} address={address} profilePicture={profilePicture} />
        </>
    );
};

export default EditContact;