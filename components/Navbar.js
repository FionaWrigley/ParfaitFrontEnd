import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faUser, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const Navbar = ({page}) => {

    const groupIcon = <FontAwesomeIcon icon={faEdit} size="lg"/>
    const profileICon = <FontAwesomeIcon icon={faUser} size='lg' />
    const [objectURL, setObjectURL] = useState("");
    const [imageExists, setImageExists] = useState(false);

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
                if (myBlob.size > 0){
                setImageExists(true);
                }
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
                                    { (imageExists) ?
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src = {objectURL}
                                        alt=""/> 
                                        : <>
                                        {profileICon}
                                        </>
                                        
                                        

                                //     <svg
                                //    className="h-10 w-10 text-gray-300"
                                //    fill="currentColor"
                                //    viewBox="0 0 24 24">
                                //    <path
                                //        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                // </svg> 
                                    }
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

                                    {groupIcon}
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

         </nav>
)}

export default Navbar;