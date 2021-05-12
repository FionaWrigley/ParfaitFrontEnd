import Plainheader from '../components/navigation/Plainheader';
import ProfileUpdate from '../components/ProfileUpdate';
import PasswordUpdate from '../components/PasswordUpdate';
import SettingsPanel from '../components/SettingsPanel';
import ImageSaver from '../components/ImageSaver';
import PulseLoader from "react-spinners/PulseLoader";
import {useState} from 'react';

const editprofile = (props) => {
     
    return (
        <><div className="sticky top-0 z-50"><Plainheader backpage="groups" page="profile"/></div>
         <div>  
                <div className="mt-6">
                    <div>
                        <div className="px-4 sm:px-0">
                            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Edit Profile</h2>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-100">
                                Upload a photo to help your friends find you.
                            </p>
                        </div>
                        <ImageSaver />
                    </div>
                </div>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200"></div >
                    </div>
                </div>
                <ProfileUpdate/>                                            
                
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200"></div>
                    </div>
                </div>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200"></div >
                    </div>
                </div>
                <PasswordUpdate/>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200"></div>
                    </div>
                </div>

                <SettingsPanel/>
            </div></>
        
)}
export default editprofile;