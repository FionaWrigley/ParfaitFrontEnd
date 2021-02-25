import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const login = (props) => {

    const [failed, setFailed] = useState(false);
    const [ready,
        setReady] = useState(false);
    const [user,
        setUser] = useState([]);
    const [submit,
        setSubmit] = useState(false);

    console.log(JSON.stringify({user}));
    const router = useRouter();

    const formSubmit = e => {

        e.preventDefault();
        console.log("in formSubmit");
        setSubmit(true);
    }

        useEffect(() => {
            console.log("in useEffect")
            if (submit) {
                console.log("submit is true")
                fetch('http://localhost:5000/login', {
                    method: 'POST',
                    body: JSON.stringify({user}),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                        credentials: 'include'
                     })
                     .then(res => {
                        
                        switch(res.status){
                        case 200: 
                            router.push('/groups');
                            break;
                        case 401: 
                            setFailed(true);
                            setSubmit(false);
                            break;
                        }
                    }).catch(err => console.log("Oops: "+err));
            
            }
        },
    [submit]);

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-20 w-auto"
                        src="/images/logo.svg" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={formSubmit}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="user[email]" type="user.email" // value={user.email
                         autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={e => setUser({
                                ...user,
                                email: e.target.value
                            })}/></div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="user[password]" type="password" // value={user.password
                         autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={e => setUser({
                                ...user,
                                password: e.target.value
                            })}/></div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                       
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                        {failed ? <>username or password is incorrect</> : <></>}
                    </div>
                    <div>
                        <div className="text-sm text-center">
                            <Link href="/register">
                                <a className="font-medium text-center text-indigo-600 hover:text-indigo-500">
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