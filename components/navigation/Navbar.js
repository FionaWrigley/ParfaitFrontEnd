import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faUser} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import Image from 'next/image';

const Navbar = (props) => {

    const groupIcon = <FontAwesomeIcon icon={faEdit} size="lg"/>
    const profileIcon = <FontAwesomeIcon icon={faUser} size='lg' />
    const [objectURL, setObjectURL] = useState("");
    const [imageExists, setImageExists] = useState(false);

    useEffect(() => {

            fetch(process.env.parfaitServer+'/profilepiccloud',
            {
                method: 'GET',
                 headers: { 'Content-Type': 'application/json; charset=utf-8' },
                credentials: 'include'
              })
            .then(res => {
                switch(res.status){
                    
                    case 200: 
                        res.json().then(data => {
                            setObjectURL(data.profilePicPath);
                            //setImageExists(true);
                          
                        });
                     
                }
            }).catch((err) => console.log("Oops ", err));
                
            
    },[]);

    return (
        <nav className="bg-gradient-to-r from-pinkish to-pinkish bg-opacity-50 dark:bg-gray-800 dark:from-gray-800 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-12">
                <div className="ml-3 absolute left-0 ">
                            <Link href='/editprofile'>
                                <button
                                    className=" text-gray-600 dark:text-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true"
                                    aria-label="Profile">
                                    { (objectURL !== "") ?
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
                            <p  className="font-bold text-indigo-900 text-black dark:text-white text-xl">{props.page}</p>
                        </div>
                    </div>

                    <div className="ml-3 relative">
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <Link href={(props.page === "My Groups" ? 'newgroup' : {pathname: 'event', query: {selectedDate: props.selectedDate, crudType: 'create'}})}>
                                <button
                                    aria-label="Create new"
                                    className="p-1 rounded-full text-gray-600 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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