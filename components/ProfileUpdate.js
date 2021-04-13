
import {useState, useEffect} from 'react';
import React from 'react';
import validator from 'validator';


const ProfileUpdate = () => {

    const [ready,
        setReady] = useState(false);
    const [user,
        setUser] = useState([]);
    const [firstLoad,
        setFirstLoad] = useState(true);
    const [message, setMessage] = useState('');


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
                    })
                .catch(err => console.log("Oops: " + err));
        }
    }, []);

    const handleChange = (event, func) => {

      

    }

    const formSubmit = (e) => {

        e.preventDefault();
        fetch(process.env.parfaitServer+'/profile', {
                method: 'POST',
                body: JSON.stringify({user}),
                headers: {
                    'Content-Type': 'application/json'
                },
                    credentials: 'include'
                 })
                 .then(res => {
                    
                    switch(res.status){
                    case 204: 
                        setMessage('Profile saved');
                        break;
                    case 401: 
                        break;
                    }
                }).catch(err => setMessage("Oops: "+err));


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
        <p className="mt-1 text-sm text-gray-600">
            {message}
        </p>
    </div>
</div >

<div>
    <form onSubmit={formSubmit} method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First name</label>
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            defaultValue={user.fname}
                            autoComplete="given-name"
                            onChange={e => setUser({
                                ...user,
                                fname: e.target.value
                            })}
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last name</label>
                        <input
                            type="text"
                            name="lname"
                            defaultValue={user.lname}
                            onChange={e => setUser({
                                ...user,
                                lname: e.target.value
                            })}
                            id="lname"
                            autoComplete="family-name"
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>

                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            defaultValue={user.phone}
                            onChange={e => setUser({
                                ...user,
                                phone: e.target.value
                            })}
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
                            onChange={e => setUser({
                                ...user,
                                email: e.target.value
                            })}
                            // onBlur={(e) => {
                            //         if(!validator.isEmail(e.target.value)){
                            //             e.target.setCustomValidity('Not a valid email address');
                            //             e.target.classList.add("border-red-500");
                            //             e.target.classList.remove("border-gray-300");
                            //         }else{
                            //             e.target.setCustomValidity('');
                            //             e.target.classList.add("border-gray-300");
                            //             e.target.classList.remove("border-red-500");
                            //         }
                            //}
                            //}
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