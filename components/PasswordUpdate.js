import { useForm } from "react-hook-form";
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} size="lg" />;

const PasswordUpdate = () => {

    const { register, handleSubmit, errors, watch} = useForm();
    const onSubmit = data => formSubmit(data);
    const [errMsg, setErrMsg] = useState('');
    const [message, setMessage] = useState('');
    const password = useRef({});
    const [oldPasswordShown, setOldPasswordShown] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [password2Shown, setPassword2Shown] = useState(false);
    password.current = watch("password", "");

    const formSubmit = (form) => {

        setErrMsg('');
        setMessage('');

        fetch(process.env.parfaitServer+'/password', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                    credentials: 'include'
                 })
                 .then(res => {
                    switch(res.status){
                    case 204: 
                        setMessage('Password changed!');
                        break;
                    case 401: 
                        router.push('/login');
                        break;
                        case 422:
                            res.json()
                            .then(data =>
                                setErrMsg(data.errors));
                            
                            break;
                    }
                }).catch(err => setErrMsg("Oops! something went wrong, please try again later"));

    }

    return ( <>
      
                        <div className="mt-4 sm:mt-0">

<div>
    <div className="px-4 sm:px-0 lg:mx-6 md:mx-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Password</h3 >
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
            Change your password.
        </p>
    </div>
</div >

<div>
    <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                    <div className="relative col-span-6 sm:col-span-4">
                        <input
                            id="oldPassword"
                            name="oldPassword"
                            placeholder="Current password"
                            type={oldPasswordShown ? "text" : "password"}
                            autoComplete="current-password"
                            className = "z-12 dark:bg-gray-700 dark:text-white mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            ref={register({required: "Password is required"})}   
                            />
                            {errors.oldPassword && <p className="errorMsg text-sm text-red-500">{errors.oldPassword.message}</p>}
                            <i className = 'absolute top-3 right-2 h-6 w-6 text-gray-500 dark:text-white' onClick={() => setOldPasswordShown(oldPasswordShown ? false : true)}>{eye}</i>
</div>
                    
                    <div className="relative col-span-6 sm:col-span-4">
                        <input
                            id="password"
                            placeholder="New password"
                            name="password"
                            type={passwordShown ? "text" : "password"}
                            className = "z-12 dark:bg-gray-700 dark:text-white mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
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
                            })}/>
                            {errors.password && <p className="errorMsg text-sm text-red-500">{errors.password.message}</p>}
                            <i className = 'absolute top-3 right-2 h-6 w-6 text-gray-500 dark:text-white' onClick={() => setPasswordShown(passwordShown ? false : true)}>{eye}</i>
                            </div>
                    <div className="relative col-span-6 sm:col-span-4">
                        <input
                            id="password2"
                            name="password2"
                            type={password2Shown ? "text" : "password"}
                            placeholder="Re-enter password"
                            className = "z-12 dark:bg-gray-700 dark:text-white mt-1 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            ref={register({
                                validate: (value) => 
                                  value == password.current || "The passwords do not match"
                              })}
                            />
                            {errors.password2 && <p className="errorMsg text-sm text-red-500">{errors.password2.message}</p>}
                            <i className = 'absolute top-3 right-2 h-6 w-6 text-gray-500 dark:text-white' onClick={() => setPassword2Shown(password2Shown ? false : true)}>{eye}</i>
                            </div>
                </div>
            </div>
            <div className="px-4 py-3 dark:bg-gray-700 bg-gray-50 text-right sm:px-6 flex w-full justify-end">
            <p className="mt-1 text-m text-gray-800 justify-end rounded-full dark:text-white mr-5 inline">{message}</p>
            <p className="mt-1 text-m text-red-500 justify-end rounded-full mr-5 inline">{errMsg}</p>
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