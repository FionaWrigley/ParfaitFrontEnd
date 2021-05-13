import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/router';
import Link from 'next/link';


const Plainheader = (props) => {

    const router = useRouter();
    const backIcon = <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="lg"/>

    const logOut = () => {
        fetch(process.env.parfaitServer+'/logout', {
            method: 'GET',
             headers: {'Content-Type': 'application/json; charset=utf-8'},
            credentials: 'include'
        }).then((res) => {
                if(res.status == 204){
                    localStorage.setItem('loggedIn', false)
                    router.push('/login');
                }
            }).catch(err => console.log("Oops: "+err));
    }



    return (
        <nav className="bg-gradient-to-r from-pinkish to-pinkish bg-opacity-75 dark:from-gray-800 dark:to-gray-800">
            <div className="max-w-7xl lg:max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-12">
                    <div
                        className="flex-1 flex items-center justify-center items-stretch">
                        <div className="ml-3 absolute left-0 top-4">
                            <div>
                                <Link href= {props.backpage}>
                                <button
                                    className=" text-gray-600 dark:text-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
                                    id="user-menu"
                                    aria-haspopup="true"
                                    aria-label="Back">
                                    <div className='w-4 h-4'>{backIcon}</div>
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="/images/logo.svg" alt="Logo"/>
                        </div>
                        <div className="ml-3 relative">
                    </div>

                   {(props.page == "profile") ? <> 
                    <div
                        className="absolute inset-y-0 right-0 flex items-center lg:items-right pr-2 static inset-auto sm:ml-6 pr-0">
                            <button
                                aria-label="Log out"
                                onClick={logOut}
                                className="p-1 rounded-full text-gray-600 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <div className='w-6 h-6'>{logoutIcon}</div>
                            </button>
                    </div></>: <></>}
                    {(props.page == "groupschedule") ? <> 
                    <div
                        className="absolute inset-y-0 right-0 flex items-center lg:items-right pr-2 static inset-auto sm:ml-6 pr-0">
                            <button
                                aria-label="Delete group"
                                onClick={props.leaveFunction}
                                className="p-1 rounded-full text-gray-600 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <div className='w-6 h-6'>{logoutIcon}</div>
                            </button>
                    </div></>: <></>}
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Plainheader;
