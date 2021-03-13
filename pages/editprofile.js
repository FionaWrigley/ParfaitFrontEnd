import Plainheader from '../components/navigation/Plainheader';
import ProfileUpdate from '../components/ProfileUpdate';
import PasswordUpdate from '../components/PasswordUpdate';
import NotificationUpdate from '../components/NotificationUpdate';
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
        setUser({
            ...user,
            profilePic: image
        })
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
                <Plainheader page="groups"/>
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