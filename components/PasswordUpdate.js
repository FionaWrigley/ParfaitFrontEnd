
import {useState, useEffect} from 'react';
import React from 'react';


const PasswordUpdate = () => {

    const [ready,
        setReady] = useState(false);
    const [user,
        setUser] = useState([]);
    const [submit,
        setSubmit] = useState(false);
    const [firstLoad,
        setFirstLoad] = useState(true);



    // useEffect(() => {
    //     if (firstLoad) {
    //         fetch('http://localhost:5000/profile', {
    //             method: 'GET',
    //             headers: {'Content-Type': 'application/json'},
    //                 credentials: 'include'
    //             })
    //             .then(res => res.json())
    //             .then((data) => {
    //                 setUser(data);
    //                 setReady(true);
    //                 setFirstLoad(false);
    //                 })
    //             .catch(err => console.log("Oops: " + err));
    //     }
    // }, [submit]);


    return ( <>
      
                        <div className="mt-10 sm:mt-0">

<div>
    <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Password</h3 >
        <p className="mt-1 text-sm text-gray-600">
            Change your password.
        </p>
    </div>
</div >

<div>
    <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Current password</label>
                        <input
                            id="oldPassword"
                            name="oldPassword"
                            // defaultValue={user.password}
                            type="password"
                            autoComplete="current-password"
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>
                    
                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">New password</label>
                        <input
                            id="password"
                            name="password"
                            // defaultValue={user.password}
                            type="password"
                            // autoComplete="current-password"
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>

                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Re-enter Password</label>
                        <input
                            id="password2"
                            name="password2"
                            type="password"
                            // defaultValue={user.password}
                            // autoComplete="current-password"
                            className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>
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
                        


        </>
        
    )


}
export default PasswordUpdate;