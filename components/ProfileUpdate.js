import {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import React from 'react';
import {useRouter} from 'next/router';

const ProfileUpdate = () => {

    const { register, handleSubmit, errors} = useForm();
    const onSubmit = data => formSubmit(data);

    const [ready,
        setReady] = useState(false);
    const [user,
        setUser] = useState([]);
    const [firstLoad,
        setFirstLoad] = useState(true);
    const [message, setMessage] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const router = useRouter();


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

    const formSubmit = (form) => {

        setErrMsg('');
        setMessage('');

        fetch(process.env.parfaitServer+'/profile', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                },
                    credentials: 'include'
                 })
                 .then(res => {
                    
                    switch(res.status){
                    case 204: 
                        setMessage('Profile saved!');
                        break;
                    case 401: 
                        router.push('/login');
                        break;
                    case 422: 
                        setErrMsg("Invalid input")
                        break;
                    }
                }).catch(err => setErrMsg("Oops: "+err));


    }
    return (
        (ready) ?
        <>
                        <div className="mt-4 sm:mt-0">

<div>
    <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Personal Information</h3 >
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
            Update your personal information.
        </p>
        
    </div>
</div >

<div>
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            placeholder="First name"
                            defaultValue={user.fname}
                            autoComplete="given-name"
                            onChange={e => setUser({
                                ...user,
                                fname: e.target.value
                            })}
                            className = "dark:bg-gray-700 mt-1 block w-full h-9 shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            ref={register({ required: true, minLength: 2, maxLength: 50, pattern: /^[ A-Za-z'-]*$/ })}
                            />
                                {errors.fname && errors.fname.type === "required" && (
                                        <p className="errorMsg text-sm text-red-600">First name is required.</p>
                                      )}
                                      {errors.fname && (errors.fname.type === "minLength" || errors.fname.type === "maxLength" ) && (
                                        <p className="errorMsg text-sm text-red-600">First name must be between 2 and 50 characters.</p>
                                      )}
                                      {errors.fname && errors.fname.type === "pattern" && (
                                        <p className="errorMsg text-sm text-red-600">First name may only contain letters or the following characters - '</p>
                                      )}
                            
                            
                            </div>

                    <div className="col-span-6 sm:col-span-3">
                        <input
                            type="text"
                            name="lname"
                            ref={register({ required: true, minLength: 2, maxLength: 50, pattern: /^[ A-Za-z'-]*$/ })}
                            placeholder="Surname"
                            defaultValue={user.lname}
                            onChange={e => setUser({
                                ...user,
                                lname: e.target.value
                            })}
                            id="lname"
                            autoComplete="family-name"
                            className = "dark:bg-gray-700 mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            {errors.lname && errors.lname.type === "required" && (
                                        <p className="errorMsg text-sm text-red-600">Surname is required.</p>
                                      )}
                                      {errors.lname && (errors.lname.type === "minLength" || errors.lname.type === "maxLength" ) && (
                                        <p className="errorMsg text-sm text-red-600">Surname must be between 2 and 50 characters.</p>
                                      )}
                                      {errors.lname && errors.lname.type === "pattern" && (
                                        <p className="errorMsg text-sm text-red-600">Surname may only contain letters or the following characters - '</p>
                                      )}
                            
                            </div>

                    <div className="col-span-6 sm:col-span-4">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            ref={register({minLength: 8, maxLength: 15, pattern: /^[0-9]*$/ })}
                            placeholder="Phone number"
                            defaultValue={user.phone}
                            onChange={e => setUser({
                                ...user,
                                phone: e.target.value
                            })}
                            autoComplete="tel"
                            className = "dark:bg-gray-700 mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            
                           
                                      {errors.phone && (errors.phone.type === "minLength" || errors.phone.type === "maxLength" ) && (
                                        <p className="errorMsg text-sm text-red-600">Phone number must be between 8 and 15 digits.</p>
                                      )}
                                      {errors.phone && errors.phone.type === "pattern" && (
                                        <p className="errorMsg text-sm text-red-600">Phone number may only contain numbers</p>
                                      )}
                            
                            
                            </div>

                    <div className="col-span-6 sm:col-span-4">                       
                        <input
                            
                            type="text"
                            className = "dark:bg-gray-700 mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none invalid:border-red-500"
                            name="email"
                            id="email"
                            ref={register({ required: true, maxLength: 255, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                            placeholder="Email address"
                            defaultValue={user.email}
                            onChange={e => setUser({
                                ...user,
                                email: e.target.value
                            })}
                            autoComplete="email"
                            />
                             {errors.email && errors.email.type === "required" && (
                                        <p className="errorMsg text-sm text-red-600">Email is required.</p>
                                      )}
                                      {errors.email && (errors.email.type === "maxLength" ) && (
                                        <p className="errorMsg text-sm text-red-600">Email must be less than 256 characters.</p>
                                      )}
                                      {errors.email && errors.email.type === "pattern" && (
                                        <p className="errorMsg text-sm text-red-600">Email should be in standard format e.g. Fiona@hotmail.com</p>
                                      )}
                            </div>
                            </div>
            </div> 
            <div className="px-4 py-3 dark:bg-gray-700 bg-gray-50 text-right sm:px-6 flex w-full justify-end">
            <p className="mt-1 text-m text-gray-800 justify-end rounded-full dark:text-white mr-5 inline">{message}</p>
            <p className="mt-1 text-m text-red-500 justify-end rounded-full mr-5 inline">{errMsg}</p>
                <button
                    type="submit"
                    className="inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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