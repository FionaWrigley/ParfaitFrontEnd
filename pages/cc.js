import {useState, useEffect} from 'react';



const cc = ({page}) => {





    //const element = <FontAwesomeIcon icon={faEdit} size="lg"/>
    //var profileImage = Document.getElementById('img');
    const [objectURL, setObjectURL] = useState("");

    useEffect(() => {

            fetch('http://localhost:5000/profilePic',
            {
                method: 'GET',
                headers: { 'Content-Type': 'image/jpeg' },
                credentials: 'include'
              })
            .then(res => res.blob())
            .then(function(myBlob) {
                setObjectURL(URL.createObjectURL(myBlob));
               // myImage.src = objectURL;
            //   });
            });

    },[]);

    return (
        <img src = {objectURL} alt="fail"></img>

    )

}
export default cc;