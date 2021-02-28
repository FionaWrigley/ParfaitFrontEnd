import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const Navbar = ({page}) => {

    const element = <FontAwesomeIcon icon={faEdit} size="lg"/>
    const [objectURL, setObjectURL] = useState("");

    useEffect(() => {
            fetch('http://localhost:5000/profilePic',
            {
                method: 'GET',
                headers: { 'Content-Type': 'image/jpeg' },
                credentials: 'include'
              })
            .then(res => res.blob())
            .then(function(myBlob) {
                console.log(myBlob);
                setObjectURL(URL.createObjectURL(myBlob));
            });
    },[]);

    return (
        <nav className="bg-pink-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-12">
                <div className="ml-3 absolute left-0 ">
                            <Link href='/editprofile'>
                                <button
                                    className="bg-pink-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src = {objectURL}
                                        alt=""/>
                                </button>
                            </Link>
                    </div>
                    <div
                        className="flex-1 flex items-center justify-center sm:items-stretch ">
                        
                        <div className="flex-shrink-0 flex items-center text-center">
                            {/* <img className="block lg:hidden h-8 w-auto" src="/images/logo.svg" alt="Logo"/> */}
                            <p  className="font-extrabold text-indigo-800">{page}</p>
                        </div>
                    </div>

                    <div className="ml-3 relative">
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <Link href="creategroup">
                                <button
                                    className=" bg-pink-200 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">

                                    {element}
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

         </nav>
)}

export default Navbar;