// import Link from "next/link";

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="justify-between bg-[#393E46] px-4 py-2 text-white">
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between mx-2">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                        <Link className="text-2xl font-bold" href={'/'}>Contactly.</Link>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                        <Link href={'/'} className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">All Contacts</Link>
                        <Link href={'/addContacts'} className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Add Contacts</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;