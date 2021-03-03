
import {useState, useEffect} from 'react';
import React from 'react';
import validator from 'validator';


const ProfileUpdate = () => {

    const [ready,
        setReady] = useState(false);
    const [user,
        setUser] = useState([]);
    const [submit,
        setSubmit] = useState(false);
    const [firstLoad,
        setFirstLoad] = useState(true);


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
    }, []);

    const handleChange = (event, func) => {

      

    }

    const handleSubmit = () => {

    }





    return (
        (ready) ?
        <>
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
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                        <input
                            type="text"
                            name="last_name"
                            defaultValue={user.memberSurname}
                            id="last_name"
                            autoComplete="family-name"
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>

                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            defaultValue={user.phone}
                            autoComplete="tel"
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>

                    <div className="col-span-6 sm:col-span-4">
                        <label
                            htmlFor="email_address"
                            className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            
                            type="text"
                            //className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none invalid:border-red-500"
                            name="email_address"
                            id="email_address"
                            defaultValue={user.email}
                            onBlur={(e) => {
                                    if(!validator.isEmail(e.target.value)){
                                        e.target.setCustomValidity('Not a valid email address');
                                        e.target.classList.add("border-red-500");
                                        e.target.classList.remove("border-gray-300");
                                    }else{
                                        e.target.setCustomValidity('');
                                        e.target.classList.add("border-gray-300");
                                        e.target.classList.remove("border-red-500");
                                    }
                            }
                            }
                            autoComplete="email"
                            
                            />
                            </div>
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
        </>:
        <></>
    )


}
export default ProfileUpdate;