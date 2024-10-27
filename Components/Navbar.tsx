import Link from "next/link";

const Navbar = () => {
    return (
        <nav className=" py-4 bg-slate-800 text-white ">
            <div className="max-w-7xl mx-auto">
            <div className="flex justify-between">
            <Link className="text-2xl font-bold" href={'/'}>Contactly.</Link>
            <Link className="p-2 text-lg bg-white text-blue-500" href={'/addContacts'}>Add Contacts</Link>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;