import {useRef} from 'react';

const ImageLoader = (props) => {
   
    const imageInput = useRef(null);

    const changeHandler = (event) => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    const handleClick = () => {
        imageInput
            .current
            .click();
    };

    return ( 
        <> 
            <input
                ref={imageInput}
                type="file"
                name="file"
                onChange={changeHandler}
                className="hidden"/> 
            <button 
                type="button" 
                onClick={handleClick}
                className = "ml-5 bg-white dark:bg-indigo-600  py-2 px-3 border border-gray-300 dark:bg-indigo-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Change 
            </button>
   </>
	)
}

export default ImageLoader;


























// import React from 'react';
// import ImageUploader from 'react-images-upload';
// import useState from 'react';
 
// const ImageLoader = () => {
 

//     const [pictures, setPictures] = useState([]);
//     // constructor(props) {
//     //     super(props);
//     //      this.state = { pictures: [] };
//     //      this.onDrop = this.onDrop.bind(this);
//     // }
 
//     function onDrop(picture) {
        
//         setPictures(picture);
//     }
//         return (
//             <ImageUploader
//                 withIcon={true}
//                 buttonText='Choose images'
//                 onChange={onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//             / >
    //         ); } export default ImageLoader;