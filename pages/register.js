export default function register() {

    return (

        <div
            className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div >
                     <img
                        className="mx-auto h-20 w-auto"
                        // src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        src="/images/logo.svg"
                        alt="Workflow" /> 
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Register for Parfait
                        </h2>
                        
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm space-y-2">
                                
                            <div>
                                    <label htmlFor="first-name" className="sr-only">First Name</label>
                                    <input
                                        id="first-name"
                                        name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="First name" /></div>
                            <div>
                                    <label htmlFor="last-name" className="sr-only">Last Name</label>
                                    <input
                                        id="last-name"
                                        name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Last Name" /></div>    
                                
                                <div>
                                    <label htmlFor="phone-number" className="sr-only">Phone</label>
                                    <input
                                        id="phone-number"
                                        name="phone-number"
                                            type="text"
                                            autoComplete="tel"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Phone number" /></div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                            type="email"
                                            autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address" /></div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password" /></div>

                                    <div>
                                        <label htmlFor="password2" className="sr-only">Re-enter Password</label>
                                        <input
                                            id="password2"
                                            name="password2"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Re-enter Password" /></div>
                                    </div>

                                    {/* <div className="flex items-center justify-between">
                                         <div className="flex items-center">
                                            <input
                                                id="remember_me"
                                                name="remember_me"
                                                type="checkbox"
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900" >
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div> */}

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
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
    )














    
}