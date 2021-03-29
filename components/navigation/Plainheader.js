import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/router';
import Link from 'next/link';





const Plainheader = (props) => {

    const router = useRouter();
    const backIcon = <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="lg"/>

    const logOut = () => {

        console.log("trying to logout");
        
        fetch('http://localhost:5000/logout', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        }).then((res) => {
          
                if(res.status == 200){
                    router.push('/login');
                
                }
            }).catch(err => console.log("Oops: "+err));
    }

    return (
        <nav className="bg-gradient-to-r from-pink-200 to-indigo-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-12">
                    <div
                        className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="ml-3 absolute left-0 ">
                            <div>
                                <Link href= {props.page}>
                                <button
                                    className=" text-gray-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true">
                                    {backIcon}
                                </button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-shrink-0 flex items-center">
                            {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" /> */}
                            <img className="block lg:hidden h-8 w-auto" src="/images/logo.svg" alt="Logo"/>

                        </div>

                        <div className="ml-3 relative">
                    </div>

                    <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    onClick={logOut}
                                    className=" p-1 rounded-full text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    {logoutIcon}
                                </button>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Plainheader;
