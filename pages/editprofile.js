import Plainheader from '../components/navigation/Plainheader';
import ProfileUpdate from '../components/ProfileUpdate';
import PasswordUpdate from '../components/PasswordUpdate';
import NotificationUpdate from '../components/NotificationUpdate';
import ImageSaver from '../components/ImageSaver'
import {useState, useEffect, useRef} from 'react';
import ImageLoader from '../components/ImageLoader';
import React from 'react';
import Image from 'next/image'


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

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

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
                    console.log(data);
                    })
                .catch(err => console.log("Oops: " + err));
        }
    }, [submit]);

    // function uploadImage(image){
    //     setSelectedFile(image);
    //     setSelected(true);
    //     setUser({
    //         ...user,
    //         profilePic: image
    //     })
    //     //profilePic.current.src = window.URL.createObjectURL(image);
    //     console.log(image);
    //     console.log(selectedFile)
    // }

    // const saveImage = (e) => {
    //     e.preventDefault();
    //       var formData = new FormData();
   
    //       formData.append('profilepic', selectedFile);
    //       console.log(formData.get('profilePic'));
    
    //      fetch('http://localhost:5000/profilepic', {
    //              method: 'POST',
    //             credentials: 'include',
    //             body: formData,
    //         })
    //             .then(res => console.log(res.status))
    //             .catch(err => alert("Oops: " + err));      
    // }
   
    return ((ready)
        ? <div>
                <Plainheader page="groups"/>
                <div className="mt-6">
                    <div>
                        <div className="px-4 sm:px-0">
                            <h2 className="text-lg font-medium leading-6 text-gray-900">Edit Profile</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Upload a photo to help your friends find you.
                            </p>
                        </div>
                        <ImageSaver />
                        {/* <form method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center">
                                            <span
                                                className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 items-center">
                                              


                                                <img
                                                    className="min-h-full min-w-full rounded-full inline overflow-hidden"
                                                    ref={profilePic}
                                                     src={
                                                         (selected) ? window
                                                        .URL
                                                        .createObjectURL(selectedFile) 
                                                        : 
                                                    `http://localhost:5000/public/images/profilePic-1616383049985.jpg`}
                                                     alt="i"/>  
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
                        </form> */}
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

                <NotificationUpdate/>
            </div>
        : <div>Loading...</div>)
}
export default editprofile;