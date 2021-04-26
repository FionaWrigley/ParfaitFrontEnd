
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
    //         fetch('https://localhost:5000/profile', {
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
      
                        <div className="mt-4 sm:mt-0">

<div>
    <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Password</h3 >
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
            Change your password.
        </p>
    </div>
</div >

<div>
    <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-4">
                        <input
                            id="oldPassword"
                            name="oldPassword"
                            placeholder="Current password"
                            // defaultValue={user.password}
                            type="password"
                            autoComplete="current-password"
                            className = "dark:bg-gray-700 mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>
                    
                    <div className="col-span-6 sm:col-span-4">
                        <input
                            id="password"
                            placeholder="New password"
                            name="password"
                            // defaultValue={user.password}
                            type="password"
                            // autoComplete="current-password"
                            className = "dark:bg-gray-700 mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>

                    <div className="col-span-6 sm:col-span-4">
                        <input
                            id="password2"
                            name="password2"
                            type="password"
                            placeholder="Re-enter password"
                            // defaultValue={user.password}
                            // autoComplete="current-password"
                            className = "dark:bg-gray-700 mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>
                </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
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