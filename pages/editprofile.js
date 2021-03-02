import Plainheader from '../components/Plainheader';
import {useState, useEffect, useRef} from 'react';
import ImageLoader from '../components/ImageLoader';
import React from 'react';


const editprofile = (props) => {

    const [ready,
        setReady] = useState(false);
    const [user,
        setUser] = useState([]);
    const [submit,
        setSubmit] = useState(false);
    const [firstLoad,
        setFirstLoad] = useState(true);
    const [selectedFile, setSelectedFile] = useState();
    const [selected, setSelected] = useState(false);
    const profilePic = React.useRef(null);


    useEffect(() => {
        if (firstLoad) {
            fetch('http://localhost:5000/profile', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                })
                .then(res => res.json())
                .then((data) => {
                    setUser(data);
                    setReady(true);
                    setFirstLoad(false);
                    })
                .catch(err => console.log("Oops: " + err));
        }
    }, [submit]);

    function uploadImage(image){
        setSelectedFile(image);
        setSelected(true);
        //profilePic.current.src = window.URL.createObjectURL(image);
    }

    const saveImage = () => {
        console.log(selectedFile);
        var formData = new FormData();
        formData.append('profilePic', {selectedFile});
        alert(JSON.stringify(selectedFile));
    
        fetch('http://localhost:5000/updateProfilePic', {
                method: 'POST',
                credentials: 'include',
                body: {selectedFile}
            })
                .then(res => console.log(res.status))
                .catch(err => console.log("Oops: " + err));      
    }
   
    return ((ready)
        ? <div>
                <Plainheader/>
                <div className="mt-6">
                    <div>
                        <div className="px-4 sm:px-0">
                            <h2 className="text-lg font-medium leading-6 text-gray-900">Edit Profile</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Upload a photo to help your friends find you.
                            </p>
                        </div>
                        <form action="#" method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center">
                                            <span
                                                className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 items-center">
                                                { (!user.profilePic) ?
                                
                                                 <svg
                                                    className="h-full w-full text-gray-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg> :
                                                <img
                                                    className="min-h-full min-w-full rounded-full inline overflow-hidden"
                                                    ref={profilePic}
                                                    src={(selected) ? window
                                                        .URL
                                                        .createObjectURL(selectedFile) 
                                                        : window
                                                    .URL
                                                    .createObjectURL(
                                                        new Blob([new Uint8Array(user.profilePic.data)], {type: 'image/jpeg'}))}
                                                    alt="i"/>   }  
                                            </span>
                                           <ImageLoader handleFile={uploadImage}/>
                                        </div>
                                    </div>
                          
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        //type="submit"
                                        onClick={saveImage}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200"></div >
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">

                    <div>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3 >
                            <p className="mt-1 text-sm text-gray-600">
                                Update your personal information.
                            </p>
                        </div>
                    </div >

                    <div>
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                defaultValue={user.memberName}
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/></div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                defaultValue={user.memberSurname}
                                                id="last_name"
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/></div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                defaultValue={user.phone}
                                                autoComplete="tel"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/></div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label
                                                htmlFor="email_address"
                                                className="block text-sm font-medium text-gray-700">Email address</label>
                                            <input
                                                type="text"
                                                name="email_address"
                                                id="email_address"
                                                defaultValue={user.email}
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/></div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                            <input
                                                id="password"
                                                name="password"
                                                defaultValue={user.password}
                                                type="password"
                                                autoComplete="current-password"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/></div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Re-enter Password</label>
                                            <input
                                                id="password2"
                                                name="password2"
                                                type="password"
                                                defaultValue={user.password}
                                                autoComplete="current-password"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/></div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div >
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200"></div>
                    </div>
                </div>
                < div className="mt-10 sm:mt-0">
                    <div>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Decide which communications you'd like to receive and how.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <fieldset>
                                        <legend className="text-base font-medium text-gray-900">By Email</legend>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="comments"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/></div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">Group add</label>
                                                    <p className="text-gray-500">Get notified when someone adds you to a group.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="candidates"
                                                        name="candidates"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/></div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="candidates" className="font-medium text-gray-700">Bookings</label>
                                                    <p className="text-gray-500">Get notified when someone sends a booking request.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="offers"
                                                        name="offers"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/></div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">Invitations</label>
                                                    <p className="text-gray-500">Get notified when someone accepts your invitation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div>
                                            <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                                            <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                        </div>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="push_everything"
                                                    name="push_notifications"
                                                    type="radio"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                                                <label
                                                    htmlFor="push_everything"
                                                    className="ml-3 block text-sm font-medium text-gray-700">
                                                    Everything
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="push_email"
                                                    name="push_notifications"
                                                    type="radio"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                                                <label
                                                    htmlFor="push_email"
                                                    className="ml-3 block text-sm font-medium text-gray-700">
                                                    Same as email
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="push_nothing"
                                                    name="push_notifications"
                                                    type="radio"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                                                <label
                                                    htmlFor="push_nothing"
                                                    className="ml-3 block text-sm font-medium text-gray-700">
                                                    No push notifications
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        : <div>Loading...</div>)
}
export default editprofile;