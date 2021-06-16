import {useState, useRef} from 'react';
import {useRouter} from 'next/router';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} size="lg" />;



const register = (props) => {
 
    const { register, handleSubmit, errors, watch} = useForm();
    const onSubmit = data => formSubmit(data);
    const [errMsg, setErrMsg] = useState('');
    const router = useRouter();
    const password = useRef({});
    const [passwordShown, setPasswordShown] = useState(false);
    const [password2Shown, setPassword2Shown] = useState(false);
    password.current = watch("password", "");

    const formSubmit = (form) => {

            setErrMsg('');
            fetch(process.env.parfaitServer+'/register', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                credentials: 'include'
            }).then(res => {

                switch (res.status) {
                    case 200:
                        router.push('/groups');
                        break;
                    case 204:
                            router.push('/groups');
                            break;
                    case 409:
                        setErrMsg('Email is already registered to an account');
                        break;
                    case 422:
                        res => res.json()
                        .then(data => setErrMsg(data));
                        break
                    case 401:
                        router.push('register');
                        break;
                }
            }).catch(err => setErrMsg('Oops, we are having a problem, please try again later'));
        }
    return (<>
        <div
            className="min-h-screen flex items-center justify-center to-gray-50 from-gray-50 g-gradient-to-r  dark:from-primaryDark dark:to-secondaryDark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div >
                    <img className="mx-auto h-20 w-auto" src="/images/logo.svg" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register for Parfait
                    </h2>

                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm space-y-2">

                        <div>
                            <label htmlFor="fname" className="sr-only">First Name</label>
                            <input
                                id="fname"
                                name="fname"
                                type="text"
                                autoComplete="given-name"
                                className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="First name"
                                ref={register({ 
                                    required: 'First name is required', 
                                    minLength: {value: 2, message: 'First name must be between 2 and 50 characters'},
                                    maxLength: {value: 50, message: 'First name must be between 2 and 50 characters'}, 
                                    pattern: { value: /^[ A-Za-z'-]*$/, message: "First name may only contain letters or the following characters - '" }
                                })}
                            />
                            {errors.fname && <p className="errorMsg text-sm text-red-500">{errors.fname.message}</p>}
                            </div>
                        <div>
                            <label htmlFor="lname" className="sr-only">Last Name</label>
                            <input
                                id="lname"
                                name="lname"
                                type="text"
                                autoComplete="family-name"
                                className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Surname"
                                ref={register({ 
                                    required: 'Surname is required', 
                                    minLength: {value: 2, message: 'Surname must be between 2 and 50 characters'},
                                    maxLength: {value: 50, message: 'Surname must be between 2 and 50 characters'}, 
                                    pattern: { value: /^[ A-Za-z'-]*$/, message: "Surname may only contain letters or the following characters - '" } 
                                })}
                            />
                            {errors.lname && <p className="errorMsg text-sm text-red-500">{errors.lname.message}</p>}
                            </div>
                            <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="email"
                                className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                ref={register({ 
                                    required: 'Email is required', 
                                    maxLength: {value: 255, message: 'Email must be less than 256 characters'}, 
                                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Email should be in standard format e.g. Fiona@hotmail.com'}
                                 })}
                            />
                            {errors.email && <p className="errorMsg text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                autoComplete="tel"
                                className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Phone number"
                                ref={register({
                                    required: 'Phone number is required', 
                                    minLength: {value: 8, message: 'Phone number must be between 8 and 15 digits'}, 
                                    maxLength: {value: 15, message: 'Phone number must be between 8 and 15 digits'}, 
                                    pattern: {value: /^[0-9]*$/, message: 'Phone number may only contain numbers'}
                                 })}
                            />
                            {errors.phone && <p className="errorMsg text-sm text-red-500">{errors.phone.message}</p>}
                            </div>
                        
                        <div className='relative'>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type={passwordShown ? "text" : "password"}
                                autoComplete="current-password"
                                className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                ref={register({
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: 'Password must have at least 8 characters, and should contain a minimum of 8 characters, including one upper case letter, one lower case letter, one number, and one special character'
                                      },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        //value: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,}$/,
                                        message: 'Password must have at least 8 characters, and should contain a minimum of 8 characters, including one upper case letter, one lower case letter, one number, and one special character'
                                    }
                                })}
                            />
                            {errors.password && <p className="errorMsg text-sm text-red-500">{errors.password.message}</p>}
                            <i className = 'absolute top-3 right-2 h-6 w-6 text-gray-500 dark:text-white' onClick={() => setPasswordShown(passwordShown ? false : true)}>{eye}</i>
                            </div>

                        <div className='relative'>
                            <label htmlFor="password2" className="sr-only">Re-enter Password</label>
                            <input
                                id="password2"
                                name="password2"
                                type={password2Shown ? "text" : "password"}
                                autoComplete="current-password"
                                className="dark:bg-gray-700 dark:text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Re-enter Password"
                                ref={register({
                                    validate: (value) =>
                                      value === password.current || "The passwords do not match"
                                  })}
                                />
                                {errors.password2 && <p className="errorMsg text-sm text-red-500">{errors.password2.message}</p>}
                                <i className = 'absolute top-3 right-2 h-6 w-6 text-gray-500 dark:text-white' onClick={() => setPassword2Shown(password2Shown ? false : true)}>{eye}</i>
                                </div>
                    </div>
                    <p className="errorMsg text-sm text-red-500">{errMsg}</p>
                    <div>
                        <button
                            type="submit"
                            className="group relative dark:text-white w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 dark:bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                            Register
                        </button>
                    </div>
                    <div>
<p className='flex justify-center'><Link href="/login">
                        <a className="font-medium text-center text-indigo-600 dark:text-white hover:text-indigo-500">
                            Back to login
                        </a>
                    </Link></p>
                    </div>
                </form>
            </div>
           
        </div>
        
     </>
    )

}
export default register;