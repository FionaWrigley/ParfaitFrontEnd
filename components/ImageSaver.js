
import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import ImageLoader from '../components/ImageLoader';
import {useRouter} from 'next/router';

const ImageSaver = () => {

        const [objectURL, setObjectURL] = useState("");
        const [imageExists, setImageExists] = useState(false);
        const [selectedFile, setSelectedFile] = useState();
        const [selected, setSelected] = useState(false);
        const profilepic = useRef(null);
        const [message, setMessage] = useState('');
        const [errMsg, setErrMsg] = useState('');
        const router = useRouter();

        const uploadImage = (image) => {
            setObjectURL(URL.createObjectURL(image))
            setSelectedFile(image);
            setSelected(true);
        }
    
        useEffect(() => {

                fetch(process.env.parfaitServer+'/profilepiccloud',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    credentials: 'include'
                  })
                .then(res => res.json())
                .then(data => {
                    setObjectURL(data.profilePicPath);
                    setImageExists(true);
                }).catch(err => console.log('Oops! ',err))
        },[]);

        const saveImage = (e) => {
            e.preventDefault();
             setMessage('');
             setErrMsg('');

              var formData = new FormData();
              formData.append('profilepic', selectedFile);
             
        
            fetch(process.env.parfaitServer+'/profilepiccloud', {
                     method: 'POST',
                    //  headers: {
                    //     'Content-Type': 'application/json',
                    // },
                    credentials: 'include',
                    body: formData,
                })
                .then(res => {
                    switch(res.status){
                        case 200: 
                            setMessage('Profile pic saved!')
                            break;
                        case 204: 
                            setMessage('Profile pic saved!')
                            break;
                        case 422: 
                            setErrMsg('Invalid image type. Must be of type jpeg, jpg, png, gif, tiff, webp, or psd.');
                            break;
                    }
                }).catch((err) => setErrMsg("Oops! Something went wrong. Please try again later."));      
            }

    return ((imageExists) ?
                <form method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 space-y-6 sm:p-6">
                                    <div>
                                        <div className="mt-2 flex items-center">
                                            <span
                                                className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 items-center">
                                                {/* { (objectURL == '') ?
                                                 <svg
                                                    className="h-full w-full text-gray-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg> : */}
                                          
                                                 <img 
                                                src={
                                                     (selectedFile)?
                                                    window
                                                    .URL
                                                    .createObjectURL(selectedFile)
                                                        : 
                                                        `${objectURL}`}
                                         
                                                /> 
                                            </span>
                                           <ImageLoader handleFile={uploadImage}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 dark:bg-gray-700 bg-gray-50 text-right sm:px-6 flex w-full justify-end">
                                    <p className="mt-1 text-m text-gray-800 justify-end rounded-full dark:text-white mr-5 inline">{message} </p>
                                    <p className="mt-1 text-m text-red-500 justify-end rounded-full mr-5 inline">{errMsg} </p>
                                    <button
                                      
                                        onClick={saveImage}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form> : <></>
    )
}
export default ImageSaver;