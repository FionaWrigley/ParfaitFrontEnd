import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const FooterMenu= () => {

    const backIcon = <FontAwesomeIcon icon={faArrowLeft} size = "lg" />

return (
<nav className="bg-pink-200">
  <div className="w-full mx-auto sm:px-6 lg:px-8 fixed bottom-0">
    <div className="w-full relative flex items-center  h-12">
           {/* <div className="flex-1 flex items-stretch items-center"> */}
        <Link href="/groups"><div className= "w-1/2 h-full">My Groups</div></Link>
        <Link href="/myschedule"><div className= "w-1/2 h-full bg-pink-100">My Schedule</div></Link>
        {/* </div> */}
      </div>
      </div>

</nav>
)
}


export default FooterMenu;
