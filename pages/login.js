import Link from 'next/link';
import {useState} from 'react';
import {useForm } from "react-hook-form";
import {useRouter} from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} size="lg" />;


const login = (props) => {

    const router = useRouter();
    const { register, handleSubmit} = useForm();
    const onSubmit = data => formSubmit(data);
    const [passwordShown, setPasswordShown] = useState(false);

     const [error, setErrorMessage] = useState('');

    const formSubmit = (user) => {

        fetch(process.env.parfaitServer+ '/login', {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                        credentials: 'include'
                     })
                     .then(res => { 
                        switch(res.status){
                        case 200:
                            localStorage.setItem('loggedIn', true);
                            localStorage.setItem('lastLogIn', new Date());
                            router.push('/groups');
                            break;
                            case 204:
                                localStorage.setItem('loggedIn', true);
                                localStorage.setItem('lastLogIn', new Date());
                                router.push('/groups');
                                break;
                        case 401: 
                             setErrorMessage("Invalid username or password");
                            break;
                        case 403:
                            setErrorMessage("This account has been deactivated");
                            break;
                        case 422: 
                             setErrorMessage("Invalid username or password");
                            break;
                        }
                    }).catch(err => {

                        setErrorMessage("Oops, we are currently experiencing problem, please try again later")
                        console.log("Oops: "+err)
                    });
             }

    return (
        <div
            className="min-h-screen flex items-center justify-center to-gray-50 from-gray-50 g-gradient-to-r  dark:from-primaryDark dark:to-secondaryDark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-20 w-auto"
                        src="/images/logo.svg" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm -space-y-px dark:bg-gray-200">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input id="email" name="email" type="user.email" // value={user.email
                         autoComplete="email" 
                        required 
                         className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" 
                         ref={register}
                         required/></div>
                        <div className='relative'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input 
                            id="password" 
                            name="password" 
                            type={passwordShown ? "text" : "password"}
                            required// value={user.password
                            autoComplete="current-password" 
                            ref={register}
                            className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                            placeholder="Password" />
                         <i className = 'absolute top-3 right-2 h-6 w-6 text-gray-500 dark:text-white' onClick={() => setPasswordShown(passwordShown ? false : true)}>{eye}</i>
</div>
                    </div>

                    <div className="flex items-center justify-between">
                    </div>

                    <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 dark:bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg
                                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd"/>
                                    </svg>
                                </span>
                                Sign in
                            </button>
                       <div className="text-red-500  mt-2"> {error} </div>
                    </div>
                    <div>
                        <div className="text-sm text-center">
                            <Link href="/register">
                                <a className="font-medium text-center text-indigo-600 dark:text-white hover:text-indigo-500">
                                    Don't have an account yet?
                                </a>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login;