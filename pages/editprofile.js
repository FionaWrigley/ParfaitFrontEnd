import Plainheader from '../components/navigation/Plainheader';
import ProfileUpdate from '../components/ProfileUpdate';
import PasswordUpdate from '../components/PasswordUpdate';
import NotificationUpdate from '../components/NotificationUpdate';
import ImageSaver from '../components/ImageSaver'
import {useState, useEffect} from 'react';

const editprofile = (props) => {
    const [ready,
        setReady] = useState(false);
    const [user,
        setUser] = useState([]);
    const [submit,
        setSubmit] = useState(false);
    const [firstLoad,
        setFirstLoad] = useState(true);

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

    useEffect(() => {
        if (firstLoad) {
            fetch(process.env.parfaitServer+'/profile', {
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

   
    return ((ready)
        ? <div>
                <Plainheader backpage="groups" page="profile"/>
                <div className="mt-6">
                    <div>
                        <div className="px-4 sm:px-0">
                            <h2 className="text-lg font-medium leading-6 text-gray-900">Edit Profile</h2>
                            <p className="mt-1 text-sm text-gray-600">
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

                <NotificationUpdate/>
            </div>
        : <div>Loading...</div>)
}
export default editprofile;