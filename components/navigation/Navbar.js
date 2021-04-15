import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faUser} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import Image from 'next/image';

const Navbar = ({page}) => {

    const groupIcon = <FontAwesomeIcon icon={faEdit} size="lg"/>
    const profileIcon = <FontAwesomeIcon icon={faUser} size='lg' />
    const [objectURL, setObjectURL] = useState("");
    const [imageExists, setImageExists] = useState(false);

    useEffect(() => {

            fetch(process.env.parfaitServer+'/profilepic2',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                credentials: 'include'
              })
            .then(res => res.json())
            .then(data => {
                setObjectURL(process.env.parfaitServer+'/'+data.profilePicPath)
                setImageExists(true);
            });
    },[]);

    return (
        <nav className="bg-gradient-to-r from-pink-200 to-indigo-200 bg-opacity-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-12">
                <div className="ml-3 absolute left-0 ">
                            <Link href='/editprofile'>
                                <button
                                    className=" text-gray-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true"
                                    aria-label="Profile">
                                    { (imageExists) ?
                                    <div 
                                    className="h-10 w-10 rounded-full overflow-hidden">
                                    <Image
                                        src = {objectURL}
                                        alt=""
                                        width='100'
                                        height='100'
                                        /> </div>
                                        : <div className='w-4 h-4'>
                                         {profileIcon}
                                        </div> 
                                    }
                                </button>
                            </Link>
                    </div>
                    <div
                        className="flex-1 flex items-center justify-center sm:items-stretch ">
                        
                        <div className="flex-shrink-0 flex items-center text-center">
                            <p  className="font-bold text-indigo-900 text-black text-xl">{page}</p>
                        </div>
                    </div>

                    <div className="ml-3 relative">
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <Link href={(page === "My Groups" ? 'newgroup' : "event")}>
                                <button
                                    aria-label="Create new"
                                    className="p-1 rounded-full text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                   <div className='w-5 h-5'>{groupIcon}</div> 
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

         </nav>
)}

export default Navbar;