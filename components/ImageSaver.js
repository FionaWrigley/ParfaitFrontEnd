
import {useState, useEffect} from 'react';
import Image from 'next/image';
import React from 'react';
import ImageLoader from '../components/ImageLoader';

const ImageSaver = () => {


        
        const [objectURL, setObjectURL] = useState("");
        const [imageExists, setImageExists] = useState(false);
        const [selectedFile, setSelectedFile] = useState();
        const [selected, setSelected] = useState(false);
        const profilepic = React.useRef(null);

        function uploadImage(image) {
            setObjectURL(URL.createObjectURL(image))
            setSelectedFile(image);
            setSelected(true);
        }

        const myLoader = ({ src, width, quality }) => {
           
            return `${src}?w=${width}&q=${quality || 75}`
          }
    
        useEffect(() => {

            console.log("in use effect")
                fetch('http://localhost:5000/profilepic2',
                {
                    method: 'GET',
                    credentials: 'include'
                  })
                .then(res => res.json())
                .then(data => {
                    setObjectURL('http://localhost:5000/'+data.profilePicPath);
                    
                    setImageExists(true);
                    
                });
        },[]);

        const saveImage = (e) => {
            e.preventDefault();
              var formData = new FormData();
       
              formData.append('profilepic', selectedFile);
        
             fetch(process.env.parfaitServer+'/profilepic', {
                     method: 'POST',
                    credentials: 'include',
                    body: formData,
                })
                    .then(res => console.log(res.status))
                    .catch(err => alert("Oops: " + err));      
            }

    return ((imageExists) ?
                <form method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center">
                                            <span
                                                className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 items-center">
                                                {/* { (!user.profilePic) ?
                                                 <svg
                                                    className="h-full w-full text-gray-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg> : */}
                                                {console.log("weird ",objectURL)}
                                                 <Image 
                                                loader={myLoader}
                                                src={
                                                    // (selectedFile)?
                                                    // window
                                                    // .URL
                                                    // .createObjectURL(selectedFile)
                                                    //     : 
                                                        `${objectURL}`}
                                                       
                                                    width="100"
                                                    height="100"
                                                    // className="min-h-full min-w-full rounded-full inline overflow-hidden"
                                                    // ref={profilepic}
                                                /> 
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
                        </form> : <></>
    )
}
export default ImageSaver;