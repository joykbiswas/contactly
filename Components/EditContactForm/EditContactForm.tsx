import React from 'react';

const EditContactForm = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
                <form >
                    {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
                    {/* {successMessage && <p className="text-green-500">{successMessage}</p>} */}

                    {/* Name Input */}
                    {/* name input field */}
                    <div className="relative mx-auto w-full">
                        <input
                            className="peer w-full border border-blue-500 rounded-md  bg-transparent px-4 py-3  focus:outline-none"
                            type="text"
                            name="name"
                            //   value={formData.name}
                            //   onChange={handleChange}
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
                            //   value={formData.email}
                            //   onChange={handleChange}
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

                            //   value={formData.phone}
                            //   onChange={handleChange}
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
                            //   value={formData.address}
                            //   onChange={handleChange}
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
                            //   value={formData.profilePicture}
                            //   onChange={handleChange}
                            placeholder=""

                        />
                        <label className="absolute -top-2 left-2 rounded-md bg-blue-600 px-2 text-base text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-blue-600 peer-focus:text-sm peer-focus:text-white">
                            Profile URL
                        </label>
                    </div>
                    <br />


                    {/* Submit Button */}
                    {/* <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-800 text-white font-bold rounded hover:bg-blue-700 focus:outline-none"
          >
            Add Contact
          </button> */}

                    <div className=' text-center'>
                        <button
                            type="submit"
                            className="relative border-none bg-blue-800 text-white text-lg font-bold py-4 px-5 rounded transition-all duration-500 hover:bg-blue-700">
                            <span className="inline-block pr-2 transition-transform duration-500">
                                Update Contacts
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